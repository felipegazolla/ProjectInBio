import { loadStripe, type Stripe } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'

export function useStripe() {
  const [stripe, setStripe] = useState<Stripe | null>(null)

  useEffect(() => {
    async function loadStripeAsync() {
      const stripeInstance = await loadStripe(
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!
      )
      setStripe(stripeInstance)
    }

    loadStripeAsync()
  }, [])

  async function createStripeCheckout({
    metadata,
    isSubscription,
  }: {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    metadata: any
    isSubscription: boolean
  }) {
    try {
      const response = await fetch('/api/stripe/createCheckout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ metadata, isSubscription }),
      })

      const data = await response.json()

      await stripe?.redirectToCheckout({
        sessionId: data.sessionId,
      })
    } catch (error) {
      console.error(error)
    }
  }

  async function handleCreateStripePortal() {
    const response = await fetch('/api/stripe/createPortal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    window.location.href = data.url
  }
  return { createStripeCheckout, handleCreateStripePortal }
}
