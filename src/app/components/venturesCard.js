import Image from 'next/image';

export default function VenturesCard({ ventureTitle, ventureImage }) {


    return (
        <div className='ventureCardsBox'>
            <div className='ventureImgBox'>
                <Image src={ventureImage} alt="My Image" width={231} height={174} />
            </div>
            <div className='ventureTitleBox'>
                <p> {ventureTitle} </p>
            </div>
        </div>
    )
}
