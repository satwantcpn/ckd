'use client'
import { useEffect, useState } from "react"
import axios from 'axios'
import VentureCardComponent from "../components/VentureCardComponent"
axios.defaults.withCredentials = true
export default function GetVentureList({ ventureType, ventrueLink }) {
    const [ventureData, setVenturedata] = useState([])
    const config = {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true
    }
    useEffect(() => {
        getVentureList()
    }, [])
    const getVentureList = async () => {
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_apiurl}/venture/type/${ventureType}`, config)
            if (data.success) {
                setVenturedata(data.ventureType.ventures)
            }
        } catch (error) {
            console.log('Get Venture', error)
        }
    }
    let ventureImageUrl;
    return (
        <>
            {
                ventureData && ventureData.map((item) => (
                    <div className="col-md-4 mb-4" key={item._id}>
                        <VentureCardComponent ventureImage={ventureImageUrl = item.ventureImage && item.ventureImage.publicUrl ? item.ventureImage.publicUrl : '/hs1.png'} ventureTitle={item.title} ventureAddress={item.address} ventrueLink={`${ventrueLink}/${item.slug}`} ventureCity={item.city} venturePincode={item.pincode} />
                    </div>
                ))
            }
        </>
    )
}