
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
    },
    subHeadingTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(4),
        ...getTextStyle(14),
    },
    // usdcBaseNetwork: {
    //     width: scale(24),
    //     height: scale(24),
    //     position: 'absolute',
    //     bottom: scale(0),
    //     right: scale(0),
    // },
    // usdcCoin: {
    //     width: scale(56),
    //     height: scale(56),
    // },
    ethSmallCoin: {
        width: scale(24),
        height: scale(24),
        position: 'absolute',
        bottom: scale(-1),
        right: scale(-4),
    },
    ethCoin: {
        width: scale(56),
        height: scale(56),
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(24),
    },
    headingTxtContainer: {
        marginTop: scale(8),
    },
    qrContainer: {
        width: scale(327),
        height: scale(172),
        backgroundColor: ColorConstants.QR_BOX_BG,
        borderRadius: scale(4),
        marginTop: scale(24),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerLogo: {
        width: scale(105),
        height: scale(25),
        alignSelf: 'flex-end',
        marginLeft: scale(16),
        marginBottom: scale(12),
    },
    depositeQr: {
        width: scale(172),
        height: scale(172),
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(24),
    },
    addressTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    addressValue: {
        color: ColorConstants.GRAY_Heading,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(16),
    },
    countContainer: {
        backgroundColor: ColorConstants.ORANGE_DOT,
        width: scale(40),
        height: scale(22),
        borderRadius: scale(32),
        alignItems: 'center',
        justifyContent: 'center',
    },
    countTxt: {
        color: ColorConstants.COUNT_TXT,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(12),
    },
    addressValueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(8),
    }
})