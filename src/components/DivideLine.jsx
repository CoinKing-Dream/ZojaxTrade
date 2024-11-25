const DivideLine = ({text}) => {
    return (
        <>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent from-gray-300 via-50% via-gray-200 to-transparent to-100%">{text}</div>
        </>
    )
}

export default DivideLine;