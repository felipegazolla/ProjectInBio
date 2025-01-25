import { manageAuth } from '@/app/actions/manageAuth'
import { Button } from './Button'
import { auth } from '@/lib/auth'
import Link from 'next/link'
import { getProfileId } from '@/server/getProfileData'

export async function Header() {
  const session = await auth()
  const profileId = await getProfileId(session?.user?.id as string)

  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4 sm:py-6 lg:py-10">
      {/* Logo e Título */}
      <div className="flex items-center gap-4">
        <img
          src="/logo.svg"
          alt="ProjectInBio"
          className="h-8 w-auto sm:h-10"
        />
        <h3 className="text-white text-xl sm:text-2xl font-bold">
          ProjectInBio
        </h3>
      </div>

      {/* Botões e Links */}
      <div className="flex items-center gap-4">
        {session && (
          <Link href={`/${profileId}`} className="hidden sm:block">
            <Button>Minha Página</Button>
          </Link>
        )}
        <form action={manageAuth}>
          <Button>{session ? 'Sair' : 'Login'}</Button>
        </form>
      </div>
    </div>
  )
}
