import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../utils/scale";
import { Fontconstants } from "../../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        backgroundColor: ColorConstants.WHITE,
        flex: 1,
        paddingHorizontal: scale(8),
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
        paddingHorizontal: scale(16),
    },
    headingTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(20),
        marginTop: scale(8),
        marginBottom: scale(24),
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
    walletContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: scale(1),
        borderColor: ColorConstants.WALLET_BORDER,
        borderRadius: scale(32),
        // height: scale(40),
        padding: scale(8),
        gap: scale(8),
        marginBottom: scale(16),
    }
})