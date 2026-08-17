import { Card, CardContent } from '@/components/ui/card'

export function StatCard({ label, value, delta }) {
  return (
    <Card className="h-full">
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">{label}</p>
        <div className="mt-3 flex items-end justify-between gap-2">
          <h3 className="text-2xl font-semibold tracking-tight">{value}</h3>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">{delta}</p>
      </CardContent>
    </Card>
  )
}
