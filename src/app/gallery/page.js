import VentureCardComponent from "../components/VentureCardComponent";
import GalleryListComponent from "../components/galleryList";

export default function Gallery() {
    const galleries = [
        {
            id: 1,
            galleryImage: '/gallery3.jpg',
            galleryTitle: 'Foundation stone of New CKD School in Batala',
        },
        {
            id: 2,
            galleryImage: '/gallery2.jpg',
            galleryTitle: 'Foundation stone of New CKD School in Batala',
        },
        {
            id: 3,
            galleryImage: '/gallery1.jpg',
            galleryTitle: 'Foundation stone of New CKD School in Batala',
        },
        {
            id: 4,
            galleryImage: '/gallery1.jpg',
            galleryTitle: 'Foundation stone of New CKD School in Batala',
        },
        {
            id: 5,
            galleryImage: '/gallery1.jpg',
            galleryTitle: 'Foundation stone of New CKD School in Batala',
        },
        {
            id: 6,
            galleryImage: '/gallery1.jpg',
            galleryTitle: 'Foundation stone of New CKD School in Batala',
        }
    ]
    return (
        <section className="full_width_section">
            <div className="container">
                <div className="row">
                    {
                        galleries && galleries.map((item, index) => (
                            <div className="col-md-4 mb-4" key={item.id}>
                                <GalleryListComponent galleryImage={item.galleryImage} galleryTitle={item.galleryTitle} />
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}