import VentureCardComponent from "../components/VentureCardComponent";
import Header from "../components/header";

export default function HospitalsList() {

    const schools = [
        {
            id: 1,
            ventureImage: '/venture_school1.jpg',
            ventureTitle: "Sri Guru Harkrishan Sr. Sec. Public School",
            ventureAddress: 'Majitha Road Bypass'
        },
        {
            id: 2,
            ventureImage: '/venture_school2.jpg',
            ventureTitle: "Sri Guru Harkrishan Sr. Sec. Public School",
            ventureAddress: 'Majitha Road Bypass'
        },
        {
            id: 3,
            ventureImage: '/venture_school3.jpg',
            ventureTitle: "Sri Guru Harkrishan Public School",
            ventureAddress: 'Majitha Road Bypass'
        },
        {
            id: 4,
            ventureImage: '/venture_school3.jpg',
            ventureTitle: "Sri Guru Harkrishan Public School",
            ventureAddress: 'Majitha Road Bypass'
        },
        {
            id: 5,
            ventureImage: '/venture_school1.jpg',
            ventureTitle: "Sri Guru Harkrishan Public School",
            ventureAddress: 'Majitha Road Bypass'
        },
        {
            id: 6,
            ventureImage: '/venture_school2.jpg',
            ventureTitle: "Sri Guru Harkrishan Public School",
            ventureAddress: 'Majitha Road Bypass'
        }
    ]
    return (
        <>
            <Header pageTitle={"Hospitals"} />
            <section className="full_width_section">
                <div className="container">
                    <div className="row">
                        {
                            schools && schools.map((item, index) => (
                                <div className="col-md-4 mb-4" key={item.id}>
                                    <VentureCardComponent ventureImage={item.ventureImage} ventureTitle={item.ventureTitle} ventureAddress={item.ventureAddress} />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        </>

    )
}