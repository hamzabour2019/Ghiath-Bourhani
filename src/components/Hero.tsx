import TypingEffect from './TypingEffect';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          <TypingEffect text="Ghiath Bourhani Trading Co" speed={150} />
        </h1>
        <h2>Integrated Software Solutions Since 2001</h2>
        <p>Delivering reliable, scalable, and secure software solutions for public sector, healthcare, social protection, education, and administrative domains.<br />
        Empowering organizations with digital transformation through innovation and data integrity.</p>
        <div className="buttons">
          <a href="#work" className="btn primary">View Work</a>
          <a href="#contact" className="btn secondary">Contact</a>
        </div>
      </div>
    </section>
  );
}