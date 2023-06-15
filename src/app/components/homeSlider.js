"use client"

import { useState } from "react"

export default function HomeSlider({ slides }) {
    const [activeSlideImg, setActiveSlideImg] = useState(slides[0].url)
    const [activeSlideText, setActiveSlideText] = useState(slides[0].description)
    const [activeSlideHeading, setActiveSlideHeading] = useState(slides[0].heading)

    const homeSliderHandler = (slideImg, slideHeading, slideText) => {
        setActiveSlideImg(slideImg)
        setActiveSlideHeading(slideHeading)
        setActiveSlideText(slideText)
    }

    return (
        <section className="homeSlider">
            <div className="hmSliderImg">
                <img src={activeSlideImg} />
            </div>
            <div className="sliderContent">
                <div className="sliderContentInner">
                    <div className="row align-items-end">
                        <div className="col-md-6">
                            <h1><span>{activeSlideHeading}</span> {activeSlideText}</h1>
                        </div>
                        <div className="col-md-6">
                            <div className="sliderThumbs">
                                {
                                    slides && slides.map((item, index) => (
                                        <img src={item.thumbUrl} key={index} onClick={() => homeSliderHandler(item.url, item.heading, item.description)} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}