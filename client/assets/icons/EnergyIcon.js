import React from "react";
import { Svg, Path } from "react-native-svg";

const EnergyIcon = ({ size = 32, color = "none" }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M16 0C7.46666 0 0 6.86222 0 16C0 19.7689 1.31555 23.2356 3.50222 25.9733L0 29.4933L2.50666 32L6.00889 28.4978C8.84617 30.7636 12.369 31.9985 16 32C20.0889 32 24.1955 30.4356 27.3067 27.3067C28.7968 25.8253 29.9787 24.0634 30.7843 22.1228C31.5898 20.1821 32.003 18.1012 32 16V0H16ZM28.4444 16C28.4444 19.3244 27.1467 22.4533 24.8 24.8C23.6467 25.9587 22.2752 26.8774 20.7647 27.5029C19.2543 28.1284 17.6348 28.4485 16 28.4444C9.13777 28.4444 3.55555 22.8622 3.55555 16C3.55555 12.6222 4.87111 9.45778 7.28888 7.12889C9.60605 4.83307 12.7381 3.5483 16 3.55556H28.4444V16Z" fill={color}/>
        <Path d="M9.70663 17.1201L16.9066 17.8312L12.5689 23.7512C12.3733 24.0357 12.3911 24.4268 12.64 24.6757C12.9066 24.9423 13.3511 24.9601 13.6355 24.6934L22.8088 16.4623C23.3955 15.929 23.0755 14.9512 22.2755 14.8801L15.0755 14.169L19.4133 8.24901C19.6088 7.96456 19.5911 7.57345 19.3422 7.32456C19.2105 7.19392 19.0334 7.11915 18.848 7.11584C18.6625 7.11253 18.4829 7.18093 18.3466 7.30678L9.1733 15.5379C8.60441 16.0712 8.92441 17.049 9.70663 17.1201Z" fill={color}/>
        </Svg>
        
    );
};

export default EnergyIcon;
