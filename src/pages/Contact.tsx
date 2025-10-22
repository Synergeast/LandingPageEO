import {Link} from 'react-router-dom';
import {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {ArrowLeft, Mail, Phone, MapPin, Send} from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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
                        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                        <p className="text-xl text-gray-300">
                            Let's start planning your next adventure
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex-1 px-8 py-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                        <p className="text-gray-600 mb-8">
                            Have questions or ready to embark on your next journey? We'd love to hear from you.
                            Fill out the form and we'll get back to you as soon as possible.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <Mail className="text-yellow-400 mt-1" size={24}/>
                                <div>
                                    <h3 className="font-semibold mb-1">Email</h3>
                                    <p className="text-gray-600">hello.synergeast@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Phone className="text-yellow-400 mt-1" size={24}/>
                                <div>
                                    <h3 className="font-semibold mb-1">Phone / WA</h3>
                                    <p className="text-gray-600">+62 822 2190 5665</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <MapPin className="text-yellow-400 mt-1" size={24}/>
                                <div>
                                    <h3 className="font-semibold mb-1">Location</h3>
                                    <p className="text-gray-600">
                                        Jl. Pucang Rinenggo no. 44, <br/>
                                        Surabaya - Indonesia
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <MapPin className="text-yellow-400 mt-1" size={24}/>
                                <div>
                                    <h3 className="font-semibold mb-1">Instagram</h3>
                                    <p className="text-gray-600">
                                       @synergeast
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<div className="bg-white p-8 rounded-lg shadow-md">*/}
                    {/*  <form onSubmit={handleSubmit} className="space-y-6">*/}
                    {/*    <div>*/}
                    {/*      <label htmlFor="name" className="block text-sm font-semibold mb-2">*/}
                    {/*        Name*/}
                    {/*      </label>*/}
                    {/*      <input*/}
                    {/*        type="text"*/}
                    {/*        id="name"*/}
                    {/*        name="name"*/}
                    {/*        value={formData.name}*/}
                    {/*        onChange={handleChange}*/}
                    {/*        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"*/}
                    {/*        required*/}
                    {/*      />*/}
                    {/*    </div>*/}

                    {/*    <div>*/}
                    {/*      <label htmlFor="email" className="block text-sm font-semibold mb-2">*/}
                    {/*        Email*/}
                    {/*      </label>*/}
                    {/*      <input*/}
                    {/*        type="email"*/}
                    {/*        id="email"*/}
                    {/*        name="email"*/}
                    {/*        value={formData.email}*/}
                    {/*        onChange={handleChange}*/}
                    {/*        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"*/}
                    {/*        required*/}
                    {/*      />*/}
                    {/*    </div>*/}

                    {/*    <div>*/}
                    {/*      <label htmlFor="message" className="block text-sm font-semibold mb-2">*/}
                    {/*        Message*/}
                    {/*      </label>*/}
                    {/*      <textarea*/}
                    {/*        id="message"*/}
                    {/*        name="message"*/}
                    {/*        value={formData.message}*/}
                    {/*        onChange={handleChange}*/}
                    {/*        rows={5}*/}
                    {/*        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition resize-none"*/}
                    {/*        required*/}
                    {/*      />*/}
                    {/*    </div>*/}

                    {/*    <button*/}
                    {/*      type="submit"*/}
                    {/*      className="w-full bg-yellow-400 text-black px-6 py-3 font-semibold rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-md flex items-center justify-center space-x-2"*/}
                    {/*    >*/}
                    {/*      <span>Send Message</span>*/}
                    {/*      <Send size={18} />*/}
                    {/*    </button>*/}
                    {/*  </form>*/}
                    {/*</div>*/}
                </div>
            </div>

            <Footer/>
        </div>
    );
}
