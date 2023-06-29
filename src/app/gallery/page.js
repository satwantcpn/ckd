import VentureCardComponent from "../components/VentureCardComponent";
import GalleryListComponent from "../components/galleryList";
import Header from "../components/header";

export default function Gallery() {
    const galleries = [
        {
            id: 1,
            galleryImage: '/gallery3.jpg',
            galleryTitle: 'Foundation stone of New CKD School in Batala',
            galleryLink: '/gallery/1',
        },
        {
            id: 2,
            galleryImage: '/gallery2.jpg',
            galleryTitle: 'Foundation stone of New CKD School in Batala',
            galleryLink: '/gallery/1',
        },
        {
            id: 3,
            galleryImage: '/gallery1.jpg',
            galleryTitle: 'Foundation stone of New CKD School in Batala',
            galleryLink: '/gallery/1',
        },
        {
            id: 4,
            galleryImage: '/gallery1.jpg',
            galleryTitle: 'Foundation stone of New CKD School in Batala',
            galleryLink: '/gallery/1',
        },
        {
            id: 5,
            galleryImage: '/gallery1.jpg',
            galleryTitle: 'Foundation stone of New CKD School in Batala',
            galleryLink: '/gallery/1',
        },
        {
            id: 6,
            galleryImage: '/gallery1.jpg',
            galleryTitle: 'Foundation stone of New CKD School in Batala',
            galleryLink: '/gallery/1',
        }
    ]
    return (
        <>
            <Header pageTitle={"Gallery"} />
            <section className="full_width_section mt-4 pt-4 lineBg">
                <div className="container">
                    <div className="row">
                        {
                            galleries && galleries.map((item, index) => (
                                <div className="col-md-3 mb-4" key={item.id}>
                                    <GalleryListComponent galleryImage={item.galleryImage} galleryTitle={item.galleryTitle} galleryLink={item.galleryLink} />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        </>

    )
}