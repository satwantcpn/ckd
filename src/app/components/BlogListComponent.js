"use client"
import Image from 'next/image';
import Link from 'next/link';
import { LuView } from 'react-icons/lu';
export default function BlogListComponent({ blogTitle, blogImage, blogLink }) {

    return (
        <div className="galleryCard">
            <span className='galleryCardLink'><Link href={`${blogLink}`}><LuView /></Link></span>
            <div className="galleryCardInner">
                <div className="galleryImg">
                    <Image src={blogImage} alt="Blog Images" width={338} height={300} />
                </div>
                <div className="galleryDetail">
                    <h2>{blogTitle}</h2>
                    <p>Augue instructior vix in, vidit nusquam ei his. Ad pri falli luptatum. Has at feugait ancillae democritum...</p>
                    <span className='blogDate'>June 20, 2023</span>
                </div>
            </div>
        </div>
    )
}