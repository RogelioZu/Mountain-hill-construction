import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { BrickMark } from '../brand/BrickMark';
import { business, nav } from '../data/site';

type HeaderProps = { open: boolean; setOpen: (open: boolean) => void };

function Header({ open, setOpen }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" to="/">
          <BrickMark size={38} title={`${business.name} home`} />
          <span>
            <span className="brand__name">
              Mountain Hill
              <br />
              Construction
            </span>
            <span className="brand__lic">LIC. # {business.license}</span>
          </span>
        </Link>

        <button
          className={`nav__burger${open ? ' is-open' : ''}`}
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="nav__burger-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav id="primary-nav" className={`nav${open ? ' is-open' : ''}`} aria-label="Main">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav__link${isActive ? ' is-current' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link className="btn btn--primary" to="/contact">
            Get a Free Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer({ inert }: { inert: boolean }) {
  return (
    <footer className="site-footer on-deep" inert={inert || undefined}>
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link className="brand" to="/">
              <BrickMark size={38} variant="knockout" />
              <span>
                <span className="brand__name">
                  Mountain Hill
                  <br />
                  Construction
                </span>
                <span className="brand__lic">LIC. # {business.license}</span>
              </span>
            </Link>
            <p style={{ marginTop: 'var(--space-5)' }}>
              General contractor serving {business.serviceArea.slice(0, -1).join(', ')} and{' '}
              {business.serviceArea.at(-1)}.
            </p>
          </div>

          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/projects">Our Projects</Link>
              </li>
              <li>
                <Link to="/foundations">Design System</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <address>
              <a href={business.emailHref}>{business.email}</a>
              <br />
              <a href={business.phoneHref}>{business.phone}</a>
              <br />
              {business.address}
            </address>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Mountain Hill Construction</p>
          <p>{business.licenseLabel}</p>
        </div>
      </div>
    </footer>
  );
}

/** Fixed below 860px: the phone is one thumb-reach away, always. */
function ContactBar({ inert }: { inert: boolean }) {
  return (
    <div className="contact-bar" inert={inert || undefined}>
      <a className="contact-bar__call" href={business.phoneHref}>
        Call {business.phone}
      </a>
      <Link className="contact-bar__quote" to="/contact">
        Free Quote
      </Link>
    </div>
  );
}

export function Layout() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [pathname]);

  // An open drawer is modal: the page behind it neither scrolls nor takes focus.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header open={menuOpen} setOpen={setMenuOpen} />
      <main id="main" inert={menuOpen || undefined}>
        <Outlet />
      </main>
      <Footer inert={menuOpen} />
      <ContactBar inert={menuOpen} />
    </>
  );
}
