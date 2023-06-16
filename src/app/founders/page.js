import FounderListComp from "../components/FounderComponent";
import Header from "../components/header";

export default function founder() {
  const founders = [
    {
      id: 1,
      title: 'Bhai Veer Singh Ji',
      image: '/gallery3.jpg',
      duration: '(1872 - 1957)',
    },
    {
      id: 2,
      title: 'Bhai Arjan Singh Ji Bagrhian',
      image: '/gallery3.jpg',
      duration: '(1875 - 1946)',
    },
    {
      id: 3,
      title: 'S. Sunder Singh Ji Majithia',
      image: '/gallery3.jpg',
      duration: '(1872 - 1941)',
    },
    {
      id: 4,
      title: 'S. Tarlochan Singh Ji',
      image: '/gallery3.jpg',
      duration: '(1872 - 1947)',
    },
    {
      id: 5,
      title: 'S. Harbans Singh Ji Attari',
      image: '/gallery3.jpg',
      duration: '(1878 - 1936)',
    },
  ]
  return (
    <>
      <Header pageTitle={'Founders'} />
      <main>
        <section className="full_width_section mt-4 pt-4 lineBg">
          <div className="container">
            <div className="row">
              {
                /* founders && founders.map((item, index) => (
                  <div className="col-md-3 mb-4" key={item.id}>
                    <FounderListComp title={item.title} image={item.image} duration={item.duration} />
                  </div>
                )) */
              }
            </div>

          </div>
        </section>
        <section className='pt-4 pb-4'>
          <div className='container'>
            <h2 className='commingSoon'>Work in progress....</h2>
          </div>
        </section>
      </main>
    </>

  )
}