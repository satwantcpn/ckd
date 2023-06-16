import VentureCardComponent from "../components/VentureCardComponent";
import Header from "../components/header";

export default function PVList() {

    const schools = [
        {
            id: 1,
            ventureImage: '/hs1.png',
            ventureTitle: "Khalsa Parcharak Vidyala",
            ventureAddress: 'Tarn Taran - 143401',
            ventureWebsite: 'https://chiefkhalsadiwan.com'
        }
    ]
    return (
        <>
            <Header pageTitle={"Parcharak Vidyalya"} />
            <section className="full_width_section mt-4 pt-4 lineBg">
                <div className="container">
                    <div className="row">
                        {
                            schools && schools.map((item, index) => (
                                <div className="col-md-4 mb-4" key={item.id}>
                                    <VentureCardComponent ventureImage={item.ventureImage} ventureTitle={item.ventureTitle} ventureAddress={item.ventureAddress} ventrueLink='/parcharak-vidyalya' ventureWebsite={item.ventureWebsite} />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        </>

    )
}