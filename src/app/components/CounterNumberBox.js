export default function CounterNumberBox({ Number, title }) {
    return (

        <div className='counterBox'>
            <div className='counterNumber'> <span className="counterNumberValue" akhi={Number}>{Number}</span> <span> + </span> </div>
            <div className='counterNumberTitle'> {title} </div>
        </div>

    )
}
