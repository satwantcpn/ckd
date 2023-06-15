import Image from 'next/image';

export default function serviceCard({title,imgName,Description}) {
    return (
       
    <div className='serviceCard'>                                  
        <div className='serviceTitle'>                                
            <p> {title} </p>
            <p className='imgBox'> 
                <Image src={imgName} alt="Donation Service" width={28} height={29} /> 
            </p>
        </div>
        <div className='serviceCardDescription'>
            <p> {Description} </p>
        </div>
    </div>

        )
    }
    