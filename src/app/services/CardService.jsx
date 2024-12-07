 import Image from "next/image";
const CardService = ({ img, heading, paragraph }) => {
  return (
    <div className={`bg-white border rounded-lg  max-w-sm w-full mx-auto flex flex-col  justify-center hover:border-theamColor  `}>
      <div className="   mx-auto   bg-[#aceefe] ">
        <Image
          src={`${img}`}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="text-center p-6 ">
        <p className="text-xl  text-gray-800 ">{heading}</p>
        <p className="text-gray-400 mt-3">{paragraph}</p>
        <div className="hover:visible absolute "></div>
      </div>


      <div className="relative bg-gray-300 hover:bg-gray-400 transition duration-300 ease-in-out">
    
    </div>



      {/* <div className="hover:visible absolute "><Image
          src={`${}}`}
          width={100}
          height={100}
          alt="Picture of the author"
        /></div> */}
    </div>
  );
};
export default CardService;
