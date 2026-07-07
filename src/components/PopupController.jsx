import { lazy, Suspense, useCallback, useEffect, useState } from 'react'

const EmailPopup = lazy(() => import('./EmailPopup.jsx'))

const SEEN_KEY = 'nc_popup_seen'

function hasSeen() {
  try {
    return localStorage.getItem(SEEN_KEY) === '1'
  } catch {
    return true
  }
}

function markSeen() {
  try {
    localStorage.setItem(SEEN_KEY, '1')
  } catch {
    // Storage unavailable; the popup may show again next visit.
  }
}

export default function PopupController() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (hasSeen()) return

    let triggered = false
    const trigger = () => {
      if (triggered) return
      triggered = true
      markSeen()
      setOpen(true)
    }

    const timer = setTimeout(trigger, 8000)

    // Exit intent, desktop only: pointer leaves through the top of the page.
    const onMouseOut = (event) => {
      if (!event.relatedTarget && event.clientY <= 0) trigger()
    }
    const isDesktop = window.matchMedia('(pointer: fine)').matches
    if (isDesktop) document.addEventListener('mouseout', onMouseOut)

    return () => {
      clearTimeout(timer)
      if (isDesktop) document.removeEventListener('mouseout', onMouseOut)
    }
  }, [])

  const close = useCallback(() => setOpen(false), [])

  if (!open) return null

  return (
    <Suspense fallback={null}>
      <EmailPopup onClose={close} />
    </Suspense>
  )
}
