import VentureCardComponent from "../components/VentureCardComponent";
import Header from "../components/header";

export default function GurdwaraSahibList() {

    const schools = [
        {
            id: 1,
            ventureImage: '/gurdawara.png',
            ventureTitle: "Gurudwara Chief Khalsa Diwan",
            ventureAddress: 'C.K.D. Head Office, G.T. Road'
        },
    ]
    return (
        <>
            <Header pageTitle={"Gurdwara Sahib"} />
            <section className="full_width_section mt-4 pt-4 lineBg">
                <div className="container">
                    <div className="row">
                        {
                            schools && schools.map((item, index) => (
                                <div className="col-md-4 mb-4" key={item.id}>
                                    <VentureCardComponent ventureImage={item.ventureImage} ventureTitle={item.ventureTitle} ventureAddress={item.ventureAddress} ventrueLink='/gurdwara-sahib' />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        </>

    )
}