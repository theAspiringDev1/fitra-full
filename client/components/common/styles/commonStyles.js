import { StyleSheet } from "react-native";
import styled from "styled-components/native";

import colors from "assets/themes/colors";
import { FONTS } from "constants/constant";

const commonStyles = StyleSheet.create({
    defaultPage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.gray,
    },
    heading: {
        fontFamily: "Lato-Bold",
        fontSize: 30,
    },
});

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${colors.gray};
`;

export const HeadingThree = styled.Text`
    font-family: ${FONTS.BLACK};
    font-size: 25px;
    line-height: 25px;
`;

export const Panel = styled.View`
    elevation: 10;
    width: 100%;
    height: 250px;
    background-color: ${colors.white};
    border-radius: 10px;
    padding: 10px;
`;

export const BgContainer = styled.View`
    position: absolute;
    top: -20%;
    right: -30%;
`;

export default commonStyles;
