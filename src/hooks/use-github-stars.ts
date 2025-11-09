"use client"

import { useEffect, useState } from "react"

interface GithubStarsState {
  stars: number | null
  isLoading: boolean
  isError: boolean
}

const DEFAULT_REPO = "Owusu1946/expogh"
const CACHE_KEY_PREFIX = "expo-gh-github-stars::"
const CACHE_TTL_MS = 1000 * 60 * 15 // 15 minutes
const REFRESH_INTERVAL_MS = 1000 * 60 // 1 minute

export function useGithubStars(): GithubStarsState {
  const [state, setState] = useState<GithubStarsState>({
    stars: null,
    isLoading: true,
    isError: false,
  })

  useEffect(() => {
    let cancelled = false

    async function fetchStars({ skipCache = false }: { skipCache?: boolean } = {}) {
      const repo = process.env.NEXT_PUBLIC_GITHUB_REPO || DEFAULT_REPO
      const cacheKey = `${CACHE_KEY_PREFIX}${repo}`
      try {
        if (!skipCache) {
          // Check and use cached value if fresh
          const cached = typeof window !== "undefined" ? window.localStorage.getItem(cacheKey) : null
          if (cached) {
            const parsed = JSON.parse(cached) as { stars: number; timestamp: number }
            if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
              console.info(`[useGithubStars] Using cached stars for ${repo}:`, parsed.stars)
              setState({ stars: parsed.stars, isLoading: false, isError: false })
            }
          }
        }

        const response = await fetch(`https://api.github.com/repos/${repo}`)
        if (!response.ok) {
          throw new Error(`GitHub API responded with ${response.status}`)
        }

        const data = await response.json()
        const stars = typeof data?.stargazers_count === "number" ? data.stargazers_count : null
        console.info(`[useGithubStars] Fetched stars for ${repo}:`, stars)

        if (!cancelled) {
          if (stars !== null && typeof window !== "undefined") {
            window.localStorage.setItem(
              cacheKey,
              JSON.stringify({ stars, timestamp: Date.now() })
            )
          }

          setState({ stars, isLoading: false, isError: false })
        }
      } catch (error) {
        console.warn(`[useGithubStars] Failed to load stars for ${repo}`, error)
        if (!cancelled) {
          setState({ stars: null, isLoading: false, isError: true })
        }
      }
    }

    fetchStars()

    let intervalId: number | undefined
    if (typeof window !== "undefined") {
      intervalId = window.setInterval(() => {
        fetchStars({ skipCache: true })
      }, REFRESH_INTERVAL_MS)
    }

    return () => {
      cancelled = true
      if (intervalId) {
        window.clearInterval(intervalId)
      }
    }
  }, [])

  return state
}
