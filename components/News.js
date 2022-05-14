import React from "react";

const News = () => {
  const NewsContent = [
    { date: "2020.05.10", text: "配送状況のお知らせ", url: "/" },
    { date: "2020.05.09", text: "新店舗オープンのお知らせ", url: "/" },
    { date: "2020.05.02", text: "配送状況のお知らせ", url: "/" },
  ];

  return (
    <div className="items-center flex flex-col justify-center pt-8 mb-8">
      <h1>News</h1>

      {NewsContent.map((item) => {
        return (
          <a
            href={item.url}
            className="flex py-6 border-b-2 border-gray-200 w-11/12 sm:w-11/12 md:w-3/4 "
            key={item}
          >
            <p className="text-gray-600">{item.date}</p>{" "}
            <p className="pl-12 text-gray-600">{item.text}</p>
          </a>
        );
      })}
    </div>
  );
};

export default News;
