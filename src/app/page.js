import styles from '../../style/page.module.css'
import HeadingC from './components/headingC'
import HeadingL from './components/headingL'
import GlobalButton from './components/button'
import VenturesCard from './components/venturesCard'
import ServiceCard from './components/serviceCard'
import CounterNumberBox from './components/CounterNumberBox'
import HeadingDescription from './components/HeadingDescription'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import HomeSlider from './components/homeSlider'
import Header from './components/header'

export default function Home() {

  const orange = {
    backgroundColor: '#fe7e3a',
    color: '#fff',
  };

  const blue = {
    backgroundColor: '#280b7d',
    color: 'white',
  };

  const slider = [
    {
      url: '/slide1.png',
      thumbHeading: 'Biradh Ghar(s)',
      thumbUrl: '/biradhghar.png',
      heading: 'Chief Khalsa Diwan Biradh Ghar(s)',
      description: 'Extending a helping hand to our seniors when needed the most...',
      descriptionLine1: '',
      descriptionLine2: '',
      descriptionLine3: '',
      slogan: "SIKHI - SIKHYA - MANUKHATA"
    },
    {
      url: '/banner_gurdwara_sahibNew.png',
      thumbHeading: 'Gurdwara Sahib',
      thumbUrl: '/gurudwarasahib.png',
      heading: 'Gurdwara Sahib',
      description: 'At Head Office Chief Khalsa Diwan',
      descriptionLine1: '',
      descriptionLine2: '',
      descriptionLine3: '',
      slogan: "SIKHI - SIKHYA - MANUKHATA"
    },
    {
      url: '/collegeBanner.png',
      thumbUrl: '/college.png',
      thumbHeading: 'Colleges',
      heading: 'Chief Khalsa Diwan Colleges',
      description: 'Excels in professionalism and takes pride in Mentoring its students to',
      descriptionLine1: '',
      descriptionLine2: 'Achieve the dreams in the endeavors they choose to follow in their life ahead of them',
      descriptionLine3: '',
      slogan: "SIKHI - SIKHYA - MANUKHATA"
    },
    {
      url: '/schoolBanner.png',
      thumbUrl: '/school.png',
      thumbHeading: 'Schools',
      heading: 'Chief Khalsa Diwan Schools',
      description: 'Providing positive learning environment',
      descriptionLine1: '',
      descriptionLine2: 'Where every child is Loved and Respected',
      descriptionLine3: '',
      slogan: "SIKHI - SIKHYA - MANUKHATA"
    },
    {
      url: '/slide1.png',
      thumbUrl: '/hospital.png',
      thumbHeading: 'Hospitals',
      heading: 'Chief Khalsa Diwan Hospitals',
      description: 'Run charitable hospitals for those in need',
      descriptionLine1: '',
      descriptionLine2: '',
      descriptionLine3: '',
      slogan: "SIKHI - SIKHYA - MANUKHATA"
    },
    {
      url: '/slide2.jpg',
      thumbUrl: '/orphange.png',
      thumbHeading: 'Orphanage',
      heading: 'Chief Khalsa Diwan Orphanage',
      description: 'Providing homes for homeless where they are loved',
      descriptionLine1: '',
      descriptionLine2: 'Setting an example of Humanity.',
      descriptionLine3: '',
      slogan: "SIKHI - SIKHYA - MANUKHATA"
    }
  ]

  return (
    <>
      <Header />
      <main className={styles.main}>
        <HomeSlider slides={slider} />
        <section className='aboutSection'>
          <div className='container'>
            <div className='aboutUsOtrBox'>
              <HeadingC lrgHeading={"Cheif Khalsa Diwan"} heading={"Charitable Society"} />
              <div className='aboutUs'>
                <div className='row'>
                  <div className='col-md-7'>
                    <div className='aboutUsText'>
                      <HeadingDescription HeadingDescription={"The establishment of Chief Khalsa Diwan on 30 October 1902 bears testimony to the dreams of some committed stalwarts of the Guru Khalsa Panth. Opening session of the new organization designated as Chief Khalsa Diwan was held in the Malwai Bunga, Sri Darbar Sahib on Diwali, 30 October 1902.The inaugural Ardaas was performed by S. Teja Singh of Bhasur. Bhai Arjan Singh Bagrian was elected as President, S. Sunder Singh Majithia Secretary and S. Sujan Singh Sodhi Addl. Secretary. In addition to these office bearers, 18 ot her members were inducted in the executive committee.On 9 July 1904 Chief Khalsa Diwan was registered under Act XXI, 1860."} />
                      <GlobalButton buttonValue="View More >>" color={orange} />
                    </div>
                  </div>
                  <div className='col-md-5'>
                    <div className='aboutUsTextImg'>
                      <Image src="/logoImage.png" alt="My Image" width={255} height={280} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='venturesSection'>
          <div className='container'>
            <div className='venturesOtrBx'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='venturesinrBx mb40'>
                    <VenturesCard ventureTitle="School" ventureImage="/school.png" link="/schools" />
                    <VenturesCard ventureTitle="College" ventureImage="/college.png" link="/college" />
                    <VenturesCard ventureTitle="Hospital" ventureImage="/hospital.png" link="/hospital" />

                    <div className='ventureCardsBox'>
                      <HeadingL heading={"Our Ventures"} />
                      <HeadingDescription HeadingDescription={"Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum'."} />
                    </div>
                  </div>

                  <div className='venturesinrBx rowReverse'>
                    <VenturesCard ventureTitle="Orphange" ventureImage="/orphange.png" link="/orphanage" />
                    <VenturesCard ventureTitle="Biradhghar" ventureImage="/biradhghar.png" link="/birdhghar" />
                    <VenturesCard ventureTitle="Gurudwara Sahib" ventureImage="/gurudwarasahib.png" link="/gurdwara-sahib" />

                    <div className='ventureCardsBox'>
                      <HeadingDescription HeadingDescription={"Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32"} />
                      <HeadingDescription HeadingDescription={"Lorem Ipsum passage, and going .Lorem Ipsum comes from sections 1.10.32"} />
                      <GlobalButton buttonValue="View More >>" color={blue} />
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='serviceSection'>
          <div className='container'>
            <div className='serviceOtrBox'>
              <div className='row'>
                <div className='col-md-12'>
                  <HeadingC subSmallHeading={""} heading={" Dummy Text The Printing"} />
                  <div className='serviceMainBox'>
                    <ServiceCard title="Donation" imgName='/donation.png' Description="There are many variations of passages of Lorem Ipsum available." />
                    <ServiceCard title="Log In" imgName='/password.png' Description="There are many variations of passages of Lorem Ipsum available." />
                    <ServiceCard title="Carrer" imgName='/career.png' Description="There are many variations of passages of Lorem Ipsum available." />
                    <ServiceCard title="Fee Payment" imgName='/invoice.png' Description="There are many variations of passages of Lorem Ipsum available." />
                    <ServiceCard title="Contact Us" imgName='/email.png' Description="There are many variations of passages of Lorem Ipsum available." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='PresidentMessageSection'>
          <div className='container'>
            <div className='PresidentMessageOtrBox'>
              <div className='row'>
                <div className='col-md-7'>
                  <HeadingL subSmallHeading={"Lorem Ipsum"} heading={"Cheif Khalsa Diwan Charitable Society"} />
                  <HeadingDescription HeadingDescription={'The motto for my service to Chief Khalsa Diwan Charitable Society for the years to come shall be to promote "Sikhi-te-Sikhya" (Spread of Sikhism and Education).I feel that the educational system in the country has been facing hardships from the past several years due to lack of better facilities and opportunities for the youth to excel in their fields of interests. As a matter of fact, overall economic growth has remained disconnected from employment generation noting that young people continue to suffer from persistent unemployment and lack of quality job opportunities even after attaining best education. It is my personal belief that it is high time that such established organizations like Chief Khalsa Diwan Charitable Society must invest heavily into skill-oriented education that help achieve the goals of utmost employment in the country.lack of quality job opportunities even after attaining best education. It is my personal belief that it is high time that such established organizations like Chief Khalsa Diwan Charitable Society'} />
                  <GlobalButton buttonValue="View More >>" color={blue} />
                </div>
                <div className='col-md-5'>
                  <div className='PresidentMessageImgBox'>
                    <img src='/president_image.png' alt="president_image" />

                    <div className='PrcdntMsagTextBox'>
                      <p className='presidentName'> DR. INDERBIR SINGH NIJJAR </p>
                      <p className='presidentDesignation'> President </p>
                      <Image src="/headingUnderlineImage.png" alt="My Image" width={70} height={6} />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='counterSection'>
          <div className='container'>
            <div className='counterOtrBox'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='counterInrBox'>
                    <div className='counterMainBox'>
                      <CounterNumberBox Number={"500"} title={"Members"} />
                      <CounterNumberBox Number={"50"} title={"InstituTes"} />
                    </div>
                    <div className='counterMainBox mt-40'>
                      <CounterNumberBox Number={"38000"} title={"Students"} />
                      <CounterNumberBox Number={"456"} title={"DolorSit Amet"} />
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='counterInrTextBox'>
                    <HeadingL subSmallHeading={"Lorem Ipsum"} heading={"Cheif Khalsa Diwan Charitable Society"} />
                    <HeadingDescription HeadingDescription={'Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum".'} />
                    <HeadingDescription HeadingDescription={'Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum".'} />
                    <HeadingDescription HeadingDescription={'Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum".'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>


  )
}
