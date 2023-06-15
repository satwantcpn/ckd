"use client"
import Link from 'next/link';
import { LuView } from 'react-icons/lu';
export default function GalleryListComponent({ galleryTitle, galleryImage }) {
    return (
        <div className="galleryCard">
            <span className='galleryCardLink'><Link href="/gallery/1"><LuView /></Link></span>
            <div className="galleryCardInner">
                <div className="galleryImg">
                    <img src={galleryImage} />
                </div>
                <div className="galleryDetail">
                    <h2>{galleryTitle}</h2>
                    <div className='svgSep'>
                        <svg width="99" height="10" viewBox="0 0 99 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8.58659 9L18.8827 1L29.1788 9L37.8492 1L47.6034 9L58.4413 1L67.6536 9L77.4078 1L89.3296 9L98 1" stroke="#F6781B" /></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}