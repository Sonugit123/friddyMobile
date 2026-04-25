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
    userDetailsBox: {
        width: scale(327),
        borderWidth: scale(1),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        borderRadius: scale(8),
        padding: scale(16),
        marginTop: scale(24),
    },
    userRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userRowLabel: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    userRowValue: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    walletRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: scale(16),
    },
    paidSection: {
        marginTop: scale(24),
        width: scale(327),
    },
    paidLabel: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    paidValueRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scale(8),
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
        marginTop: scale(24),
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
        marginTop: scale(24),
        alignItems: 'center',
        width: scale(327),
    },
    paymentAddressLabel: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    copyBtn: {
        backgroundColor: ColorConstants.SIGNIN_BOX,
        paddingHorizontal: scale(12),
        paddingVertical: scale(4),
        borderRadius: scale(16),
        alignItems: 'center',
        justifyContent: 'center',
    },
    copyBtnText: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    addressText: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(12),
        width: scale(327),
        lineHeight: scale(20),
    },
    processingBtnContainer: {
        width: scale(327),
        height: scale(32),
        backgroundColor: '#FFF8EB',
        borderRadius: scale(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scale(24),
    },
    processingText: {
        color: ColorConstants.ORANGE_DOT,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(14),
        marginRight: scale(8),
    },
    processingPill: {
        backgroundColor: ColorConstants.ORANGE_DOT,
        paddingHorizontal: scale(8),
        paddingVertical: scale(2),
        borderRadius: scale(16),
        justifyContent: 'center',
        alignItems: 'center',
    },
    processingPillText: {
        color: ColorConstants.WHITE,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(10),
    },
    checkBoxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scale(120),
        marginBottom: scale(24),
        width: scale(327),
        alignSelf: 'center',
    },
    checkboxIcon: {
        width: scale(16),
        height: scale(16),
        marginRight: scale(8),
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
