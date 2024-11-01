import React, { useRef, useState } from 'react';
import { features } from '../constants';

const CardSpotlight = () => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary'
        >
            <div
                className='pointer-events-none absolute inset-0 opacity-0 transition duration-300'
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
                }}
            />
            {features.map((feature, index) => (
                <div key={index} className="bg-primary border border-borderColor p-5 rounded-lg">
                    <div className='w-11 h-11 flex justify-center items-center border border-zinc-700 rounded-xl p-1'>
                        <img
                            src={feature.imgURL}
                            alt={feature.label}
                            width={24}
                            height={24}
                        />
                    </div>
                    <h3 className="mt-3 text-main text-2xl font-bold">{feature.label}</h3>
                    <p className="text-gray-400 mt-2">{feature.subtext}</p>
                </div>
            ))}
        </div>
    );
};

export default CardSpotlight;
