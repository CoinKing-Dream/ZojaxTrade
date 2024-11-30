import FaceBookImg from  "../assets/follow/facebook_Logo.svg";

const FollowUs = () => {
    // const ImgList = [YouTubeImg, TwitterImg, FaceBookImg]
    const ImgList = [FaceBookImg]
    return (
        <div className="flex justify-center md:w-[160px] sm:w-[140px] w-[120px] md:h-[60px] sm:h-[50px] h-[37px] relative text-white bg-gradient-to-r from-gray-100 to-transparent p-1 rounded-[30px]">
            <div className="relative flex items-center rounded-[30px] w-full h-full">
                <a className="cursor-pointer absolute left-[0px]" href="#">
                    {
                        ImgList.map((item, idx) => (
                            <img
                                src={item}
                                className="md:w-[50px] sm:w-[40px] w-[30px]"
                                key={idx}
                            />
                        ))
                    }
                </a>
                <div className="w-full h-full bg-[#357ca8] rounded-[25px] flex justify-end items-center pr-3 md:text-[20px] sm:text-[18px] text-[15px]">
                    Follow Us
                </div>
            </div>
        </div>
    )
}

export default FollowUs;