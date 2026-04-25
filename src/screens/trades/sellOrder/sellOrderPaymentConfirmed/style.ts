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
    headingTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(20),
        marginTop: scale(24),
    },
    sendingView: {
        backgroundColor: ColorConstants.SIGNIN_BOX,
        borderRadius: scale(8),
        marginTop: scale(24),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scale(16),
        paddingTop: scale(8),
        paddingBottom: scale(16),
    },
    leftView: {
        gap: scale(8),
    },
    sendingTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    usdcIconView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    usdcIcon: {
        width: scale(32),
        height: scale(32),
    },
    usdcTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(16),
    },
        timerView: {
        width: scale(110),
        height: scale(38),
        borderWidth: 1,
        borderColor: ColorConstants.QR_BOX_BG,
        backgroundColor: ColorConstants.WHITE,
        borderRadius: scale(32),
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    timerIcon: {
        width: scale(20),
        height: scale(20),
        marginLeft: scale(8),
        tintColor: ColorConstants.BTNCOLOR,
    },
    timerTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(20),
    }
})