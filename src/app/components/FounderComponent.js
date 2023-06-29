"use client"
import Image from 'next/image';
import { LuView } from 'react-icons/lu';
export default function FounderListComp({ title, duration, image, setMemberPopup }) {
    const memberPopHandler = () => {
        setMemberPopup(true)
    }
    return (
        <div className="founderCard">
            <span className='founderCardLink' onClick={memberPopHandler} ><LuView /></span>
            <div className="founderCardInner">
                <div className="founderCardImg">
                    <Image src={image} alt="Founder Image" width={350} height={550} />
                </div>
                <div className="founderCardDetail">
                    <h2>{title}</h2>
                    <h3>{duration}</h3>
                    <svg width="99" height="10" viewBox="0 0 99 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8.58659 9L18.8827 1L29.1788 9L37.8492 1L47.6034 9L58.4413 1L67.6536 9L77.4078 1L89.3296 9L98 1" stroke="#F6781B" /></svg>
                </div>
            </div>
        </div>
    )
}