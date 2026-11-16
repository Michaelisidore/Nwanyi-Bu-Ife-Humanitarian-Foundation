import { useState } from 'react'
import Button from '../ui/Button'

const fields = [
  { id: 'fullName', label: 'Full Name', type: 'text', autoComplete: 'name' },
  { id: 'email', label: 'Email Address', type: 'email', autoComplete: 'email' },
  { id: 'subject', label: 'Subject', type: 'text', autoComplete: 'off' },
]

export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))

    if (!endpoint) {
      setStatus('unconfigured')
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error('Request failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      {fields.map((field) => (
        <div key={field.id} className="space-y-2">
          <label htmlFor={field.id} className="text-sm text-charcoal">
            {field.label}
          </label>
          <input
            id={field.id}
            name={field.id}
            type={field.type}
            required
            autoComplete={field.autoComplete}
            className="w-full rounded-[var(--radius-md)] border border-aubergine/15 bg-white px-4 py-3 text-charcoal outline-none transition-colors focus:border-gold"
          />
        </div>
      ))}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm text-charcoal">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full resize-y rounded-[var(--radius-md)] border border-aubergine/15 bg-white px-4 py-3 text-charcoal outline-none transition-colors focus:border-gold"
        />
      </div>
      <Button as="button" type="submit" variant="dark" className="w-full sm:w-auto">
        {status === 'submitting' ? 'Sending…' : 'Submit'}
      </Button>

      {status === 'unconfigured' ? (
        <p className="text-sm text-sage" role="status">
          This form is ready for a submission service. Messages are not sent
          until an endpoint is configured.
        </p>
      ) : null}
      {status === 'sent' ? (
        <p className="text-sm text-aubergine" role="status">
          Thank you. Your message has been sent.
        </p>
      ) : null}
      {status === 'error' ? (
        <p className="text-sm text-aubergine" role="alert">
          The message could not be sent. Please try again later.
        </p>
      ) : null}
    </form>
  )
}
