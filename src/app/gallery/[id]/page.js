import Header from "@/app/components/header";
import Image from "next/image";

export default function SingleGallery() {
    return (
        <>
            <Header pageTitle={"Gallery"} />
            <section className="full_width_section mt-4 pt-4 lineBg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <div className="singleGalleryImg">
                                <Image src="/gk1.png" alt="Gallery Image" width={338} height={300} />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="singleGalleryImg">
                                <Image src="/gk2.png" alt="Gallery Image" width={338} height={300} />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="singleGalleryImg">
                                <Image src="/gk3.png" alt="Gallery Image" width={338} height={300} />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="singleGalleryImg">
                                <Image src="/gk4.png" alt="Gallery Image" width={338} height={300} />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="singleGalleryImg">
                                <Image src="/gk5.png" alt="Gallery Image" width={338} height={300} />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="singleGalleryImg">
                                <Image src="/gk6.png" alt="Gallery Image" width={338} height={300} />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="singleGalleryImg">
                                <Image src="/gk7.png" alt="Gallery Image" width={338} height={300} />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="singleGalleryImg">
                                <Image src="/gk8.png" alt="Gallery Image" width={338} height={300} />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="singleGalleryImg">
                                <Image src="/gk9.png" alt="Gallery Image" width={338} height={300} />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="singleGalleryImg">
                                <Image src="/gk10.png" alt="Gallery Image" width={338} height={300} />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="singleGalleryImg">
                                <Image src="/gk11.png" alt="Gallery Image" width={338} height={300} />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="singleGalleryImg">
                                <Image src="/gk12.png" alt="Gallery Image" width={338} height={300} />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="singleGalleryImg">
                                <Image src="/gk13.png" alt="Gallery Image" width={338} height={300} />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="singleGalleryImg">
                                <Image src="/gk14.png" alt="Gallery Image" width={338} height={300} />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="singleGalleryImg">
                                <Image src="/gk15.png" alt="Gallery Image" width={338} height={300} />
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="singleGalleryImg">
                                <Image src="/gk16.png" alt="Gallery Image" width={338} height={300} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>

    )
}