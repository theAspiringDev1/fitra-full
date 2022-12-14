import React from "react";
import { Svg, Path, Defs, ClipPath, Rect, G } from "react-native-svg";

const TrainIcon = ({ size = 32, color = "none" }) => {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clip-path="url(#clip0_1239_4505)">
                <Path d="M6.19715 3C5.32929 3 4.50858 3.345 3.96643 3.93812L3.05286 4.93687C2.46143 5.58375 1.38286 5.68875 0.643361 5.17125C-0.0959245 4.65375 -0.215782 3.71 0.375647 3.06312L1.28858 2.06437C2.48143 0.759375 4.28786 0 6.19715 0H25.8C27.65 0 29.5214 0.759375 30.65 2.06437L31.6214 3.06312C32.2143 3.71 32.0929 4.65375 31.2929 5.17125C30.6143 5.68875 29.5357 5.58375 28.95 4.93687L28.0357 3.93812C27.4929 3.345 26.6714 3 25.8 3H17.7143V6H20.5714C24.3571 6 27.4286 8.63125 27.4286 12V22C27.4286 23.9125 26.4071 25.6125 24.8143 26.7125L29.4929 30.8062C29.9929 31.2437 29.6357 32 28.8643 32H26.0929C25.4857 32 24.9 31.7875 24.4714 31.4125L20.5714 28H11.4286L7.52858 31.4125C7.09786 31.7875 6.51643 32 5.91 32H3.07429C2.36143 32 2.00429 31.2437 2.50858 30.8062L7.18572 26.7125C5.59286 25.6125 4.57143 23.9125 4.57143 22V12C4.57143 8.63125 7.57858 6 11.4286 6H14.2857V3H6.19715ZM11.4286 10C10.1643 10 9.14286 10.8938 9.14286 12V14C9.14286 15.1062 10.1643 16 11.4286 16H20.5714C21.8357 16 22.8571 15.1062 22.8571 14V12C22.8571 10.8938 21.8357 10 20.5714 10H11.4286ZM11.4286 20C10.1643 20 9.14286 20.8937 9.14286 22C9.14286 23.1063 10.1643 24 11.4286 24C12.6929 24 13.7143 23.1063 13.7143 22C13.7143 20.8937 12.6929 20 11.4286 20ZM20.5714 24C21.8357 24 22.8571 23.1063 22.8571 22C22.8571 20.8937 21.8357 20 20.5714 20C19.3071 20 18.2857 20.8937 18.2857 22C18.2857 23.1063 19.3071 24 20.5714 24Z" fill={color} />
            </G>
            <Defs>
                <ClipPath id="clip0_1239_4505">
                    <Rect width="32" height="32" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>



    );
};

export default TrainIcon;
