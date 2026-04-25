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
    subHeading: {
        color: ColorConstants.GRAY_Heading,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(8),
    },
    sentView: {
        backgroundColor: ColorConstants.SUCCESS_BOX_BG,
        gap: scale(8),
        paddingTop: scale(8),
        paddingHorizontal: scale(16),
        paddingBottom: scale(16),
        borderRadius: scale(8),
        marginTop: scale(24),
    },
    sentTxt: {
        color: ColorConstants.GREEN_DOT,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    usdcIconRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(20),
    },
    checkIcon: {
        width: scale(18),
        height: scale(18),
    },
    receivedView: {
        backgroundColor: ColorConstants.SIGNIN_BOX,
        gap: scale(8),
        paddingTop: scale(8),
        paddingHorizontal: scale(16),
        paddingBottom: scale(16),
        borderRadius: scale(8),
        marginTop: scale(8),
    },
    receivedTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    receivedCheckIcon: {
        width: scale(18),
        height: scale(18),
    },
    blockExplorerTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        textDecorationLine: 'underline',
        alignSelf: 'center',
        marginTop: scale(30),
    }
})