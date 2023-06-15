"use client"
import { LuView } from 'react-icons/lu';
export default function VentureCardComponent({ ventureImage, ventureTitle, ventureAddress, ventureCity, venturePincode, ventureEst, ventureWebsite, key }) {
    return (
        <div className="ventureCard">
            <span className='ventureCardLink'><LuView /></span>
            <div className="ventureCardInner">
                <div className="ventureImg">
                    <img src={ventureImage} />
                </div>
                <div className="ventureDetail">
                    <h2>{ventureTitle}</h2>
                    <span className="ventureInfo">{ventureAddress}, Amritsar - 143001</span>
                    <span className="ventureInfo"><img src="/website.svg" /> <a href="https://www.sghpsmajitharoadbypass.edu.in/" target="_blank">www.sghpsmajitharoadbypass.edu.in</a></span>
                </div>
            </div>
        </div>
    )
}