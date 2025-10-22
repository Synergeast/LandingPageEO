import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {ArrowLeft, Users, Target, Heart} from 'lucide-react';

export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <Header/>
                <div className="pt-32 pb-16 px-8">
                    <div className="max-w-4xl mx-auto">
                        <Link to="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
                            <ArrowLeft className="mr-2" size={20}/>
                            Back to Home
                        </Link>
                        <h1 className="text-5xl font-bold mb-4">About Us</h1>
                        <p className="text-xl text-gray-300">
                            Discover the story behind our community
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex-1 px-8 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <Users className="mx-auto mb-4 text-yellow-400" size={48}/>
                            <h3 className="text-xl font-bold mb-2">Our Team</h3>
                            <p className="text-gray-600">
                                Passionate adventurers dedicated to helping others explore the world
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <Target className="mx-auto mb-4 text-yellow-400" size={48}/>
                            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                            <p className="text-gray-600">
                                Inspire people to step outside their comfort zone and embrace new experiences
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <Heart className="mx-auto mb-4 text-yellow-400" size={48}/>
                            <h3 className="text-xl font-bold mb-2">Our Values</h3>
                            <p className="text-gray-600">
                                Authenticity, courage, and a commitment to sustainable adventure
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-12 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Synergeast is a creative community rooted in Surabaya — a space where artists,
                                musicians, designers, and creative folks come together to collaborate and express
                                themselves. With the spirit of “initiate moves thru intimate grooves,” Synergeast brings
                                live music performances and creative markets together, creating a place where creativity
                                can grow and flow freely.
                            </p>
                            {/*<p>*/}
                            {/*    Our journey has taken us across continents, through bustling cities and*/}
                            {/*    remote wilderness. Along the way, we've learned that the best adventures*/}
                            {/*    aren't just about destinations—they're about the people you meet, the*/}
                            {/*    challenges you overcome, and the person you become.*/}
                            {/*</p>*/}
                            {/*<p>*/}
                            {/*    Today, we're building a community of like-minded adventurers who believe*/}
                            {/*    that the greatest stories are written by those brave enough to turn the page.*/}
                            {/*</p>*/}
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}
