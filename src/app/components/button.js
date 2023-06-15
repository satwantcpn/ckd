export default function GlobalButton({buttonValue,color}) {
     
    const orangeColor = {
        backgroundColor: '#ff623e',
        color: '#fff',
    };

    const myStyle = {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: '180px',
      };

    return (        
        <div className='globalButton' style={color}>            
            <span> {buttonValue} </span>
        </div>
        )
    }
    