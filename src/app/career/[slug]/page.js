'use client'
import CkdGlobalButton from "@/app/components/GlobalButton";
import Header from "@/app/components/header";
import Image from "next/image";

export default function SingleJob({ params }) {
    const { slug } = params

    return (
        <>
            <Header pageTitle={"PRT - Physical Education"} pageSubTitle="CKD Career" />
            <section className="mb-4 pb-4 lineBg">
                <div className="container">
                    <div className="row mBtm50">
                        <div className="col-md-12">
                            <h1 className="sjHeading">Details</h1>
                            <div className="jobReq">
                                <div className="jobReqBlock">
                                    <div className="jobReqIcon">
                                        <Image src='/locationIcon.svg' alt="Location Icon" width={27} height={27} />
                                    </div>
                                    <div className="jobReqCont">
                                        <h3>Hiring Location</h3>
                                        <span>Nawan Pind</span>
                                    </div>
                                </div>
                                <div className="jobReqBlock">
                                    <div className="jobReqIcon">
                                        <Image src='/certificate.svg' alt="Location Icon" width={27} height={27} />
                                    </div>
                                    <div className="jobReqCont">
                                        <h3>Qualification</h3>
                                        <span>M.Sc (Physics), B.Ed</span>
                                    </div>
                                </div>
                                <div className="jobReqBlock">
                                    <div className="jobReqIcon">
                                        <Image src='/calendar.svg' alt="Location Icon" width={27} height={27} />
                                    </div>
                                    <div className="jobReqCont">
                                        <h3>Closing Date</h3>
                                        <span>Mar 28, 2023</span>
                                    </div>
                                </div>
                                <div className="jobReqBlock">
                                    <div className="jobReqIcon">
                                        <Image src='/calendar.svg' alt="Location Icon" width={27} height={27} />
                                    </div>
                                    <div className="jobReqCont">
                                        <h3>Posting Date</h3>
                                        <span>Mar 15, 2023</span>
                                    </div>
                                </div>
                                <div className="jobReqBlock noBorder">
                                    <CkdGlobalButton buttonText='Apply Here' buttonLink='/' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mBtm50">
                        <div className="col-md-12">
                            <div className="sjContentDesc">
                                <h3>Overview</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <h3>Requirements</h3>
                                <ul>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                </ul>
                                <h3>Skill & Experience</h3>
                                <ul>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}