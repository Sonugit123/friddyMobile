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
    emailContainer: {

    },
    currentEmailTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(18),
    },
    emailView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        width: scale(343),
        height: scale(48),
        borderWidth: scale(1),
        borderRadius: scale(8),
        borderColor: ColorConstants.BACKARROWBG,
        paddingLeft: scale(16),
        marginTop: scale(8),
    },
    tickMark: {
        width: scale(16),
        height: scale(16),
    },
    emailTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    }
})