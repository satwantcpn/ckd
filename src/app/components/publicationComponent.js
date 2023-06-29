'use client'
import Image from 'next/image'
import { BiDownload } from 'react-icons/bi';


export default function PublicationComponent({ title, pdfThumb, pdfLink, category }) {

    return (
        <>
            <div className="publicationItem">
                <div className="publicationItemInner">
                    <span className='pubTrigger'><a href={pdfLink} download ><BiDownload /></a></span>
                    <div className="pubImg">
                        <Image
                            src={pdfThumb}
                            alt={title}
                            width={412}
                            height={239}
                        />
                    </div>
                    <div className='pubCont'>
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}