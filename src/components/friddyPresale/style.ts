import { StyleSheet } from "react-native";
import { ColorConstants } from "../../constants/colorConstants";
import { Fontconstants } from "../../constants/fontConstants";
import { getTextStyle, scale } from "../../utils/scale";

export const style = StyleSheet.create({
    container: {
        backgroundColor: ColorConstants.FRIDDY_BOX_BG,
        padding: scale(16),
        gap: scale(16),
        borderRadius: scale(8),
    },
    friddyHeadingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    friddyHeadingTxt: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    liveDot: {
        width: scale(12),
        height: scale(12),
        borderRadius: scale(12),
        backgroundColor: ColorConstants.GREEN_DOT,
    },
    liveTxt: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(12),
    },
    liveContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(11),
    },
    timerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    timerContainer: {
        alignItems: 'center',
    },
    timerValue: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(16),
    },
    timerLabel: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.MEDIUM,
        marginTop: scale(4),
        ...getTextStyle(12),
    },
    buyNowBtn: {
        height: scale(48),
        borderRadius: scale(4),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorConstants.BTNCOLOR,
        flexDirection: 'row',
        gap: scale(4),
    },
    icon: {
        width: scale(12),
        height: scale(12),
    },
    buyNowTxt: {
        color: ColorConstants.WHITE,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(14),
    }
})