import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsentComponent from "./CookieConsentComponent.tsx";

import imageOrangLari from '../banners/orang-orang-lari.jpg';

const imagesByDevice = {
    mobile: [
        imageOrangLari,
        'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    tablet: [
        imageOrangLari,
        'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1024',
        'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1024',
        'https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1024',
        'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1024'
    ],
    laptop: [
        imageOrangLari,
        'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1440',
        'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1440',
        'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1440',
        'https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1440',
        'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1440'
    ],
    monitor: [
        imageOrangLari,
        'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=2560',
        'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=2560',
        'https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=2560',
        'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=2560'
    ]
};

const getDeviceType = () => {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    if (width < 1920) return 'laptop';
    return 'monitor';
};


export default function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const [deviceType, setDeviceType] = useState(getDeviceType());
    const [images, setImages] = useState(imagesByDevice[deviceType]);


    useEffect(() => {
        const handleResize = () => {
            const newDeviceType = getDeviceType();
            if (newDeviceType !== deviceType) {
                setDeviceType(newDeviceType);
                setImages(imagesByDevice[newDeviceType]);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [deviceType]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [images.length]);

    const getBackgroundSize = () => {
        if (deviceType === 'mobile') return '100%';
        return '75%';
    };

    const getBackgrounPositionn = () => {
        if (deviceType === 'mobile') return 'center';
        return 'left';
    };

    const backgroundSize = getBackgroundSize();
    const backgroundPosition = getBackgrounPositionn();

    // MODIFIED: Button placement logic for right-center alignment
    const buttonPlacementClass = deviceType === 'mobile'
        ? 'bottom-4 inset-x-0 flex justify-center' // Centered on mobile
        // Right-Center alignment: absolute, full height (inset-y-0), right-aligned (right-8), and vertically centered (items-center)
        : 'inset-y-0 right-8 flex items-center justify-end';


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
                        className={`absolute inset-0 bg-center transition-opacity duration-1000 ${
                            index === currentImage ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                            backgroundImage: `url('${image}')`,
                            backgroundSize: backgroundSize,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: backgroundPosition,
                        }}
                    />
                ))}

                <div className="absolute inset-0 bg-black/30"/>

                <Header/>

                {/* Main Content Area (e.g., for centered text) */}
                <div className="relative z-10 flex items-center justify-center h-full min-h-[calc(100vh-200px)] px-8">
                    {/* Placeholder for H1/P text */}
                    <div className="text-white max-w-4xl mx-auto w-full text-center">

                    </div>
                </div>

                <div className={`absolute z-10 p-4 w-full h-full ${buttonPlacementClass}`}>
                    <button
                        className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg rounded-xl"
                        onClick={openBuyTicket}
                    >
                        BUY TICKET
                    </button>
                </div>


                {/* Image Navigation Dots */}
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

            <CookieConsentComponent/>
        </div>
    );
}