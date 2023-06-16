'use client'
import FounderListComp from "../components/FounderComponent";
import Header from "../components/header";
import { useState } from "react";

export default function founder() {
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
                      <FounderListComp title={item.title} image={item.image} duration={item.duration} />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </section>
      </main>
    </>

  )
}