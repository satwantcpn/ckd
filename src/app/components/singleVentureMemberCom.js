import Image from "next/image"

export default function SingleVentureMemberComp({ memberImage, memberName, memberDesignation, ventureName, highlight, hideSep }) {
    const highlightMbr = highlight ? 'highlightMbr' : ''
    return (
        <>
            <div className={`singleVMemberItem ${highlightMbr}`}>
                <div className="sVMImg">
                    <Image src={memberImage} alt="Member Image" width={240} height={204} />
                </div>
                <div className="sVMDetail">
                    <span className="sVMDesignation">{memberDesignation}</span>
                    <span className="sVMName">{memberName}</span>
                    {!hideSep && <svg width="49" height="6" viewBox="0 0 49 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L4.67598 5L9.6648 1L14.6536 5L18.8547 1L23.581 5L28.8324 1L33.2961 5L38.0223 1L43.7989 5L48 1" stroke="#F6821F" /></svg>}
                    <span className="sVName">{ventureName}</span>
                </div>
            </div>
        </>
    )
}