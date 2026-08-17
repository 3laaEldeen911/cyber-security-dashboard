import {
  BrainCircuit,
  FileText,
  LayoutDashboard,
  Plus,
  Radar,
  Search,
  ShieldAlert,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SavedTargetsList } from '@/components/saved-targets/SavedTargetsList'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Recon', icon: Search },
  { label: 'Surface', icon: Radar },
  { label: 'Vuln Scan', icon: ShieldAlert },
  { label: 'AI Analysis', icon: BrainCircuit },
  { label: 'Reports', icon: FileText },
]

export function Sidebar() {
  return (
    <aside className="flex w-72 flex-col border-r border-border bg-sidebar text-sidebar-foreground">
      <div className="flex items-center justify-between border-b border-border p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">ThreatOps</p>
          <h2 className="mt-1 text-xl font-semibold">La Masia</h2>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <ShieldAlert className="h-4 w-4" />
        </div>
      </div>

      <div className="p-4">
        <Button className="w-full justify-center gap-2">
          <Plus className="h-4 w-4" />
          Add target
        </Button>
      </div>

      <nav className="space-y-1 px-3 pb-4">
        {navItems.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            type="button"
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
              active ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'text-sidebar-foreground/80 hover:bg-sidebar-accent/60'
            }`}
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto border-t border-border p-4">
        <SavedTargetsList />
      </div>
    </aside>
  )
}
