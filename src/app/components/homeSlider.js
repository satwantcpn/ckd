"use client"

import { useState } from "react"

export default function HomeSlider({ slides }) {
    const [activeSlideImg, setActiveSlideImg] = useState('/slide1.png')
    const [activeSlideText, setActiveSlideText] = useState('Stalwarts of Guru Khalsa Panth held opening session of')
    const [activeSlideText1, setActiveSlideText1] = useState('"CHIEF KHALSA DIWAN"')
    const [activeSlideText2, setActiveSlideText2] = useState('With their vision a commitment was made.')
    const [activeSlideText3, setActiveSlideText3] = useState('LET SEE WHERE IT IS TODAY....')
    const [activeSlideHeading, setActiveSlideHeading] = useState('30th Oct 1902 Malwai Bunga Sri Darbar Sahib')
    const [activeslogan, setActiveSlogan] = useState(slides[0].slogan)

    const homeSliderHandler = (slideImg, slideHeading, slideText, slideText2) => {
        setActiveSlideImg(slideImg)
        setActiveSlideHeading(slideHeading)
        slideText ? setActiveSlideText(slideText) : setActiveSlideText('')
        setActiveSlideText1('')
        slideText2 ? setActiveSlideText2(slideText2) : setActiveSlideText2('')
        setActiveSlideText3('')
    }

    return (
        <section className="homeSlider">
            <div className="hmSliderImg">
                <img src={activeSlideImg} />
            </div>
            <div className="sliderContent">
                <div className="sliderContentInner">
                    <div className="row align-items-end">
                        <div className="col-md-7">
                            <div className="sliderContentWrap">
                                <span className="slidrHeading">{activeSlideHeading}</span>
                                {activeSlideText && <span className="slidrText">{activeSlideText} <span className="kesriColor">{activeSlideText1}</span></span>}
                                {activeSlideText2 && <span className="slidrText">{activeSlideText2} <span className="kesriColor">{activeSlideText3}</span></span>}
                                <span className="slogan">{activeslogan}</span>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="sliderThumbs">
                                {
                                    slides && slides.map((item, index) => (
                                        <div className="sliderThumbOutr" key={index}>
                                            {item.thumbHeading && <span>{item.thumbHeading}</span>}
                                            <img src={item.thumbUrl} onClick={() => homeSliderHandler(item.url, item.heading, item.description, item.descriptionLine2)} />
                                        </div>
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