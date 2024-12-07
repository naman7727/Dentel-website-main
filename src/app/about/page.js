/* eslint-disable react/jsx-key */
import Image from 'next/image';



export default function About() {
    const about = [
        {
            icon: "/images/easy-ways3.jpg",
            heading: "DENTAL EXPLORERS & DRILL",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis",
        },
        {
            icon: "/images/easy-ways1.jpg",
            heading: "MIRROR, MIRROR ON THE ROD…",
            paragraph: "Morbi hendrerit elit turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            icon: "/images/easy-ways2.jpg",
            heading: "DENTAL EXTRACTION PROCEDURE",
            paragraph: "Sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis. ",
        },

    ];
    return (

        <main className='   '>
            <div className='mt-24'></div>
            <div className=' relative ps-[20rem] w-[100%] h-40 flex flex-col justify-center   bg-[#F5F5F5]'>
                <p className='font-bold text-[2rem]'>ABOUT</p>
                <p>Home/ About </p>
            </div>

            <div className='w-full h-full   py-6'>
                <div className='text-center py-6 xs:py-2 sm:py-2'>
                    <p className='xs:text-xl text-3xl font-bold'>Pain <span className='text-theamColor'>Free Dentistry</span></p>
                </div>
                <div className='relative py-6 xs:py-2 sm:py-2 flex xs:flex-col justify-around xl:w-11/12 mx-auto gap-8 xs:gap-4 xs:p-2 sm:p-2 sm:gap-4'>
                    {about.map((data, keys) => {
                        return (
                            <div key={keys} className='pb-6 xs:pb-2 sm:pb-2 flex flex-col gap-6  border-2 '>
                                <div>
                                    <Image
                                        src={data.icon}
                                        width={600}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className='px-2 w-[70%] xs:w-full sm:w-full' >
                                    <h1>{data.heading}</h1>
                                    <p className='text-gray-400'>{data.paragraph}</p>
                                </div>
                                <div className='absolute top-[93%] xs:hidden px-2  '>
                                    <button className='border-2 bg-theamColor p-2'>Read More</button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

            <div className='w-[100vw] h-full py-12 xs:py-4 sm:py-4' style={{
                backgroundImage: 'url(/images/event-bg.jpg)',
            }}>
                <div className='text-[2.5rem]  text-center py-12' style={{
                    backgroundImage: 'url(/images/title_img1.png)',
                    height: "15rem",
                    width: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",

                    backgroundPositionY: "29px",

                }} >
                    <p className='xs:text-xl'>The <span className='text-theamColor'>Dental & Oral Health</span> Summit</p>
                    <p className='text-xl text-gray-400'>SInnovative ideas in dentistry</p>
                </div>

                <div className='w-[100%] flex xs:flex-col sm:flex-col gap-6 py-4'>
                    <div className='w-[50%] xs:w-[100%] sm:w-[100%] flex flex-row-reverse xs:flex-col '>
                    <Image
                                        src="/images/img3.webp"
                                        width={600}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                    </div>
                    <div className='w-[50%] xs:w-[100%] sm:w-[100%]  flex flex-col xs:justify-center xs:items-center xs:text-justify md:text-justify  sm:justify-center sm:items-center sm:text-justify   gap-6 py-6 '>
                        <div>
                            <h1 className='py-2'>Dental Health-Current Research</h1>
                            <div className='w-16 border border-black '></div>
                        </div>
                        <div className='w-[70%] md:w-[90%] xs:[100%] sm:[100%]'>
                            <p className='text-gray-400'>Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] flex xs:flex-col sm:flex-col  gap-6 py-4'>
                    <div className='w-[50%] xs:w-[100%] sm:w-[100%] flex flex-col xs:justify-center xs:items-center xs:text-justify md:text-justify sm:justify-center sm:items-center sm:text-justify  gap-6 py-6 items-end  '>
                        <div>
                            <h1 className='py-2'>Oral Hygiene - The Role of Mouthwash</h1>
                            <div className='w-16 border border-black  '></div>
                        </div>
                        <div className='w-[70%] xs:[100%] sm:[100%] md:w-[90%] xl:text-right md:text-right'>
                            <p className='text-gray-400'>Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
                        </div>
                    </div>
                    <div className='w-[50%] xs:w-[100%] sm:w-[100%] flex  '>
                    <Image
                                        src="/images/img4.webp"
                                        width={600}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                    </div>
                </div>
            </div>
            

            <div className='text-justify'>
            <div className='w-[100%] xs:h-full flex  xs:flex-col sm:flex-col  gap-6 py-4'>
                    <div className='w-[50%] xs:w-[100%] sm:w-[100%] flex flex-col gap-6 py-6 items-center justify-center  '>
                        <div>
                        <p className='xs:text-xl text-3xl'>The <span className='text-theamColor'>Role of Dental</span> Implants</p>
                            <div className='w-16 border border-black  '></div>
                        </div>
                        <div className='w-[70%] xs:[100%] sm:[100%] xl:text-right md:text-right'>
                            <p className='text-gray-400'>At <b>YOUNG NIGHT</b> glamor day event dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.</p>
                        </div>
                        <div>
                            <button className='border-2 border-theamColor p-4'>PURCHASE THEME</button>
                        </div>
                    </div>
                    <div className='w-[50%] xs:w-[100%] sm:w-[100%] flex  '>
                    <Image
                                        src="/images/img7-1.jpg"
                                        width={600}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                    </div>
                </div>

                <div className='w-[100%] flex xs:flex-col sm:flex-col gap-6 py-4'>
                <div className='w-[50%] xs:w-[100%] sm:w-[100%] flex flex-row-reverse  '>
                    <Image
                                        src="/images/img10.jpg"
                                        width={600}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                    </div>
                    <div className='w-[50%] xs:w-[100%] sm:w-[100%] flex flex-col gap-6 py-6 items-center justify-center  '>
                        <div>
                        <p className='xs:text-xl text-3xl'> <span className='text-theamColor'>Implants</span> in Dentistry</p>
                            <div className='w-16 border border-black  '></div>
                        </div>
                        <div className='w-[70%] xs:[100%] sm:[100%] xl:text-right md:text-right'>
                            <p className='text-gray-400'>At <b>YOUNG NIGHT</b> glamor day event dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.</p>
                        </div>
                        <div>
                            <button className='border-2 border-theamColor p-4'>DOWNLOAD NOW</button>
                        </div>
                    </div>
                   
                </div>
            </div>
            

            <div className=' relative' style={{
                    backgroundImage: 'url(/images/img13.jpg)',
                    height: "30rem",
                    width: "100%",
                   
                   


                }} >
                   <div className='bg-[#000000cc] absolute'></div>
            </div>

        </main>

    );
}
