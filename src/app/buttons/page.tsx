import { 
  Heart, 
  Trash2, 
  Download, 
  Send, 
  Plus, 
  Settings,
  ArrowRight,
  Check,
  X
} from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ButtonsPage() {
  return (
    <section className="relative border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Button Components
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:mt-4 sm:text-base">
            All available button variants and sizes in the Expo Ghana design system
          </p>
        </div>

        <div className="mt-12 space-y-12">
          <div className="rounded-xl border border-border/60 bg-background/70 p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Variants
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Different visual styles for various use cases
            </p>
            
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="mb-3 text-sm font-medium">Default</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="default">Default Button</Button>
                  <Button variant="default">
                    <Heart />
                    With Icon
                  </Button>
                  <Button variant="default" disabled>
                    Disabled
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-medium">Destructive</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="destructive">Destructive Button</Button>
                  <Button variant="destructive">
                    <Trash2 />
                    Delete Item
                  </Button>
                  <Button variant="destructive" disabled>
                    Disabled
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-medium">Outline</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="outline">
                    <Download />
                    Download
                  </Button>
                  <Button variant="outline" disabled>
                    Disabled
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-medium">Secondary</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="secondary">
                    <Settings />
                    Settings
                  </Button>
                  <Button variant="secondary" disabled>
                    Disabled
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-medium">Ghost</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="ghost">
                    <ArrowRight />
                    Learn More
                  </Button>
                  <Button variant="ghost" disabled>
                    Disabled
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-medium">Link</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="link">Link Button</Button>
                  <Button variant="link">
                    <ArrowRight />
                    Read More
                  </Button>
                  <Button variant="link" disabled>
                    Disabled
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border/60 bg-background/70 p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Sizes
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Different button sizes for various contexts
            </p>
            
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="mb-3 text-sm font-medium">Small</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small Button</Button>
                  <Button size="sm" variant="outline">
                    <Send />
                    Send
                  </Button>
                  <Button size="sm" variant="destructive">
                    <X />
                    Cancel
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-medium">Default</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="default">Default Button</Button>
                  <Button size="default" variant="outline">
                    <Send />
                    Send
                  </Button>
                  <Button size="default" variant="destructive">
                    <X />
                    Cancel
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-medium">Large</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="lg">Large Button</Button>
                  <Button size="lg" variant="outline">
                    <Send />
                    Send
                  </Button>
                  <Button size="lg" variant="destructive">
                    <X />
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border/60 bg-background/70 p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Icon Buttons
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Square buttons designed for icons only
            </p>
            
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="mb-3 text-sm font-medium">Icon Small</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="icon-sm" variant="default">
                    <Plus />
                  </Button>
                  <Button size="icon-sm" variant="outline">
                    <Settings />
                  </Button>
                  <Button size="icon-sm" variant="destructive">
                    <Trash2 />
                  </Button>
                  <Button size="icon-sm" variant="ghost">
                    <Heart />
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-medium">Icon Default</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="icon" variant="default">
                    <Plus />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Settings />
                  </Button>
                  <Button size="icon" variant="destructive">
                    <Trash2 />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Heart />
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-medium">Icon Large</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="icon-lg" variant="default">
                    <Plus />
                  </Button>
                  <Button size="icon-lg" variant="outline">
                    <Settings />
                  </Button>
                  <Button size="icon-lg" variant="destructive">
                    <Trash2 />
                  </Button>
                  <Button size="icon-lg" variant="ghost">
                    <Heart />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border/60 bg-background/70 p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Combined Examples
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Real-world button combinations and use cases
            </p>
            
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="mb-3 text-sm font-medium">Action Group</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="default">
                    <Check />
                    Confirm
                  </Button>
                  <Button variant="outline">
                    Cancel
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-medium">Form Actions</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="default" size="lg">
                    <Send />
                    Submit Form
                  </Button>
                  <Button variant="ghost" size="lg">
                    Reset
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-medium">Toolbar</h3>
                <div className="flex flex-wrap gap-2">
                  <Button size="icon-sm" variant="ghost">
                    <Plus />
                  </Button>
                  <Button size="icon-sm" variant="ghost">
                    <Settings />
                  </Button>
                  <Button size="icon-sm" variant="ghost">
                    <Download />
                  </Button>
                  <Button size="icon-sm" variant="ghost">
                    <Trash2 />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

