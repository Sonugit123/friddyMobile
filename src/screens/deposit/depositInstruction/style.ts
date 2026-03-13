import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../utils/scale";
import { Fontconstants } from "../../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        backgroundColor: ColorConstants.WHITE,
        flex: 1,
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
    usdcBaseNetwork: {
        width: scale(24),
        height: scale(24),
        position: 'absolute',
        bottom: scale(0),
        right: scale(0),
    },
    usdcCoin: {
        width: scale(56),
        height: scale(56),
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    addressTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
        marginTop: scale(24),
    },
    copyIcon: {
        width: scale(24),
        height: scale(24),
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(8),
    },
    addressValue: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(16),
    },
    noteIcons: {
        width: scale(16),
        height: scale(16),
    },
    noteTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
        width: scale(301),
    },
    noteContainer: {
        flexDirection: 'row',
        gap: scale(10),
        alignItems: 'center',
        marginTop: scale(24),
    },
    headingTxtContainer: {
        marginTop: scale(8),
    }
})