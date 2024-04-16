import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import { HiHand } from 'react-icons/hi';

const WhatsappButton = () => {
  return (

    <div className="fixed bottom-5 right-5 z-50 flex items-center justify-between p-2 ">
         <div className="flex items-center  bg-slate-200 rounded-full ">
        <HiHand className="text-yellow-400 text-2xl " />
        <span className="font-bold px-2">Chat with us</span>
      </div>
      <div className="ml-2 flex cursor-pointer">
        <Link href="https://wa.me/+351929345644" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-3 rounded-full shadow-lg cursor-pointer">
        <FaWhatsapp className="text-3xl ml-2" />
        </Link>
    </div>
    </div>
  );
};

 // This is assuming you're using Heroicons


    // <div className="fixed bottom-5 right-5 flex items-center justify-between p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg text-white cursor-pointer">
    //   <div className="flex items-center space-x-2">
    //     <HiHand className="text-yellow-400 text-2xl animate-wave" />
    //     <span className="font-bold">Chat with us</span>
    //   </div>
    //   <div className="ml-2 flex">
    //     <span className="flex items-center justify-center w-8 h-8 bg-red-600 text-xs font-bold rounded-full">
    //       3
    //     </span>
    //     <FaCommentDots className="text-3xl " />
    //   </div>
    // </div>
 

export default WhatsappButton;
