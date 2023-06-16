"use client"
import { LuView } from 'react-icons/lu';
export default function FounderListComp({ title, duration, image }) {
    return (
        <div className="founderCard">
            <span className='founderCardLink'><LuView /></span>
            <div className="founderCardInner">
                <div className="founderCardImg">
                    <img src={image} />
                </div>
                <div className="founderCardDetail">
                    <h2>{title}</h2>
                    <h3>{duration}</h3>
                </div>
            </div>
        </div>
    )
}