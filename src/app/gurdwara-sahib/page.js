import VentureCardComponent from "../components/VentureCardComponent";
import Header from "../components/header";
import GetVentureList from "../helpers/GetVenturesList";

export default function GurdwaraSahibList() {
    return (
        <>
            <Header pageTitle={"Gurdwara Sahib"} />
            <section className="full_width_section mt-4 pt-4 lineBg">
                <div className="container">
                    <div className="row">
                        <GetVentureList ventureType={process.env.NEXT_PUBLIC_gurdwarasahib} ventrueLink="/gurdwara-sahib" />
                    </div>

                </div>
            </section>
        </>

    )
}