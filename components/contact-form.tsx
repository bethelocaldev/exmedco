"use client"

import { useState, useRef, FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, User, Phone, MessageSquare, X } from "lucide-react"

const SERVICE_ID = "service_e79scak"
const TEMPLATE_ID = "template_s8v96ih"
const PUBLIC_KEY = "aGXgWwF8a4toKmpJS"

interface ContactFormProps {
  /** When true, renders a compact inline section (for page footers). When false, renders the full standalone form. */
  compact?: boolean
  /** Optional custom heading override */
  heading?: string
  /** Optional custom sub-heading override */
  subheading?: string
}

type Status = "idle" | "sending" | "success" | "error"

export function ContactForm({
  compact = false,
  heading = "Partner With Us",
  subheading = "Ready to expand your pharmaceutical reach? Fill in the form and our team will get back to you within 24 hours.",
}: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>("idle")
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; message?: string }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear validation error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = () => {
    const tempErrors: typeof errors = {}
    
    // Name validation
    if (!form.name.trim()) {
      tempErrors.name = "Full name is required."
    } else if (form.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters long."
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim()) {
      tempErrors.email = "Email address is required."
    } else if (!emailRegex.test(form.email)) {
      tempErrors.email = "Please enter a valid email address."
    }

    // Phone validation (optional, but if provided, must be valid format)
    if (form.phone.trim()) {
      const phoneRegex = /^[\d\s+\-()]{7,20}$/
      if (!phoneRegex.test(form.phone.trim())) {
        tempErrors.phone = "Please enter a valid phone number (7-20 digits/symbols)."
      }
    }

    // Message validation
    if (!form.message.trim()) {
      tempErrors.message = "Message is required."
    } else if (form.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long."
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    if (status === "sending") return
    setStatus("sending")

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        },
        PUBLIC_KEY
      )
      setStatus("success")
      setErrors({})
      setForm({ name: "", email: "", phone: "", message: "" })
    } catch (err) {
      setStatus("error")
      setShowErrorModal(true)
    }
  }

  const inputBase = (error?: string) => 
    `w-full bg-white border ${
      error ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : "border-border focus:ring-primary/40 focus:border-primary"
    } rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all duration-200`

  return (
    <section
      className={
        compact
          ? "py-16 bg-muted/30 border-t border-border"
          : "py-20 bg-background"
      }
      id="contact-form"
    >
      <div className="container mx-auto px-4">
        <div
          className={
            compact
              ? "max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start"
              : "max-w-3xl mx-auto"
          }
        >
          {/* Header block */}
          <div className={compact ? "" : "text-center mb-10"}>
            <div
              className={`inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5 ${compact ? "" : "mx-auto"}`}
            >
              <Mail className="h-3.5 w-3.5" />
              Get In Touch
            </div>
            <h2
              className={`font-serif font-bold text-foreground leading-tight mb-4 ${compact ? "text-3xl md:text-4xl" : "text-3xl md:text-4xl text-center"}`}
            >
              {heading.includes("Partner") ? (
                <>
                  {heading.replace("Partner", "").trim() ? (
                    heading
                  ) : (
                    <>
                      Partner <span className="text-primary">With Us</span>
                    </>
                  )}
                </>
              ) : (
                heading
              )}
            </h2>
            <p
              className={`text-muted-foreground text-base leading-relaxed ${compact ? "" : "text-center max-w-xl mx-auto"}`}
            >
              {subheading}
            </p>

            {compact && (
              <div className="mt-8 flex flex-col gap-4">
                {[
                  { icon: Mail, label: "General Inquiries", value: "info@fhyglobal.com", href: "mailto:info@fhyglobal.com" },
                  { icon: Mail, label: "Director Desk", value: "director@fhyglobal.com", href: "mailto:director@fhyglobal.com" },
                  { icon: Phone, label: "Phone", value: "+91 771 897 2454", href: "tel:+917718972454" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label + value}
                    href={href}
                    className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="font-medium">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Form */}
          <div>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm text-primary font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-border p-7 md:p-8 shadow-sm flex flex-col gap-5"
                noValidate
              >
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-foreground uppercase tracking-wide flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-primary" /> Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputBase(errors.name)}
                    />
                    {errors.name && <span className="text-xs text-red-500 font-medium">{errors.name}</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-foreground uppercase tracking-wide flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-primary" /> Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputBase(errors.email)}
                    />
                    {errors.email && <span className="text-xs text-red-500 font-medium">{errors.email}</span>}
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-foreground uppercase tracking-wide flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-primary" /> Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 8900"
                    className={inputBase(errors.phone)}
                  />
                  {errors.phone && <span className="text-xs text-red-500 font-medium">{errors.phone}</span>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-foreground uppercase tracking-wide flex items-center gap-1.5">
                    <MessageSquare className="h-3.5 w-3.5 text-primary" /> Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your distribution needs, target markets, or any questions you have..."
                    className={`${inputBase(errors.message)} resize-none`}
                  />
                  {errors.message && <span className="text-xs text-red-500 font-medium">{errors.message}</span>}
                </div>

                {/* Inline Error Notice */}
                {status === "error" && (
                  <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Failed to send message</p>
                      <p className="text-xs text-red-600 mt-0.5">Please try again or contact us directly via email at info@fhyglobal.com or director@fhyglobal.com.</p>
                    </div>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/90 disabled:opacity-60 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 w-full"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Failure Modal Popup */}
      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl border border-border shadow-2xl p-6 md:p-8 max-w-md w-full relative transform scale-100 transition-all">
            <button 
              onClick={() => setShowErrorModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-muted"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Transmission Failed</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                We encountered an unexpected error while sending your message. Please reach out to our team directly via email:
              </p>
              <div className="w-full space-y-2 bg-muted/40 rounded-xl p-4 mb-6">
                <a 
                  href="mailto:info@fhyglobal.com" 
                  className="flex items-center justify-between text-sm hover:text-primary font-medium text-foreground transition-colors py-1.5 border-b border-border/40 last:border-0"
                >
                  <span>General Support:</span>
                  <span className="underline">info@fhyglobal.com</span>
                </a>
                <a 
                  href="mailto:director@fhyglobal.com" 
                  className="flex items-center justify-between text-sm hover:text-primary font-medium text-foreground transition-colors py-1.5"
                >
                  <span>Director Desk:</span>
                  <span className="underline">director@fhyglobal.com</span>
                </a>
              </div>
              <button
                onClick={() => setShowErrorModal(false)}
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 rounded-xl transition-all duration-200"
              >
                Close & Modify Form
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
