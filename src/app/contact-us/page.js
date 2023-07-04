import ContactBlock from "../components/ContactBlock";
import Header from "../components/header";
import Image from "next/image";
export default function PublicationPage() {
    return (
        <>
            <Header pageTitle={"Contact Us"} />
            <section className="contactUsPage lineBg mb-4 pb-4 pt-4">
                <div className="container pt-4">
                    <div className="row gx-5 mb-4 pb-4 align-items-center">
                        <div className="col-md-12 col-lg-6 col-md-6">
                            <div className="contactFormWrap">
                                <h2>Get In Touch</h2>
                                <p>Fill the form below. call us, you can also email us or drop by anytime, we endeavour to answer all enquiries within 24 hours.</p>
                                <form>
                                    <div className="row contactForm">
                                        <div className="col-md-6 mb-4">
                                            <input type="text" placeholder="First Name" name="firstName" />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <input type="text" placeholder="Last Name" name="lastName" />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <input type="email" placeholder="Email Address" name="email" />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <input type="number" placeholder="Phone" name="phone" />
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <input type="text" placeholder="Subject" name="subject" />
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <textarea rows="4" cols="50" placeholder="Your Message" name="message"></textarea>
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <button className="primaryBtn"><span>Send Message</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-md-6">
                            <ContactBlock iconUrl="/locationIconContact.svg" title="Physical Address" address1="Chief Khalsa Diwan Charitable Society," address2="G.T. Road, Amritsar - 143001, Punjab (India)" />
                            <ContactBlock iconUrl="/contactPhoneIcon.svg" title="Call Us" phone1="+91-183-2228771" phone2="+91-6283282075 (Head Office)" phone3="+91-6283282077 (Director Office)" />
                            <ContactBlock iconUrl="/contactMailIcon.svg" title="Email Us" email="info@chiefkhalsadiwan.com" />
                        </div>
                    </div>
                    <div className="row mb-4 justify-content-center">
                        <div className="col-md-8">
                            <div className="contactSuggbox">
                                <div className="sugBoxImg">
                                    <Image src="/contactMailIcon.svg" alt="Suggetion box icon" width={50} height={51} />
                                </div>
                                <div className="contactSuggBocCont">
                                    <h3>Suggestions / Feedback</h3>
                                    <svg width="69" height="6" viewBox="0 0 69 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.24022 5L13.352 1L20.4637 5L26.4525 1L33.1899 5L40.676 1L47.0391 5L53.7765 1L62.0112 5L68 1" stroke="#FF5722" /></svg>
                                    <p>For suggestions or feedback, please send an email at <a href="mailto:info@chiefkhalsadiwan.com">info@chiefkhalsadiwan.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contactMap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54351.54019946894!2d74.86755697802018!3d31.63463720467137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964a93f3ea4a7%3A0x9b72fb21be7657c3!2sChief%20Khalsa%20Diwan%20Charitable%20Society!5e0!3m2!1sen!2sin!4v1687859628171!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </>
    )
}