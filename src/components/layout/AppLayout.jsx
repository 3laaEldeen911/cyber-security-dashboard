import { Header } from './Header'
import { Sidebar } from './Sidebar'

export function AppLayout({ children }) {
  return (
    <div className="cyber-shell min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex min-h-screen flex-1 flex-col">
          <Header />
          <main className="flex-1 p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  )
}
