export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Us</h2>
        <p>Ghiath Bourhani Trading Co is a specialized software development and information systems provider founded in 2001, with over twenty years of continuous experience delivering digital solutions for government institutions, healthcare providers, educational entities, and private organizations. The company focuses on addressing operational, administrative, and data-driven challenges through integrated software solutions.</p>
        <ul className="highlights">
          <li><i className="fas fa-calendar-alt"></i> <strong>20+ Years</strong> of experience since 2001</li>
          <li><i className="fas fa-building"></i> <strong>Sectors:</strong> Public Sector, Healthcare, Social Protection, Education</li>
          <li><i className="fas fa-cogs"></i> <strong>Expertise:</strong> System lifecycle management, data governance, Agile methodologies</li>
        </ul>
        <div className="skills">
          <span className="skill-chip">Software Development</span>
          <span className="skill-chip">Database Design</span>
          <span className="skill-chip">Healthcare Systems</span>
          <span className="skill-chip">Data Management</span>
          <span className="skill-chip">Project Management</span>
          <span className="skill-chip">Quality Assurance</span>
        </div>
      </div>
    </section>
  );
}