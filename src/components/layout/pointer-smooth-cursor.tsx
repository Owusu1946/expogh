"use client"

import { useEffect, useState } from "react"

import { SmoothCursor } from "@/components/ui/smooth-cursor"

export function PointerSmoothCursor() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)")
    const update = () => setEnabled(mediaQuery.matches)

    update()
    mediaQuery.addEventListener("change", update)

    return () => mediaQuery.removeEventListener("change", update)
  }, [])

  if (!enabled) return null

  return <SmoothCursor />
}
