'use client'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Header({ pageTitle, hideHeaderBanner }) {
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
            <header id="site_header" className={`${headerClass}`}>
                <div className='container-fluid'>
                    <div className='row alignCenter'>
                        <div className='logoBox col-md-3'>
                            <Link href="/"><Image src="/logoUpdatedNew.png" alt="My Image" width={450} height={75} /></Link>
                        </div>
                        <div className='navBar col-md-9'>
                            <div className='navContactBar'>
                                <ul>
                                    <li> <a href="tel:6283282075"> <FontAwesomeIcon icon={faMobileScreen} width={12} /> +91-6283282075 <span> (Head Office)  </span></a></li>
                                    <li> <a href="tel:6283282077"> <FontAwesomeIcon icon={faMobileScreen} width={12} /> +91-6283282077 <span> (Director Office) </span> </a></li>
                                    <li> <a href="#"> <FontAwesomeIcon icon={faMobileScreen} width={12} /> +91-183-2228771 </a></li>
                                    <li> <a href="mailto:info@cheikhalsadiwan.com"> <FontAwesomeIcon icon={faEnvelope} width={15} /> info@cheikhalsadiwan.com </a></li>
                                    <li className='langIcon'><Link href="/home-punjabi"><img src='/languageNew.png' alt="Language Icon" /></Link></li>
                                </ul>
                            </div>
                            <div className='navLinkBar'>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li>
                                        <a href="#">About</a>
                                        <ul>
                                            <li><Link href="/"><span>History</span></Link></li>
                                            <li><Link href="/"><span>Founders</span></Link></li>
                                            <li><Link href="/"><span>First Meeting</span></Link></li>
                                            <li><Link href="/office-bearers"><span>Office Bearers</span></Link></li>
                                            <li><Link href="/executive-committee"><span>Executive Committee</span></Link></li>
                                            <li><Link href="/finance-committee"><span>Finance Committee</span></Link></li>
                                            <li><Link href="/education-committee"><span>Education Committee</span></Link></li>
                                            <li><Link href="/"><span>Members</span></Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/">Ventures</a>
                                        <ul>
                                            <li><Link href="/gurdwara-sahib"><span>Gurdwara Sahib</span></Link></li>
                                            <li><Link href="/schools"><span>Schools</span></Link></li>
                                            <li><Link href="/college"><span>Colleges</span></Link></li>
                                            <li><Link href="/hospital"><span>Hospitals</span></Link></li>
                                            <li><Link href="/orphanage"><span>Orphanage</span></Link></li>
                                            <li><Link href="/birdhghar"><span>Birdh Ghar</span></Link></li>
                                            <li><Link href="/parcharak-vidyalya"><span>Parcharak Vidyalya</span></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="/gallery">Gallery</Link></li>
                                    <li><Link href="/publications">Publications</Link></li>
                                    <li><Link href="/contact-us">Contact Us</Link></li>
                                    <li className='navButton'><Link href="/career"><span>Career</span></Link> </li>
                                    <li className='navButton'><Link href="/"><span>Donation</span></Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {
                (currentPath !== '/' && currentPath !== '/schools/1' && !hideHeaderBanner) ? (<div className='headerBanner'>
                    <div className='headingBar'>
                        <p className='subSmallHeading'>Chief Khalsa Diwan</p>
                        <h2>{pageTitle}</h2>
                        <span className="lineSep"></span>
                    </div>
                </div>) : ''
            }

        </>


    )
}
