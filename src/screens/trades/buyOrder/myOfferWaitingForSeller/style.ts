import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../../../utils/scale";
import { ColorConstants } from "../../../../constants/colorConstants";
import { Fontconstants } from "../../../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        paddingHorizontal: scale(8),
        flex: 1,
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
        paddingHorizontal: scale(16),
    },
    proofOfPaymentView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(24),
    },
    proofOfPaymentTxt: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(20),
        marginTop: scale(8),
    },
    proofOfPaymentIcon: {
        width: scale(24),
        height: scale(24),
    },
    subHeading: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(8),
    },
    yourBalanceView: {
        width: scale(327),
        height: scale(131),
        borderWidth: scale(1),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        borderRadius: scale(8),
        marginTop: scale(24),
        padding: scale(16),
        gap: scale(8),
    },
    yourBalanceTxt: {
        color: ColorConstants.GRAY_Heading,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    BalanceUsdcCoin: {
        width: scale(20),
        height: scale(20),
    },
    balanceValue: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(20),
    },
    balanceAndCoinView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    pendingView: {
        flexDirection: 'row',
        width: scale(191),
        gap: scale(8),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        borderRadius: scale(4),
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: scale(2),
    },
    pendingTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    pendingUsdcCoin: {
        width: scale(16),
        height: scale(16),
    },
    pendingValue: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    pdfView: {
        width: scale(327),
        height: scale(38),
        borderWidth: scale(1),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        borderRadius: scale(8),
        borderStyle: 'dashed',
        marginTop: scale(24),
        alignItems: 'center',
        justifyContent: 'center',
    },
    pdfTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    checkedIcon: {
        width: scale(14),
        height: scale(14),
        tintColor: ColorConstants.BTNCOLOR,
    },
    pdfInnerView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    }
})