import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FaEnvelope, FaLinkedinIn, FaGithub, FaCopy, FaCheck, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import PageHead from '../components/PageHead.jsx'
import { site } from '../data/site.js'

const reasons = ['A role or opportunity', 'A freelance project', 'Esports', 'Just saying hi']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', reason: reasons[0], message: '' })
  const [copied, setCopied] = useState(false)
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // Opens the visitor's email app with everything filled in.
  // To receive messages without a mail client, swap this for Formspree or EmailJS (see README).
  const submit = (e) => {
    e.preventDefault()
    const subject = `${form.reason} from ${form.name}`
    const body = `${form.message}\n\n${form.name}\n${form.email}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <>
      <PageHead title="Let’s talk">
        <p>Hiring, building something, or want to talk Marvel Rivals comps? Send a note and I’ll get back to you.</p>
      </PageHead>

      <div className="wrap contact">
        <form className="form" onSubmit={submit}>
          <div className="form__pair">
            <label className="field">
              <span className="field__label">Your name</span>
              <input required value={form.name} onChange={set('name')} autoComplete="name" />
            </label>
            <label className="field">
              <span className="field__label">Your email</span>
              <input required type="email" value={form.email} onChange={set('email')} autoComplete="email" />
            </label>
          </div>
          <fieldset className="field">
            <legend className="field__label">What’s it about?</legend>
            <div className="reasons">
              {reasons.map((r) => (
                <label key={r} className={`reason ${form.reason === r ? 'is-on' : ''}`}>
                  <input type="radio" name="reason" value={r} checked={form.reason === r} onChange={set('reason')} />
                  {r}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="field">
            <span className="field__label">Message</span>
            <textarea required rows={6} value={form.message} onChange={set('message')} />
          </label>
          <button className="btn btn--red" type="submit"><FaEnvelope aria-hidden="true" /> Send message</button>
          <AnimatePresence>
            {sent && (
              <motion.p className="form__note" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                Your email app should open with the message ready. If nothing happened, email {site.email} directly.
              </motion.p>
            )}
          </AnimatePresence>
        </form>

        <aside className="channels" aria-label="Other ways to reach me">
          <div className="channel">
            <FaEnvelope className="channel__icon" aria-hidden="true" />
            <span className="channel__text">
              <span className="channel__name">Email</span>
              <span className="channel__value">{site.email}</span>
            </span>
            <button className="channel__action" onClick={copy} aria-label="Copy email address">
              {copied ? <FaCheck /> : <FaCopy />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <a className="channel" href={site.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedinIn className="channel__icon" aria-hidden="true" />
            <span className="channel__text">
              <span className="channel__name">LinkedIn</span>
              <span className="channel__value">Antonio Fabrizio</span>
            </span>
            <FaArrowUpRightFromSquare className="channel__out" aria-hidden="true" />
          </a>
          <a className="channel" href={site.github} target="_blank" rel="noreferrer">
            <FaGithub className="channel__icon" aria-hidden="true" />
            <span className="channel__text">
              <span className="channel__name">GitHub</span>
              <span className="channel__value">@Tonesman44</span>
            </span>
            <FaArrowUpRightFromSquare className="channel__out" aria-hidden="true" />
          </a>
        </aside>
      </div>
    </>
  )
}
