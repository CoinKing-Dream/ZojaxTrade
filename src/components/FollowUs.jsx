import FaceBookImg from  "../assets/follow/facebook_Logo.svg";

const FollowUs = () => {
    // const ImgList = [YouTubeImg, TwitterImg, FaceBookImg]
    const ImgList = [FaceBookImg]
    return (
        <div className="flex justify-end items-center md:w-[185px] sm:w-[140px] w-[100px] md:h-[60px] sm:h-[50px] h-[40px] relative text-white ">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent rounded-[30px]" />
            <div className="relative rounded-[30px] md:w-[170px] w-[130px] md:h-[50px] sm:h-[40px] h-[35px]">
                <a className="cursor-pointer absolute left-[-10px]" href="#">
                    {
                        ImgList.map((item, idx) => (
                            <img
                                src={item}
                                className="md:w-[50px] sm:w-[40px] w-[35px]"
                                key={idx}
                            />
                        ))
                    }
                </a>
                <div className="md:w-[150px] w-[120px] md:h-[50px] sm:h-[40px] h-[35px] bg-[#357ca8] rounded-[25px] flex justify-end items-center pr-3 md:text-[20px] sm:text-[18px] text-[15px]">
                    Follow Us
                </div>
            </div>
        </div>
    )
}

export default FollowUs;