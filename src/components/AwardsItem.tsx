interface AwardsItemProps {
    amount: string;
    title1: string;
    title2: string;
}
  const AwardsItem = ({ amount, title1, title2  }: AwardsItemProps) => {
    return (
      <div className="flex flex-col justify-center items-center space-y-[24px] w-[287px] h-[166px]" >
        <h4 className="h-[80px] text-center text-cyan-500 text-7xl font-light leading-[80px]">
          {amount}
        </h4>
        <h4 className="h-[62px] text-center text-white text-[28px] font-semibold">
            {title1} <br /> {title2}
        </h4>
      </div>
    );
  };
  
  export default AwardsItem;
  