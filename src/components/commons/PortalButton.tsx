'use client'

import { useStripe } from '@/hooks/useStripe'

export default function PortalButton() {
  const { handleCreateStripePortal } = useStripe()

  // biome-ignore lint/a11y/useButtonType: <explanation>
  return <button onClick={handleCreateStripePortal}>Portal</button>
}
