import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import MuiButton from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
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

const outlineSx = { px: 2, py: 1.5, borderRadius: '3px', fontSize: 14, borderColor: 'rgba(17, 24, 53, 0.2)', '&:hover': { borderColor: 'primary.main', bgcolor: 'transparent' } } as const

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

  return (
    <form onSubmit={onSubmit} className="border border-line bg-white p-6 shadow-[0_20px_60px_rgba(17,24,53,0.06)] md:p-8" noValidate>
      <TextField
        select
        fullWidth
        id="topic"
        label="What would you like to discuss?"
        value={fields.topic}
        onChange={(event) => update('topic', event.target.value)}
        error={Boolean(errors.topic)}
        helperText={errors.topic}
        slotProps={{ inputLabel: { shrink: true }, select: { displayEmpty: true } }}
      >
        <MenuItem value="">Select an inquiry</MenuItem>
        {inquiryTopics.map((topic) => (
          <MenuItem key={topic.id} value={topic.id}>
            {topic.label}
          </MenuItem>
        ))}
      </TextField>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <TextField
          id="name"
          label="Your name"
          autoComplete="name"
          value={fields.name}
          onChange={(event) => update('name', event.target.value)}
          error={Boolean(errors.name)}
          helperText={errors.name}
        />
        <TextField
          id="organization"
          label="Organization"
          autoComplete="organization"
          value={fields.organization}
          onChange={(event) => update('organization', event.target.value)}
        />
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <TextField
          id="email"
          type="email"
          label="Email"
          autoComplete="email"
          value={fields.email}
          onChange={(event) => update('email', event.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
        <TextField select id="timeline" label="Target timeline" value={fields.timeline} onChange={(event) => update('timeline', event.target.value)}>
          {timelines.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <div className="mt-5">
        <TextField
          id="message"
          label="The challenge and the outcome you want"
          multiline
          minRows={6}
          fullWidth
          value={fields.message}
          onChange={(event) => update('message', event.target.value)}
          error={Boolean(errors.message)}
          helperText={errors.message}
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button type="submit">Prepare inquiry</Button>
        {prepared ? (
          <>
            <MuiButton variant="outlined" color="primary" startIcon={<Mail className="size-4" />} onClick={openEmail} sx={outlineSx}>
              Open in email
            </MuiButton>
            <MuiButton
              variant="outlined"
              color="primary"
              startIcon={copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              onClick={copy}
              sx={outlineSx}
            >
              {copied ? 'Copied' : 'Copy message'}
            </MuiButton>
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
