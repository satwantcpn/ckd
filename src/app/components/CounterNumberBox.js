export default function CounterNumberBox({Number,title}) {
    return (
       
    <div className='counterBox'>
        <div className='counterNumber'> {Number} <span> + </span> </div>
        <div className='counterNumberTitle'> {title} </div>
    </div> 

        )
    }
    