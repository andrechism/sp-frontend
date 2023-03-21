import { FC } from "react";
import LogoImg from "../../../assets/logo.png";

type LogoProps = {
    className?: string
}

const Logo: FC<LogoProps> = ({
    className = ""
}) => {
  return <img className={className} src={LogoImg} width={30} height={30} alt="Shaw and Partners"/>;
};

export default Logo;
