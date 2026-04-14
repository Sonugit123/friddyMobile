import { StyleSheet } from "react-native";
import { ColorConstants } from "../../constants/colorConstants";
import { getTextStyle, scale } from "../../utils/scale";
import { Fontconstants } from "../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        // paddingHorizontal: scale(16),
        flex: 1,
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
        paddingHorizontal: scale(16),
    },
    headingTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(24),
        marginBottom: scale(16),
        ...getTextStyle(20),
    },
    buyCryptoBtn: {
        width: scale(163),
        height: scale(40),
        backgroundColor: ColorConstants.BACKARROWBG,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(8),
        flexDirection: 'row',
        gap: scale(8),
    },
    buyCryptoTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    dollarIcon: {
        width: scale(18),
        height: scale(18),
    },
    sellCryptoBtn: {
        width: scale(163),
        height: scale(40),
        backgroundColor: ColorConstants.BTNCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(8),
        flexDirection: 'row',
        gap: scale(8),
    },
    sellCryptoTxt: {
        color: ColorConstants.WHITE,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    buySellCryptoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(16),
    },
    dropDownView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(16),
        marginBottom: scale(16),
    },
    tradeView: {
        width: scale(343),
        height: scale(228),
        borderRadius: scale(12),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        padding: scale(16),
        marginTop: scale(8),
    },
    profileView: {
        width: scale(32),
        height: scale(32),
        borderRadius: scale(16),
        backgroundColor: ColorConstants.UNFILLED_PROGRESS,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileIconTxt: {
        fontFamily: Fontconstants.MEDIUM,
        color: ColorConstants.BTNCOLOR,
        ...getTextStyle(14),
    },
    profileNameTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    tradeAmountTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    infoIcon: {
        width: scale(12),
        height: scale(12),
        tintColor: ColorConstants.GRAY_LABEL,
    },
    tradeAmountRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(4),
        marginTop: scale(8),
    },
    usdcIcon: {
        width: scale(24),
        height: scale(24),
    },
    tradeAmountValue: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    usdcTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(12)
    },
    amountValueRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(4),
    },
    completedTradeTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    completedTradeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(4),
    },
    completedTradeBox: {
        width: scale(147),
    },
    checkMarkView: {
        width: scale(24),
        height: scale(24),
        borderRadius: scale(24),
        backgroundColor: ColorConstants.UNFILLED_PROGRESS,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkMarkIcon: {
        width: scale(16),
        height: scale(16),
    },
    completeTradesValue: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    completeTradeValueRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(4),
    },
    wiseIcon: {
        width: scale(24),
        height: scale(24),
    },
    completedTradeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(16),
    },
    openBtnView: {
        width: scale(311),
        height: scale(32),
        borderRadius: scale(8),
        backgroundColor: ColorConstants.BTNCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scale(16),
        alignSelf: 'center',
        flexDirection: 'row',
        gap: scale(8),
    },
    openBtnTxt: {
        color: ColorConstants.WHITE,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    arrowRightIcon: {
        width: scale(14),
        height: scale(14),
    }
})