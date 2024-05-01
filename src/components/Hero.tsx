import Image from "next/image";
import CreativeImage from "../assets/motivate-someone.svg"

export default function HeroSection() {
    return (     
            <div className="container text-center">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Text Section */}
                    <div className="md:w-1/2 px-2">
                        <h1 className=" md:text-6xl text-40 font-bold leading-126 text-black-100 font-montserrat">
                            we make <span className="text-blue-100">creative</span> things everyday
                        </h1>
                    </div>
                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <Image
                            src={CreativeImage}
                            width={511}
                            height={511}
                            alt="Creative Illustration"
                            className=""
                        />
                    </div>
                </div>
            </div>
    );
}
