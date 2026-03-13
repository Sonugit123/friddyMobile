import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../../utils/scale";
import { Fontconstants } from "../../../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        backgroundColor: ColorConstants.WHITE,
        flex: 1,
        paddingHorizontal: scale(8),
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
        paddingHorizontal: scale(16),
    },
    headingTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.SEMIBOLD,
        marginTop: scale(24),
        ...getTextStyle(20),
    },
    subHeadingTxt: {
        color: ColorConstants.CODE_DESC,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(8),
    }
})