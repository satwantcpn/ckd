"use client"

import { useState } from "react"

export default function HomeSlider({ slides }) {
    const [activeSlideImg, setActiveSlideImg] = useState(slides[0].url)
    const [activeSlideText, setActiveSlideText] = useState(slides[0].description)
    const [activeSlideText2, setActiveSlideText2] = useState(slides[0].descriptionLine2)
    const [activeSlideHeading, setActiveSlideHeading] = useState(slides[0].heading)
    const [activeslogan, setActiveSlogan] = useState(slides[0].slogan)

    const homeSliderHandler = (slideImg, slideHeading, slideText, slideText2) => {
        setActiveSlideImg(slideImg)
        setActiveSlideHeading(slideHeading)
        setActiveSlideText(slideText)
        setActiveSlideText2(slideText2)
    }

    return (
        <section className="homeSlider">
            <div className="hmSliderImg">
                <img src={activeSlideImg} />
            </div>
            <div className="sliderContent">
                <div className="sliderContentInner">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <span className="slidrHeading">{activeSlideHeading}</span>
                            <span className="slidrText">{activeSlideText}</span>
                            <span className="slidrText">{activeSlideText2}</span>
                            <span className="slogan">{activeslogan}</span>
                        </div>
                        <div className="col-md-5">
                            <div className="sliderThumbs">
                                {
                                    slides && slides.map((item, index) => (
                                        <div className="sliderThumbOutr" key={index}><img src={item.thumbUrl} onClick={() => homeSliderHandler(item.url, item.heading, item.description, item.descriptionLine2)} /></div>
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