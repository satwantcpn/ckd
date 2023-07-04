'use client'
import { FaAngleUp } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

export default function BackToTop() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const backToTopHandler = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
            {
                showTopBtn && <div className="top-to-btm" onClick={(e) => backToTopHandler()}>
                    <FaAngleUp />
                </div>
            }
        </>
    );
}