// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#0b0f12] text-gray-300 py-8 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/Sony12-grg" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/sonia-gurung-023381317" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            LinkedIn
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Soniya Gurung. All rights reserved.
        </p>
      </div>
    </footer>
  );
}