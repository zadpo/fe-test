/* eslint-disable max-len */
import { SVGProps } from "react";

export function BellIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} fill="none" {...props}>
      <g fill="#FFD703" clipPath="url(#a)">
        <path
          fillRule="evenodd"
          d="M3.556 5.566a4.944 4.944 0 0 1 9.888 0v.61c0 1.468.2 2.768.503 3.679.153.459.32.782.474.977.114.144.182.173.197.178.365.004.66.3.66.667v.139a.667.667 0 0 1-.667.666H2.39a.667.667 0 0 1-.667-.666v-.14c0-.365.295-.662.66-.666.016-.005.083-.034.197-.178.154-.195.321-.518.474-.977.303-.91.503-2.211.503-3.678v-.611ZM2.379 11.01h.001-.001Z"
          clipRule="evenodd"
        />
        <path d="M6.667 12.821a.667.667 0 0 0-.536 1.063c.554.75 1.392 1.27 2.369 1.27.977 0 1.815-.52 2.37-1.27a.667.667 0 0 0-.537-1.063H6.667Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.5.621h16v16H.5z" />
        </clipPath>
      </defs>
    </svg>
  );
}
