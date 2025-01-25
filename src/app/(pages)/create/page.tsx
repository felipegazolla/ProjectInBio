import { Header } from '@/components/ui/Header'
import { Rocket } from 'lucide-react'
import { CreateLinkForm } from './CreateLinkForm'
import type { Metadata } from 'next'

export const metadata: Metadata ={
  title: "Project-In-Bio - Create",
  description: "Project-In-Bio - Create"
}

export default function CreatePage() {
  return (
    <div className="bg-background-primary">
      <Header />
      <div className="h-screen bg-background-primary flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-white">Escolha seu link</h1>
          <Rocket className="size-10" />
        </div>
        <CreateLinkForm />
      </div>
    </div>
  )
}
