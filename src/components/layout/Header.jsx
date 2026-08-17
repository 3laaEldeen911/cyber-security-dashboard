import { Activity, ArrowUpRight, CircleDashed, Wifi } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useTargetContext } from '@/context/TargetContext'

export function Header() {
  const { activeTarget } = useTargetContext()

  return (
    <header className="border-b border-border bg-background/80 px-6 py-4 backdrop-blur-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Activity className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Target status</p>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">{activeTarget.domain}</span>
              <Badge variant="secondary">Online</Badge>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm">
            <Wifi className="h-4 w-4 text-emerald-500" />
            <span>Service Online</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm">
            <CircleDashed className="h-4 w-4 text-amber-500" />
            <span>Running count: 03</span>
          </div>

          <Button variant="outline" className="gap-2">
            Export report
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
