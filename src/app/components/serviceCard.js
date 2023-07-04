import Image from 'next/image';
import Link from 'next/link';

export default function serviceCard({ title, imgName, Description, link }) {
    return (
        <>
            <div className='serviceCard fullBlockLinkOuter'>
                {link && <Link href={link} className='fullBlockLink'></Link>}
                <div className='serviceTitle'>
                    <h3> {title} </h3>
                    <p className='imgBox'>
                        <Image src={imgName} alt="Donation Service" width={28} height={29} />
                    </p>
                </div>
                <div className='serviceCardDescription'>
                    <p> {Description} </p>
                </div>
            </div>
        </>
    )
}
