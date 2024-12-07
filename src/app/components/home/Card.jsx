import Image from "next/image";
const Card = ({ img, heading, paragraph }) => {
  return (
    <div className={`bg-white border rounded-lg  max-w-sm w-full mx-auto flex flex-row  justify-center hover:border-theamColor  `}>
      <div className=" ring ring-white ring-offset-2 rounded-[100%] w-[5rem] h-[5rem] mt-[-45px] mx-auto   absolute bg-[#aceefe] ">
        <Image
          src={`${img}`}
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </div>
      <div className="text-center px-6 py-12 ">
        <p className="text-xl  text-gray-800 py-4">{heading}</p>
        <p className="text-gray-400 mt-6">{paragraph}</p>
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
export default Card;
