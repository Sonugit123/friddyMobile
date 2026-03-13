import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../../utils/scale";
import { ColorConstants } from "../../../constants/colorConstants";
import { Fontconstants } from "../../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        // paddingHorizontal: scale(16),
        paddingHorizontal: scale(8),
        flex: 1,
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
        paddingHorizontal: scale(16),
    },
    modalCross: {
        width: scale(24),
        height: scale(24),
    },
    headingTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(20)
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(8),
    },
    conversionCompleteView: {
        width: scale(327),
        height: scale(189),
        backgroundColor: ColorConstants.SUCCESS_BOX_BG,
        borderRadius: scale(8),
        marginTop: scale(24),
        gap: scale(8),
        paddingHorizontal: scale(16),
    },
    conversionTxt: {
        color: ColorConstants.GREEN_DOT,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(16),
        ...getTextStyle(14),
    },
    fromCoin: {
        width: scale(24),
        height: scale(24),
    },
    fromTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(16),
    },
    fromCoinView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    userMenu: {
        width: scale(18),
        height: scale(18),
    },
    fromContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    forTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    toContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    toCoin: {
        width: scale(32),
        height: scale(32),
    },
    toTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(20),
    },
    tickIcon: {
        width: scale(18),
        height: scale(18),
    },
    friddyFeesTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    friddyFeesValue: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    friddyFeesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})