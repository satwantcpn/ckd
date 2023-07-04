'use client'
import Header from "@/app/components/header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiSolidUser } from 'react-icons/bi';
import { AiFillCalendar } from 'react-icons/ai';
export default function SingleBlog({ params }) {
    const router = useRouter()
    const recentPosts = [
        {
            id: 1,
            title: 'Test Recent Post Title',
            image: '/gk1.png'
        },
        {
            id: 2,
            title: 'Test Recent Post Title',
            image: '/gk1.png'
        },
        {
            id: 3,
            title: 'Test Recent Post Title',
            image: '/gk1.png'
        },
        {
            id: 4,
            title: 'Test Recent Post Title',
            image: '/gk1.png'
        }
    ]

    return (
        <>
            <Header pageTitle={"Why the Biggest Myths About Business May Actually Be Right"} />
            <section className="full_width_section mt-4 pt-4 lineBg">
                <div className='container'>
                    <div className="row pt-4 pb-4">
                        <div className="col-md-8">
                            <div className="sp_featureImage">
                                <Image src="/sp_feature.jpg" alt="Featured Image" width={962} height={574} />
                            </div>
                            <div className="spMeta">
                                <div className="spMetaItem">
                                    <div className="spMetaIcon"><BiSolidUser /></div> Auther Name
                                </div>
                                <div className="spMetaItem">
                                    <div className="spMetaIcon"><AiFillCalendar /></div> June 20, 2023
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="spRecentBlog">
                                <h4>Recent Blogs</h4>
                                {
                                    recentPosts && <ul>
                                        {recentPosts.map((item) => (
                                            <li key={item.id}>
                                                <div className="recentBlogItems">
                                                    <div className="rbImage">
                                                        {item.image && <Image src={item.image} alt="Recent Post" width={150} height={150} />}
                                                    </div>
                                                    <div className="rbContent">
                                                        <h5>{item.title}</h5>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                }

                            </div>
                        </div>
                    </div>
                    <div className="row pt-4 pb-4">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </section>
        </>
    )
}