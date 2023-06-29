import Image from "next/image"
export default function ContactBlock({ iconUrl, title, phone1, phone2, phone3, email, address1, address2 }) {
    return (
        <>
            <div className="contactPageBlocks">
                <div className="careerItem">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <div className="careerLogo">
                                <Image src={iconUrl} width={52} height={51} alt="Contact Icons" />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="carerrListCont">
                                <h2>{title}</h2>
                                <svg width="58" height="6" viewBox="0 0 58 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5.37989 5L11.324 1L17.2682 5L22.2737 1L27.905 5L34.162 1L39.4804 5L45.1117 1L51.9944 5L57 1" stroke="#FF5722" /></svg>
                                {address1 && <span className="contactDetail fullWidth">{address1}</span>}
                                {address2 && <span className="contactDetail fullWidth">{address2}</span>}
                                {phone1 && <span className="contactDetail fullWidth">{phone1}</span>}
                                {phone2 && <span className="contactDetail fullWidth">{phone2}</span>}
                                {phone3 && <span className="contactDetail fullWidth">{phone3}</span>}
                                {email && <span className="contactDetail fullWidth">{email}</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}