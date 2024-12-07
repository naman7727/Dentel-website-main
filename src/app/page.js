import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search';
import HeroSlider from './components/home/HeroSlider';
// import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Card from './components/home/Card';
import { treatments } from './Treatments';
import { CenterFocusStrong } from '@mui/icons-material';

export default function Home() {
  const data = [
    {
      icon: "/images/d1.png",
      heading: "Dental hygiene never forget!",
      paragraph: "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia",
    },
    {
      icon: "/images/d2.webp",
      heading: "Don’t rush when you brush!",
      paragraph: "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia",
    },
    {
      icon: "/images/d3.webp",
      heading: "Visit your dentist once in 6 months",
      paragraph: "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia",
    },

  ];

  const service1 = [
    {
      icon: "/images/nc3.png",
      heading: "Implants",
      paragraph: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales.",
    },
    {
      icon: "/images/icon6.png",
      heading: "Minor oral surgeries",
      paragraph: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales.",
    },
    {
      icon: "/images/icon2.png",
      heading: "Minor oral surgeries",
      paragraph: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales.",
    },

  ];


  const service2 = [
    {
      icon: "/images/icon3.png",
      heading: "Crown and bridge work",
      paragraph: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales.",
    },
    {
      icon: "/images/icon4.webp",
      heading: "Cosmetics",
      paragraph: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales.",
    },
    {
      icon: "/images/icon5.png",
      heading: "Root canal treatments",
      paragraph: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales.",
    },

  ];



  const prorerty = [
    {
      heading: "Aenean posuere sem imperdiet",
    },
    {
      heading: "Sed semper lorem sit amet ultrices mollis.",
    },
    {
      heading: "Vivamus vehicula diam ut velit lacinia",
    },
    {
      heading: "Proin condimentum nibh ut orci rutrum convallis.",
    },
    {
      heading: "Pellentesque sed mi in ipsum tempus pharetra",
    },
    {
      heading: "Aenean posuere sem imperdiet, viverra quam",
    },
  ]
  return (
    <main className=" min-w-screen flex flex-col justify-between" >
      <div className='relative font-roboto'>

        <HeroSlider />
      </div>

      {/* Section 2 */}
      <div className='relative py-6'>
        <div className='text-[2.5rem]  text-center py-12' style={{
          backgroundImage: 'url(/images/title_img1.png)',
          height: "15rem",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          backgroundPositionY: "29px",

        }} >
          <p className='xs:text-xl'>Our Umbrella of <span className='text-theamColor'>Dental Treatments</span></p>
          <p className='text-xl'>Smile...it raises your face value!</p>
        </div>

        <div className='flex flex-wrap gap-y-20 w-9/12 mx-auto'>
          {
            treatments.map((treatment, key) => {
              return (
                <Card key={key} img={treatment.image} heading={treatment.heading} paragraph={treatment.paragraph} />
              )
            })
          }
        </div>

      </div>

      {/* section 3 */}
      <div className='py-6 my-6'>
        <div className='absolute w-full xs:hidden md:w-[80%] sm:hidden md:hidden place-content-center'>
          <Image
            src="/images/f1.jpg"
            width={2500}
            height={1500}
            alt="Picture of the author"
          />
        </div>

        <div className='relative w-[50%] md:w-[80%] xs:w-[100%] text-center py-12 xs:py-4'>
          <p className='text-3xl xs:text-xl'>
            Relax…your Dentist Knows Best
          </p>
        </div>


        <div >
          {data.map((datas, keys) => {
            return (
              <div key={keys} className="relative flex items-center justify-center text w-[50%] xs:w-[100%] md:w-[80%] sm:w-[100%]  px-6 py-6 xs:py-1 ml-6 xs:ml-1 xs:px-2">
                <div className='ring ring-black ring-offset-2 rounded-[100%] w-[4rem] h-[4rem] flex justify-center items-center  '>
                  <Image
                    src={datas.icon}
                    width={40}
                    height={40}
                    alt="Picture of the author"
                    className=''
                  />
                </div>
                <div className='w-[50%] xs:w-[100%] md:w-[80%] sm:w-[100%] px-6 xs:px-2'>
                  <p className="text-[20px] xs:text-[18px] py-2">{datas.heading}</p>
                  <p className="text-[15px] xs:text-[15px] font-light">{datas.paragraph}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* section 4 */}
      <div className="relative flex items-center justify-center   xs:w-[100%] md:w-[80%] sm:w-[100%] xs:flex-col sm:flex-col md:flex-col  py-[4.5rem]  xs:py-1 ml-6 xs:ml-1 xs:px-2 ">
        <div className="w-[50%] xs:w-[100%] md:w-[80%] sm:w-[100%] flex flex-col justify-center gap-4">
          <div className="font-light  font-roboto">
            <p className='text-3xl font-semibold'>
              Take care of your teeth & gums
            </p>
            <p className='text-justify w-[60%] xs:w-[100%] md:w-[80%] sm:w-[100%] py-6 '>Researchers have found that people with gum disease are almost twice as likely to suffer from coronary heart disease…</p>
          </div>
          <div className="flex flex-col gap-8">
            {prorerty.map((prorertys, keys) => {
              return (
                <div key={keys} className="relative flex text w-[50%] xs:w-[100%] md:w-[80%] sm:w-[100%] pl-2  ">
                  <div className='ring ring-theamColor ring-offset-2 rounded-[100%] w-[0.5rem]  h-[0.5rem]  mt-2'>

                  </div>
                  <div className=' px-6'>
                    <p className="text-[15px] ">{prorertys.heading}</p>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className=' xs:w-full sm:w-full'>
          <Image
            src="/images/tooth-bg.png"
            width={500}
            height={100}
            alt="Picture of the author"
            backgroundRepeat="no-repeat"
            backgroundImage="center"
          
          />
        </div>
        <div></div>
      </div>


      {/* section5 */}
      <div>
        <div className='text-[2.5rem] text-center py-12' style={{
          backgroundImage: 'url(/images/title_img5.png)',
          height: "15rem",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          backgroundPositionY: "29px",

        }} >
          <p>Our<span className='text-theamColor'>Umbrella of Services</span></p>
          <p className='text-xl font-light'>Pain free procedures in dentistry</p>
        </div>

        <div className='flex w-full mx-auto xs:flex-col sm:flex-col md:flex-col gap-4 py-6  '>
          <div className='w-[40%] xs:w-[100%] md:w-[80%] md:place-self-center sm:w-[100%]'>
            {service1.map((datas, keys) => {
              return (
                <div key={keys} className="relative flex xl:justify-end items-center   py-2 xl:py-6 ">
                  <div className='ring ring-white ring-offset-2 rounded-[100%] w-[4.5rem] h-[4.5rem] ml-2 bg-theamColor  '>
                    <Image
                      src={datas.icon}
                      width={200}
                      height={150}
                      alt="Picture of the author"
                      backgroundPosition="center"
                    />
                  </div>
                  <div className='w-[50%] xs:w-[80%] md:w-[80%] sm:w-[80%] xs:px-2 md:px-4 sm:px-2 px-6'>
                    <p className="text-[20px] py-2">{datas.heading}</p>
                    <p className="text-[15px] font-light">{datas.paragraph}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='W-[20%] md:place-self-center xl:place-content-center'>
            <Image
              src="/images/services5-2.jpg"
              width={300}
              height={200}
              alt="Picture of the author"
              backgroundPosition="center"
            />
          </div>
          <div className='w-[40%] xs:w-[100%] md:w-[80%] sm:w-[100%] flex flex-col xl:text-end md:place-self-center  '>
            {service2.map((datas, keys) => {
              return (
                <div key={keys} className="relative flex items-center   py-2 xl:py-6 ">
                  <div className='ring xl:hidden  ring-white ring-offset-2 rounded-[100%] w-[4.5rem] h-[4.5rem] ml-2 bg-theamColor  '>
                    <Image
                      src={datas.icon}
                      width={200}
                      height={150}
                      alt="Picture of the author"
                      backgroundPosition="center"
                    />
                  </div>
                  <div className='w-[50%] xs:w-[80%] md:w-[80%] sm:w-[80%] xs:px-2 md:px-4 sm:px-2 px-6'>
                    <p className="text-[20px] py-2">{datas.heading}</p>
                    <p className="text-[15px] font-light">{datas.paragraph}</p>
                  </div>
                  <div className='ring  xs:hidden sm:hidden md:hidden ring-white ring-offset-2 rounded-[100%] w-[4.5rem] h-[4.5rem]  bg-theamColor  '>
                    <Image
                      src={datas.icon}
                      width={200}
                      height={150}
                      alt="Picture of the author"
                      backgroundPosition="center"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
