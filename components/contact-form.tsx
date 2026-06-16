"use client"

import { useState, useRef, FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, User, Phone, MessageSquare, X } from "lucide-react"

// EmailJS credentials - constants at the top so the user can easily paste/modify them.
const SERVICE_ID = "service_e79scak"
const TEMPLATE_ID = "template_648aamn"
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
      error ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"
    } rounded-none px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-200`

  return (
    <section
      className="py-16 sm:py-24 border-t border-border bg-white"
      id="contact-form"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Header block / Contact details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="mb-6 h-px w-24 bg-primary" />
            <p className="eyebrow mb-5">Get In Touch</p>
            <h2 className="section-title mb-4 leading-tight">
              {heading}
            </h2>
            <p className="body-copy mb-8">
              {subheading}
            </p>

            <div className="space-y-6">
              {[
                { 
                  icon: Mail, 
                  label: "General Enquiries", 
                  value: "info@exmedco.com", 
                  href: "mailto:info@exmedco.com" 
                },
                { 
                  icon: Mail, 
                  label: "Director Desk", 
                  value: "director@exmedco.com", 
                  href: "mailto:director@exmedco.com" 
                },
                { 
                  icon: Phone, 
                  label: "Phone Support", 
                  value: "+91 771 897 2454", 
                  href: "tel:+917718972454" 
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label + value}
                  href={href}
                  className="flex items-start gap-4 text-sm text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-primary transition-colors shrink-0">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
                    <p className="font-heading font-bold text-base mt-1">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center border border-border bg-secondary/35 p-8">
                <div className="w-12 h-12 border border-green-600 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Message Sent Successfully</h3>
                <p className="text-muted-foreground text-sm max-w-sm">
                  Thank you for reaching out to Exmedco. Our team will review your enquiry and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-primary font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white border border-border p-7 md:p-8 flex flex-col gap-6"
                noValidate
              >
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-mono text-[0.65rem] font-semibold text-foreground uppercase tracking-[0.14em] flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-primary" /> Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. John Smith"
                      className={inputBase(errors.name)}
                    />
                    {errors.name && <span className="text-xs text-red-500 font-medium">{errors.name}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-mono text-[0.65rem] font-semibold text-foreground uppercase tracking-[0.14em] flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-primary" /> Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className={inputBase(errors.email)}
                    />
                    {errors.email && <span className="text-xs text-red-500 font-medium">{errors.email}</span>}
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-mono text-[0.65rem] font-semibold text-foreground uppercase tracking-[0.14em] flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-primary" /> Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="e.g. +1 234 567 8900"
                    className={inputBase(errors.phone)}
                  />
                  {errors.phone && <span className="text-xs text-red-500 font-medium">{errors.phone}</span>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-[0.65rem] font-semibold text-foreground uppercase tracking-[0.14em] flex items-center gap-1.5">
                    <MessageSquare className="h-3.5 w-3.5 text-primary" /> Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your distribution requirements, target regions, and portfolio overview..."
                    className={`${inputBase(errors.message)} resize-none`}
                  />
                  {errors.message && <span className="text-xs text-red-500 font-medium">{errors.message}</span>}
                </div>

                {/* Inline Error Notice */}
                {status === "error" && (
                  <div className="flex items-start gap-3 border border-red-200 text-red-700 bg-red-50 p-4 text-sm rounded-none">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-red-600" />
                    <div>
                      <p className="font-bold">Transmission Failed</p>
                      <p className="text-xs text-red-600 mt-1">Please try again or email us directly at info@exmedco.com or director@exmedco.com.</p>
                    </div>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/90 disabled:opacity-60 text-white font-heading font-bold px-8 py-4 rounded-none transition-all duration-200 w-full"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending Message…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Enquiry
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Your enquiry is transmitted securely. We adhere to clinical privacy standards.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Failure Modal Popup */}
      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white border border-border p-6 md:p-8 max-w-md w-full relative">
            <button 
              onClick={() => setShowErrorModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-1.5"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 border border-red-600 flex items-center justify-center mb-4">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Transmission Error</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                An unexpected system issue occurred while transmitting your request. Please reach out to our team directly:
              </p>
              <div className="w-full space-y-3 bg-secondary/50 border border-border p-4 mb-6">
                <a 
                  href="mailto:info@exmedco.com" 
                  className="flex items-center justify-between text-sm hover:text-primary font-bold text-foreground transition-colors py-1.5 border-b border-border last:border-0"
                >
                  <span>General Enquiries:</span>
                  <span className="underline font-mono text-xs">info@exmedco.com</span>
                </a>
                <a 
                  href="mailto:director@exmedco.com" 
                  className="flex items-center justify-between text-sm hover:text-primary font-bold text-foreground transition-colors py-1.5"
                >
                  <span>Director Desk:</span>
                  <span className="underline font-mono text-xs">director@exmedco.com</span>
                </a>
              </div>
              <button
                onClick={() => setShowErrorModal(false)}
                className="w-full bg-foreground hover:bg-primary text-white font-heading font-bold py-3 rounded-none transition-all duration-200"
              >
                Return & Review Form
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
