import VentureCardComponent from "../components/VentureCardComponent";
import Header from "../components/header";

export default function SchoolsList() {

    const schools = [
        {
            id: 1,
            ventureImage: '/hs1.png',
            ventureTitle: "Sri Guru Amardass Birdhghar",
            ventureAddress: 'Amritsar - 143001',
            ventureWebsite: 'https://chiefkhalsadiwan.com'
        },
        {
            id: 2,
            ventureImage: '/bg_ghar.png',
            ventureTitle: "Bhai Vir Singh Birdhghar",
            ventureAddress: 'Tarn Taran - 143001',
            ventureWebsite: 'https://chiefkhalsadiwan.com'
        }
    ]
    return (
        <>
            <Header pageTitle={"Birdh Ghar"} />
            <section className="full_width_section mt-4 pt-4 lineBg">
                <div className="container">
                    <div className="row">
                        {
                            schools && schools.map((item, index) => (
                                <div className="col-md-4 mb-4" key={item.id}>
                                    <VentureCardComponent ventureImage={item.ventureImage} ventureTitle={item.ventureTitle} ventureAddress={item.ventureAddress} ventrueLink='/birdhghar' ventureWebsite={item.ventureWebsite} />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        </>

    )
}