'use client'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Header() {
    const currentPath = usePathname()
    const headerClass = currentPath === '/' ? 'homePage' : 'InnerPage'

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let element = document.getElementById("site_header");

            if (window.scrollY > 100) {
                element.classList.add("stickyHeader");
            }
            else {
                element.classList.remove("stickyHeader");
            }
        });
    }, [])
    return (
        <>
            <header id="site_header">
                <div className='container-fluid'>
                    <div className='row alignCenter'>
                        <div className='logoBox col-md-3'>
                            <Link href='/'><Image src="/logo.png" alt="My Image" width={360} height={80} /></Link>
                        </div>
                        <div className='navBar col-md-9'>
                            <div className='navContactBar'>
                                <ul>
                                    <li> <a href="tel:6283282075"> <FontAwesomeIcon icon={faMobileScreen} width={12} /> +91-6283282075 <span> (Head Office)  </span></a></li>
                                    <li> <a href="tel:6283282077"> <FontAwesomeIcon icon={faMobileScreen} width={12} /> +91-6283282077 <span> (Director Office) </span> </a></li>
                                    <li> <a href="#"> <FontAwesomeIcon icon={faMobileScreen} width={12} /> +91-183-2228771 </a></li>
                                    <li> <a href="mailto:info@cheikhalsadiwan.com"> <FontAwesomeIcon icon={faEnvelope} width={15} /> info@cheikhalsadiwan.com </a></li>
                                </ul>
                            </div>
                            <div className='navLinkBar'>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/office-bearers">About CDKD</Link></li>
                                    <li><Link href="/schools">Our Ventures</Link></li>
                                    <li><Link href="/gallery">Gallery</Link></li>
                                    <li><Link href="/publications">Publications</Link></li>
                                    <li><Link href="/contact-us">Contact Us</Link></li>
                                    <li className='navButton'><a href="#"> <span>Carrer</span></a> </li>
                                    <li className='navButton'><a href="#"> <span>Donation</span></a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {
                currentPath !== '/' ? (<div className='headerBanner'>
                    <div className='headingBar'>
                        <p className='subSmallHeading'>Chief Khalsa Diwan's</p>
                        <h2>Schools</h2>
                        <svg width="496" height="51" viewBox="0 0 496 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L39.6369 50L92.0726 1L144.508 50L188.665 1L238.341 50L293.536 1L340.453 50L390.128 1L450.844 50L495 1" stroke="white" /></svg>
                    </div>
                </div>) : ''
            }

        </>


    )
}
