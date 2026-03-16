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
    coinAndValueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(8),
    },
    coinValueTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
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
    coinAndTickContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileContainer: {
        width: scale(24),
        height: scale(24),
        borderRadius: scale(24),
        backgroundColor: ColorConstants.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileTxt: {
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(12),
        color: ColorConstants.BTNCOLOR,
    },
    profileAndNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    coinAndReceiveValContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(4),
    }
})