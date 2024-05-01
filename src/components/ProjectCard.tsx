import React from 'react'


interface ProjectCardProps {
    type: string;
    title: string;
    description: string;

  }

export const  ProjectCard: React.FC<ProjectCardProps> = ({ type, title, description }) => {
    return (
        <div className='flex flex-col items-center justify-between mb-8 '>
            <h2 className='bg-blue-200 text-yellow-100 text-center text-montserrat font-semibold text-2xl leading-130 rounded-md py-1 pl-2 pr-1'>{type}</h2>
            <h4 className='text-black-100 text-center text-montserrat font-semibold text-2xl leading-130 px-6'>{title}</h4>
            <p className='text-black-200 text-center text-montserrat text-xl leading-170 px-4 '>{description}</p>
        </div>
       
    )
}
