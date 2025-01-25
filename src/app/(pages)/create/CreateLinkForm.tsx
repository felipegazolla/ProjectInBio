'use client'

import { createLink } from '@/app/actions/createLink'
import { verifyLink } from '@/app/actions/verifyLink'
import { Button } from '@/components/ui/Button'
import { TextInput } from '@/components/ui/TextInput'
import { sanitizeLink } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { type ChangeEvent, type FormEvent, useState } from 'react'

export function CreateLinkForm() {
  const [link, setLink] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()

  function handleLinkChange(e: ChangeEvent<HTMLInputElement>) {
    setLink(sanitizeLink(e.target.value))
    setError('')
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (link.length === 0) {
      setError('O link deve ser preenchido.')
      setTimeout(() => {
        setError('')
      }, 5000)
    }

    const isLinkTaken = await verifyLink(link)

    if (isLinkTaken) {
      setError('O link já está em uso.')
      setTimeout(() => {
        setError('')
      }, 5000)
    }

    const isLinkCreated = await createLink(link)

    if (!isLinkCreated) {
      return setError('Erro ao criar o link.')
    }

    router.push(`/${link}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
        <span>projectinbio.com/</span>
        <TextInput value={link} onChange={handleLinkChange} />
        <Button className="w-[126px]">Criar</Button>
      </form>
      <div className="w-full h-5 text-center">
        <span className="text-accent-pink">{error}</span>
      </div>
    </>
  )
}
