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
    quoteChangeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scale(32),
    },
    quoteChangeText: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    quoteChangeTime: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginLeft: scale(4),
    },
    chooseTokenText: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(24),
        marginBottom: scale(24),
    },
    tokenRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingVertical: scale(16),
        // marginVertical: scale(24),
    },
    tokenLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconWrapper: {
        // width: scale(40),
        // height: scale(40),
        marginRight: scale(8),
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    mainIcon: {
        width: scale(24),
        height: scale(24),
    },
    subIconWrapper: {
        position: 'absolute',
        bottom: scale(0),
        right: scale(0),
        // width: scale(16),
        // height: scale(16),
        // borderRadius: scale(8),
        // backgroundColor: ColorConstants.WHITE,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    subIcon: {
        width: scale(11),
        height: scale(11),
    },
    subIconText: {
        color: ColorConstants.WHITE,
        fontSize: scale(6),
        fontFamily: Fontconstants.SEMIBOLD,
    },
    subIconView: {
        width: scale(14),
        height: scale(14),
        borderRadius: scale(7),
        justifyContent: 'center',
        alignItems: 'center',
    },
    tokenName: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    tokenYouPay: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
        marginTop: scale(4),
    },
    tokenRight: {
        alignItems: 'flex-end',
    },
    tokenCryptoAmount: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    tokenFiatAmount: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
        marginTop: scale(4),
    },
    tokenContainer: {
        gap: scale(24),
    }
});
