"use client"

import Image from "next/image"
import { useState } from "react"

export default function HomeSliderPunjabi({ slides }) {
    const [activeSlideImg, setActiveSlideImg] = useState('/slide1.png')
    const [activeSlideText, setActiveSlideText] = useState('ਗੁਰੂ ਖਾਲਸਾ ਪੰਥ ਦੇ ਦਿੱਗਜ ਸਿੰਘਾਂ ਨੇ ਆਪਣੀ ਦੂਰਅੰਦੇਸ਼ੀ ਨਾਲ ')
    const [activeSlideText1, setActiveSlideText1] = useState('"ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ"')
    const [activeSlideText2, setActiveSlideText2] = useState('ਦੇ ਉਦਘਾਟਨੀ ਸੈਸ਼ਨ ਦਾ ਆਯੋਜਨ ਕੀਤਾ।')
    const [activeSlideText3, setActiveSlideText3] = useState('ਆਓ ਦੇਖੀਏ ਕਿ ਇਹ ਅੱਜ ਕਿੱਥੇ ਹੈ....')
    const [activeSlideHeading, setActiveSlideHeading] = useState('30 ਅਕਤੂਬਰ 1902 ਮਲਵਈ ਬੁੰਗਾ ਸ੍ਰੀ ਦਰਬਾਰ ਸਾਹਿਬ')
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
                <Image src={activeSlideImg} width={1905} height={745} alt="Home bannners" />
            </div>
            <div className="sliderContent">
                <div className="sliderContentInner">
                    <div className="row align-items-end">
                        <div className="col-md-12 col-lg-7 col-xl-6">
                            <div className="sliderContentWrap">
                                <span className="slidrHeading">{activeSlideHeading}</span>
                                {activeSlideText && <span className="slidrText">{activeSlideText} <span className="kesriColor">{activeSlideText1}</span></span>}
                                {activeSlideText2 && <span className="slidrText">{activeSlideText2} <span className="kesriColor">{activeSlideText3}</span></span>}
                                <span className="slogan">{activeslogan}</span>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5 col-xl-6">
                            <div className="sliderThumbs">
                                {
                                    slides && slides.map((item, index) => (
                                        <div className="sliderThumbOutr" key={index}>
                                            {item.thumbHeading && <span>{item.thumbHeading}</span>}
                                            <Image src={item.thumbUrl} onClick={() => homeSliderHandler(item.url, item.heading, item.description, item.descriptionLine2)} width={234} height={175} alt="Home Slide Thumbail" />
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