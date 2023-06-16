import VentureCardComponent from "../components/VentureCardComponent";
import Header from "../components/header";

export default function SchoolsList() {

    const schools = [
        {
            id: 1,
            ventureImage: '/sc1.png',
            ventureTitle: "Sri Guru Harkrishan Sr. Sec. Public School",
            ventureAddress: 'G.T. Road',
            ventureWebsite: 'www.sghpsgtroad.edu.in'
        },
        {
            id: 2,
            ventureImage: '/sc2.png',
            ventureTitle: "Sri Guru Harkrishan Sr. Sec. Public School",
            ventureAddress: 'Majitha Road Bypass',
            ventureWebsite: 'www.sghpsmajitharoadbypass.edu.in'
        },
        {
            id: 3,
            ventureImage: '/sc3.png',
            ventureTitle: "Sri Guru Harkrishan Public School",
            ventureAddress: 'Basant Avenue',
            ventureWebsite: 'www.sghpsbasantavenue.com'
        },
        {
            id: 4,
            ventureImage: '/sc4.png',
            ventureTitle: "Sri Guru Harkrishan Public School",
            ventureAddress: 'Golden Avenue',
            ventureWebsite: 'www.sghpsgoldenavenue.com'
        },
        {
            id: 5,
            ventureImage: '/sc5.png',
            ventureTitle: "Sri Guru Harkrishan Public School",
            ventureAddress: 'Bhagtanwala',
            ventureWebsite: 'www.sghpsbhagtanwala.com'
        },
        {
            id: 6,
            ventureImage: '/sc6.png',
            ventureTitle: "Sri Guru Harkrishan Public School",
            ventureAddress: 'Chowk Pragdas',
            ventureWebsite: ' www.sghpsgtroad.edu.in'
        },
        {
            id: 7,
            ventureImage: '/sc7.png',
            ventureTitle: "Sri Guru Harkrishan Public School",
            ventureAddress: 'Chowk Pragdas',
            ventureWebsite: ' www.sghpsgtroad.edu.in'
        },
        {
            id: 8,
            ventureImage: '/sc8.png',
            ventureTitle: "Sri Guru Harkrishan Public School",
            ventureAddress: 'Chowk Pragdas',
            ventureWebsite: ' www.sghpsgtroad.edu.in'
        },
        {
            id: 9,
            ventureImage: '/sc9.png',
            ventureTitle: "Sri Guru Harkrishan Public School",
            ventureAddress: 'Chowk Pragdas',
            ventureWebsite: ' www.sghpsgtroad.edu.in'
        },
        {
            id: 10,
            ventureImage: '/sc10.png',
            ventureTitle: "Sri Guru Harkrishan Sr. Sec. Public School",
            ventureAddress: 'Sultanwind Link Road',
            ventureWebsite: 'www.harkrishanpublicschool.com'
        },
        {
            id: 11,
            ventureImage: '/sc1.png',
            ventureTitle: "Sri Guru Harkrishan Public School",
            ventureAddress: 'Friends Avenue',
            ventureWebsite: 'www.sghpsgtroad.edu.in'
        },
        {
            id: 12,
            ventureImage: '/sc2.png',
            ventureTitle: "Sri Guru Harkrishan International School",
            ventureAddress: 'Ranjit Avenue',
            ventureWebsite: 'www.sghi.in'
        }
    ]
    return (
        <>
            <Header pageTitle={"Schools"} />
            <section className="full_width_section mt-4 pt-4 lineBg">
                <div className="container">
                    <div className="row">
                        {
                            schools && schools.map((item, index) => (
                                <div className="col-md-4 mb-4" key={item.id}>
                                    <VentureCardComponent ventureImage={item.ventureImage} ventureTitle={item.ventureTitle} ventureAddress={item.ventureAddress} ventrueLink='/schools' ventureWebsite={item.ventureWebsite} />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        </>

    )
}