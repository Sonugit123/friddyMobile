import { StyleSheet } from "react-native";
import { Fontconstants } from "../../constants/fontConstants";
import { getTextStyle, scale } from "../../utils/scale";

export const style = StyleSheet.create({
    container: {
        marginHorizontal: scale(16),
    },
    screenNameTxt: {
        color: '#000000',
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(24),
        ...getTextStyle(24),
    },
})