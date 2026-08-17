import { ArrowRight, ShieldCheck, TriangleAlert } from 'lucide-react'

import { QuickActionCards } from '@/components/dashboard/QuickActionCards'
import { StatCard } from '@/components/dashboard/StatCard'
import { TargetInput } from '@/components/dashboard/TargetInput'
import { Button } from '@/components/ui/button'
import { dashboardStats } from '@/data/targetsData'

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Security overview</p>
          <h1 className="text-3xl font-semibold tracking-tight">Cyber Defense Dashboard</h1>
        </div>
        <Button variant="outline" className="w-fit gap-2">
          Full audit
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <TargetInput />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <QuickActionCards />

      <div className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">

        
      </div>
    </div>
  )
}
