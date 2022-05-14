import React from "react";
import Image from "next/image";
// 写真
import plantsMainImg from "../public/plantsmain.jpg";
import plantsubImg1 from "../public/hutuu.jpg";
import plantsubImg2 from "../public/ookime.jpg";
import plantsubImg3 from "../public/turusu2.jpg";
import plantsubImg4 from "../public/taniku2.jpg";

const PlanstGrid = () => {
  const plants = [
    { title: "鉢植えタイプ", src: plantsubImg1 },
    { title: "大きめ", src: plantsubImg2 },
    { title: "吊るすタイプ", src: plantsubImg3 },
    { title: "多肉植物", src: plantsubImg4 },
  ];

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 py-10 mx-4">
      {/* 商品グリットメイン */}
      <div className=" flex justify-center ">
        <div className="flex flex-col ">
          <h1 className="pt-2  justify-center flex">観葉植物</h1>

          <div className="pt-2 rounded-md">
            <Image
              src={plantsMainImg}
              alt="ts"
              width={680}
              height={500}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      {/* 商品グリットメイン */}
      {/* 右4マス */}
      <div className=" grid grid-cols-2 gap-4">
        {plants.map((plant) => {
          return (
            <div className=" flex justify-center " key={plant}>
              <div className="flex flex-col ">
                <h2 className="pt-2   justify-center flex">{plant.title}</h2>
                <div className="pt-2">
                  <Image
                    src={plant.src}
                    alt="ts"
                    width={330}
                    height={220}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* 右4マス */}
    </div>
  );
};

export default PlanstGrid;
