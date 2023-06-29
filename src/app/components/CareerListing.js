import Image from "next/image";
import Link from "next/link";

export default function CareerListing({ jobTitle, ventureName, ventureCity, numberOfPost, lastDate }) {
    return (
        <>
            <div className="careerStrip">
                <span>Job Opening</span>
                <span>{ventureCity}</span>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="careerLogo">
                        <Image src="/careerLogo.png" width={68} height={77} alt="Carerr Logo" />
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="carerrListCont">
                        <h2>{jobTitle}</h2>
                        {ventureName && <span className="ventureName fullWidth">{ventureName}</span>}
                        <ul className="careerTags">
                            {numberOfPost && <li><span>Post(s): {numberOfPost}</span></li>}
                            {lastDate && <li><span className="lastDate">Last Date: {lastDate}</span></li>}
                        </ul>
                        <span className="jobDetailLink"><Link href={'/career/1'}>See Detail <Image src='/right__long_arrow.svg' alt="Arror Icon" width={19} height={19} /></Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}