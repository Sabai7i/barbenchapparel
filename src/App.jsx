import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ padding: '2rem 0', textAlign: 'center', background: '#f8f8f8' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to BarBench Apparel</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Premium fitness and lifestyle apparel</p>
        <div className="hero-images">
          <img src="/vite.svg" alt="Hero 1" />
          <img src="/vite.svg" alt="Hero 2" />
          <img src="/vite.svg" alt="Hero 3" />
        </div>
        <button>
          Shop Now
        </button>
      </section>
      {/* Shop by Category Section */}
      <section style={{ padding: '2rem 0', textAlign: 'center' }}>
        <h2>Shop by Category</h2>
        <div className="category-cards" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem' }}>
          <div>Category 1</div>
          <div>Category 2</div>
          <div>Category 3</div>
        </div>
      </section>
      {/* Featured Projects Section */}
      <section style={{ padding: '2rem 0', textAlign: 'center', background: '#f8f8f8' }}>
        <h2>Featured Projects</h2>
        <div className="project-cards" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem' }}>
          <div>Project 1</div>
          <div>Project 2</div>
        </div>
      </section>
    </div>
  );
}
function Shop() {
  return <h2>Shop Page</h2>;
}
function About() {
  return <h2>About Page</h2>;
}
function Projects() {
  return <h2>Projects Page</h2>;
}
function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <div>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App
