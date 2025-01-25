'use client'

import createSocialLinks from '@/app/actions/createSocialLink'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { TextInput } from '@/components/ui/TextInput'
import { Plus, Github, Linkedin, Instagram, Facebook } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useState, startTransition } from 'react'

export default function EditSocialLinks({
  socialMedias,
}: {
  socialMedias?: {
    github: string
    instagram: string
    linkedin: string
    facebook: string
  }
}) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSavingSocialLinks, setIsSavingSocialLinks] = useState(false)

  const [github, setGithub] = useState(socialMedias?.github || '')
  const [instagram, setInstagram] = useState(socialMedias?.instagram || '')
  const [linkedin, setLinkedin] = useState(socialMedias?.linkedin || '')
  const [facebook, setFacebook] = useState(socialMedias?.facebook || '')

  const { profileId } = useParams()
  async function handleAddSocialLinks() {
    setIsSavingSocialLinks(true)
    if (!profileId) return
    await createSocialLinks({
      profileId: profileId as string,
      github,
      instagram,
      linkedin,
      facebook,
    })
    startTransition(() => {
      setIsModalOpen(false)
      setIsSavingSocialLinks(false)
      router.refresh()
    })
  }
  return (
    <>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
      >
        <Plus />
      </button>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10 w-[514px]">
          <p className="text-white font-bold text-xl">
            Adicionar redes sociais
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 w-full">
              <Github />
              <TextInput
                type="text"
                placeholder="Link Github"
                value={github}
                onChange={e => setGithub(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full">
              <Linkedin />
              <TextInput
                type="text"
                placeholder="Link LinkedIn"
                value={linkedin}
                onChange={e => setLinkedin(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full">
              <Facebook />
              <TextInput
                type="text"
                placeholder="Link Facebook"
                value={facebook}
                onChange={e => setFacebook(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full">
              <Instagram />
              <TextInput
                type="text"
                placeholder="Link Instagram"
                value={instagram}
                onChange={e => setInstagram(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-4 justify-end">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="font-bold text-white"
            >
              Voltar
            </button>
            <Button
              onClick={handleAddSocialLinks}
              disabled={isSavingSocialLinks}
            >
              Salvar
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
