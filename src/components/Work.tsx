'use client';

import { useState } from 'react';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    { id: 1, category: 'public-sector', title: 'National Social Assistance Beneficiary Database Assessment', description: 'Comprehensive assessment of a national-level social assistance beneficiary database to evaluate data architecture, quality, and duplication risks.', tags: ['Data Assessment', 'Database Analysis', 'Public Sector'] },
    { id: 2, category: 'healthcare', title: 'Integrated Medical Network Platform', description: 'Digital healthcare platform connecting doctors, dentists, pharmacists, and patients within a unified ecosystem across Syria, Iraq, and Oman.', tags: ['Healthcare Integration', 'API Development', 'Multi-Platform'] },
    { id: 3, category: 'healthcare', title: 'Dental Clinic Management System', description: 'Comprehensive dental clinic management system digitizing clinical and administrative operations across Syria, Turkey, Iraq.', tags: ['Dental Software', 'Clinic Management', 'Appointment System'] },
    { id: 4, category: 'healthcare', title: 'Pharmacy Management & Inventory System (DAWA)', description: 'Full-featured pharmacy management system with real-time inventory visibility and integrated accounting capabilities.', tags: ['Pharmacy Software', 'Inventory Management', 'Accounting Integration'] },
    { id: 5, category: 'healthcare', title: 'General Practitioner Clinic System', description: 'Clinic management system for physicians supporting patient consultations, medical records, and operations across multiple countries.', tags: ['Clinic Software', 'Patient Management', 'Medical Records'] },
    { id: 6, category: 'education', title: 'Educational Institution Administrative System', description: 'Digital administrative system for educational institutions managing student records, staff information, and workflows.', tags: ['Education Software', 'Student Management', 'Administrative System'] },
    { id: 7, category: 'public-sector', title: 'Government Institution Database Migration', description: 'Database migration project for a government institution transitioning legacy systems to modern relational databases.', tags: ['Database Migration', 'Data Cleansing', 'Government Systems'] },
    { id: 8, category: 'retail', title: 'Accounting & Retail Management System (Al-Sabeel)', description: 'ERP system integrating accounting and retail operations for small and medium-sized enterprises across multiple countries.', tags: ['Retail ERP', 'Accounting Software', 'Inventory Control'] },
    { id: 9, category: 'data-management', title: 'Multi-Institution Data Consolidation Platform', description: 'Centralized platform consolidating data from multiple institutional databases for unified reporting and analysis.', tags: ['Data Consolidation', 'ETL Processes', 'Reporting Platform'] },
    { id: 10, category: 'healthcare', title: 'Healthcare Data Reporting & Analytics System', description: 'Reporting and analytics system for healthcare monitoring, service delivery trends, and operational performance.', tags: ['Healthcare Analytics', 'Data Reporting', 'KPI Dashboards'] },
    { id: 11, category: 'healthcare', title: 'Dentist Doctor Program', description: 'Specialized software for dental clinics managing appointments, patient records, and treatment plans.', tags: ['Dental Software', 'Clinic Management', 'Patient Records'], buttons: [{ text: 'View on Facebook', href: 'https://www.facebook.com/share/1HXUDxHpBT/' }] },
    { id: 12, category: 'healthcare', title: 'DAWA Pharmacy Management Program', description: 'Comprehensive pharmacy management system for inventory, prescriptions, and billing.', tags: ['Pharmacy Software', 'Inventory Management', 'Prescription System'], buttons: [{ text: 'View on Facebook', href: 'https://www.facebook.com/share/1K5CxBGkKV/' }] },
    { id: 13, category: 'retail', title: 'Al-Sabeel Accounting Program', description: 'Advanced accounting software for retail businesses with integrated financial management.', tags: ['Accounting Software', 'Financial Management', 'Retail ERP'] },
    { id: 14, category: 'healthcare', title: 'General Practitioner Program', description: 'Medical software for general practitioners to manage patient consultations and records.', tags: ['Medical Software', 'Patient Management', 'Consultation System'] },
    { id: 15, category: 'healthcare', title: 'Dental Medium Journal', description: 'Collection of dental journal issues providing insights and research in dental medicine.', tags: ['Dental Journal', 'Medical Research', 'Healthcare Publications'], buttons: [
      { text: 'Issue No. 3 2012', href: '/pdf/issue_no.3_2012.pdf' },
      { text: 'Issue No. 4 2012', href: '/pdf/issue_no.4_2012_compressed.pdf' },
      { text: 'Issue 5-10-2023', href: '/pdf/nskh_wnlyn_jhz_5-10-2023.pdf' }
    ] }
  ];

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="work">
      <div className="container">
        <h2>Work</h2>
        <div className="filters">
          <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All</button>
          <button className={`filter-btn ${activeFilter === 'healthcare' ? 'active' : ''}`} onClick={() => setActiveFilter('healthcare')}>Healthcare</button>
          <button className={`filter-btn ${activeFilter === 'public-sector' ? 'active' : ''}`} onClick={() => setActiveFilter('public-sector')}>Public Sector</button>
          <button className={`filter-btn ${activeFilter === 'retail' ? 'active' : ''}`} onClick={() => setActiveFilter('retail')}>Retail</button>
          <button className={`filter-btn ${activeFilter === 'education' ? 'active' : ''}`} onClick={() => setActiveFilter('education')}>Education</button>
          <button className={`filter-btn ${activeFilter === 'data-management' ? 'active' : ''}`} onClick={() => setActiveFilter('data-management')}>Data Management</button>
        </div>
        <div className="projects">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card" data-category={project.category}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
              {project.buttons && (
                <div className="buttons">
                  {project.buttons.map((button, index) => (
                    <a key={index} href={button.href} className="btn" target={button.href.startsWith('http') ? '_blank' : undefined}>{button.text}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}