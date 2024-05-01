import Star from "@/assets/starFeedback.svg"
import Image from "next/image";
const Feedback = () => {
    return (
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between mt-28 mb-24 md:mb-56 ml-36 mr-36">
            <h5 className="text-blue-200 text-4xl md:text-5xl font-bold leading-130 font-montserrat w-300 h-120 md:w-382 md:h-120 pr-8 md:pr-1">WHAT OTHERS SAY ABOUT US</h5>
            <div className="flex flex-col items-center w-390 ">
                <div className="flex items-center ">
                    <Image src={Star} alt="star" className="w-153 h-27 "/>
                </div>
                <p className="text-blue-500 text-2xl leading-160 font-Lexend w-308 md:w-500">“I had a wonderful experience and I would highly recommend this business to others.”</p>
                <p className="text-blue-500 text-lg leading-180 w-280">Brooklyn Simmons - CEO, HCBA</p>
            </div>
        </div>
    );
};

export default Feedback;
