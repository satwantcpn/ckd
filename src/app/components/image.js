
import Image from 'next/images';

export default function Header() {
    return (

        <header className='headerBar'>
            <div className='logoBox'>
                <Image
                    src="/images/logo.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>

        </header>

    )
}
