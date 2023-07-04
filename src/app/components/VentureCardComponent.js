"use client"
import Image from 'next/image';
import Link from 'next/link';
import { LuView } from 'react-icons/lu';
export default function VentureCardComponent({ ventureImage, ventureTitle, ventureAddress, ventureCity, venturePincode, ventureEst, ventureWebsite, ventrueLink }) {
    return (
        <div className="ventureCard">
            <span className='ventureCardLink'><Link href={`${ventrueLink}`}><LuView /></Link></span>
            <div className="ventureCardInner">
                <div className="ventureImg">
                    <Image src={ventureImage} alt="Venture Image" width={384} height={190} />
                </div>
                <div className="ventureDetail">
                    <h2>{ventureTitle}</h2>
                    <span className="ventureInfo">{ventureCity} - {venturePincode}</span>
                    {ventureWebsite && <span className="ventureInfo"><Image src="/website.svg" alt="Icon" width={20} height={20} /> <a href={`${ventureWebsite}`} target="_blank">{ventureWebsite}</a></span>}
                </div>
            </div>
        </div>
    )
}