import VentureCardComponent from "../components/VentureCardComponent";

export default function SchoolsList() {

    const schools = [
        {
            ventureImage: '/venture_school1.jpg',
            ventureTitle: "Sri Guru Harkrishan Sr. Sec. Public School",
            ventureAddress: 'Majitha Road Bypass'
        },
        {
            ventureImage: '/venture_school2.jpg',
            ventureTitle: "Sri Guru Harkrishan Sr. Sec. Public School",
            ventureAddress: 'Majitha Road Bypass'
        },
        {
            ventureImage: '/venture_school3.jpg',
            ventureTitle: "Sri Guru Harkrishan Public School",
            ventureAddress: 'Majitha Road Bypass'
        },
        {
            ventureImage: '/venture_school3.jpg',
            ventureTitle: "Sri Guru Harkrishan Public School",
            ventureAddress: 'Majitha Road Bypass'
        },
        {
            ventureImage: '/venture_school1.jpg',
            ventureTitle: "Sri Guru Harkrishan Public School",
            ventureAddress: 'Majitha Road Bypass'
        },
        {
            ventureImage: '/venture_school2.jpg',
            ventureTitle: "Sri Guru Harkrishan Public School",
            ventureAddress: 'Majitha Road Bypass'
        }
    ]
    return (
        <section className="full_width_section">
            <div className="container">
                <div className="row">
                    {
                        schools && schools.map((item, index) => (
                            <div className="col-md-4 mb-4">
                                <VentureCardComponent ventureImage={item.ventureImage} ventureTitle={item.ventureTitle} key={index} ventureAddress={item.ventureAddress} />
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}