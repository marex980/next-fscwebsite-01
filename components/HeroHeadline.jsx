import styles from "../styles";
import { royale, logirent, poppins } from '../styles/fonts';

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
  <div className="flex flex-col sm:max-w-[250px] min-w-[210px]">
    <h1 className="mt-[26px] font-bold text-[4.3rem] text-white">
      <span className={`${royale.className}`}>{titleRoyale} {" "} <span className={`${royale.className} text-[2rem] inline-block`}>{titleRoyaleSeparator}</span></span>
      <span className={`${logirent.className} block`}>{titleLogirent}</span>
    </h1>
    <p className="mt-[16px] font-normal text-[24px] text-white leading-[32.4px]">
      <span className={`${logirent.className} text-yellow-200`}>{subtitleFast}</span>
      <span className={`${logirent.className} `}>{subtitleComa}</span>{" "}
      <span className={`${logirent.className} text-blue-500`}>{subtitleSafe}</span>{" "}
      <span className={`${logirent.className} `}>{subtitleAnd}</span>{" "}
      <span className={`${logirent.className} text-green-500`}>{subtitleCheap}</span>{" "}
      <span className={`${logirent.className} block`}>
        {subtitleCustom}{" "}
        <span className={`${logirent.className} inline-block`}>{subtitleWebsites}</span>
      </span>{" "}
    </p>
  </div >
);

export default HeroHeadline;
