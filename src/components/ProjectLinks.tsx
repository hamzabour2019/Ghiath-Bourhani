export default function ProjectLinks() {
  const projects = [
    {
      title: 'Dentist Doctor Program',
      description: 'Comprehensive dental management software for clinics.',
      link: 'https://www.facebook.com/share/1HXUDxHpBT/',
      icon: 'fas fa-tooth'
    },
    {
      title: 'DAWA Pharmacy Management Program',
      description: 'Advanced pharmacy management system for efficient operations.',
      link: 'https://www.facebook.com/share/1K5CxBGkKV/',
      icon: 'fas fa-pills'
    },
    {
      title: 'Dental Medium Journal',
      description: 'Professional journal for dental research and publications.',
      link: 'https://www.facebook.com/share/16SuVnzR4q/',
      icon: 'fas fa-book'
    }
  ];

  return (
    <section id="project-links" className="project-links">
      <div className="container">
        <h2>Links to Our Projects</h2>
        <div className="project-links-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-link-card">
              <div className="project-icon">
                <i className={project.icon}></i>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" className="project-link-btn">
                View Project <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}