import Link from "next/link";

export default function CkdGlobalButton({ buttonText, buttonLink, buttonTarget }) {
    return (
        <>
            <div className="cuslobalBtn">
                {buttonText && <Link href={buttonLink} ><span>{buttonText}</span></Link>}
            </div>
        </>
    )
}