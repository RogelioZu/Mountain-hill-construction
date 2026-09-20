import { Link } from 'react-router-dom';
import { BondWatermark } from '../brand/BrickMark';
import { Course } from '../components/Primitives';
import { business, credentials, whyUs } from '../data/site';

export function About() {
  return (
    <>
      <section className="page-head on-deep">
        <BondWatermark />
        <div className="container">
          <span className="label">Who we are</span>
          <h1>
            Local builders.
            <br />
            Mountain neighbors.
          </h1>
          <p className="lead">
            We live and build at altitude, so we understand snow load, freeze–thaw, and steep
            sites. Our crews are in-house, our subs are vetted locals, and our project
            managers communicate clearly from day one.
          </p>
        </div>
      </section>

      <Course label="The difference">
        <div className="grid-2">
          <div className="stack">
            <h2>Why choose us</h2>
            <ul className="ticks">
              {whyUs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="stack">
            <h2>Credentials</h2>
            <ul className="ticks">
              {credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Course>

      <Course tone="sunken" label="Where we work">
        <div className="stack">
          <h2>Serving the San Bernardino Mountains</h2>
          <p className="lead">
            Crews based in Big Bear City, working across the mountain communities year-round —
            including winter restoration response.
          </p>
          <ul className="chips">
            {business.serviceArea.map((area) => (
              <li className="chip" key={area}>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Course>

      <Course tone="deep">
        <div className="stack">
          <h2>Let’s talk about your project</h2>
          <p>We respond within one business day.</p>
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
