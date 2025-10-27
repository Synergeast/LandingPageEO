import {Link} from 'react-router-dom';
import {Instagram, Mail} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black/80 backdrop-blur-sm text-white py-8 px-8">
            {/* The grid is changed to be a single column on mobile (grid-cols-1) */}
            {/* and the `md:grid-cols-3` is kept for medium screens and up. */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* 1. COMPANY Section */}
                {/* On mobile, center the text (text-center) and align items to the center (items-center) */}
                {/* For medium screens and up, revert alignment to default (md:text-left) and (md:items-start) */}
                <div className="flex flex-col space-y-2 text-center items-center md:text-left md:items-start">
                    <h3 className="text-sm font-semibold mb-2 text-gray-400">COMPANY</h3>
                    <a href="https://nextmantra.com" className="text-sm hover:text-yellow-400 transition-colors"
                       target={'_blank'}>
                        &copy;2025 Agantra Inovatif OÜ
                    </a>
                </div>

                {/* 2. CONNECT Section (This section was already centered) */}
                <div className="flex flex-col items-center space-y-4">
                    <h3 className="text-sm font-semibold text-gray-400">CONNECT</h3>
                    <div className="flex space-x-6">
                        <a href="https://www.instagram.com/synergeast"
                           className="hover:text-yellow-400 transition-colors">
                            <Instagram size={24}/>
                        </a>
                    </div>
                    <a href="#" className="flex items-center space-x-2 text-sm hover:text-yellow-400 transition-colors">
                        <Mail size={18}/>
                        <span>Newsletter (come soon)</span>
                    </a>
                </div>

                {/* 3. INFO Section */}
                {/* On mobile, center the text (text-center) and align items to the center (items-center) */}
                {/* For medium screens and up, revert alignment to the end (md:text-right) and (md:items-end) */}
                <div className="flex flex-col space-y-2 text-center items-center md:text-right md:items-end">
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

