
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import Image from "next/image";
import Logo from "../assets/logo.svg"
import { footerLinks } from "../constants/Footer";

export default function Footer() {
  return (
    <footer className='max-container bg-blue-600 p-6'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col m-10'>
        <div className='flex flex-col items-start'>
          <h4 className='font-Lexend-Deca text-2xl leading-normal font-medium mb-6 text-white-200' style={{
                textDecoration: 'underline',
                textDecorationColor: '#FFC310', 
                textDecorationThickness: '5px', 
                marginBottom: '10px' 
              }}>
            About Us
          </h4>
          <p className='mt-6 text-base leading-7 font-Lexend-Deca  sm:max-w-sm text-gris-200'>
            Connect with your site visitor’s on a personal level and make sure that your site becomes a regular stop in their daily browsing.
          </p>
          <div className='flex items-center gap-5 mt-8'>
            <FaInstagram style={{ fontSize: "3em" }} className="bg-yellow-200 p-2 rounded-full " />
            <FaLinkedin style={{ fontSize: "3em" }} className="bg-yellow-200 p-2  rounded-full  " />
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-Lexend-Deca text-2xl leading-normal font-medium mb-6 text-white-200' style={{
                textDecoration: 'underline',
                textDecorationColor: '#FFC310', 
                textDecorationThickness: '5px', 
                marginBottom: '10px' 
              }}>
                {section.title}
              </h4>

              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-Lexend-Deca text-base leading-normal text-gris-200 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-Lexend-Deca cursor-pointer'>
          <FaCopyright />
          <p>Copyright. All rights reserved. Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};




