import Header from "@/app/components/header";
import SingleVentureMemberComp from "@/app/components/singleVentureMemberCom";
import Image from "next/image";

export default function SingleOrphanage() {

    const memberList = [
        {
            id: 1,
            memberImage: '/opm1.png',
            memberName: 'Dr. Balbir Singh Saini',
            memberDesignation: 'Superintendent',
            ventureName: 'Central Khalsa Orphanage',
            highlight: true
        },
        {
            id: 2,
            memberImage: '/opm2.png',
            memberName: 'S. Waryam Singh',
            memberDesignation: 'Management Committee',
            ventureName: 'Central Khalsa Orphanage',
            highlight: false
        },
        {
            id: 3,
            memberImage: '/opm3.png',
            memberName: 'S. Mohanjit Singh Bhalla',
            memberDesignation: 'Management Committee',
            ventureName: 'Central Khalsa Orphanage',
            highlight: false
        },
        {
            id: 4,
            memberImage: '/opm4.png',
            memberName: 'S. Mandip Singh Bedi',
            memberDesignation: 'Management Committee',
            ventureName: 'Central Khalsa Orphanage',
            highlight: false
        },
        {
            id: 5,
            memberImage: '/hm3.png',
            memberName: 'S. Atamjit Singh Basra',
            memberDesignation: 'Management Committee',
            ventureName: 'Central Khalsa Orphanage',
            highlight: false
        }
    ]
    return (
        <>
            <Header pageTitle={"Central Khalsa Orphanage"} hideHeaderBanner={'true'} />
            <section className="full_width_section">
                <div className="ventureBanner">
                    <Image src="/ventureBannerImage.png" alt="Banner" width={1905} height={595} />
                    <div className="ventureBannerContent">
                        <h1>Central Khalsa Orphanage</h1>
                        <span className="ventureLocation">(Shaheed Udham Singh Chowk (Putlighar), G.T. Road, Amritsar - 143001)</span>
                    </div>
                </div>
                <div className="ventureBannerStip">
                    <div className="stripCol">
                        <div className="stripIcon">
                            <Image src="/location.png" alt="icons" width={34} height={34} />
                        </div>
                        <span>Shaheed Udham Singh Chowk, Amritsar - 143001</span>
                    </div>
                    <div className="stripCol">
                        <div className="stripIcon">
                            <Image src="/telephone.png" alt="icons" width={34} height={34} />
                        </div>
                        <span>0183-2562531</span>
                    </div>
                    <div className="stripCol">
                        <div className="stripIcon">
                            <Image src="/email_icon.png" alt="icons" width={34} height={34} />
                        </div>
                        <span>orphanage@chiefkhalsadiwan.com</span>
                    </div>
                    <div className="stripCol">
                        <div className="stripIcon">
                            <Image src="/Internet.png" alt="icons" width={34} height={34} />
                        </div>
                        <span>www.centralkhalsaorphanage.org</span>
                    </div>
                </div>
            </section>
            <section className="full_width_section mtop50">
                <div className="container">
                    <div className="sVMemberList">
                        {
                            memberList && memberList.map((member) => (
                                <SingleVentureMemberComp key={member.id} memberImage={member.memberImage} memberName={member.memberName} memberDesignation={member.memberDesignation} ventureName={member.ventureName} highlight={member.highlight} />
                            ))
                        }

                    </div>
                </div>
            </section>
            <section className="full_width_section mtop50">
                <div className="container">
                    <div className="ventureDetailContent">
                        <div className="venturebtmCont">
                            <p>The Central Khalsa Orphanage, Amritsar was established in 1904 with the strenuous efforts of The Chief Khalsa Diwan for the suffering humanity. A plot of land covering five acres has a secondary school named Shaheed Udham Singh Memorial Secondary School in the campus having a computer laboratory for teaching modern techniques of learning, a library, sports facilities, a gurdwara, a dispensary, Bhai Veer Singh guest house and a home for the blind (Surma Singh Ashram) established in 1936. Students have imparted education in Sikh History, Gurbani, and Music along with academics. They have excelled in various fields by achieving high-ranking posts in society.</p>
                            <p>Bhai Vir Singh Gurmat College was established in 1979 to train dedicated Preachers, Granthies, and Ragis for the Sikh religion through three years Gurmat Course having full facilities of free boarding and lodging. The students who have been imparted Gurmat Education from this college have earned names and fame at the National as well as international levels. Dr.Inderjit Singh Gogoani has set an example of familiarity. Bhai Pardeep Singh has also brought name and fame by winning the top position in “Gawoh Sachi Bani” competition.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}