import { Header } from '@/components/ui/Header'
import { PlanButtons } from './PlanButtons'
import type { Metadata } from 'next'

export const metadata: Metadata ={
  title: "Project-In-Bio - Upgrade",
  description: "Project-In-Bio - Upgrade"
}

export default async function UpgradePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Header />
      <h2 className="text-2xl font-bold">Escolha o plano</h2>
      {}
      <PlanButtons />
    </div>
  )
}
