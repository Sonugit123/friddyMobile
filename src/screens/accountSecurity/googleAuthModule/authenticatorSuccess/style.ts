import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../../utils/scale";
import { Fontconstants } from "../../../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        // paddingHorizontal: scale(8),
        flex: 1,
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
        paddingHorizontal: scale(16),
    },
    headingTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(20),
        marginTop: scale(16),
    },
    tickMarkContainer: {
        width: scale(343),
        height: scale(55),
        backgroundColor: ColorConstants.SUCCESS_VIEW,
        borderRadius: scale(4),
        marginTop: scale(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    tickMark: {
        width: scale(32),
        height: scale(32),
    }
})