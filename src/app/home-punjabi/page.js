import styles from '../../../style/page.module.css'
import HeadingC from '../components/headingC'
import GlobalButton from '../components/button'
import HeadingDescription from '../components/HeadingDescription'
import Image from 'next/image';
import Header from '../components/header';
import HomeSliderPunjabi from '../components/homeSliderPunjabi';

export default function PunjabiHome() {

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
      thumbHeading: 'ਬਿਰਧ ਘਰ',
      thumbUrl: '/biradhghar.png',
      heading: 'ਬਿਰਧ ਘਰ',
      description: 'Stalwarts of Guru Khalsa Panth held opening session of',
      descriptionLine1: '"CHIEF KHALSA DIWAN"',
      descriptionLine2: 'With their vision a commitment was made.',
      descriptionLine3: 'LET SEE WHERE IT IS TODAY....',
      slogan: "ਸਿੱਖੀ - ਸਿਖਿਆ - ਮਨੁੱਖਤਾ"
    },
    {
      url: '/banner_gurdwara_sahibNew.png',
      thumbHeading: 'ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ',
      thumbUrl: '/gurudwarasahib.png',
      heading: 'ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ',
      description: 'Stalwarts of Guru Khalsa Panth held opening session of',
      descriptionLine1: '"CHIEF KHALSA DIWAN"',
      descriptionLine2: 'With their vision a commitment was made.',
      descriptionLine3: 'LET SEE WHERE IT IS TODAY....',
      slogan: "ਸਿੱਖੀ - ਸਿਖਿਆ - ਮਨੁੱਖਤਾ"
    },
    {
      url: '/slide1.png',
      thumbUrl: '/college.png',
      thumbHeading: 'ਕਾਲਜ',
      heading: 'ਕਾਲਜ',
      description: 'Stalwarts of Guru Khalsa Panth held opening session of',
      descriptionLine1: '"CHIEF KHALSA DIWAN"',
      descriptionLine2: 'With their vision a commitment was made.',
      descriptionLine3: 'LET SEE WHERE IT IS TODAY....',
      slogan: "ਸਿੱਖੀ - ਸਿਖਿਆ - ਮਨੁੱਖਤਾ"
    },
    {
      url: '/slide2.jpg',
      thumbUrl: '/school.png',
      thumbHeading: 'ਸਕੂਲ',
      heading: 'ਸਕੂਲ',
      description: 'Stalwarts of Guru Khalsa Panth held opening session of',
      descriptionLine1: '"CHIEF KHALSA DIWAN"',
      descriptionLine2: 'With their vision a commitment was made.',
      descriptionLine3: 'LET SEE WHERE IT IS TODAY....',
      slogan: "ਸਿੱਖੀ - ਸਿਖਿਆ - ਮਨੁੱਖਤਾ"
    },
    {
      url: '/slide1.png',
      thumbUrl: '/hospital.png',
      thumbHeading: 'ਹਸਪਤਾਲ',
      heading: 'ਹਸਪਤਾਲ',
      description: 'Stalwarts of Guru Khalsa Panth held opening session of',
      descriptionLine1: '"CHIEF KHALSA DIWAN"',
      descriptionLine2: 'With their vision a commitment was made.',
      descriptionLine3: 'LET SEE WHERE IT IS TODAY....',
      slogan: "ਸਿੱਖੀ - ਸਿਖਿਆ - ਮਨੁੱਖਤਾ"
    },
    {
      url: '/slide2.jpg',
      thumbUrl: '/orphange.png',
      thumbHeading: 'ਅਨਾਥ ਆਸ਼ਰਮ',
      heading: 'ਅਨਾਥ ਆਸ਼ਰਮ',
      description: 'Stalwarts of Guru Khalsa Panth held opening session of',
      descriptionLine1: '"CHIEF KHALSA DIWAN"',
      descriptionLine2: 'With their vision a commitment was made.',
      descriptionLine3: 'LET SEE WHERE IT IS TODAY....',
      slogan: "ਸਿੱਖੀ - ਸਿਖਿਆ - ਮਨੁੱਖਤਾ"
    }
  ]

  return (
    <>
      <Header hideHeaderBanner={'true'} />
      <main className={styles.main}>
        <HomeSliderPunjabi slides={slider} />
        <section className='aboutSection'>
          <div className='container'>
            <div className='aboutUsOtrBox'>
              <HeadingC lrgHeading={"ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ"} heading={"ਚੈਰੀਟੇਬਲ ਸੁਸਾਇਟੀ"} />
              <div className='aboutUs'>
                <div className='row'>
                  <div className='col-md-7'>
                    <div className='aboutUsText'>
                      <HeadingDescription HeadingDescription={"30 ਅਕਤੂਬਰ 1902 ਨੂੰ ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ ਦੀ ਸਥਾਪਨਾ ਗੁਰੂ ਖ਼ਾਲਸਾ ਪੰਥ ਦੇ ਕੁਝ ਵਚਨਬੱਧ ਦਿਵਾਨਾਂ ਦੇ ਸੁਪਨਿਆਂ ਦੀ ਗਵਾਹੀ ਭਰਦੀ ਹੈ। ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ ਵਜੋਂ ਮਨੋਨੀਤ ਨਵੀਂ ਸੰਸਥਾ ਦਾ ਉਦਘਾਟਨੀ ਇਜਲਾਸ 30 ਅਕਤੂਬਰ 1902 ਨੂੰ ਦੀਵਾਲੀ ਨੂੰ ਮਲਵਈ ਬੁੰਗਾ, ਸ੍ਰੀ ਦਰਬਾਰ ਸਾਹਿਬ ਵਿਖੇ ਹੋਇਆ। ਉਦਘਾਟਨੀ ਅਰਦਾਸ ਸ: ਤੇਜਾ ਸਿੰਘ ਭਾਸੁਰ ਦੁਆਰਾ ਕੀਤੀ ਗਈ। ਭਾਈ ਅਰਜਨ ਸਿੰਘ ਬਾਗੜੀਆਂ ਨੂੰ ਪ੍ਰਧਾਨ, ਸ: ਸੁੰਦਰ ਸਿੰਘ ਮਜੀਠੀਆ ਸਕੱਤਰ ਅਤੇ ਸ: ਸੁਜਾਨ ਸਿੰਘ ਸੋਢੀ ਐਡੀ. ਸਕੱਤਰ. ਇਹਨਾਂ ਅਹੁਦੇਦਾਰਾਂ ਤੋਂ ਇਲਾਵਾ, ਉਸਦੇ 18 ਹੋਰ ਮੈਂਬਰ ਕਾਰਜਕਾਰੀ ਕਮੇਟੀ ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤੇ ਗਏ ਸਨ। 9 ਜੁਲਾਈ 1904 ਨੂੰ ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ ਐਕਟ XXI, 1860 ਦੇ ਤਹਿਤ ਰਜਿਸਟਰ ਕੀਤਾ ਗਿਆ ਸੀ।"} />
                      <GlobalButton buttonValue="ਹੋਰ ਵੇਖੋ >>" color={orange} />
                    </div>
                  </div>
                  <div className='col-md-5'>
                    <div className='aboutUsTextImg'>
                      <Image src="/logoIcon.png" alt="My Image" width={255} height={280} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pt-4 pb-4'>
          <div className='container'>
            <h2 className='commingSoon'>Work in progress....</h2>
          </div>
        </section>
      </main>
    </>
  )
}
