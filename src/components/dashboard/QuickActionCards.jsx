import { BrainCircuit, Radar, Search, Sparkles } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { quickActions } from '@/data/targetsData'

const icons = {
  search: Search,
  radar: Radar,
  shield: BrainCircuit,
  sparkles: Sparkles,
}

export function QuickActionCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {quickActions.map(({ title, subtitle, detail, icon }) => {
        const Icon = icons[icon]

        return (
          <Card key={title} className="group hover:border-primary/40 transition-colors">
            <CardContent className="p-4">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
              <h3 className="mt-2 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{detail}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
