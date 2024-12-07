/* eslint-disable react/jsx-key */
import Image from 'next/image';
import CardService from './CardService';
import { treatments } from './Treatments';
export default function Services() {
    return (
        <main>
            <div className='h-20'></div>
            <div className='h-full w-full my-6 '>
                <div className='py-6'>
                    <div className='text-[2.5rem]  text-center content-center  ' style={{
                        backgroundImage: 'url(/images/nc1_hover.png)',
                        height: "15rem",
                        width: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }} >
                        <p className='xs:text-xl'>Dental <span className='text-theamColor'>Outreach Programs</span></p>
                        <p className='text-xl'>OPD Dental checkup</p>
                    </div>
                </div>
                <div className='flex flex-wrap gap-y-20 w-9/12  mx-auto'>
                    {
                        treatments.map((treatment, key) => {
                            return (
                                <CardService key={key} img={treatment.image} heading={treatment.heading} paragraph={treatment.paragraph} />
                            )
                        })
                    }
                </div>
            </div>

            <div>
                <div className='py-6'>
                    <div className='text-[2.5rem]  text-center content-center  ' style={{
                        backgroundImage: 'url(/images/title_img3.png)',
                        height: "15rem",
                        width: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }} >
                        <p className='xs:text-xl'>Painless <span className='text-theamColor'>Dentistry is Our Goal</span></p>
                        <p className='text-xl'>Dental hygiene for all is our motto </p>
                    </div>
                </div>
                <div className='w-10/12'>
                    <div className='w-[33.33%]'>
                        <div className=' m-20 h-[10rem] border-dashed border-2 w-0 border-slate-950 self-center'>
                            <div className=" ring ring-white ring-offset-2 rounded-[100%] w-[5rem] h-[5rem] mt-[-45px] mx-auto   absolute bg-[#aceefe] ">
                                <Image
                                    src='/images/logo.webp'
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

        </main>

    );
}
