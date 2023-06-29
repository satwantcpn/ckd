import Image from 'next/image';
import { LuView } from 'react-icons/lu';

export default function MemberCard({ title, designation, email, city, memberImage, setMemberPopup }) {

    const memberPopHandler = () => {
        setMemberPopup(true)
    }

    return (
        <div className='memberItem'>
            <span className="cusDes">Chief Khalsa Diwan</span>
            <span className='memberPopupTrigger' onClick={memberPopHandler}><LuView /></span>
            <div className='row'>
                <div className='col-md-8 memberItemLeft'>
                    <h2>{title}</h2>
                    <h3>{designation}</h3>
                    <span className='membeEmail'><a href={`mailto:${email}`}><svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5753 2.68573L9.08728 5.7455L3.59929 2.68573V4.5216H2.22729V1.46182C2.22729 0.788674 2.84469 0.237915 3.59929 0.237915H14.5753C15.3299 0.237915 15.9404 0.788674 15.9404 1.46182L15.9473 8.80528C15.9473 9.47843 15.3299 10.0292 14.5753 10.0292H7.71528V8.80528H14.5753V2.68573ZM3.59929 1.46182L9.08728 4.5216L14.5753 1.46182H3.59929Z" fill="#FF5722" /><path d="M2.22751 7.58122V10.029C2.22751 10.7022 2.84491 11.2529 3.59951 11.2529C4.35411 11.2529 4.97151 10.7022 4.97151 10.029V7.27525C4.97151 7.1039 4.82059 6.96927 4.62851 6.96927C4.43643 6.96927 4.28551 7.1039 4.28551 7.27525V10.029H2.91351V7.27525C2.91351 6.43075 3.68183 5.74536 4.62851 5.74536C5.57519 5.74536 6.34351 6.43075 6.34351 7.27525V10.029C6.34351 11.3815 5.11557 12.4769 3.59951 12.4769C2.08345 12.4769 0.855515 11.3815 0.855515 10.029V7.58122H2.22751Z" fill="#FF5722" /></svg> {email}</a></span>
                    <span className='memberLocation'>{city}</span>
                </div>

                <div className='col-md-4 memberItemRight'>
                    <Image src={memberImage} alt={title} fill={true} loading='lazy' />
                </div>
            </div>
        </div>
    )
}
