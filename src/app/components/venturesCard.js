import Image from 'next/image';
import Link from 'next/link';

export default function VenturesCard({ ventureTitle, ventureImage, link }) {


    return (
        <div className='ventureCardsBox'>
            <div className='ventureImgBox'>
                <Link href={link} className='hmVLink'></Link>
                <Image src={ventureImage} alt="My Image" width={231} height={174} />
            </div>
            <div className='ventureTitleBox'>
                <p> {ventureTitle} </p>
            </div>
        </div>
    )
}
