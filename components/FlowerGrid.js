import React from "react";

import FlowerImg1 from "../public/hanataba1.jpg";
import FlowerImg2 from "../public/hanataba2.jpg";
import FlowerImg3 from "../public/hanataba3.jpg";
import FlowerImg4 from "../public/hanataba4.jpg";
import ArrangementImg1 from "../public/aranngement1.jpg";
import ArrangementImg2 from "../public/arrangement2.jpg";
import SeikaImg1 from "../public/pexels-brigitte-tohm-378006.jpg";
import SeikaImg2 from "../public/seika2.jpg";
import SeikaImg3 from "../public/seika3.jpg";
import SeikaImg4 from "../public/seika4.jpg";
import Image from "next/image";
import { FaCloudShowersHeavy } from "react-icons/fa";

const FlowerGrid = () => {
  const Flowers = [
    { src: FlowerImg1 },
    { src: FlowerImg2 },
    { src: FlowerImg3 },
    { src: FlowerImg4 },
  ];

  const Seikas = [
    { src: SeikaImg1 },
    { src: SeikaImg2 },
    { src: SeikaImg3 },
    { src: SeikaImg4 },
  ];

  return (
    <div className="py-10 grid lg:grid-cols-2 md:grid-cols-1 gap-4 mx-4">
      {/* 商品グリットメイン */}
      <div className="bg-gray-50 flex justify-center mb-2">
        <div className="flex flex-col w-full  ">
          <h1 className="pt-2 justify-center flex">花束</h1>
          <p className=" pt-2 flex justify-center text-gray-500">
            メッセージカード付き{" "}
          </p>
          <div className="  grid grid-cols-2 pt-2 mx-auto gap-4">
            {Flowers.map((Flower) => {
              return (
                <div key={Flower}>
                  <Image
                    src={Flower.src}
                    alt="ts"
                    width={360}
                    height={220}
                    objectFit="cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 商品グリットメイン */}
      {/* 右4マス */}
      <div className=" grid grid-cols-1 gap-4">
        <div className="bg-gray-50 flex justify-center ">
          <div className="flex flex-col ">
            <h2 className="pt-2  justify-center flex">
              フラワーアレンジメント
            </h2>

            <div className="pt-2  gap-4 grid grid-cols-2">
              <div className="">
                <Image
                  src={ArrangementImg1}
                  alt="ts"
                  width={360}
                  height={220}
                  objectFit="cover"
                />
              </div>
              <div className="">
                <Image
                  src={ArrangementImg2}
                  alt="ts"
                  width={360}
                  height={220}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="bg-gray-50 flex justify-center ">
          <div className="flex flex-col ">
            <h2 className="pt-2 justify-center flex">バラ売り</h2>

            <div className="pt-2 mx-3 gap-4 grid  grid-cols-2 sm:grid-cols-4 md:grid-cols-4">
              {Seikas.map((Seika) => {
                return (
                  <div key={Seika}>
                    <Image
                      src={Seika.src}
                      alt="seika"
                      width={170}
                      height={200}
                      objectFit="cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>{" "}
      </div>
      {/* 右4マス */}
    </div>
  );
};

export default FlowerGrid;
