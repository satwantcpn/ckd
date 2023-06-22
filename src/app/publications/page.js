'use client'
import Header from "../components/header";
import PublicationComponent from "../components/publicationComponent";

import { useState } from "react";

export default function PublicationPage() {
    let pubArray = [
        {
            id: 1,
            title: 'June 2023',
            pdfThumb: '/publication_img.jpg',
            pdfLink: '/khalsa-advocate-june-2023.pdf',
            category: 'Khalsa Advocate'
        },
        {
            id: 2,
            title: 'May 2023',
            pdfThumb: '/publication_img.jpg',
            pdfLink: '/khalsa-advocate-june-2023.pdf',
            category: 'Khalsa Advocate'
        },
        {
            id: 3,
            title: 'April 2023',
            pdfThumb: '/publication_img.jpg',
            pdfLink: '/khalsa-advocate-june-2023.pdf',
            category: 'Khalsa Advocate'
        },
        {
            id: 4,
            title: 'March 2023',
            pdfThumb: '/publication_img.jpg',
            pdfLink: '/khalsa-advocate-june-2023.pdf',
            category: 'Khalsa Advocate'
        },
        {
            id: 5,
            title: 'October - December 2015',
            pdfThumb: '/publication_img.jpg',
            pdfLink: '/khalsa-advocate-june-2023.pdf',
            category: 'Nirguniara'
        },
        {
            id: 6,
            title: 'July - September 2015',
            pdfThumb: '/publication_img.jpg',
            pdfLink: '/khalsa-advocate-june-2023.pdf',
            category: 'Nirguniara'
        },
        {
            id: 7,
            title: 'April - June 2015',
            pdfThumb: '/publication_img.jpg',
            pdfLink: '/khalsa-advocate-june-2023.pdf',
            category: 'Nirguniara'
        },
        {
            id: 8,
            title: 'January - March 2015',
            pdfThumb: '/publication_img.jpg',
            pdfLink: '/khalsa-advocate-june-2023.pdf',
            category: 'Nirguniara'
        },
        {
            id: 9,
            title: 'October - December 2014',
            pdfThumb: '/publication_img.jpg',
            pdfLink: '/khalsa-advocate-june-2023.pdf',
            category: 'Nirguniara'
        },
        {
            id: 10,
            title: 'February 2023',
            pdfThumb: '/publication_img.jpg',
            pdfLink: '/khalsa-advocate-june-2023.pdf',
            category: 'Khalsa Advocate'
        },
        {
            id: 11,
            title: 'January 2023',
            pdfThumb: '/publication_img.jpg',
            pdfLink: '/khalsa-advocate-june-2023.pdf',
            category: 'Khalsa Advocate'
        },
        {
            id: 12,
            title: 'December 2022',
            pdfThumb: '/publication_img.jpg',
            pdfLink: '/khalsa-advocate-june-2023.pdf',
            category: 'Khalsa Advocate'
        },
        {
            id: 13,
            title: 'November 2022',
            pdfThumb: '/publication_img.jpg',
            pdfLink: '/khalsa-advocate-june-2023.pdf',
            category: 'Khalsa Advocate'
        },
        {
            id: 14,
            title: 'October 2022',
            pdfThumb: '/publication_img.jpg',
            pdfLink: '/khalsa-advocate-june-2023.pdf',
            category: 'Khalsa Advocate'
        },
        {
            id: 15,
            title: 'September 2022',
            pdfThumb: '/publication_img.jpg',
            pdfLink: '/khalsa-advocate-june-2023.pdf',
            category: 'Khalsa Advocate'
        },
        {
            id: 16,
            title: 'August 2022',
            pdfThumb: '/publication_img.jpg',
            pdfLink: '/khalsa-advocate-june-2023.pdf',
            category: 'Khalsa Advocate'
        },
        {
            id: 17,
            title: 'July 2022',
            pdfThumb: '/publication_img.jpg',
            pdfLink: '/khalsa-advocate-june-2023.pdf',
            category: 'Khalsa Advocate'
        },
        {
            id: 18,
            title: 'June 2022',
            pdfThumb: '/publication_img.jpg',
            pdfLink: '/khalsa-advocate-june-2023.pdf',
            category: 'Khalsa Advocate'
        }
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const totalPages = Math.ceil(pubArray.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentItems = pubArray.slice(startIndex, endIndex);

        return currentItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={item.id}>
                <PublicationComponent title={item.title} pdfThumb={item.pdfThumb} pdfLink={item.pdfLink} category={item.category} />
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
            <Header pageTitle={"Publications"} />
            <section className="full_width_section mt-4 pt-4 lineBg">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-md-12">
                            <div className="publicationFilter">
                                <div className="pubSearch">
                                    <input type="text" placeholder="Search..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
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