/* eslint-disable @next/next/no-img-element */
// components/HeroSlider.js
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Zoom, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [
  "./images/slider1-2.JPG",
  "./images/slider2-2.JPG",
  "./images/slider3-2.JPG",
];

const HeroSlider = () => {
  const zoomOutProperties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true,
  };

  const sliderData = [
    {
      icon: "/images/d1.png",
      text: "Oral Examinations",
    },
    {
      icon: "/images/d2.webp",
      text: "Braces & Bonding",
    },
    {
      icon: "/images/d3.webp",
      text: "Dentures & Repairs",
    },
    {
      icon: "/images/d5.png",
      text: "Root Canals",
    },
    {
      icon: "/images/d6.webp",
      text: "Crowns and Caps",
    },
    {
      icon: "/images/d7.webp",
      text: "Extractions &  Gum Surgery",
    },
  ];

  return (
    <Slide {...zoomOutProperties}>
      <div className="each-slide-effect">
        <div
          className="relative  h-[100vh] w-screen"
            style={{
              backgroundImage: `url(${images[0]})`,

              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",

              backgroundPositionY: "29px",
              backgroundAttachment: "fixed",
            }}
        >
          <div className="absolute top-[50%] translate-y-[-50%] w-[100%] flex ">
            <div className="w-[60%]"></div>
            <div className="w-[40%] xs:w-full flex flex-col gap-4">
              <div className="font-light text-[3rem] sm:text-[20px] xs:text-[20px] font-roboto">
                <p className="  xs:font-bold	">
                  Make Your{" "}
                  <span className="font-bold text-theamColor ">Dental</span>
                </p>
                <p className="xs:font-bold  ">Experience a Lot Brighter</p>
              </div>
              <div>
                <p>
                  With best fecilities and better equipments. you are in safe
                  hands
                </p>
              </div>
              <div className="flex gap-6 xs:hidden">
                <button className="border-2 border-black px-4 py-2 ">
                  Consult a Dentist
                </button>
                <button className="border-2  px-4 py-2 border-theamColor text-theamColor">
                  Make an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="each-slide-effect">
        <div
          className="relative  h-[100vh] w-[100%] "
          style={{
            backgroundImage: `url(${images[1]})`,

            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",

            backgroundPosition: "",
            backgroundPositionX: "2px",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute top-[50%] translate-y-[-50%] w-[100%] flex ">
            <div className="w-[50%]"></div>
            <div className="w-[50%] xs:w-full flex flex-col gap-4">
              <div className="font-light text-[3rem] xs:text-[20px] font-roboto">
                <p className="xs:font-bold">
                  Expertise in Major <br />
                  <span className="font-bold text-theamColor ">
                    Dental Procedures
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-4 xs:hidden">
                {sliderData.map((data, keys) => {
                  return (
                    <div key={keys} className="py-2 flex gap-6 items-center">
                      <Image
                        src={data.icon}
                        width={40}
                        height={40}
                        alt="Picture of the author"
                      />
                      <p className="text-[24px] font-light">{data.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="each-slide-effect">
        <div
          style={{
            backgroundImage: `url(${images[2]})`,
            height: "100vh",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "",
            backgroundPositionX: "2px",
            backgroundAttachment: "fixed",
          }}
        >
          <span>Slide 1</span>
        </div>
      </div> */}
    </Slide>
  );
};

export default HeroSlider;
