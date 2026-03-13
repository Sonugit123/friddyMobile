import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../utils/scale";
import { ColorConstants } from "../../constants/colorConstants";
import { Fontconstants } from "../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        marginTop: scale(16),
    },
    eyeIcon: {
        width: scale(16),
        height: scale(16),
    },
    showChartView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        width: scale(117),
        height: scale(24),
        justifyContent: 'center',
    },
    pnlContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pnlText: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    showChartTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    recentTransactionTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(20),
    },
    seeAllTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
        // marginTop: scale(16),
    },
    recentTransactionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: scale(16),
    },
    arrowIconView: {
        width: scale(44),
        height: scale(44),
        borderRadius: scale(22),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrowIcon: {
        width: scale(24),
        height: scale(24),
    },
    transactionTypeView: {

    },
    transactionTypeTxt: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    transactionTypeSubTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(12),
        marginTop: scale(6),
    },
    iconAndTransactionType: {
        flexDirection: 'row',
        gap: scale(8),
    },
    transactionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: scale(24),
    },
    amtView: {
        alignItems: 'flex-end',
    }
})