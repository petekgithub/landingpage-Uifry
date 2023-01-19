import React, { HTMLProps } from "react";
import styles from "./styles.module.scss";

export type ButtonStyle = "primary" | "default";

type ButtonProps= HTMLProps<HTMLButtonElement> & {
  className?: string;
  type?: ButtonStyle;
  onClick?: (event: React.MouseEvent) => void;
  htmlType?: "button"
}


const DownloadButton = ({
  htmlType,
  children,
  className,
  type = "primary",
  onClick,
  ...rest
}: ButtonProps) => {

  return (
    <button 
      className={styles.downloadbutton}
      type={htmlType}
      onClick={onClick}
      {...rest}
    >
      Download
    </button>
  );
};

export default DownloadButton;
