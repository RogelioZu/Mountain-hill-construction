import { useState, type FormEvent } from 'react';
import { BondWatermark } from '../brand/BrickMark';
import { Course } from '../components/Primitives';
import { business } from '../data/site';

type Errors = Partial<Record<'name' | 'email' | 'details', string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const details = String(data.get('details') ?? '').trim();

    const next: Errors = {};
    if (!name) next.name = 'Enter your name so we know who to reach.';
    if (!email) next.email = 'Enter an email so we can reply.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Check this email address — it looks incomplete.';
    if (!details) next.details = 'Describe the project so we can quote it accurately.';

    setErrors(next);
    if (Object.keys(next).length > 0) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }

    setSending(true);

    // TODO(owner): connect this to a form service (Formspree, Netlify Forms,
    // Web3Forms) and POST here. Until then we hand the message to the visitor's
    // mail client with everything prefilled, which actually delivers — unlike
    // the previous `action="mailto:"` form, which failed silently.
    const subject = `Quote request — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      '',
      details,
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `${business.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 600);
  }

  return (
    <>
      <section className="page-head on-deep">
        <BondWatermark />
        <div className="container">
          <span className="label">Get in touch</span>
          <h1>Request a Quote</h1>
          <p className="lead">
            Tell us about your site, scope, and timeline. We’ll respond within one business
            day.
          </p>
        </div>
      </section>

      <Course label="Start here">
        <h2 className="visually-hidden">Request a quote</h2>
        <div className="grid-2">
          <div>
            {sent ? (
              <div className="panel">
                <h3>Your message is ready to send</h3>
                <p>
                  We opened your email app with the details filled in. Send it and we’ll
                  reply within one business day. If nothing opened, email us directly at{' '}
                  <a href={business.emailHref}>{business.email}</a> or call{' '}
                  <a href={business.phoneHref}>{business.phone}</a>.
                </p>
                <p style={{ marginTop: 'var(--space-5)' }}>
                  <button
                    className="btn btn--secondary"
                    type="button"
                    onClick={() => setSent(false)}
                  >
                    Write another message
                  </button>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className={`field${errors.name ? ' field--error' : ''}`}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name ? (
                    <span className="field__error" id="name-error">
                      {errors.name}
                    </span>
                  ) : null}
                </div>

                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" />
                  <span className="field__hint">Optional — but it’s the fastest way to reach you.</span>
                </div>

                <div className={`field${errors.email ? ' field--error' : ''}`}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email ? (
                    <span className="field__error" id="email-error">
                      {errors.email}
                    </span>
                  ) : null}
                </div>

                <div className={`field${errors.details ? ' field--error' : ''}`}>
                  <label htmlFor="details">Project details</label>
                  <textarea
                    id="details"
                    name="details"
                    aria-invalid={errors.details ? true : undefined}
                    aria-describedby={errors.details ? 'details-error' : 'details-hint'}
                  />
                  {errors.details ? (
                    <span className="field__error" id="details-error">
                      {errors.details}
                    </span>
                  ) : (
                    <span className="field__hint" id="details-hint">
                      Location, what you want built, and roughly when.
                    </span>
                  )}
                </div>

                <button className="btn btn--primary" type="submit" disabled={sending}>
                  {sending ? 'Preparing…' : 'Send Message'}
                </button>
                <p className="form-note">
                  Prefer to talk? Call{' '}
                  <a href={business.phoneHref}>{business.phone}</a>, {business.hours}.
                </p>
              </form>
            )}
          </div>

          <aside className="panel panel--quiet">
            <h3>Office</h3>
            <dl>
              <div>
                <dt>Hours</dt>
                <dd>{business.hours}</dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>{business.address}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={business.phoneHref}>{business.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={business.emailHref}>{business.email}</a>
                </dd>
              </div>
              <div>
                <dt>License</dt>
                <dd>{business.licenseLabel}</dd>
              </div>
              <div>
                <dt>Service area</dt>
                <dd>{business.serviceArea.join(', ')}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Course>
    </>
  );
}
