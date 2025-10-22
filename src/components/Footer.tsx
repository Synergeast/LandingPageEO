import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-sm text-white py-8 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-2">
          <h3 className="text-sm font-semibold mb-2 text-gray-400">COMPANY</h3>
          <a href="https://nextmantra.com" className="text-sm hover:text-yellow-400 transition-colors" target={'_blank'}>
            Power by © 2025 Agantra Inovatif OÜ
          </a>
          {/*<a href="/terms" className="text-sm hover:text-yellow-400 transition-colors">*/}
          {/*  Terms of Service*/}
          {/*</a>*/}
          {/*<a href="/privacy" className="text-sm hover:text-yellow-400 transition-colors">*/}
          {/*  Privacy Policy*/}
          {/*</a>*/}
        </div>

        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-sm font-semibold text-gray-400">CONNECT</h3>
          <div className="flex space-x-6">
            {/*<a href="https://facebook.com" className="hover:text-yellow-400 transition-colors">*/}
            {/*  <Facebook size={24} />*/}
            {/*</a>*/}
            {/*<a href="https://twitter.com" className="hover:text-yellow-400 transition-colors">*/}
            {/*  <Twitter size={24} />*/}
            {/*</a>*/}
            <a href="https://www.instagram.com/synergeast" className="hover:text-yellow-400 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
          <a href="#" className="flex items-center space-x-2 text-sm hover:text-yellow-400 transition-colors">
            <Mail size={18} />
            <span>Subscribe to Newsletter (will come soon)</span>
          </a>
        </div>

        <div className="flex flex-col items-end space-y-2">
          <h3 className="text-sm font-semibold mb-2 text-gray-400">INFO</h3>
          <Link to="/about" className="text-sm hover:text-yellow-400 transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-sm hover:text-yellow-400 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
