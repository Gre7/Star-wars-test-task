import { CSSProperties } from 'react';

export type CloseIconProps = {
  color?: string;
  width?: number;
  height?: number;
  styles?: CSSProperties;
};

const CloseIcon = ({
  width = 32,
  height = 32,
  color = '#212121',
  styles,
}: CloseIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...styles }}
    >
      <rect
        width="35.4683"
        height="9.21254"
        rx={3}
        transform="matrix(0.705326 0.708883 -0.705326 0.708883 6.5 0.328125)"
        fill={color}
      />
      <rect
        width="35.4683"
        height="9.21254"
        rx={3}
        transform="matrix(-0.705326 0.708883 -0.705326 -0.708883 31.5156 6.53125)"
        fill={color}
      />
    </svg>
  );
};
export default CloseIcon;
