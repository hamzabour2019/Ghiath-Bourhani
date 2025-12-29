export default function Contact() {

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-info">
          <div className="contact-card">
            <h3>Phone</h3>
            <p>Syria: +963 988 687 285<br />Oman: +968 7846 1920</p>
          </div>
          <div className="contact-card">
            <h3>Location</h3>
            <p>Taliani Street, Al Jisr Al Abyad<br />Damascus, Syrian Arab Republic</p>
          </div>
        </div>
        <div className="social-links">
          <a href="https://wa.me/96878461920" target="_blank" className="whatsapp"><i className="fab fa-whatsapp"></i> WhatsApp</a>
          <a href="https://t.me/abdelhakim_diab" target="_blank" className="telegram"><i className="fab fa-telegram"></i> Telegram</a>
        </div>
      </div>
    </section>
  );
}