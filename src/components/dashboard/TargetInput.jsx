import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Input } from '@base-ui/react'

export function TargetInput() {

  const [inputText , setInputText] = useState("")
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm md:flex-row md:items-center">
      <div className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-background px-3 py-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input value={inputText}  onChange={(e)=>setInputText(e.target.value)} placeholder='websiteCheck' className={"border-none outline-0"} />
      </div>
      <Button className="whitespace-nowrap">Run scan</Button>
    </div>
  )
}
