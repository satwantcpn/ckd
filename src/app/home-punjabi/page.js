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
      url: '/biradhGharBanner.png',
      thumbHeading: 'ਬਿਰਧ ਘਰ',
      thumbUrl: '/biradhghar.png',
      heading: 'ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ ਬਿਰਧ ਘਰ',
      description: 'ਸਭ ਤੋਂ ਵੱਧ ਲੋੜ ਪੈਣ ਤੇ ਸਾਡੇ ਬਜ਼ੁਰਗਾਂ ਲਈ ਮਦਦ ਦਾ ਹੱਥ ਵਧਾਉਣਾ',
      descriptionLine1: '',
      descriptionLine2: '',
      descriptionLine3: '',
      slogan: "ਸਿੱਖੀ - ਸਿੱਖਿਆ - ਮਨੁੱਖਤਾ"
    },
    {
      url: '/banner_gurdwara_sahibNew.png',
      thumbHeading: 'ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ',
      thumbUrl: '/gurudwarasahib.png',
      heading: 'ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ',
      description: 'ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ ਦੇ ਮੁੱਖ ਦਫ਼ਤਰ ਵਿਖੇ ',
      descriptionLine1: '',
      descriptionLine2: '',
      descriptionLine3: '',
      slogan: "ਸਿੱਖੀ - ਸਿੱਖਿਆ - ਮਨੁੱਖਤਾ"
    },
    {
      url: '/collegeBanner.png',
      thumbUrl: '/college.png',
      thumbHeading: 'ਕਾਲਜ',
      heading: 'ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ ਕਾਲਜ',
      description: 'ਪੇਸ਼ੇਵਰਤਾ ਵਿੱਚ ਉੱਤਮਤਾ ਪ੍ਰਾਪਤ ਕਰਦਾ ਹੈ ਅਤੇ ਆਪਣੇ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਉਹਨਾਂ ਕੋਸ਼ਿਸ਼ਾਂ ਵਿੱਚ ਸੁਪਨਿਆਂ ਨੂੰ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਸਲਾਹ ਦੇਣ ਵਿੱਚ ਮਾਣ ਮਹਿਸੂਸ ਕਰਦਾ ਹੈ',
      descriptionLine1: '',
      descriptionLine2: 'ਜੋ ਉਹ ਉਹਨਾਂ ਤੋਂ ਅੱਗੇ ਆਪਣੀ ਜ਼ਿੰਦਗੀ ਵਿੱਚ ਪਾਲਣਾ ਕਰਨ ਲਈ ਚੁਣਦੇ ਹਨ',
      descriptionLine3: '',
      slogan: "ਸਿੱਖੀ - ਸਿੱਖਿਆ - ਮਨੁੱਖਤਾ"
    },
    {
      url: '/schoolBanner.png',
      thumbUrl: '/school.png',
      thumbHeading: 'ਸਕੂਲ',
      heading: 'ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ ਸਕੂਲ',
      description: 'ਸਕਾਰਾਤਮਕ ਸਿੱਖਣ ਦਾ ਮਾਹੌਲ ਪ੍ਰਦਾਨ ਕਰਨਾ',
      descriptionLine1: '',
      descriptionLine2: 'ਜਿੱਥੇ ਹਰ ਬੱਚੇ ਨੂੰ ਪਿਆਰ ਅਤੇ ਸਤਿਕਾਰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ',
      descriptionLine3: '',
      slogan: "ਸਿੱਖੀ - ਸਿੱਖਿਆ - ਮਨੁੱਖਤਾ"
    },
    {
      url: '/collegeBanner.png',
      thumbUrl: '/hospital.png',
      thumbHeading: 'ਹਸਪਤਾਲ',
      heading: 'ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ ਹਸਪਤਾਲ',
      description: 'ਲੋੜਵੰਦਾਂ ਲਈ ਚੈਰੀਟੇਬਲ ਹਸਪਤਾਲ',
      descriptionLine1: '',
      descriptionLine2: '',
      descriptionLine3: '',
      slogan: "ਸਿੱਖੀ - ਸਿੱਖਿਆ - ਮਨੁੱਖਤਾ"
    },
    {
      url: '/orphanageBananer.png',
      thumbUrl: '/orphange.png',
      thumbHeading: 'ਅਨਾਥ ਆਸ਼ਰਮ',
      heading: 'ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ ਅਨਾਥ ਆਸ਼ਰਮ',
      description: 'ਬੇਘਰਿਆਂ ਲਈ ਘਰ ਪ੍ਰਦਾਨ ਕਰਨਾ ਜਿੱਥੇ ਉਨ੍ਹਾਂ ਨੂੰ ਪਿਆਰ ਕੀਤਾ ਜਾਂਦਾ ਹੈ',
      descriptionLine1: '',
      descriptionLine2: '',
      descriptionLine3: '',
      slogan: "ਸਿੱਖੀ - ਸਿੱਖਿਆ - ਮਨੁੱਖਤਾ"
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
                      <HeadingDescription HeadingDescription={"ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ ਦੀ ਸਥਾਪਨਾ ਸਿੱਖ ਜਗਤ ਦੀਆਂ ਕੁਝ ਨਾਮਵਰ ਸ਼ਖਸ਼ੀਅਤਾਂ ਦੇ ਸੁਪਨਿਆਂ ਦੀ ਸਾਖੀ ਭਰਦੀ ਹੈ ਜੋ ਸਿੱਖੀ ਦੇ ਪ੍ਰਚਾਰ ਅਤੇ ਪ੍ਰਸਾਰ ਲਈ ਪੂਰੀ ਤਰ੍ਹਾਂ ਨਾਲ ਸਮਰਪਿਤ ਸਨ। 30 ਅਕਤੂਬਰ 1902 ਨੂੰ ਸ਼੍ਰੀ ਦਰਬਾਰ ਸਾਹਿਬ ਅੰਮ੍ਰਿਤਸਰ ਦੇ ਪ੍ਰਸਿੱਧ ਮਲਵਈ ਬੁੰਗੇ ਵਿਖੇ ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ ਦੀ ਨਵ-ਨਿਰਮਿਤ ਸੰਸਥਾ ਦੀ ਪਹਿਲੀ ਬੈਠਕ ਹੋਈ ਜਿਸ ਵਿਚ ਭਸੌੜ ਦੇ ਰਹਿਣ ਵਾਲੇ ਸ: ਤੇਜਾ ਸਿੰਘ ਵੱਲੋਂ ਸੰਸਥਾ ਦੀ ਆਰੰਭਤਾ ਲਈ ਅਰਦਾਸ ਕੀਤੀ ਗਈ। ਇਸ ਬੈਠਕ ਵਿਚ ਭਾਈ ਅਰਜਨ ਸਿੰਘ ਬਾਗੜੀਆਂ ਨੂੰ ਸੰਸਥਾ ਦੇ ਪ੍ਰਧਾਨ, ਸ: ਸੁੰਦਰ ਸਿੰਘ ਮਜੀਠੀਆ ਨੂੰ ਸਕੱਤਰ ਅਤੇ ਸੋਢੀ ਸੁਜਾਨ ਸਿੰਘ ਨੂੰ ਐਡੀਸ਼ਨਲ ਸਕੱਤਰ ਵੱਜੋਂ ਚੁਣਿਆ ਗਿਆ। ਇਹਨਾਂ ਅਹੁਦੇਦਾਰਾ ਤੋਂ ਇਲਾਵਾ ਦੀਵਾਨ ਦੀ ਐਗਜ਼ੈਕਟਿਵ ਕਮੇਟੀ ਵਿੱਚ 18 ਮੈਂਬਰ ਸ਼ਾਮਲ ਕੀਤੇ ਗਏ। ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ ਸੰਸਥਾ ਮਿਤੀ 9 ਜੁਲਾਈ 1904 ਨੂੰ ਸੰਵਿਧਾਨ ਦੇ ਐਕਟ XXI, 1860 ਦੇ ਅੰਤਰਗਤ ਰਜਿਸਟਰ ਹੋਈ। ਇਕ ਸਦੀ ਤੋਂ ਵੀ ਵੱਧ ਪੁਰਾਣੀ ਸੰਸਥਾ ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ ਦੀ ਸਫ਼ਲਤਾ ਦਾ ਸਿਹਰਾ ਇਸ ਦੇ ਯੋਗ ਤੇ ਸੁੱਚਜੇ ਮੈਂਬਰ ਸਾਹਿਬਾਨ ਦੀ ਅਣੱਥਕ ਮਿਹਨਤ ਅਤੇ ਘਾਲਣਾ ਨੂੰ ਜਾਂਦਾ ਹੈ ਜੋ ਦਿਨ-ਰਾਤ ਸਿੱਖ ਸਮਾਜ ਦੇ ਵਿਕਾਸ ਲਈ ਯਤਨਸ਼ੀਲ ਹਨ। ਸੰਸਥਾ ਦੇ ਪ੍ਰਧਾਨ ਵਿਹਾਰਕ ਦ੍ਰਿਸ਼ਟੀ ਕੌਣ ਰੱਖਣ ਵਾਲੀ ਪ੍ਰਗਤੀਸ਼ੀਲ ਅਤੇ ਸੰਵੇਦਨਸ਼ੀਲ ਸ਼ਖਸ਼ੀਅਤ ਦੇ ਮਾਲਕ ਹਨ।"} />
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
