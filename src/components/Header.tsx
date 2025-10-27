import {useState, useEffect} from 'react';
// import {Link, useLocation} from 'react-router-dom';
import ImageLogo from '../images/Logo-Synergeast-New-(White).png';

export default function Header() {
    const myDateTime = new Date();

    const [dateTime, setDateTime] = useState(myDateTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(myDateTime);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatWeekDay = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
        })

    }

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            // weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    return (
        <header className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-6">
            <div className="flex items-center space-x-2">
                {/*<Truck size={40} className="text-yellow-400" strokeWidth={2.5} />*/}
                {/*<span className="text-white text-2xl font-bold tracking-wider">Synergeast</span>*/}

                <a href="/" className="flex items-center transition-opacity duration-300 hover:opacity-90 space-x-2 mb-6">
                    <img src={ImageLogo} alt={'Logo'} className="w-32 sm:w-44 md:w-56 h-auto transition-all duration-300 rounded-lg"/>
                </a>

            </div>

            <div className="text-white text-right transition-all duration-300">
                <div className="text-xl sm:text-2xl font-extrabold leading-tight text-yellow-400 font-sans">{formatWeekDay(dateTime)}</div>
                <div className="text-xs sm:text-sm font-medium opacity-80 mt-1">{formatDate(dateTime)} &nbsp;&nbsp;(WIB / UTC+7)</div>
                {/*<div className="text-lg font-mono">{formatTime(dateTime)} </div>*/}
            </div>
        </header>
    );
}
