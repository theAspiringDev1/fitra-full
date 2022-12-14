import React from "react";
import { Svg, Path, G, ClipPath, Rect, Defs } from "react-native-svg";

const PersonalCareIcon = ({ size = 32, color = "none" }) => {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clip-path="url(#clip0_1216_4519)">
                <Path d="M1 7.5V31H11V7.5L8.5 5H3.5L1 7.5Z" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path d="M8.5 5V3H3.5V5" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path d="M4.5 3V1H7.5V3" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path d="M11 10.5H1V27.5H11V10.5Z" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path d="M9 13.5H3V24.5H9V13.5Z" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path d="M9 15.5H6C5.73478 15.5 5.48043 15.6054 5.29289 15.7929C5.10536 15.9804 5 16.2348 5 16.5C5 16.7652 5.10536 17.0196 5.29289 17.2071C5.48043 17.3946 5.73478 17.5 6 17.5C6.26522 17.5 6.51957 17.6054 6.70711 17.7929C6.89464 17.9804 7 18.2348 7 18.5C7 18.7652 6.89464 19.0196 6.70711 19.2071C6.51957 19.3946 6.26522 19.5 6 19.5C5.73478 19.5 5.48043 19.6054 5.29289 19.7929C5.10536 19.9804 5 20.2348 5 20.5C5 20.7652 5.10536 21.0196 5.29289 21.2071C5.48043 21.3946 5.73478 21.5 6 21.5H9" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path d="M13 19H25V29C25 29.5304 24.7893 30.0391 24.4142 30.4142C24.0391 30.7893 23.5304 31 23 31H15C14.4696 31 13.9609 30.7893 13.5858 30.4142C13.2107 30.0391 13 29.5304 13 29V19Z" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path d="M21 19V15L22 13V6H23C23.2652 6 23.5196 6.10536 23.7071 6.29289C23.8946 6.48043 24 6.73478 24 7V13.5L23 15.5V19" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path d="M22 6H20V11H22" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path d="M20 7.5H22" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path d="M20 9H22" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path d="M15 19V15L16 13V6H17C17.2652 6 17.5196 6.10536 17.7071 6.29289C17.8946 6.48043 18 6.73478 18 7V13.5L17 15.5V19" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path d="M16 6H14V11H16" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path d="M14 7.5H16" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path d="M14 9H16" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path d="M13 21H25" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path d="M29 8C30.1046 8 31 7.10457 31 6C31 4.89543 30.1046 4 29 4C27.8954 4 27 4.89543 27 6C27 7.10457 27.8954 8 29 8Z" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path d="M27.5 14C28.3284 14 29 13.3284 29 12.5C29 11.6716 28.3284 11 27.5 11C26.6716 11 26 11.6716 26 12.5C26 13.3284 26.6716 14 27.5 14Z" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path d="M23.5 4C24.3284 4 25 3.32843 25 2.5C25 1.67157 24.3284 1 23.5 1C22.6716 1 22 1.67157 22 2.5C22 3.32843 22.6716 4 23.5 4Z" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
                <Path opacity="0.2" d="M19 21V25C19 25.2652 19.1054 25.5196 19.2929 25.7071C19.4804 25.8946 19.7348 26 20 26C20.2652 26 20.5196 25.8946 20.7071 25.7071C20.8946 25.5196 21 25.2652 21 25C21 24.7348 21.1054 24.4804 21.2929 24.2929C21.4804 24.1054 21.7348 24 22 24C22.2652 24 22.5196 24.1054 22.7071 24.2929C22.8946 24.4804 23 24.7348 23 25V27C23 27.2652 23.1054 27.5196 23.2929 27.7071C23.4804 27.8946 23.7348 28 24 28C24.2652 28 24.5196 27.8946 24.7071 27.7071C24.8946 27.5196 25 27.2652 25 27V21" stroke={color} strokeWidth="1.5" stroke-linejoin="round" />
            </G>
            <Defs>
                <ClipPath id="clip0_1216_4519">
                    <Rect width="32" height="32" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>







    );
};

export default PersonalCareIcon;
