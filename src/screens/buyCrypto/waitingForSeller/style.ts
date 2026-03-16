import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../../utils/scale";
import { ColorConstants } from "../../../constants/colorConstants";
import { Fontconstants } from "../../../constants/fontConstants";

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
    waitingForSellerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(24),
    },
    waitingForSellerTxt: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(20),
        marginTop: scale(8),
    },
    waitingForSellerIcon: {
        width: scale(24),
        height: scale(24),
    },
        subHeading: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(8),
        ...getTextStyle(14),
    },
    yourBalanceContainer: {
        width: scale(327),
        height: scale(131),
        marginTop: scale(24),
        borderWidth: scale(1),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        padding: scale(16),
        borderRadius: scale(8),
    },
    yourBalanceTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    coinIcon: {
        width: scale(20),
        height: scale(20),
    },
    balanceValue: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(20),
    },
    coinContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(8),
    },
    pendingCoin: {
        width: scale(16),
        height: scale(16),
    },
    pendingValue: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    pendingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(8),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        width: scale(191),
        height: scale(24),
        paddingHorizontal: scale(8),
        paddingVertical: scale(2),
        borderRadius: scale(4),
    },
    pendingTxt: {
        color: ColorConstants.BTNCOLOR,
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