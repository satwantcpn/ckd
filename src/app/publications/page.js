'use client'
import Image from "next/image";
import Header from "../components/header";
import PublicationComponent from "../components/publicationComponent";

import { useState, useEffect, useMemo } from "react";

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
    const [pubData, setPubData] = useState([])
    const [searchVal, setSearchVal] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        setPubData(pubArray)
    }, [])

    function getFilteredList() {
        if (selectedCategory && searchVal) {
            return pubData.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase() && item.title.toLowerCase().includes(searchVal.toLowerCase()))
        }
        else if (selectedCategory) {
            return pubData.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase())
        }
        else if (searchVal) {
            return pubData.filter((item) => item.title.toLowerCase().includes(searchVal.toLowerCase()))
        }
        else {
            return pubData;
        }
    }

    let filteredPubList = useMemo(getFilteredList, [selectedCategory, pubData, searchVal]);

    const itemsPerPage = 9;
    const totalPages = Math.ceil(filteredPubList.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const categoryFilter = (event) => {
        setSelectedCategory(event.target.value);
    }


    const renderItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentItems = filteredPubList.slice(startIndex, endIndex);

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
    const resetFilter = (e) => {
        e.preventDefault()
        setSelectedCategory('')
        setSearchVal('')
    }

    return (
        <>
            <Header pageTitle={"Publications"} />
            <section className="full_width_section mt-4 pt-4 lineBg">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-md-12">
                            <div className="publicationFilter">
                                <div className="pubSearch">
                                    <input type="text" placeholder="Search..." value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
                                    <Image src='/searchIcon.svg' alt="Search Icon" width={15} height={15} />
                                </div>
                                <div className="pubFilter">
                                    <ul>
                                        <li>
                                            <label className="customCheckbox">Khalsa Advocate
                                                <input type="radio" name="publication_category" value="khalsa advocate" onChange={categoryFilter} checked={selectedCategory === 'khalsa advocate'} />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="customCheckbox">Nirguniara
                                                <input type="radio" name="publication_category" value="nirguniara" onChange={categoryFilter} checked={selectedCategory === 'nirguniara'} />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="resetFilter">
                                    <button className="resetBtn" onClick={resetFilter}>Reset</button>
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