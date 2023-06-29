'use client'
import { useState } from "react";
import CareerListing from "../components/CareerListing";
import Header from "../components/header";
import Image from "next/image";

export default function PublicationPage() {

    const careerList = [
        {
            id: 1,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Amritsar',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 2,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Tarn Taran',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 3,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Amritsar',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 4,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Tarn Taran',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 5,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Amritsar',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 6,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Tarn Taran',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 7,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Amritsar',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 8,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Amritsar',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 9,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Tarn Taran',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 10,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Amritsar',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 11,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Amritsar',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 12,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Tarn Taran',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 13,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Amritsar',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 14,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Tarn Taran',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 15,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Amritsar',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 16,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Amritsar',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 17,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Tarn Taran',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 18,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Amritsar',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 19,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Amritsar',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 20,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Tarn Taran',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 21,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Amritsar',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        },
        {
            id: 22,
            jobTitle: 'PGT - Business Studies',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            ventureCity: 'Tarn Taran',
            numberOfPost: '02',
            lastDate: 'July 30, 2023'
        }
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(careerList.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentItems = careerList.slice(startIndex, endIndex);

        return currentItems.map((item, index) => (
            <div className="col-md-6 mb-4" key={item.id}>
                <div className="careerItem">
                    <CareerListing jobTitle={item.jobTitle} ventureName={item.ventureName} ventureCity={item.ventureCity} numberOfPost={item.numberOfPost} lastDate={item.lastDate} />
                </div>
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
            <Header pageTitle={"Career"} />
            <section className="careerListing mt-4 pt-4 lineBg">
                <div className="container">
                    <div className="row mb-4 pb-4">
                        <div className="col-md-12">
                            <span className="totalJobs">Total Open Jobs: {careerList.length}</span>
                        </div>
                    </div>
                    <div className="row mb-4 pb-4 justify-content-center">
                        <div className="col-md-10">
                            <div className="careerFilter">
                                <div className="pubSearch">
                                    <input type="text" placeholder="Search..." />
                                    <Image src='/searchIcon.svg' alt="Search Icon" width={15} height={15} />
                                </div>
                                <div className="careerSelect">
                                    <select>
                                        <option>Search By Organization</option>
                                        <option value="649151a72c3bb0cad0b98ced">Central Khalsa Orphanage</option>
                                        <option value="6490337aea4a6737373161bc">Sri Guru Harkrishan Sr. Sec. Public School,Majitha Road Bypass Amritsar</option>
                                        <option value="6490337aea4a6737373161bc">Sri Guru Harkrishan Sr. Sec. Public School, Chief Khalsa Diwan Charitable Society, Amritsar</option>
                                    </select>
                                </div>
                                <div className="careerSelect">
                                    <select>
                                        <option>Search By City</option>
                                        <option value="649151a72c3bb0cad0b98ced">Amritsar</option>
                                        <option value="6490337aea4a6737373161bc">Tarn Taran</option>
                                        <option value="6490337aea4a6737373161bc">Mohali</option>
                                    </select>
                                </div>
                                <div className="careerSort">
                                    <span>Sort <Image src={'/sortIcon.svg'} alt='sort icon' width={23} height={23} /></span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row mb-4 pb-4">
                        {
                            renderItems()
                        }
                    </div>
                    <div className="customPagination">
                        {renderPagination()}
                    </div>
                </div>
            </section>
        </>
    )
}