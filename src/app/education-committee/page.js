"use client"
import { useState } from "react";
import MemberCard from "../components/memberCard";
import Image from 'next/image';
import Header from "../components/header";

export default function EducationCommittee() {
    const [memberPopup, setMemberPopup] = useState(false)
    const memberPopClose = () => {
        setMemberPopup(false)
    }

    const eduMembers = [
        {
            id: 1,
            title: 'Dr. SARBJIT SINGH CHHINA',
            designation: 'HONY. SECY. EDUCATION COMMITTEE',
            email: 'sarbjitchhina@yahoo.co.in',
            memberImage: '/sbc.jpg',
            city: 'Amritsar'
        },
        {
            id: 2,
            title: 'S. Adarsh pinder singh maan',
            designation: 'HONY. SECY. EDUCATION COMMITTEE',
            email: 'sarbjitchhina@yahoo.co.in',
            memberImage: '/sbc.jpg',
            city: 'Amritsar'
        },
        {
            id: 3,
            title: 's. ajaib singh abhyasi',
            designation: 'HONY. SECY. EDUCATION COMMITTEE',
            email: 'sarbjitchhina@yahoo.co.in',
            memberImage: '/sbc.jpg',
            city: 'Amritsar'
        },
        {
            id: 4,
            title: 'mrs. ajit kaur ankhi',
            designation: 'HONY. SECY. EDUCATION COMMITTEE',
            email: 'sarbjitchhina@yahoo.co.in',
            memberImage: '/sbc.jpg',
            city: 'Amritsar'
        },
        {
            id: 5,
            title: 's. ajit pal singh aneja',
            designation: 'HONY. SECY. EDUCATION COMMITTEE',
            email: 'sarbjitchhina@yahoo.co.in',
            memberImage: '/sbc.jpg',
            city: 'Amritsar'
        },
        {
            id: 6,
            title: 's. ajit singh basra',
            designation: 'HONY. SECY. EDUCATION COMMITTEE',
            email: 'sarbjitchhina@yahoo.co.in',
            memberImage: '/sbc.jpg',
            city: 'Amritsar'
        },
        {
            id: 7,
            title: 's. ajit singh khehra',
            designation: 'HONY. SECY. EDUCATION COMMITTEE',
            email: 'sarbjitchhina@yahoo.co.in',
            memberImage: '/sbc.jpg',
            city: 'Amritsar'
        },
        {
            id: 8,
            title: 'Dr. SARBJIT SINGH CHHINA',
            designation: 'HONY. SECY. EDUCATION COMMITTEE',
            email: 'sarbjitchhina@yahoo.co.in',
            memberImage: '/sbc.jpg',
            city: 'Amritsar'
        },
        {
            id: 9,
            title: 's. ajit singh tuli',
            designation: 'HONY. SECY. EDUCATION COMMITTEE',
            email: 'sarbjitchhina@yahoo.co.in',
            memberImage: '/sbc.jpg',
            city: 'Amritsar'
        },
        {
            id: 10,
            title: 's. ajmer singh',
            designation: 'HONY. SECY. EDUCATION COMMITTEE',
            email: 'sarbjitchhina@yahoo.co.in',
            memberImage: '/sbc.jpg',
            city: 'Amritsar'
        },
        {
            id: 11,
            title: 'dr. amandeep singh',
            designation: 'HONY. SECY. EDUCATION COMMITTEE',
            email: 'sarbjitchhina@yahoo.co.in',
            memberImage: '/sbc.jpg',
            city: 'Amritsar'
        },
        {
            id: 12,
            title: 's. amandeep singh',
            designation: 'HONY. SECY. EDUCATION COMMITTEE',
            email: 'sarbjitchhina@yahoo.co.in',
            memberImage: '/sbc.jpg',
            city: 'Amritsar'
        },
        {
            id: 13,
            title: 's. amardeep singh marwaha',
            designation: 'HONY. SECY. EDUCATION COMMITTEE',
            email: 'sarbjitchhina@yahoo.co.in',
            memberImage: '/sbc.jpg',
            city: 'Amritsar'
        },
        {
            id: 14,
            title: 'mrs. amarjit kaur sohi',
            designation: 'HONY. SECY. EDUCATION COMMITTEE',
            email: 'sarbjitchhina@yahoo.co.in',
            memberImage: '/sbc.jpg',
            city: 'Amritsar'
        },
        {
            id: 15,
            title: 's. amarjit singh',
            designation: 'HONY. SECY. EDUCATION COMMITTEE',
            email: 'sarbjitchhina@yahoo.co.in',
            memberImage: '/sbc.jpg',
            city: 'Amritsar'
        },
        {
            id: 16,
            title: 'dr. amarjit singh nagpal',
            designation: 'HONY. SECY. EDUCATION COMMITTEE',
            email: 'sarbjitchhina@yahoo.co.in',
            memberImage: '/sbc.jpg',
            city: 'Amritsar'
        },
        {
            id: 17,
            title: 'dr. amarjit singh sachdeva',
            designation: 'HONY. SECY. EDUCATION COMMITTEE',
            email: 'sarbjitchhina@yahoo.co.in',
            memberImage: '/sbc.jpg',
            city: 'Amritsar'
        }
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(eduMembers.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentItems = eduMembers.slice(startIndex, endIndex);

        return currentItems.map((item, index) => (
            <div className="col-md-4  mb-4" key={item.id}>
                <MemberCard title={item.title} designation={item.designation} email={item.email} city={item.city} memberImage={item.memberImage} setMemberPopup={setMemberPopup} />
            </div>
        ));
    };
    const renderPagination = () => {
        const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

        return pages.map((page) => (
            <button
                key={page}
                onClick={() => handleClick(page)}
                disabled={currentPage === page}
            >
                {page}
            </button>
        ));
    };

    return (
        <>
            <Header pageTitle="Education Committee" />
            <main className="mt-4 pt-4 lineBg">
                <div className="container pt-4">
                    <div className="row mb-4 pb-4">
                        {renderItems()}
                    </div>
                    <div className="customPagination">
                        {renderPagination()}
                    </div>
                </div>
                {
                    memberPopup ? (

                        <div className="memberPopup">
                            <div className="memberPopupInner">
                                <div className="memberPopupWrap">
                                    <div className="memberPopupHeader">
                                        <h3>Dr. SARBJIT SINGH CHHINA</h3>
                                        <span className='memberPopupClose' onClick={memberPopClose}><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.707107" y1="1.29289" x2="14.2205" y2="14.8063" stroke="black" strokeWidth="2" /><line x1="14.0342" y1="0.696796" x2="0.717856" y2="14.4044" stroke="black" strokeWidth="2" /></svg></span></div>
                                    <div className='memberItem'>
                                        <div className='row'>
                                            <div className='col-md-4 memberItemRight'>
                                                <Image src="/sbc.jpg" alt='popup image' fill={true} loading='lazy' />
                                            </div>
                                            <div className='col-md-8 memberItemLeft'>
                                                <span className='memberInfo'>Desigantion: <span>Hony. Secy. Education Committee</span></span>
                                                <span className='memberInfo'>Father Name: <span>Sarbjit Singh Chhina</span></span>
                                                <span className='memberInfo'>Mobile: <span>+91-000-000-0000</span></span>
                                                <span className='memberInfo'>Email: <span>sarbjitchhina@yahoo.co.in</span></span>
                                                <span className='memberInfo'>Address: <span>Amritsar</span></span>
                                                <span className='memberInfo'>Member Since: <span>01 Jan 1920</span></span>
                                                <span className='memberInfo'>Status: <span>Active</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : ''
                }
            </main>
        </>

    )
}