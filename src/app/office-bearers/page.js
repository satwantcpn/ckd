"use client"
import { useState } from "react";
import Heading from "../components/headingC";
import MemberCard from "../components/memberCard";
import Image from 'next/image';
import Header from "../components/header";

export default function OfficeBearers() {
    const [memberPopup, setMemberPopup] = useState(false)
    const memberPopClose = () => {
        setMemberPopup(false)
    }
    return (
        <>
            <Header pageTitle="Office Bearers" hideHeaderBanner='true' />
            <section className="full_width_section">
                <div className="ventureBanner">
                    <img src="/schoolBanner.jpg" />
                    <div className="ventureBannerContent ob_heading">
                        <h1>Office Bearers</h1>
                    </div>
                </div>
            </section>
            <main className="mt-4 pt-4">
                <div className="container pt-4 mt-4">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <MemberCard title="s. rajmohinder singh majitha (former m.p.)" designation="PATRON" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/RAJMOHINDER.png" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4 mb-3">
                            <MemberCard title="dr. inderbir singh nijjar" designation="PRESIDENT" email="inderbirnijjar@yahoo.co.in" city="AMRITSAR" memberImage="/INDERBIR.png" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4 mb-3">
                            <MemberCard title="s. amarjit singh banga" designation="VICE PRESIDENT" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/AMARJIT.png" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4 mb-3">
                            <MemberCard title="s. jagjit singh" designation="VICE PRESIDENT" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/JAGJIT.png" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4 mb-3">
                            <MemberCard title="s. swinder singh kathunangal (ex m.l.a.)" designation="HONORARY SECRETARY CKDCS" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/SWINDER.png" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4 mb-3">
                            <MemberCard title="s. ajit singh basra" designation="HONORARY SECRETARY CKDCS" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/AJIT_SINGH_BASRA.png" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4 mb-3">
                            <MemberCard title="s. sukhdev singh mattewal" designation="ADDITIONAL HONORARY SECRETARY" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/SUKHDEV.png" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4 mb-3">
                            <MemberCard title="s. waryam singh" designation="ADDITIONAL HONORARY SECRETARY" email="sarbjitchhina@yahoo.co.in" city="AMRITSAR" memberImage="/S._WARYAM_SINGH.png" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4 mb-3">
                            <MemberCard title="s. harjit singh" designation="ADDITIONAL HONORARY SECRETARY" email="sarbjitchhina@yahoo.co.in" city="TARN TARAN" memberImage="/HARJIT_SINGH.png" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4 mb-3">
                            <MemberCard title="s. harbhajan singh banga" designation="ADDITIONAL HONORARY SECRETARY" email="sarbjitchhina@yahoo.co.in" city="LUDHIANA" memberImage="/HARBHAJAN.png" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4 mb-3">
                            <MemberCard title="s. jaspal singh dhillon" designation="ADDITIONAL HONORARY SECRETARY" email="jaspaldhillon97@gmail.com" city="AMRITSAR" memberImage="/S_JASPAL_SINGH_DHILLON.png" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4 mb-3">
                            <MemberCard title="s. inderpreet singh anand" designation="ADDITIONAL HONORARY SECRETARY" email="inderpreetanand77@gmail.com" city="AMRITSAR" memberImage="/INDERPREET.png" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4 mb-3">
                            <MemberCard title="er. jaspal singh" designation="HONORARY JOINT SECRETARY" email="jaspalsingh003@gmail.com" city="AMRITSAR" memberImage="/JASPAL_SINGH.png" setMemberPopup={setMemberPopup} />
                        </div>
                        <div className="col-md-4 mb-3">
                            <MemberCard title="s. sukhjinder singh" designation="HONORARY JOINT SECRETARY" email="jaspalsingh003@gmail.com" city="AMRITSAR" memberImage="/S_SUKHJINDER_SINGH.png" setMemberPopup={setMemberPopup} />
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