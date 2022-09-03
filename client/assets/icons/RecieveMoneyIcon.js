import React from "react";
import { Svg, Path } from "react-native-svg";

const RecieveMoneyIcon = ({ size = 32, color = "none" }) => {
    return (
        <Svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
        >
            <Path
                d="M3 3c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v12c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h18c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-12c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM22 9h-20v-3c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h18c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707zM2 11h20v7c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-18c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707z"
                stroke={color}
                fill="currentColor"
            ></Path>
        </Svg>
    );
};

export default RecieveMoneyIcon;
