import {
    SquareTerminal, Triangle
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipProvider,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
const Aside = () => {
  return (
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
          <div className="border-b p-2">
              <Button variant="outline" size="icon" aria-label="Home">
                  <Triangle className="size-5 fill-foreground" />
              </Button>
          </div>
          <nav className="grid gap-1 p-2">
              <TooltipProvider>
                  <Tooltip>
                      <TooltipTrigger asChild>
                          <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-lg bg-muted"
                              aria-label="Playground"
                          >
                              <SquareTerminal className="size-5" />
                          </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right" sideOffset={5}>
                          Playground
                      </TooltipContent>
                  </Tooltip>
              </TooltipProvider>

          </nav>
          <nav className="mt-auto grid gap-1 p-2">

          </nav>
      </aside>
  )
}

export default Aside