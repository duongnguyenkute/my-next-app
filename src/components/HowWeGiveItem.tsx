import Button from "./Button";

interface HowWeGiveItemProps {
  imageSrc: string;
  title1: string;
  title2: string;
}

const HowWeGiveItem = ({ imageSrc, title1, title2 }: HowWeGiveItemProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-[170px]">
      <img className="mb-2" src={imageSrc} alt={`${title1} ${title2}`} />
      <h4 className=" h-[60px] text-primary text-center text-[28px] font-semibold">{title1} <br /> {title2}</h4>
      <Button className="text-primary w-[170px]  h-[48px] mt-[23px]">Apply Now</Button>
    </div>
  );
};

export default HowWeGiveItem;
