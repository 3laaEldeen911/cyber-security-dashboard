import { Badge } from '@/components/ui/badge'
import { useTargetContext } from '@/context/TargetContext'

export function SavedTargetsList() {
  const { targets, activeTarget, setActiveTarget } = useTargetContext()

  return (
    <div className="space-y-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Saved targets</p>
        <span className="text-xs text-muted-foreground">{targets.length}</span>
      </div>

      {targets.map((target) => (
        <button
          key={target.id}
          type="button"
          onClick={() => setActiveTarget(target)}
          className={`w-full rounded-xl border p-3 text-left transition ${
            activeTarget.id === target.id
              ? 'border-primary/30 bg-primary/5'
              : 'border-border bg-background/50 hover:border-primary/20'
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="font-medium">{target.domain}</span>
            <Badge variant={target.status === 'COMPLETED' ? 'secondary' : 'destructive'}>
              {target.status}
            </Badge>
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>{target.lastRun}</span>
            <span>{target.risk}</span>
          </div>
        </button>
      ))}
    </div>
  )
}
