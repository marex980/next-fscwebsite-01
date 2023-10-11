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
  // <div className="flex flex-col sm:max-w-[250px] min-w-[210px]">
  <div>
    <h1 className="font-bold text-white">
      <span className={`${royale.className} fs-1000`}>{titleRoyale} {" "} <span className={`${royale.className} fs-700 inline-block`}>{titleRoyaleSeparator}</span></span>
      <span className={`${logirent.className} block fs-1000`}>{titleLogirent}</span>
    </h1>
    <p className="mt-[16px] font-normal fs-700 text-white">
      <span className={`${logirent.className} text__gradient text__gradient--fast`}>{subtitleFast}</span>
      <span className={`${logirent.className} `}>{subtitleComa}</span>{" "}
      <span className={`${logirent.className} text__gradient text__gradient--safe`}>{subtitleSafe}</span>{" "}
      <span className={`${logirent.className} `}>{subtitleAnd}</span>{" "}
      <span className={`${logirent.className} text__gradient text__gradient--cheap`}>{subtitleCheap}</span>{" "}
      <span className={`${logirent.className} block`}>
        {subtitleCustom}{" "}
        <span className={`${logirent.className} inline-block`}>{subtitleWebsites}</span>
      </span>{" "}
    </p>
  </div >
);

export default HeroHeadline;
