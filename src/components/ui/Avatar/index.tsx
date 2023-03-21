import { FC } from "react";

type AvatarProps = {
  className?: string;
  alt: string;
  width: number;
  height: number;
  src: string;
};

const Avatar: FC<AvatarProps> = ({ className, alt, width, height, src }) => {
  return <img className={className} src={src} alt={alt} width={width} height={height} />;
};

export default Avatar;
