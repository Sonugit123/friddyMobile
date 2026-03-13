import { StyleSheet } from "react-native";
import { fontScale, getTextStyle, scale } from "../../../../utils/scale";
import { Fontconstants } from "../../../../constants/fontConstants";
import { ColorConstants } from "../../../../constants/colorConstants";

export const style = StyleSheet.create({
    container: {
        backgroundColor: ColorConstants.WHITE,
        flex: 1,
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
        paddingHorizontal: scale(16),

    },
    welcomeText: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(16),
        ...getTextStyle(20),
    },
    loginText: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(8),
        ...getTextStyle(14),
    },
})