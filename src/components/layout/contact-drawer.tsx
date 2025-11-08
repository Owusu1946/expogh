"use client"

import { useState } from "react"
import { Drawer } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Confetti } from "@/components/ui/confetti"
import { Mail, User, MessageSquare, Send, Loader2 } from "lucide-react"

interface ContactDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setLoading(false)
    setShowSuccess(true)

    // Reset form
    setFormData({ name: "", email: "", message: "" })

    // Close drawer and hide success after delay
    setTimeout(() => {
      onClose()
      setTimeout(() => setShowSuccess(false), 300)
    }, 2000)
  }

  return (
    <>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        title="Get in Touch"
        description="Have questions or want to collaborate? We'd love to hear from you."
        side="right"
      >
        {showSuccess ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-green-500/10">
              <Send className="size-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold">Message Sent!</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We'll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  className="w-full rounded-lg border border-border/60 bg-background px-10 py-3 text-sm transition placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-border/60 bg-background px-10 py-3 text-sm transition placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 size-4 text-muted-foreground" />
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your project or question..."
                  className="w-full resize-none rounded-lg border border-border/60 bg-background px-10 py-3 text-sm transition placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full"
              size="lg"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 size-4" />
                  Send Message
                </>
              )}
            </Button>

            {/* Contact Info */}
            <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
              <p className="text-sm text-muted-foreground">
                You can also reach us at{" "}
                <a
                  href="mailto:hello@expoghana.community"
                  className="font-medium text-foreground hover:underline"
                >
                  hello@expoghana.community
                </a>
              </p>
            </div>
          </form>
        )}
      </Drawer>

      {/* Confetti on success */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          <Confetti />
        </div>
      )}
    </>
  )
}
