import { ProjectCard } from '@/components/commons/ProjectCard'
import { TotalVisits } from '@/components/commons/TotalVisits'
import UserCard from '@/components/commons/userCard/UserCard'
import { auth } from '@/lib/auth'
import { getProfileData, getProfileProjects } from '@/server/getProfileData'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { NewProject } from './NewProject'
import { getDownloadURLFromPath } from '@/lib/firebase'
import { increaseProfileVisits } from '@/app/actions/increaseProfileVisits'

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>
}) {
  const { profileId } = await params
  const profileData = await getProfileData(profileId)

  if (!profileData) return notFound()

  const projects = await getProfileProjects(profileId)
  const session = await auth()
  const isOwner = profileData.userId === session?.user?.id

  if (!isOwner) {
    await increaseProfileVisits(profileId)
  }

  return (
    <div className="relative  h-screen flex p-20 overflow-hidden">
      <div className="fixed  top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-background-tertiary">
        <span>Você está usando a versão trial.</span>
        <Link href={`/${profileId}/upgrade`}>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="text-accent-green font-bold">
            Faça o upgrade agora!
          </button>
        </Link>
      </div>
      <div className="w-1/2 flex justify-center h-min">
        <UserCard profileData={profileData} isOwner={isOwner} />
      </div>
      <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
        {projects.map(async project => (
          <ProjectCard
            key={project.id}
            project={project}
            isOwner={isOwner}
            img={(await getDownloadURLFromPath(project.imagePath)) || ''}
          />
        ))}
        {isOwner && <NewProject profileId={profileId} />}
      </div>
      {isOwner && (
        <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
          <TotalVisits totalVisits={profileData.totalVisits} />
        </div>
      )}
    </div>
  )
}
