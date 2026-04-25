import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../../../utils/scale";
import { ColorConstants } from "../../../../constants/colorConstants";
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
    qrCodeContainer: {
        width: scale(327),
        height: scale(100),
        backgroundColor: ColorConstants.QR_BOX_BG,
        borderRadius: scale(4),
        marginTop: scale(24),
        flexDirection: 'row',
        justifyContent: 'space-between',
        // padding: scale(12),
    },
    friddyLogoBox: {
        justifyContent: 'flex-end',
    },
    headerLogo: {
        width: scale(58),
        height: scale(14),
        alignSelf: 'flex-end',
        marginLeft: scale(16),
        marginBottom: scale(12),
    },
    depositeQr: {
        width: scale(100),
        height: scale(100),
    },
    userDetailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(16),
        width: scale(327),
    },
    userName: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    userEmail: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    amountDueRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(16),
        alignItems: 'center',
        width: scale(327),
    },
    amountDueText: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    copyBtn: {
        backgroundColor: ColorConstants.SIGNIN_BOX,
        paddingHorizontal: scale(8),
        paddingVertical: scale(2),
        borderRadius: scale(360),
        alignItems: 'center',
        justifyContent: 'center',
    },
    copyBtnText: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    amountValueRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scale(8),
        width: scale(327),
    },
    coinIcon: {
        width: scale(24),
        height: scale(24),
        marginRight: scale(8),
    },
    dollarsValue: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    onNetworkText: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginLeft: scale(4),
    },
    receiveAndTimeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(16),
        width: scale(327),
    },
    receiveColumn: {
        flex: 1,
    },
    timeColumn: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: scale(4),
    },
    columnLabel: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    columnValueRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scale(8),
    },
    coinIconSmall: {
        width: scale(20),
        height: scale(20),
        marginRight: scale(8),
    },
    columnValueText: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    paymentAddressRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(16),
        alignItems: 'center',
        width: scale(327),
    },
    paymentAddressLabel: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    addressText: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(8),
        width: scale(327),
        // lineHeight: scale(20),
    },
    checkBoxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scale(150),
        marginBottom: scale(24),
        width: scale(327),
        alignSelf: 'center',
    },
    checkboxIcon: {
        width: scale(16),
        height: scale(16),
        marginRight: scale(8),
        // tintColor: ColorConstants.BTNCOLOR,
    },
    checkboxText: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    linkText: {
        color: ColorConstants.BTNCOLOR,
        textDecorationLine: 'underline',
    }
});
