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
    walletIcon: {
        width: scale(24),
        height: scale(24),
    },
    walletName: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    rightInnerView: {
        backgroundColor: ColorConstants.SIGNIN_BOX,
        paddingHorizontal: scale(8),
        paddingVertical: scale(2),
        borderRadius: scale(360),
    },
    rightViewTxt: {
        color: ColorConstants.BTNCOLOR,
    },
    walletContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: scale(1),
        borderColor: ColorConstants.WALLET_BORDER,
        borderRadius: scale(32),
        padding: scale(8),
        marginBottom: scale(16),
    },
    walletIconAndTxt: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
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
})