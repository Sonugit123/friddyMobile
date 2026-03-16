
import { StyleSheet } from "react-native";
import { ColorConstants } from "../../constants/colorConstants";
import { getTextStyle, scale } from "../../utils/scale";
import { Fontconstants } from "../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        backgroundColor: ColorConstants.SIGNIN_BOX,
        // width: scale(327),
        // height: scale(157),
        borderRadius: scale(8),
        padding: scale(16),
    },
    headingTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    usdcCoin: {
        width: scale(16),
        height: scale(16),
    },
    coinValueTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(8),
        ...getTextStyle(20),
    },
    valueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dollarLabelTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    dollarValueTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    tickMark: {
        width: scale(18),
        height: scale(18),
    },

    profileAndNameContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        gap: scale(8),
        // backgroundColor: 'blue'
    },
    coinAndReceiveValContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(4),
    },
    timerView: {
        width: scale(110),
        height: scale(38),
        borderWidth: 1,
        borderColor: ColorConstants.PROGRESS_RED_BORDER,
        backgroundColor: ColorConstants.WHITE,
        borderRadius: scale(32),
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    timerIcon: {
        width: scale(20),
        height: scale(20),
        marginLeft: scale(8),
        tintColor: ColorConstants.WARNING_TXT,
    },
    timerTxt: {
        color: ColorConstants.WARNING_TXT,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(20),
    }
})