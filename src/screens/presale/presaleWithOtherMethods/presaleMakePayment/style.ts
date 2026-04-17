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
    makePaymentView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(24),
    },
    makePaymentTxt: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(20),
        marginTop: scale(8),
    },
    makePaymentIcon: {
        width: scale(24),
        height: scale(24),
    },
    subHeading: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    sendToTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(16),
        marginTop: scale(8),
    },
    paytmIcon: {
        width: scale(32),
        height: scale(32),
    },
    paytmView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(16),
    },
    paytmTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(16),
    },
    accountNameTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(16),
    },
    copyIcon: {
        width: scale(16),
        height: scale(16),
    },
    copyIconView: {
        width: scale(24),
        height: scale(24),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorConstants.SIGNIN_BOX,
        borderRadius: scale(8),
    },
    accountName: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    accountNameView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(8),
    },
    accountNoTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(16),
    },
    accountNo: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    accountNoView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(8),
    },
    accountNoContainer: {
        width: scale(155),
    },
    accountNoAndRoutingNoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    addressContainer: {
        marginTop: scale(16),
    },
    addressTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    address: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        width: scale(280),
    },
    addressView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(8),
        alignItems: 'center',
    },
    copyDetailsTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(14),
    },
    copyDetailsView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        gap: scale(8),
        marginTop: scale(16),
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})