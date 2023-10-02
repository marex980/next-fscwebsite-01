import styles from "../styles";

const HeroHeadline = ({
  titleRoyale,
  titleRoyaleSeparator,
  titleLogirent,
  subtitleFast,
  subtitleComa,
  subtitleSafe,
  subtitleAnd,
  subtitleCheap,
  subtitleCustom,
  subtitleWebsites,
}) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
      <span>{titleRoyale} <span className="inline-block">{titleRoyaleSeparator}</span>{" "} </span> 
      <span className="block">{titleLogirent}</span>
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      <span className="text-yellow-200">{subtitleFast}</span>{" "}
      <span className="">{subtitleComa}</span>{" "}
      <span className="text-blue-500">{subtitleSafe}</span>{" "}
      <span className="">{subtitleAnd}</span>{" "}
      <span className="text-green-500">{subtitleCheap}</span>{" "}
      <span className="block">
        {subtitleCustom}{" "}
        <span className="inline-block">{subtitleWebsites}</span>
      </span>{" "}
    </p>
  </div>
);

export default HeroHeadline;
