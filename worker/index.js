// Cloudflare Worker: serves the built SPA from static assets and handles
// the small API surface (/api/waitlist, /api/webhooks/whop).

// Maps Whop plan ids to fulfillment details for Roastify.
// TODO: replace the plan_XXXX placeholders with real plan ids and the
// sku placeholders with real Roastify SKUs.
const PLAN_MAP = {
  plan_XXXX_ETHIOPIAN_ONETIME: {
    sku: 'ROASTIFY_SKU_ETHIOPIAN',
    qty: 1,
    subscription: false,
  },
  plan_XXXX_ETHIOPIAN_SUB: {
    sku: 'ROASTIFY_SKU_ETHIOPIAN',
    qty: 1,
    subscription: true,
  },
  plan_XXXX_HIGHLAKE_ONETIME: {
    sku: 'ROASTIFY_SKU_HIGHLAKE',
    qty: 1,
    subscription: false,
  },
  plan_XXXX_HIGHLAKE_SUB: {
    sku: 'ROASTIFY_SKU_HIGHLAKE',
    qty: 1,
    subscription: true,
  },
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

async function handleWaitlist(request, env) {
  if (request.method === 'POST') {
    let email = ''
    try {
      const body = await request.json()
      email = String(body.email ?? '').trim()
    } catch {
      // Malformed body; fall through and respond ok without storing.
    }

    if (EMAIL_RE.test(email)) {
      const entry = {
        email,
        ts: new Date().toISOString(),
        country: request.cf?.country ?? null,
      }
      await env.WAITLIST.put(
        `email:${email.toLowerCase()}`,
        JSON.stringify(entry),
      )
    }

    // Always ok: never leak validation or storage details to the client.
    return json({ ok: true })
  }

  if (request.method === 'GET') {
    const url = new URL(request.url)
    const secret = url.searchParams.get('secret')
    if (!secret || secret !== env.EXPORT_SECRET) {
      return new Response('Not found', { status: 404 })
    }

    const rows = ['email,ts,country']
    let cursor
    do {
      const page = await env.WAITLIST.list({ prefix: 'email:', cursor })
      for (const key of page.keys) {
        const raw = await env.WAITLIST.get(key.name)
        if (!raw) continue
        try {
          const { email, ts, country } = JSON.parse(raw)
          rows.push(`${email},${ts},${country ?? ''}`)
        } catch {
          // Skip corrupt entries.
        }
      }
      cursor = page.list_complete ? undefined : page.cursor
    } while (cursor)

    return new Response(rows.join('\n'), {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="waitlist.csv"',
      },
    })
  }

  return new Response('Method not allowed', { status: 405 })
}

async function handleWhopWebhook(request, env, ctx) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  // IMPORTANT: before launch, verify the webhook signature with the Whop
  // SDK (makeWebhookValidator / webhook secret from the Whop dashboard).
  // Until then this endpoint trusts the payload blindly.
  const rawBody = await request.text()

  let event = null
  try {
    event = JSON.parse(rawBody)
  } catch {
    return new Response('Bad request', { status: 400 })
  }

  const eventType = event?.action ?? event?.type ?? 'unknown'
  console.log(`whop webhook received: ${eventType}`)

  if (eventType === 'payment.succeeded') {
    const paymentId = event?.data?.id ?? crypto.randomUUID()
    // Persist first, fulfill later; don't block the 200 on KV.
    ctx.waitUntil(env.WAITLIST.put(`order:${paymentId}`, rawBody))

    const planId = event?.data?.plan_id ?? event?.data?.plan?.id
    const fulfillment = PLAN_MAP[planId]
    if (!fulfillment) {
      console.log(`whop webhook: no fulfillment mapping for plan ${planId}`)
    }

    // TODO(fulfillment): create the Roastify order here using
    // fulfillment.{sku,qty,subscription} once the Roastify API is wired up.
  }

  return new Response('ok', { status: 200 })
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    if (url.pathname === '/api/waitlist') {
      return handleWaitlist(request, env)
    }
    if (url.pathname === '/api/webhooks/whop') {
      return handleWhopWebhook(request, env, ctx)
    }

    return env.ASSETS.fetch(request)
  },
}
