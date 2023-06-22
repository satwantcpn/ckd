'use client'
import FounderListComp from "../components/FounderComponent";
import Header from "../components/header";
import { useState } from "react";
import Image from 'next/image';

export default function Founder() {
  const founders = [
    {
      id: 1,
      title: 'Bhai Veer Singh Ji',
      image: '/01-bhai-veer-singh.png',
      duration: '(1872 - 1957)',
    },
    {
      id: 2,
      title: 'Bhai Arjan Singh Ji Bagrhian',
      image: '/02-bhai-arjan-singh-bagrhia.png',
      duration: '(1875 - 1946)',
    },
    {
      id: 3,
      title: 'S. Sunder Singh Ji Majithia',
      image: '/03-tarlochan-singh.png',
      duration: '(1872 - 1941)',
    },
    {
      id: 4,
      title: 'S. Tarlochan Singh Ji',
      image: '/04-harbans-singh-attari.png',
      duration: '(1872 - 1947)',
    },
    {
      id: 5,
      title: 'S. Harbans Singh Ji Attari',
      image: '/05-sunder-singh-majithia.png',
      duration: '(1878 - 1936)',
    },
  ]
  const [memberPopup, setMemberPopup] = useState(false)
  const memberPopClose = () => {
    setMemberPopup(false)
  }
  return (
    <>
      <Header pageTitle={'Founders'} />
      <main>
        <section className="full_width_section mt-4 pt-4 lineBg">
          <div className="container">
            <div className="founderOutr">
              <div className="row justify-content-md-center">
                {
                  founders && founders.map((item, index) => (
                    <div className="col-md-4 mb-4" key={item.id}>
                      <FounderListComp title={item.title} image={item.image} duration={item.duration} setMemberPopup={setMemberPopup} />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </section>
        {
          memberPopup ? (

            <div className="memberPopup founderPopup">
              <div className="memberPopupInner">
                <div className="memberPopupWrap">
                  <div className="memberPopupHeader">
                    <h3>Bhai Veer Singh Ji</h3>
                    <span className='memberPopupClose' onClick={memberPopClose}><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.707107" y1="1.29289" x2="14.2205" y2="14.8063" stroke="black" stroke-width="2" /><line x1="14.0342" y1="0.696796" x2="0.717856" y2="14.4044" stroke="black" strokeWidth="2" /></svg></span></div>
                  <div className='memberItem'>
                    <div className='row'>
                      <div className='col-md-3 memberItemRight'>
                        <Image src="/01-bhai-veer-singh.png" alt='popup image' fill={true} loading='lazy' />
                      </div>
                      <div className='col-md-9 memberItemLeft'>
                        <div className="founderPopupCont">
                          <h2>Bhai Veer Singh Ji</h2>
                          <h3>(1872-1957)</h3>
                          <p>He was born on Dec. 05, 1872, in Amritsar to father S. Charan Singh S/o Baba Kahan Singh and Mother Uttam Kaur. His maternal grandfather Giani Hazari Singh was a highly learned person having wide knowledge of Persian, Hindi, Brij and Sanskrit languages. His father Dr. Charan Singh was also a prodigyin hindi, Sanskrit, Brij, English and Persian languages. His highly literate family had a constructive impact on his impressionable mind. He was married to Bibi Chattar Kaur in 1886 and did his matriculation from Church Mission School in 1891. He was a multi facted personality, architect of modern Punjabi literature, saint poet, highly contemplative, humanitarian, excellent administrator, futuristic, substantial supporter of Punjabi culture, Sikh history and Sikhism. He amended the fundamental compositions of ancient and medieval Punjabi literature and made the community service as laid down in Sikh philosophy as the main subject of his literacy compositions. As a member of Singh Sabha and CKD, he not only provided positive leadership but also guided these establishments with a historical perspective. Bhai Veer Singh Ji was a pious gem of CKD and the entire Sikh community. He was a strong pillar of Educational Committee of CKD since its inception and participated in various Sikh Conferences and steered the Sikh community towards educational and cultural sectors. He was honoured for his remarkable contribution towards Sikh community, Sikh religion and Indian culture by Govt. of Punjab and Govt. of India. He was the proud recipient of various awards namely D.O.L. membership by North Punjabi University, Solan, Shimla in 1954, Sahit Academy Award in 1954 and above all Padma Bhushan in 1956 for his exceptional literacy work Abhinandan Granth.This towering personality and philanthropist reached his heavenly abode on June 10, 1957.</p>
                        </div>
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