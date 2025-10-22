import {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsentComponent from "./CookieConsentComponent.tsx";

const images = [
    'https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1920'
];

export default function Home() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const openBuyTicket = (() => {
        const URL = "https://artatix.co.id/event/runacrossthesustain_rats";
        window.open(URL, "_blank");
    });

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-1 relative overflow-hidden bg-black/90">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                            index === currentImage ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                            backgroundImage: `url('${image}')`,
                            width: '75%'
                        }}
                    />
                ))}

                <div className="absolute inset-0 bg-black/30"/>

                <Header/>

                <div className="relative z-10 flex items-center justify-end h-full min-h-[calc(100vh-200px)] px-8">
                    {/*<div className="text-center text-white max-w-4xl">*/}
                    {/*  <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">*/}
                    {/*    CHASE YOUR DREAMS*/}
                    {/*  </h1>*/}
                    {/*  <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">*/}
                    {/*    Life is an adventure waiting to be explored*/}
                    {/*  </p>*/}
                    <button
                        className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg rounded-xl"
                        onClick={openBuyTicket}
                    >
                        BUY TICKET
                    </button>
                    {/*</div>*/}
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                index === currentImage ? 'bg-yellow-400 w-8' : 'bg-white/50 hover:bg-white/80'
                            }`}
                        />
                    ))}
                </div>
            </div>

            <Footer/>

            <CookieConsentComponent />
        </div>
    );
}
