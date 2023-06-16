import VentureCardComponent from "../components/VentureCardComponent";
import Header from "../components/header";

export default function HospitalsList() {

    const schools = [
        {
            id: 1,
            ventureImage: '/hs1.png',
            ventureTitle: "Chief Khalsa Diwan Charitable Hospital",
            ventureAddress: 'G.T. Road, Amritsar - 143001',
            ventureWebsite: 'https://chiefkhalsadiwan.com/'
        },
        {
            id: 2,
            ventureImage: '/hs1.png',
            ventureTitle: "Central Khalsa Hospital",
            ventureAddress: 'Tarn Taran - 143401',
            ventureWebsite: 'https://chiefkhalsadiwan.com/'
        }
    ]
    return (
        <>
            <Header pageTitle={"Hospitals"} />
            <section className="full_width_section mt-4 pt-4 lineBg">
                <div className="container">
                    <div className="row">
                        {
                            schools && schools.map((item, index) => (
                                <div className="col-md-4 mb-4" key={item.id}>
                                    <VentureCardComponent ventureImage={item.ventureImage} ventureTitle={item.ventureTitle} ventureAddress={item.ventureAddress} ventrueLink="/hospital" ventureWebsite={item.ventureWebsite} />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        </>

    )
}