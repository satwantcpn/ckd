import styles from '../../../style/page.module.css'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import GlobalButton from '../components/button'
import Link from 'next/link';

export default function Footer() {

  const orange = {
    backgroundColor: '#ff623e',
    color: '#fff',
  };

  const blue = {
    backgroundColor: '#280b7d',
    color: 'white',
  };

  return (

    <footer className='footer'>
      <div className='inrFooterBox'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='footerColumnBox'>
                <div className='footerLogo'>
                  <span> <img src='/footerLogo.png' alt="Footer_logo" /></span>
                  <p className='footerSubtitle'>
                    The establishment of Chief Khalsa Diwan on 30 October 1902 bears testimony to the dreams of some committed stalwarts of the Guru Khalsa Panth.
                  </p>
                  <div className='footerAddress'>
                    <p className='charityName'> Chief Khalsa Diwan Charitable Society, </p>
                    <p className='charityLocation'> G.T.Road, Amritsar - 143001 </p>
                    <p className='charitCity'> Punjab - India </p>
                  </div>

                  <div className='FooterSocialLink'>
                    <FontAwesomeIcon icon={faMobileScreen} width={14} />
                    <FontAwesomeIcon icon={faMobileScreen} width={14} />
                    <FontAwesomeIcon icon={faMobileScreen} width={14} />
                  </div>

                  <GlobalButton buttonValue="Donation" color={orange} />
                </div>

              </div>
            </div>

            <div className='col-md-2'>
              <div className='footerColumnBox'>
                <p className='ftrHeading'>Our <span>  Ventures </span></p>
                <ul>
                  <li> <Link href="/gurdwara-sahib">Gurudwara Sahib</Link></li>
                  <li> <Link href="/schools"> Schools </Link> </li>
                  <li> <Link href="/college"> Colleges </Link> </li>
                  <li> <Link href="/hospital"> Hospitals </Link> </li>
                  <li> <Link href="/orphanage"> Orphange </Link> </li>
                  <li> <Link href="/birdhghar"> Biradh Ghar </Link> </li>
                  <li> <Link href="/parcharak-vidyalya"> Parcharak Vidalya </Link> </li>
                </ul>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='footerColumnBox'>
                <p className='ftrHeading'>Important<span> Links</span></p>
                <ul>
                  <li> <a href=''> Recruitment </a> </li>
                  <li> <a href=''> Gratuity Claim form </a> </li>
                  <li> <a href=''> Govt. Minority Scholarship </a> </li>
                  <li> <a href=''> Gratuity Claim form </a> </li>
                  <li> <a href=''> Govt. Minority Scholarship </a> </li>
                </ul>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='footerColumnBox'>
                <div className='footerColumnBox'>
                  <p className='ftrHeading'>Contacat<span> Us</span></p>
                  <div className='callusBox'>
                    <div className='callusBox_title'> <FontAwesomeIcon icon={faMobileScreen} width={14} /> Call Us:- </div>
                    <div>
                      <p> +91-183-2228771 </p>
                      <p> +91-6283282075 (Head Office) </p>
                      <p> +91-6283282077 (Director Office) </p>
                    </div>
                  </div>

                  <div className='callusBox'>
                    <div className='callusBox_title'> <FontAwesomeIcon icon={faMobileScreen} width={14} /> Mail Us:- </div>
                    <div>
                      <p> info@chiefkhalsadiwan.com </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>

  )
}
