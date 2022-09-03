import React from "react";
import { Svg, Path } from "react-native-svg";

const HealtIcon = ({ size = 32, color = "none" }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M4.05735 3.68276C5.68632 1.93232 7.85748 0.969777 10.1071 1.00072C12.3567 1.03167 14.5064 2.05366 16.097 3.84839L17.188 5.08038L18.1594 3.98471C19.5724 2.38851 21.4303 1.39093 23.4195 1.16022C25.4088 0.929521 27.4077 1.47982 29.0791 2.7183C30.7505 3.95678 31.9921 5.80764 32.5945 7.95867C33.1968 10.1097 33.123 12.4292 32.3856 14.5261H29.885C30.6635 13.0005 30.9238 11.2077 30.6172 9.48177C30.3107 7.75583 29.4582 6.21449 28.2188 5.14503C26.9794 4.07556 25.4376 3.55092 23.8806 3.66888C22.3237 3.78684 20.8579 4.53936 19.7564 5.78619L17.9866 7.7826C17.7748 8.02144 17.4875 8.15562 17.188 8.15562C16.8886 8.15562 16.6013 8.02144 16.3895 7.7826L14.4989 5.64987C13.395 4.4 11.9215 3.65283 10.36 3.55117C8.79853 3.4495 7.25861 4.00046 6.03454 5.09876C4.81048 6.19706 3.98812 7.76566 3.72463 9.50476C3.46115 11.2439 3.77502 13.0315 4.60625 14.5261H2.06505C1.3798 12.7047 1.20329 10.691 1.55906 8.75354C1.91484 6.81611 2.78598 5.04715 4.05622 3.68276H4.05735ZM24.7642 20.8962H27.8814L18.0058 32.6046C17.8997 32.7302 17.7721 32.83 17.6306 32.898C17.4892 32.966 17.3369 33.0007 17.1832 33C17.0295 32.9993 16.8775 32.9632 16.7365 32.8938C16.5956 32.8245 16.4687 32.7235 16.3636 32.5969L6.64148 20.8962H9.44358C9.53845 20.8962 9.6322 20.8911 9.72481 20.8809L17.1948 29.8705L24.7642 20.8962ZM13.6801 10.7715C13.5896 10.5672 13.4522 10.3941 13.2821 10.2703C13.1121 10.1464 12.9157 10.0764 12.7134 10.0676C12.5112 10.0587 12.3105 10.1113 12.1325 10.2199C11.9544 10.3285 11.8055 10.4891 11.7013 10.6848L8.64282 16.4371H2.12943C1.82988 16.4371 1.54261 16.5713 1.3308 16.8103C1.11899 17.0492 1 17.3732 1 17.7111C1 18.049 1.11899 18.3731 1.3308 18.612C1.54261 18.8509 1.82988 18.9852 2.12943 18.9852H9.28207C9.47696 18.9851 9.66852 18.9282 9.83813 18.8199C10.0077 18.7116 10.1496 18.5557 10.25 18.3673L12.58 13.9859L16.1783 22.1027C16.2651 22.2983 16.395 22.4655 16.5556 22.588C16.7162 22.7106 16.902 22.7845 17.0953 22.8025C17.2885 22.8206 17.4826 22.7822 17.6589 22.6911C17.8352 22.6 17.9877 22.4592 18.1018 22.2824L21.909 16.3759L24.3712 18.6896C24.5741 18.8804 24.8299 18.985 25.094 18.9852H31.8706C32.1701 18.9852 32.4574 18.8509 32.6692 18.612C32.881 18.3731 33 18.049 33 17.7111C33 17.3732 32.881 17.0492 32.6692 16.8103C32.4574 16.5713 32.1701 16.4371 31.8706 16.4371H25.5029L22.4286 13.5476C22.3098 13.4359 22.172 13.353 22.0237 13.3038C21.8753 13.2547 21.7196 13.2404 21.5662 13.2619C21.4128 13.2834 21.2649 13.3402 21.1318 13.4288C20.9986 13.5174 20.883 13.6359 20.792 13.7769L17.3676 19.0896L13.6801 10.7702V10.7715Z" fill={color} stroke={color}/>
        </Svg>
    );
};

export default HealtIcon;
