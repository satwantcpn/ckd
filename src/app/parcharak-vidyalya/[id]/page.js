import Header from "@/app/components/header";
import SingleVentureMemberComp from "@/app/components/singleVentureMemberCom";

export default function SinglePV() {

    const memberList = [
        {
            id: 1,
            memberImage: '/pvm1.png',
            memberName: 'S. Satwinder Singh',
            memberDesignation: 'Management Committee',
            ventureName: 'Khalsa Parcharak Vidyala',
            highlight: true
        },
        {
            id: 2,
            memberImage: '/bgm1.png',
            memberName: 'S. Jit Singh Saraf',
            memberDesignation: 'Management Committee',
            ventureName: 'Khalsa Parcharak Vidyala',
            highlight: false
        },
    ]
    return (
        <>
            <Header pageTitle={"Khalsa Parcharak Vidyala"} hideHeaderBanner={'true'} />
            <section className="full_width_section">
                <div className="ventureBanner">
                    <img src="/ventureBannerImage.png" />
                    <div className="ventureBannerContent">
                        <h1>Khalsa Parcharak Vidyala</h1>
                        <span className="ventureLocation">(Tarn Taran - 143401)</span>
                    </div>
                </div>
                <div className="ventureBannerStip">
                    <div className="stripCol">
                        <div className="stripIcon">
                            <img src="/location.png" alt="icons" />
                        </div>
                        <span>Tarn Taran - 143401</span>
                    </div>
                    <div className="stripCol">
                        <div className="stripIcon">
                            <img src="/telephone.png" alt="icons" />
                        </div>
                        <span>0183-2220539</span>
                    </div>
                    <div className="stripCol">
                        <div className="stripIcon">
                            <img src="/email_icon.png" alt="icons" />
                        </div>
                        <span>ckdhospitalasr@gmail.com</span>
                    </div>
                    <div className="stripCol">
                        <div className="stripIcon">
                            <img src="/Internet.png" alt="icons" />
                        </div>
                        <span>https://chiefkhalsadiwan.com/</span>
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
                        <div className="ventureDCBox">
                            <p>Education is a shared commitment among the stakeholders- motivated students, dedicated teachers, and enthusiastic parents; translating the learning of facts into learning to think, inducing a passion for learning, exploring new horizons and thus enriching lives….</p>
                        </div>
                        <div className="venturebtmCont">
                            <h1>Our <span>Philosophy</span></h1>
                            <p>Sri Guru Harkrishan Sr. Sec Public School, Majitha Road by pass since its inception on April 13, 2000, has always worked along the lines of the motto of our school “Learn to Serve”. We strive to cultivate independent thoughts in our students and promote the building of character, enabling them to contribute to their communities and the nation at large in a meaningful and positive way.</p>
                            <h1>Our <span>Mission</span></h1>
                            <p>We believe in providing a positive learning environment and supporting academic, social, moral, and personal development using creative and innovative strategies and techniques that meet and challenge all students to achieve high academic standards focusing on personal excellence and making them lifelong learners.</p>
                            <h1>Our <span>Vision</span></h1>
                            <p>We believe in providing a positive learning environment and supporting academic, social, moral, and personal development using creative and innovative strategies and techniques that meet and challenge all students to achieve high academic standards focusing on personal excellence and making them lifelong learners.</p>
                            <h1>Our <span>Goal</span></h1>
                            <p>We believe in providing a positive learning environment and supporting academic, social, moral, and personal development using creative and innovative strategies and techniques that meet and challenge all students to achieve high academic standards focusing on personal excellence and making them lifelong learners.</p>
                            <h1>Aesthetically Architectured <span>interior setup</span></h1>
                            <p>Being housed in beautifully constructed buildings and pious surroundings, the school has a tranquil ambiance. The state of art infrastructural facilities of the school include a 20,000 sq. ft. basement, with a hi-tech auditorium having the capacity to seat around 150 people, fully air-conditioned and smart classrooms, music rooms, art rooms, a dance room, computer labs, big and spacious library, math, science and English language labs, lecture theatres and administrative block. A newly built ultra-modern auditorium with a capacity to accommodate 500 people is another feather added to its cap. An infrastructural marvel namely kids block is indeed an angels paradise for the tiny tots with colorfully decorated rooms & student-friendly furniture.We believe holistic development is not defined by the walls of physical classes only and to re-direct connections between what our students are learning to the real world we have the Atal Tinkering Lab (ATL) in school, wherein they get to explore, experiment, discover and learn cutting across subject boundaries.</p>
                            <h1>Source of stamina building <span>- School grounds</span></h1>
                            <p>We believe in providing a positive learning environment and supporting academic, social, moral, and personal development using creative and innovative strategies and techniques that meet and challenge all students to achieve high academic standards focusing on personal excellence and making them lifelong learners.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}