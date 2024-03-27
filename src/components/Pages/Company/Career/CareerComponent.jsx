import React from 'react'

const Single=({image,title,subtitle})=>{
    return(
    <div className='w-[300px] h-[300px] bg-gray-100 p-6 flex flex-col justify-center items-center text-center gap-1'>
    <div><img src={image} alt="career1" /></div>
    <h1 className='text-2xl font-semibold'>{title}</h1>
    <p>{subtitle}</p>

    </div>
    )
}


const CareerComponent = () => {
  return (
    <div className="career-component flex flex-col px-8 sm:px-12 lg:px-24 gap-12 mt-16 ">
      <h1 className="text-4xl">Career</h1>
      <div className="career-components flex gap-8 justify-between">
        <Single
          title="Graphic Designer"
          subtitle="Experience - 2 to 3 years"
          image="./carrer1.webp"
        ></Single>
        <Single
          title="Developer"
          subtitle="Experience - 2 to 3 years"
          image="./carrer2.webp"
        ></Single>
        <Single
          title="Content Writer"
          subtitle="Experience - 2 to 3 years"
          image="./carrer3.webp"
        ></Single>
      </div>
    </div>
  );
}

export default CareerComponent
