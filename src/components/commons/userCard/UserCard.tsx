import { Facebook, Github, Instagram, Linkedin, Plus } from 'lucide-react'
import { Button } from '../../ui/Button'
import EditSocialLinks from './EditSocialLinks'
import Link from 'next/link'
import type { ProfileData } from '@/server/getProfileData'
import { formatUrl } from '@/lib/utils'
import AddCustomLink from './addCustomLink'
import EditUserCard from './editUserCard'
import { getDownloadURLFromPath } from '@/lib/firebase'

export default async function UserCard({
  profileData,
  isOwner,
}: {
  profileData?: ProfileData
  isOwner?: boolean
}) {
  const icons = [Github, Linkedin, Facebook, Instagram, Plus]

  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <img
          src={
            (await getDownloadURLFromPath(profileData?.imagePath)) ||
            '/profile.png'
          }
          // biome-ignore lint/a11y/noRedundantAlt: <explanation>
          alt="Profile Image"
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col items-center gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
            {profileData?.name || 'Felipe Gazolla'}
          </h3>
          {isOwner && <EditUserCard profileData={profileData} />}
        </div>
        <p className="opacity-40">
          {profileData?.description || 'Construo sistemas para Empresas'}
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="uppercase text-xs mb-2 font-medium">Links</span>
        <div className="flex gap-3">
          {profileData?.socialMedias?.github?.trim() && (
            <Link
              href={profileData.socialMedias.github}
              target="_blank"
              className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
            >
              <Github />
            </Link>
          )}

          {profileData?.socialMedias?.linkedin?.trim() && (
            <Link
              href={profileData.socialMedias.linkedin}
              target="_blank"
              className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
            >
              <Linkedin />
            </Link>
          )}

          {profileData?.socialMedias?.facebook?.trim() && (
            <Link
              href={profileData.socialMedias.facebook}
              target="_blank"
              className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
            >
              <Facebook />
            </Link>
          )}

          {profileData?.socialMedias?.instagram?.trim() && (
            <Link
              href={profileData.socialMedias.instagram}
              target="_blank"
              className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
            >
              <Instagram />
            </Link>
          )}
          {!profileData &&
            icons.map((Icon, index) => (
              // biome-ignore lint/a11y/useButtonType: <explanation>
              <button
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
              >
                <Icon />
              </button>
            ))}

          {isOwner && (
            <EditSocialLinks socialMedias={profileData?.socialMedias} />
          )}
        </div>
      </div>
      <div className="h-[1px] w-full border border-white border-opacity-10" />
      <div className="flex flex-col gap-3 w-full max-h-[172px] -mb-4">
        <div className="w-full flex flex-col items-center mb-3 gap-3">
          {profileData?.link1?.url?.trim() && (
            <Link
              href={formatUrl(profileData.link1.url)}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full">{profileData.link1.title}</Button>
            </Link>
          )}
          {profileData?.link2?.url?.trim() && (
            <Link
              href={formatUrl(profileData.link2.url)}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full">{profileData.link2.title}</Button>
            </Link>
          )}
          {profileData?.link3?.url?.trim() && (
            <Link
              href={formatUrl(profileData.link3.url)}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full">{profileData.link3.title}</Button>
            </Link>
          )}
        </div>
      </div>
      {isOwner && <AddCustomLink />}
    </div>
  )
}
