"use client"
import Link from 'next/link';
import { LuView } from 'react-icons/lu';
export default function VentureCardComponent({ ventureImage, ventureTitle, ventureAddress, ventureCity, venturePincode, ventureEst, ventureWebsite, key, ventrueLink }) {
    return (
        <div className="ventureCard">
            <span className='ventureCardLink'><Link href={`${ventrueLink}/1`}><LuView /></Link></span>
            <div className="ventureCardInner">
                <div className="ventureImg">
                    <img src={ventureImage} />
                </div>
                <div className="ventureDetail">
                    <h2>{ventureTitle}</h2>
                    <span className="ventureInfo">{ventureAddress}, Amritsar - 143001</span>
                    <span className="ventureInfo"><img src="/website.svg" /> <a href={`${ventureWebsite}`} target="_blank">{ventureWebsite}</a></span>
                </div>
            </div>
        </div>
    )
}