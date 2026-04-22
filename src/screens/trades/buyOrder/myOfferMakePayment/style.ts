import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../../utils/scale";
import { Fontconstants } from "../../../../constants/fontConstants";

export const style = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
        paddingHorizontal: scale(16),
    },
    container: {
        flex: 1,
        paddingHorizontal: scale(8),
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
    },
    makePaymentIcon: {
        width: scale(24),
        height: scale(24),
    },
    subtitleTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(8),
        ...getTextStyle(14),
    },
    cardContainer: {
        marginTop: scale(24),
        borderRadius: scale(8),
        padding: scale(16),
    },
    sendToTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(16),
        marginTop: scale(8),
    },
    paymentMethodRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(16),
    },
    paymentIcon: {
        width: scale(32),
        height: scale(32),
        resizeMode: 'contain',
    },
    paymentNameTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    accountNameTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(16),
    },
    accountNameView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(8),
    },
    accountName: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
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
});
