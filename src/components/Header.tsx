import {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import ImageLogo from '../images/Logo-Synergeast-New-(White).png';

export default function Header() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
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

                <a href="/" className="flex items-center space-x-2 mb-6">
                    <img src={ImageLogo} alt={'Logo'} style={{width: '200px'}}/>
                </a>

            </div>

            <div className="text-white text-right">
                <div className="text-2xl font-sans">{formatWeekDay(dateTime)}</div>
                <div className="text-sm font-semibold">{formatDate(dateTime)} &nbsp;&nbsp;(WIB / UTC+7)</div>
                {/*<div className="text-lg font-mono">{formatTime(dateTime)} </div>*/}
            </div>
        </header>
    );
}
