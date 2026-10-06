"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Check,
  MapPin,
  Clock,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import "./contact.css";

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.5-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
  </svg>
);

const WhatsappIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.47 14.38c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.58-.9-2.16-.24-.57-.48-.49-.66-.5l-.56-.01c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.44 1.05 2.83 1.19 3.02.15.2 2.06 3.14 4.99 4.41.7.3 1.24.48 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.71-.7 1.96-1.37.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34ZM12.04 21.5h-.01a9.44 9.44 0 0 1-4.81-1.32l-.35-.2-3.57.93.95-3.48-.23-.36a9.4 9.4 0 0 1-1.44-5.03c0-5.2 4.24-9.44 9.46-9.44 2.53 0 4.9.99 6.68 2.77a9.37 9.37 0 0 1 2.77 6.68c0 5.2-4.24 9.45-9.45 9.45ZM20.52 3.49A11.35 11.35 0 0 0 12.04 0C5.78 0 .69 5.09.69 11.35c0 2 .52 3.94 1.51 5.66L.6 24l7.13-1.87a11.33 11.33 0 0 0 5.3 1.35h.01c6.25 0 11.34-5.09 11.34-11.35 0-3.03-1.18-5.88-3.32-8.02Z" />
  </svg>
);

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const staggerParentSlow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};

const viewport = { once: true, amount: 0.2 } as const;

const projectTypes = [
  "AI & Machine Learning",
  "AI Agents & Automation",
  "Generative AI & LLMs",
  "Data & Analytics",
  "Web & Software Development",
  "Design & Digital Solutions",
  "Not sure yet",
];

const budgets = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Let's discuss",
];

const contactChannels = [
  {
    label: "EMAIL",
    value: "ajtechnologies.ai@gmail.com",
    href: "mailto:ajtechnologies.ai@gmail.com",
    icon: Mail,
  },
  {
    label: "WHATSAPP",
    value: "+92 326 0666521",
    href: "https://wa.me/923260666521",
    icon: MessageCircle,
  },
  {
    label: "PHONE",
    value: "+92 326 0666521",
    href: "tel:+923260666521",
    icon: Phone,
  },
];

const socials = [
  {
    label: "Facebook",
    handle: "aj technologies",
    href: "https://www.facebook.com/share/1Dh5k1Lqa4/",
    icon: FacebookIcon,
  },
  {
    label: "LinkedIn",
    handle: "AJ Technologies",
    href: "https://www.linkedin.com/company/aj-technologies-official/",
    icon: LinkedinIcon,
  },
  {
    label: "Instagram",
    handle: "@ajtechnologies45",
    href: "https://www.instagram.com/ajtechnologies45?igsi=eDc1dmYwa2Z3ZGkw",
    icon: InstagramIcon,
  },
  {
    label: "WhatsApp",
    handle: "+92 326 0666521",
    href: "https://wa.me/923260666521",
    icon: WhatsappIcon,
  },
];

export default function Contact() {
  const [state, handleSubmit] = useForm("myezyenk");

  return (
    <div className="contact-page">
      <main>
        <section className="contact-hero">
          <div className="contact-hero-grid" />
          <div className="contact-hero-noise" />
          <div className="contact-hero-glow contact-hero-glow-one" />
          <div className="contact-hero-glow contact-hero-glow-two" />

          <div className="contact-hero-container">
            <motion.div
              className="contact-hero-inner"
              variants={staggerParentSlow}
              initial="hidden"
              animate="show"
            >
              <motion.div className="hero-eyebrow" variants={slideLeft}>
                <span className="eyebrow-pulse" />
                <span>GET IN TOUCH</span>
                <span className="eyebrow-divider" />
                <span>START A PROJECT</span>
              </motion.div>

              <h1>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    <span>Let's build the next</span>
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    step of your AI journey.
                  </motion.span>
                </span>
              </h1>

              <motion.p className="contact-hero-text" variants={fadeUp}>
                Tell us about your idea, your challenge or what you're trying to
                build. We'll get back to you with clear next steps and a path
                forward.
              </motion.p>

              <motion.div className="contact-hero-tags" variants={fadeUp}>
                <span>EMAIL</span>
                <i />
                <span>WHATSAPP</span>
                <i />
                <span>SOCIAL</span>
              </motion.div>

              <motion.div className="contact-hero-actions" variants={fadeUp}>
                <a
                  href="https://wa.me/923260666521"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-primary"
                >
                  <WhatsappIcon size={17} />
                  <span>Message on WhatsApp</span>
                </a>

                <a
                  href="mailto:ajtechnologies.ai@gmail.com"
                  className="hero-secondary"
                >
                  <Mail size={17} />
                  <span>Send an Email</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="contact-hero-visual"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease, delay: 0.3 }}
            >
              <div className="hero-visual-aura" />
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="hero-image-frame">
                <Image
                  src="/images/contact-hero.png"
                  alt="Abstract transmission signal representing connection with AJ Technologies"
                  fill
                  priority
                  sizes="(max-width: 1050px) 100vw, 620px"
                  className="hero-image"
                />
                <div className="hero-image-overlay" />
                <div className="hero-scan" />

                <div className="hero-corner hero-corner-tl" />
                <div className="hero-corner hero-corner-tr" />
                <div className="hero-corner hero-corner-bl" />
                <div className="hero-corner hero-corner-br" />

                <div className="hero-image-label">
                  <span>
                    <i /> OPEN CHANNEL
                  </span>
                  <strong>REPLY · WITHIN 24H</strong>
                </div>
              </div>

              <motion.div
                className="floating-panel panel-top"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease }}
              >
                <WhatsappIcon size={17} />
                <div>
                  <span>DIRECT</span>
                  <strong>WhatsApp ready</strong>
                </div>
              </motion.div>

              <motion.div
                className="floating-panel panel-bottom"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.05, ease }}
              >
                <span className="eyebrow-pulse" />
                <div>
                  <span>RESPONSIVE</span>
                  <strong>Real conversations</strong>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="contact-main">
          <div className="section-container">
            <div className="contact-layout">
              <motion.div
                className="contact-form-wrap"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <motion.div className="section-kicker" variants={fadeUp}>
                  01 / START A PROJECT
                </motion.div>

                <motion.h2 variants={fadeUp}>
                  <span>Tell us about</span>
                  <br />
                  what you're building.
                </motion.h2>

                <motion.p className="contact-form-intro" variants={fadeUp}>
                  The more context you share, the better we can prepare a
                  thoughtful response. Every message reaches us directly.
                </motion.p>

                <motion.form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  variants={fadeUp}
                >
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="company">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Where you work (optional)"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="projectType">Project type *</label>
                      <select id="projectType" name="projectType" required>
                        <option value="">Select a service</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-row form-row-full">
                    <div className="form-field">
                      <label htmlFor="budget">Budget / timeline</label>
                      <select id="budget" name="budget">
                        <option value="">Select a range</option>
                        {budgets.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-row form-row-full">
                    <div className="form-field">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell us about the problem, the idea or the outcome you're aiming for..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className={`form-submit ${state.succeeded ? "submitted" : ""}`}
                    whileHover={state.submitting ? {} : { y: -4 }}
                    whileTap={state.submitting ? {} : { scale: 0.98 }}
                    disabled={state.submitting || state.succeeded}
                  >
                    {state.succeeded ? (
                      <>
                        <Check size={18} />
                        <span>Message sent</span>
                      </>
                    ) : state.submitting ? (
                      <>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send size={17} />
                      </>
                    )}
                  </motion.button>

                  {state.errors && state.errors.getFormErrors().length > 0 && (
                    <p className="form-error">
                      {state.errors.getFormErrors()[0].message}
                    </p>
                  )}

                  <p className="form-note">
                    We typically reply within one business day.
                  </p>
                </motion.form>
              </motion.div>

              <motion.aside
                className="contact-info"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <motion.div className="section-kicker" variants={fadeUp}>
                  02 / DIRECT CHANNELS
                </motion.div>

                <motion.div className="info-list" variants={staggerParent}>
                  {contactChannels.map((channel) => {
                    const Icon = channel.icon;
                    return (
                      <motion.a
                        key={channel.label}
                        href={channel.href}
                        target={
                          channel.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          channel.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="info-card"
                        variants={fadeUp}
                      >
                        <div className="info-card-icon">
                          <Icon size={20} strokeWidth={1.8} />
                        </div>
                        <div className="info-card-body">
                          <span className="info-card-label">
                            {channel.label}
                          </span>
                          <strong>{channel.value}</strong>
                        </div>
                        <ArrowUpRight size={18} className="info-card-arrow" />
                      </motion.a>
                    );
                  })}
                </motion.div>

                <motion.div className="info-meta" variants={fadeUp}>
                  <div className="info-meta-row">
                    <MapPin size={17} />
                    <span>Pakistan · Working globally</span>
                  </div>
                  <div className="info-meta-row">
                    <Clock size={17} />
                    <span>Reply within one business day</span>
                  </div>
                </motion.div>
              </motion.aside>
            </div>
          </div>
        </section>

        <section className="contact-socials">
          <div className="section-container">
            <motion.div
              className="socials-head"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                02 / FOLLOW THE JOURNEY
              </motion.div>
              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    <span>Connect with AJ Technologies</span>
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    beyond the inbox.
                  </motion.span>
                </span>
              </h2>
            </motion.div>

            <motion.div
              className="socials-grid"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card"
                    variants={fadeUp}
                  >
                    <div className="social-card-top">
                      <div className="social-card-icon">
                        <Icon size={22} />
                      </div>
                      <ArrowUpRight size={20} className="social-card-arrow" />
                    </div>
                    <h3>{social.label}</h3>
                    <span className="social-card-handle">{social.handle}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="contact-cta-grid" />
          <div className="contact-cta-glow" />
          <div className="contact-cta-orbit" />

          <div className="section-container">
            <motion.div
              className="contact-cta-content"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                WHAT HAPPENS NEXT
              </motion.div>

              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    <span>Your message reaches</span>
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    us directly.
                  </motion.span>
                </span>
              </h2>

              <motion.p variants={fadeUp}>
                No forms routed through sales. No automated replies. Every
                inquiry lands in our inbox and gets read by the same team that
                will build your project — typically within one business day.
              </motion.p>

              <motion.div className="contact-cta-actions" variants={fadeUp}>
                <a
                  href="https://wa.me/923260666521"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  <WhatsappIcon size={18} />
                  <span>Chat on WhatsApp</span>
                </a>

                <Link href="/projects" className="cta-link">
                  <span>Explore Our Work</span>
                  <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
