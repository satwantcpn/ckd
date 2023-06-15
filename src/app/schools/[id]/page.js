import SingleVentureMemberComp from "@/app/components/singleVentureMemberCom";

export default function SingleVenture() {

    const memberList = [
        {
            id: 1,
            memberImage: '/m1.jpg',
            memberName: 'Dapinder Kaur',
            memberDesignation: 'Principal',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            highlight: true
        },
        {
            id: 2,
            memberImage: '/m2.jpg',
            memberName: 'S. Rajmohinder Singh Majitha (Former M.P.)',
            memberDesignation: 'Management Committee',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            highlight: false
        },
        {
            id: 3,
            memberImage: '/m3.jpg',
            memberName: 'S. Rajmohinder Singh Majitha (Former M.P.)',
            memberDesignation: 'Management Committee',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            highlight: false
        },
        {
            id: 4,
            memberImage: '/m2.jpg',
            memberName: 'S. Rajmohinder Singh Majitha (Former M.P.)',
            memberDesignation: 'Management Committee',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            highlight: false
        },
        {
            id: 5,
            memberImage: '/m3.jpg',
            memberName: 'S. Rajmohinder Singh Majitha (Former M.P.)',
            memberDesignation: 'Management Committee',
            ventureName: 'Sri Guru Harkrishan Sr. Sec. Public School',
            highlight: false
        }
    ]
    return (
        <>
            <section className="full_width_section">
                <div className="ventureBanner">
                    <img src="/schoolBanner.jpg" />
                    <div className="ventureBannerContent">
                        <h1>Sri Guru Harkrishan Sr. Sec. Public School</h1>
                        <span className="ventureLocation">(Majitha Road Bypass)</span>
                    </div>
                </div>
                <div className="ventureBannerStip">
                    <div className="stripCol">
                        <div className="stripIcon">
                            <img src="/location.png" alt="icons" />
                        </div>
                        <span>Majitha Road Bypass, Amritsar - 143001</span>
                    </div>
                    <div className="stripCol">
                        <div className="stripIcon">
                            <img src="/telephone.png" alt="icons" />
                        </div>
                        <span>0183-2570328, 6239652494</span>
                    </div>
                    <div className="stripCol">
                        <div className="stripIcon">
                            <img src="/email_icon.png" alt="icons" />
                        </div>
                        <span>sghps_mrbp@yahoo.com; 20126@cbseshiksha.in</span>
                    </div>
                    <div className="stripCol">
                        <div className="stripIcon">
                            <img src="/Internet.png" alt="icons" />
                        </div>
                        <span>www.sghpsmajitharoadbypass.edu.in</span>
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