import React from "react";

interface NewsItemProps {
  imgSrc: string;
  date: string;
  title: string;
  description: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ imgSrc, date, title, description }) => {
  return (
    <div className="relative flex flex-col justify-center items-center">
        <img src={imgSrc} alt="News Image" className="" />
        <div className="w-[312px] h-[318px] absolute bg-[#F1F5FA] top-[202px]">
        <div className="pt-[44px] pb-[43px] pl-[29px] pr-[28px] flex flex-col space-y-3">
            <h5 className="text-secondary text-base font-bold leading-tight">{date}</h5>
            <h4 className="text-2xl font-semibold leading-7 text-primary">{title}</h4>
            <p className="text-primary text-lg font-normal leading-relaxed">{description}</p>
        </div>
        </div>
    </div>
  );
};

export default NewsItem;
