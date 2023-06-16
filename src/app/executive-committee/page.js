"use client"
import { useState } from "react";
import Heading from "../components/headingC";
import MemberCard from "../components/memberCard";
import Image from 'next/image';
import Header from "../components/header";

export default function ExecutiveCommittee() {
    const [memberPopup, setMemberPopup] = useState(false)
    const memberPopClose = () => {
        setMemberPopup(false)
    }
    return (
        <>
            <Header pageTitle="Executive Committee" />
            <main>
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-md-4">
                            <MemberCard title="Dr. SARBJIT SINGH CHHINA" designation="HONY. SECY. EDUCATION COMMITTEE" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/sbc.jpg" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4">
                            <MemberCard title="Dr. SARBJIT SINGH CHHINA" designation="HONY. SECY. EDUCATION COMMITTEE" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/sbc.jpg" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4">
                            <MemberCard title="Dr. SARBJIT SINGH CHHINA" designation="HONY. SECY. EDUCATION COMMITTEE" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/sbc.jpg" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4">
                            <MemberCard title="Dr. SARBJIT SINGH CHHINA" designation="HONY. SECY. EDUCATION COMMITTEE" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/sbc.jpg" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4">
                            <MemberCard title="Dr. SARBJIT SINGH CHHINA" designation="HONY. SECY. EDUCATION COMMITTEE" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/sbc.jpg" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4">
                            <MemberCard title="Dr. SARBJIT SINGH CHHINA" designation="HONY. SECY. EDUCATION COMMITTEE" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/sbc.jpg" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4">
                            <MemberCard title="Dr. SARBJIT SINGH CHHINA" designation="HONY. SECY. EDUCATION COMMITTEE" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/sbc.jpg" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4">
                            <MemberCard title="Dr. SARBJIT SINGH CHHINA" designation="HONY. SECY. EDUCATION COMMITTEE" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/sbc.jpg" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4">
                            <MemberCard title="Dr. SARBJIT SINGH CHHINA" designation="HONY. SECY. EDUCATION COMMITTEE" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/sbc.jpg" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4">
                            <MemberCard title="Dr. SARBJIT SINGH CHHINA" designation="HONY. SECY. EDUCATION COMMITTEE" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/sbc.jpg" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4">
                            <MemberCard title="Dr. SARBJIT SINGH CHHINA" designation="HONY. SECY. EDUCATION COMMITTEE" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/sbc.jpg" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4">
                            <MemberCard title="Dr. SARBJIT SINGH CHHINA" designation="HONY. SECY. EDUCATION COMMITTEE" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/sbc.jpg" setMemberPopup={setMemberPopup} />
                        </div>
                    </div>
                </div>
                {
                    memberPopup ? (

                        <div className="memberPopup">
                            <div className="memberPopupInner">
                                <div className="memberPopupWrap">
                                    <div className="memberPopupHeader">
                                        <h3>Dr. SARBJIT SINGH CHHINA</h3>
                                        <span className='memberPopupClose' onClick={memberPopClose}><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.707107" y1="1.29289" x2="14.2205" y2="14.8063" stroke="black" stroke-width="2" /><line x1="14.0342" y1="0.696796" x2="0.717856" y2="14.4044" stroke="black" strokeWidth="2" /></svg></span></div>
                                    <div className='memberItem'>
                                        <div className='row'>
                                            <div className='col-md-4 memberItemRight'>
                                                <Image src="/sbc.jpg" alt='popup image' fill={true} loading='lazy' />
                                            </div>
                                            <div className='col-md-8 memberItemLeft'>
                                                <span className='memberInfo'>Desigantion: <span>Hony. Secy. Education Committee</span></span>
                                                <span className='memberInfo'>Father Name: <span>Sarbjit Singh Chhina</span></span>
                                                <span className='memberInfo'>Mobile: <span>+91-000-000-0000</span></span>
                                                <span className='memberInfo'>Email: <span>sarbjitchhina@yahoo.co.in</span></span>
                                                <span className='memberInfo'>Address: <span>Amritsar</span></span>
                                                <span className='memberInfo'>Member Since: <span>01 Jan 1920</span></span>
                                                <span className='memberInfo'>Status: <span>Active</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : ''
                }
            </main>
        </>

    )
}