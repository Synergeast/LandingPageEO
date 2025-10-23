import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundException: React.FC = () => {
    return (
        <div className=" min-h-screen flex flex-col">

            <div className="relative z-10 flex items-center justify-center h-full min-h-[calc(100vh-200px)] px-8">
                <div className="text-center max-w-4xl">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">404 - Page Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                    <br/>
                    <br/>
                    <br/>
                    <Link to="/" className="text-2xl">Go to Homepage</Link>
                </div>

            </div>


        </div>
    );
};

export default NotFoundException;