'use client'
import BlogListComponent from "../components/BlogListComponent";
import Header from "../components/header";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

export default function Blog() {
  const pubArray = [
    {
      id: 1,
      blogImage: '/gallery3.jpg',
      blogTitle: 'Post title will goes here',
      blogLink: '/blog/1',
      category: 'upcoming-events'
    },
    {
      id: 2,
      blogImage: '/gallery2.jpg',
      blogTitle: 'Test CKD Post',
      blogLink: '/blog/1',
      category: 'blog'
    },
    {
      id: 3,
      blogImage: '/gallery1.jpg',
      blogTitle: 'CKD Test post',
      blogLink: '/blog/4',
      category: 'blog'
    },
    {
      id: 4,
      blogImage: '/gallery2.jpg',
      blogTitle: 'Post title will goes here',
      blogLink: '/blog/1',
      category: 'blog'
    },
    {
      id: 5,
      blogImage: '/gallery1.jpg',
      blogTitle: 'Post title will goes here',
      blogLink: '/blog/2',
      category: 'upcoming-events'
    },
    {
      id: 6,
      blogImage: '/gallery3.jpg',
      blogTitle: 'Post title will goes here',
      blogLink: '/blog/1',
      category: 'upcoming-events'
    },
    {
      id: 7,
      blogImage: '/gallery1.jpg',
      blogTitle: 'Post title will goes here',
      blogLink: '/blog/1',
      category: 'blog'
    },
    {
      id: 8,
      blogImage: '/gallery2.jpg',
      blogTitle: 'Post title will goes here',
      blogLink: '/blog/3',
      category: 'blog'
    },
    {
      id: 9,
      blogImage: '/gallery1.jpg',
      blogTitle: 'Post title will goes here',
      blogLink: '/blog/4',
      category: 'upcoming-events'
    },
    {
      id: 10,
      blogImage: '/gallery1.jpg',
      blogTitle: 'Post title will goes here',
      blogLink: '/blog/3',
      category: 'blog'
    },
    {
      id: 11,
      blogImage: '/gallery2.jpg',
      blogTitle: 'Post title will goes here',
      blogLink: '/blog/4',
      category: 'blog'
    },
    {
      id: 12,
      blogImage: '/gallery2.jpg',
      blogTitle: 'Post title will goes here',
      blogLink: '/blog/1',
      category: 'blog'
    },
    {
      id: 13,
      blogImage: '/gallery1.jpg',
      blogTitle: 'Post title will goes here',
      blogLink: '/blog/3',
      category: 'blog'
    },
    {
      id: 14,
      blogImage: '/gallery1.jpg',
      blogTitle: 'Post title will goes here',
      blogLink: '/blog/1',
      category: 'upcoming-events'
    },
    {
      id: 15,
      blogImage: '/gallery2.jpg',
      blogTitle: 'Post title will goes here',
      blogLink: '/blog/2',
      category: 'blog'
    },
    {
      id: 16,
      blogImage: '/gallery1.jpg',
      blogTitle: 'Post title will goes here',
      blogLink: '/blog/1',
      category: 'blog'
    },
    {
      id: 17,
      blogImage: '/gallery3.jpg',
      blogTitle: 'Post title will goes here',
      blogLink: '/blog/4',
      category: 'blog'
    },
    {
      id: 18,
      blogImage: '/gallery1.jpg',
      blogTitle: 'Post title will goes here',
      blogLink: '/blog/1',
      category: 'upcoming-events'
    },
    {
      id: 19,
      blogImage: '/gallery3.jpg',
      blogTitle: 'Post title will goes here',
      blogLink: '/blog/1',
      category: 'event'
    },
    {
      id: 20,
      blogImage: '/gallery2.jpg',
      blogTitle: 'Post title will goes here',
      blogLink: '/blog/1',
      category: 'blog'
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
      return pubData.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase() && item.blogTitle.toLowerCase().includes(searchVal.toLowerCase()))
    }
    else if (selectedCategory) {
      return pubData.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase())
    }
    else if (searchVal) {
      return pubData.filter((item) => item.blogTitle.toLowerCase().includes(searchVal.toLowerCase()))
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
        <BlogListComponent blogImage={item.blogImage} blogTitle={item.blogTitle} blogLink={item.blogLink} />
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
      <Header pageTitle={"CKD Blog"} />
      <section className="full_width_section mt-4 pt-4 lineBg">
        <div className='container'>
          <div className="row mb-4 justify-content-center">
            <div className="col-md-8">
              <div className="publicationFilter">
                <div className="pubSearch">
                  <input type="text" placeholder="Search..." value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
                  <Image src='/searchIcon.svg' alt="Search Icon" width={15} height={15} />
                </div>
                <div className="careerSelect">
                  <select onChange={categoryFilter} value={selectedCategory}>
                    <option>Select Category</option>
                    <option value="blog">Blog</option>
                    <option value="upcoming-events">Category 1</option>
                  </select>
                </div>
                <div className="resetFilter">
                  <button className="resetBtn" onClick={resetFilter}>Reset</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row blogListing">
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