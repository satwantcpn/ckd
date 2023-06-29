import Image from 'next/image';

export default function Heading({ heading, lrgHeading, subSmallHeading }) {


    return (
        <div className='headingBar'>
            {
                lrgHeading && <h1> {lrgHeading} </h1>
            }
            {
                subSmallHeading && <p className='subSmallHeading'> {subSmallHeading} </p>
            }
            {
                heading && <h2>{heading}</h2>
            }
            <Image src="/headingUnderlineImage.png" alt="My Image" width={70} height={6} />
        </div>
    )
}
