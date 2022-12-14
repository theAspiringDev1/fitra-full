import React from "react";
import { Svg, Path, Defs, ClipPath, Rect, G } from "react-native-svg";

const StoreBusinessIcon = ({ size = 32, color = "none" }) => {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clip-path="url(#clip0_1216_4492)">
                <Path d="M32.0039 13.5617C32.0039 13.3575 31.9504 13.1565 31.8545 12.9759L28.0478 5.80717V1.20962C28.0478 0.514989 27.4893 0 26.7892 0H5.24113C4.54113 0 3.95201 0.514989 3.95201 1.20962V5.80628L0.147255 12.9744C0.0509103 13.1554 0.0022583 13.357 0.0022583 13.5618C0.0022583 14.5636 0.537162 15.4472 1.30454 15.9638V29.0672C1.30454 30.6631 2.60769 32 4.2006 32H27.802C29.4102 32 30.7145 30.663 30.7145 29.0672V15.9522C31.4626 15.4341 32.0039 14.5559 32.0039 13.5617ZM25.5154 2.51279V4.89233H6.50355V2.51279H25.5154ZM6.00512 7.42415H26.0241L29.4102 13.7823C29.3424 13.8836 29.2249 13.94 29.0945 13.94L2.91167 13.934C2.78382 13.934 2.67113 13.889 2.60583 13.789L6.00512 7.42415ZM18.609 29.4872H13.3332V23.6735C13.3332 22.2409 14.5214 21.0755 15.9724 21.0755C17.422 21.0755 18.609 22.241 18.609 23.6735V29.4872ZM27.802 29.4872H21.1414V23.6735C21.1414 20.8538 18.8198 18.5599 15.9724 18.5599C13.1236 18.5599 10.8009 20.8539 10.8009 23.6735V29.4872H4.2006C4.00555 29.4872 3.8369 29.276 3.8369 29.0672V16.4435L28.1629 16.4434V29.0672C28.1629 29.2689 28.0053 29.4872 27.802 29.4872Z" fill={color} />
            </G>
            <Defs>
                <ClipPath id="clip0_1216_4492">
                    <Rect width="32" height="32" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>

    );
};

export default StoreBusinessIcon;
