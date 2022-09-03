import React from "react";
import { Svg, Path } from "react-native-svg";

const FilterIcon = ({ size = 32, color = "none" }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M2 3.77778C2 3.30628 2.1873 2.8541 2.5207 2.5207C2.8541 2.1873 3.30628 2 3.77778 2H32.2222C32.6937 2 33.1459 2.1873 33.4793 2.5207C33.8127 2.8541 34 3.30628 34 3.77778V8.37511C33.9999 8.84657 33.8125 9.29868 33.4791 9.632L22.0764 21.0347C21.743 21.368 21.5557 21.8201 21.5556 22.2916V26.8889L14.4444 34V22.2916C14.4443 21.8201 14.257 21.368 13.9236 21.0347L2.52089 9.632C2.18747 9.29868 2.0001 8.84657 2 8.37511V3.77778Z" stroke={color} strokeWidth="3" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
        
        
    );
};

export default FilterIcon;
