import VentureCardComponent from "../components/VentureCardComponent";
import Header from "../components/header";

export default function OrphanageList() {

    const schools = [
        {
            id: 1,
            ventureImage: '/op1.png',
            ventureTitle: "Central Khalsa Orphanage",
            ventureAddress: 'Shaheed Udham Singh Chowk',
            ventureWebsite: 'www.centralkhalsaorphanage.org'
        }
    ]
    return (
        <>
            <Header pageTitle={"Orphanage"} />
            <section className="full_width_section mt-4 pt-4 lineBg">
                <div className="container">
                    <div className="row">
                        {
                            schools && schools.map((item, index) => (
                                <div className="col-md-4 mb-4" key={item.id}>
                                    <VentureCardComponent ventureImage={item.ventureImage} ventureTitle={item.ventureTitle} ventureAddress={item.ventureAddress} ventrueLink="/orphanage" ventureWebsite={item.ventureWebsite} />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        </>

    )
}