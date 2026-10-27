import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Check, Copy, Mail } from 'lucide-react'
import { contactEmail, inquiryTopics, timelines } from '../content/site'
import { Button } from './Button'

type Fields = {
  topic: string
  name: string
  organization: string
  email: string
  timeline: string
  message: string
}

const empty: Fields = {
  topic: '',
  name: '',
  organization: '',
  email: '',
  timeline: timelines[0],
  message: '',
}

function buildMessage(fields: Fields) {
  const topic = inquiryTopics.find((item) => item.id === fields.topic)?.label ?? fields.topic
  return [
    'DiDev website inquiry',
    '',
    `Topic: ${topic}`,
    `Name: ${fields.name}`,
    `Organization: ${fields.organization || 'Not provided'}`,
    `Email: ${fields.email}`,
    `Timeline: ${fields.timeline}`,
    '',
    'Message:',
    fields.message,
  ].join('\n')
}

export function ContactForm() {
  const [params] = useSearchParams()
  const initialTopic = params.get('topic') ?? ''
  const initialEmail = params.get('email') ?? ''
  const [fields, setFields] = useState<Fields>({
    ...empty,
    topic: inquiryTopics.some((item) => item.id === initialTopic) ? initialTopic : '',
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(initialEmail) ? initialEmail : '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [prepared, setPrepared] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const topic = params.get('topic') ?? ''
    const email = params.get('email') ?? ''
    const nextTopic = inquiryTopics.some((item) => item.id === topic) ? topic : ''
    const nextEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : ''
    if (!nextTopic && !nextEmail) return
    setFields((current) => ({
      ...current,
      topic: nextTopic || current.topic,
      email: nextEmail || current.email,
    }))
  }, [params])

  const topicValid = useMemo(
    () => inquiryTopics.some((item) => item.id === fields.topic),
    [fields.topic],
  )

  const update = (key: keyof Fields, value: string) => {
    setFields((current) => ({ ...current, [key]: value }))
    setPrepared('')
    setCopied(false)
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const next: Partial<Record<keyof Fields, string>> = {}
    if (!topicValid) next.topic = 'Choose what you would like to discuss.'
    if (fields.name.trim().length < 2) next.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) next.email = 'Enter a valid email address.'
    if (fields.message.trim().length < 12) next.message = 'Share a little more about the need.'
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const message = buildMessage({
      ...fields,
      name: fields.name.trim(),
      organization: fields.organization.trim(),
      email: fields.email.trim(),
      message: fields.message.trim(),
    })
    setPrepared(message)
  }

  const openEmail = () => {
    const recipient = contactEmail.trim()
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent('DiDev inquiry')}&body=${encodeURIComponent(prepared)}`
    window.location.href = mailto
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prepared)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const fieldClass =
    'mt-2 w-full rounded-[3px] border border-line bg-white px-3.5 py-3 text-[15px] text-ink outline-none transition focus:border-navy'

  return (
    <form onSubmit={onSubmit} className="border border-line bg-white p-6 shadow-[0_20px_60px_rgba(17,24,53,0.06)] md:p-8" noValidate>
      <div>
        <label htmlFor="topic" className="text-sm font-semibold text-navy">What would you like to discuss?</label>
        <select
          id="topic"
          className={fieldClass}
          value={fields.topic}
          onChange={(event) => update('topic', event.target.value)}
          aria-invalid={Boolean(errors.topic)}
          aria-describedby={errors.topic ? 'topic-error' : undefined}
        >
          <option value="">Select an inquiry</option>
          {inquiryTopics.map((topic) => (
            <option key={topic.id} value={topic.id}>{topic.label}</option>
          ))}
        </select>
        {errors.topic ? <p id="topic-error" className="mt-2 text-sm text-[#8a2b2b]">{errors.topic}</p> : null}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-navy">Your name</label>
          <input id="name" autoComplete="name" className={fieldClass} value={fields.name} onChange={(event) => update('name', event.target.value)} aria-invalid={Boolean(errors.name)} />
          {errors.name ? <p className="mt-2 text-sm text-[#8a2b2b]">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="organization" className="text-sm font-semibold text-navy">Organization</label>
          <input id="organization" autoComplete="organization" className={fieldClass} value={fields.organization} onChange={(event) => update('organization', event.target.value)} />
        </div>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-navy">Email</label>
          <input id="email" type="email" autoComplete="email" className={fieldClass} value={fields.email} onChange={(event) => update('email', event.target.value)} aria-invalid={Boolean(errors.email)} />
          {errors.email ? <p className="mt-2 text-sm text-[#8a2b2b]">{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="timeline" className="text-sm font-semibold text-navy">Target timeline</label>
          <select id="timeline" className={fieldClass} value={fields.timeline} onChange={(event) => update('timeline', event.target.value)}>
            {timelines.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-semibold text-navy">The challenge and the outcome you want</label>
        <textarea id="message" rows={6} className={fieldClass} value={fields.message} onChange={(event) => update('message', event.target.value)} aria-invalid={Boolean(errors.message)} />
        {errors.message ? <p className="mt-2 text-sm text-[#8a2b2b]">{errors.message}</p> : null}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button type="submit">Prepare inquiry</Button>
        {prepared ? (
          <>
            <button type="button" onClick={openEmail} className="inline-flex items-center gap-2 rounded-[3px] border border-navy/20 px-4 py-3 text-sm font-semibold text-navy">
              <Mail className="size-4" />
              Open in email
            </button>
            <button type="button" onClick={copy} className="inline-flex items-center gap-2 rounded-[3px] border border-navy/20 px-4 py-3 text-sm font-semibold text-navy">
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? 'Copied' : 'Copy message'}
            </button>
          </>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-muted" role="status">
        {prepared
          ? 'Your inquiry is ready. Open it in email or copy it. It stays on this device and is not stored on a DiDev server.'
          : 'This prepares your inquiry on this device. It is not stored on a DiDev server.'}
      </p>
    </form>
  )
}
