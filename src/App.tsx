import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './routes/About';
import { Contact } from './routes/Contact';
import { Foundations } from './routes/Foundations';
import { Home } from './routes/Home';
import { Projects } from './routes/Projects';
import { Services } from './routes/Services';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="foundations" element={<Foundations />} />
        </Route>
      </Routes>
    </Router>
  );
}
