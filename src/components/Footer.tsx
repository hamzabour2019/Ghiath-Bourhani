'use client';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="container">
        <p>&copy; Ghiath Bourhani Trading Co. All rights reserved.</p>
      </div>
    </footer>
  );
}