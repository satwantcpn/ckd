import Header from "../components/header";
import GetVentureList from "../helpers/GetVenturesList";

export default function CollageList() {
    return (
        <>
            <Header pageTitle={"Colleges"} />
            <section className="full_width_section mt-4 pt-4 lineBg">
                <div className="container">
                    <div className="row">
                        <GetVentureList ventureType={process.env.NEXT_PUBLIC_collages} ventrueLink="/college" />
                    </div>

                </div>
            </section>
        </>

    )
}