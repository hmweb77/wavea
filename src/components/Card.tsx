import { FC } from 'react';
import Image from 'next/image'
interface Props {
    image: any;
    color: string;
    title: string;
    description: string;
    isInView: boolean;
    idx: number;
}

const Card: FC<Props> = ({ image, color, title, description, isInView, idx }) => {

    return (
        <div className={`flex flex-col items-center `} style={{
            transform: isInView ? 'none' : 'translateY(100%)',
            opacity: isInView ? 1 : 0,
            transition: `all ${(idx + 1)/2}s ease-out 0.2s`,
        }}>
            <div className={`${color} py-10 px-24`}>
                <Image width={200} height={150} src={image} alt='logo' />

            </div>
            <div className="text-gris-400 bg-white-200 p-6 text-center">
                <h1 className='text-black'>{title}</h1>
                <p className='text-gris-400'>{description}</p>
            </div>
        </div>
    );
};

export default Card;
