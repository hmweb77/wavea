import { FC } from 'react';
import Image from 'next/image'
interface Props {
    image: string;
    color:string;
    title: string;
    description: string;
    isInView: boolean;
    idx: number;
}

const Card: FC<Props> = ({ image,color, title, description, isInView, idx }) => {
    return (
        <div className={`flex flex-col items-center`} style={{
            transform: isInView ? 'none' : 'translateY(100%)',
            opacity: isInView ? 1 : 0,
            transition: `all ${(idx + 1) / 2}s ease-out 0.2s`,
        }}>
            <Image  src={image} alt='logo'/>
            <div className=" bg-white-200 p-8 text-center" >
            <h3 className="text-black">{title}</h3>
            <p className="text-gris-400">{description}</p>
            </div>
        </div>
    );
};

export default Card;
