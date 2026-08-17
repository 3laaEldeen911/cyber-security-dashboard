import { AppLayout } from '@/components/layout/AppLayout'
import { TargetProvider } from '@/context/TargetContext'
import { Dashboard } from '@/pages/Dashboard'

function App() {
  return (
    <TargetProvider>
      <AppLayout>
        <Dashboard />
      </AppLayout>
    </TargetProvider>
  )
}

export default App
