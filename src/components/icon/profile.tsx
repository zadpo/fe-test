/* eslint-disable max-len */
import { SVGProps } from "react";

export function ProfileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none" {...props}>
      <path
        fill="#00A6FF"
        d="M21.871 17.234v.001c.513 2.933-1.53 5.061-4.378 5.54-2.751.462-7.234.462-9.984 0-2.849-.479-4.892-2.607-4.379-5.54.435-2.49 2.545-4.04 5.12-3.906 1.882.098 3.038.342 4.377.342 1.353 0 2.256-.245 4.124-.342 2.575-.135 4.685 1.417 5.12 3.905Zm-9.72-15.113a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Z"
      />
    </svg>
  );
}
