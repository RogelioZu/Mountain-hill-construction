import { Link } from 'react-router-dom';
import { FeaturedCarousel } from '../components/FeaturedCarousel';
import { HeroVideo } from '../components/HeroVideo';
import { Course } from '../components/Primitives';
import { business, services } from '../data/site';

export function Home() {
  return (
    <>
      <section className="hero hero--film on-deep">
        <HeroVideo />
        <div className="hero__plate" aria-hidden="true" />
        <div className="container hero__inner">
          {/* Client copy. Do not remove — see PRODUCT.md, Brand Commitments. */}
          <span className="label">Full Service</span>
          <h1>
            General
            <br />
            Contractor
          </h1>
          <div className="hero__rule" />
          <p className="hero__tagline">Mountain-strong building for Big Bear, CA.</p>
          <ul className="hero__creds">
            <li>{business.licenseLabel}</li>
            <li>Licensed &amp; Insured</li>
            <li>Local</li>
            <li>{business.serviceArea.join(' · ')}</li>
          </ul>
          <div className="btn-row">
            <Link className="btn btn--primary" to="/contact">
              Get a Free Quote
            </Link>
            <Link className="btn btn--secondary" to="/projects">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="strip on-deep" aria-label="Contact details">
        <div className="container strip__grid">
          <div className="strip__item">
            <span className="label">Phone</span>
            <a href={business.phoneHref}>{business.phone}</a>
          </div>
          <div className="strip__item">
            <span className="label">Email</span>
            <a href={business.emailHref}>{business.email}</a>
          </div>
          <div className="strip__item">
            <span className="label">Office</span>
            <span>{business.address}</span>
          </div>
        </div>
      </section>

      <Course label="What we do">
        <div className="stack">
          <h2>Residential &amp; commercial construction</h2>
          <p className="lead">Built for altitude, snow load, and durability.</p>
          <ul className="chips">
            {services.slice(0, 4).map((s) => (
              <li className="chip" key={s.slug}>
                {s.name}
              </li>
            ))}
          </ul>
          <div>
            <Link className="btn btn--secondary" to="/services">
              All Services
            </Link>
          </div>
        </div>
      </Course>

      <Course tone="sunken" label="Our work">
        <div className="stack stack--loose">
          <h2>Featured projects</h2>
          <FeaturedCarousel />
          <div>
            <Link className="btn btn--secondary" to="/projects">
              See All Projects
            </Link>
          </div>
        </div>
      </Course>

      <Course tone="deep">
        <div className="stack">
          <h2>Ready to build?</h2>
          <p>
            Tell us about your site, scope, and timeline. We respond within one business day.
          </p>
          <div className="btn-row">
            <Link className="btn btn--primary" to="/contact">
              Contact Us
            </Link>
            <a className="btn btn--secondary" href={business.phoneHref}>
              Call {business.phone}
            </a>
          </div>
        </div>
      </Course>
    </>
  );
}
