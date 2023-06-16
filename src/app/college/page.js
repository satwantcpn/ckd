import VentureCardComponent from "../components/VentureCardComponent";
import Header from "../components/header";

export default function CollageList() {

    const schools = [
        {
            id: 1,
            ventureImage: '/c1.png',
            ventureTitle: "C.K.D. Institute Of Management & Technology",
            ventureAddress: 'C.K.D.I.M.T. Amritsar',
            ventureWebsite: 'www.ckdimt.com'

        },
        {
            id: 2,
            ventureImage: '/c2.png',
            ventureTitle: "C.K.D. Institute Of Management & Technology",
            ventureAddress: 'C.K.D.I.M.T. Tarntaran',
            ventureWebsite: 'www.ckdimt.in'
        },
        {
            id: 3,
            ventureImage: '/c3.png',
            ventureTitle: "C.K.D. International Nursing College",
            ventureAddress: 'C.K.D.I.N.C. Amritsar',
            ventureWebsite: 'www.ckdnursingcollege.com'
        }
    ]
    return (
        <>
            <Header pageTitle={"Colleges"} />
            <section className="full_width_section mt-4 pt-4 lineBg">
                <div className="container">
                    <div className="row">
                        {
                            schools && schools.map((item, index) => (
                                <div className="col-md-4 mb-4" key={item.id}>
                                    <VentureCardComponent ventureImage={item.ventureImage} ventureTitle={item.ventureTitle} ventureAddress={item.ventureAddress} ventureWebsite={item.ventureWebsite} ventrueLink="/college" />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        </>

    )
}