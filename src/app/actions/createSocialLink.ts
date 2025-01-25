'use server'

import { db } from '@/lib/firebase'
import { auth } from 'firebase-admin'
import { Timestamp } from 'firebase-admin/firestore'

export default async function createSocialLinks({
  profileId,
  github,
  instagram,
  linkedin,
  facebook,
}: {
  profileId: string
  github: string
  instagram: string
  linkedin: string
  facebook: string
}) {
  const session = await auth()
  if (!session) return
  try {
    await db.collection('profiles').doc(profileId).update({
      socialMedias: {
        github,
        instagram,
        linkedin,
        facebook,
      },
      updatedAt: Timestamp.now().toMillis(),
    })
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
