import { Link } from 'react-router-dom';
import { BondWatermark } from '../brand/BrickMark';
import { Course, CourseRow } from '../components/Primitives';
import { business, services } from '../data/site';

export function Services() {
  return (
    <>
      <section className="page-head on-deep">
        <BondWatermark />
        <div className="container">
          <span className="label">Services</span>
          <h1>
            Residential &amp;
            <br />
            Commercial
          </h1>
          <p className="lead">
            We manage design coordination, permits, and construction with a focus on mountain
            durability.
          </p>
        </div>
      </section>

      <Course label="What we build">
        <h2 className="visually-hidden">What we build</h2>
        <div className="courses">
          {services.map((s) => (
            <CourseRow key={s.slug} title={s.name}>
              {s.blurb}
            </CourseRow>
          ))}
        </div>
      </Course>

      <Course tone="deep">
        <div className="stack">
          <h2>Ready to build?</h2>
          <p>Free quotes across {business.serviceArea.join(', ')}.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" to="/contact">
              Get a Free Quote
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
