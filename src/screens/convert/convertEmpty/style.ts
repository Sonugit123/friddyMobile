import { Platform, StyleSheet } from "react-native";
import { ColorConstants } from "../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../utils/scale";
import { Fontconstants } from "../../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        // paddingHorizontal: scale(16),
        paddingHorizontal: scale(8),
        flex: 1,
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
        paddingHorizontal: scale(16),
    },
    modalCross: {
        width: scale(24),
        height: scale(24),
    },
    headingTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(20)
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(8),
    },
    fromContainer: {
        // width: scale(327),
        // height: scale(100),
        borderRadius: scale(8),
        borderWidth: scale(1),
        // borderColor: ColorConstants.MODEL_BORDER_COLOR,
        borderColor: ColorConstants.BTNCOLOR,
        gap: scale(4),
        // gap: Platform.OS == "ios" ? scale(4) : scale(0),
        padding: scale(16),
        marginTop: scale(24),
    },
    coinStyle: {
        width: scale(16),
        height: scale(16),
    },
    downArrow: {
        width: scale(16),
        height: scale(16),
        tintColor: ColorConstants.BLACK,
    },
    coinView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(4),
    },
    fromValue: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(16),
    },
    toValueView: {
        height: scale(36),
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    fromTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    fromView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    fromValueView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    amtTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    toContainer: {
        // width: scale(327),
        // height: scale(78),
        borderWidth: scale(1),
        borderColor: ColorConstants.TO_CONTAINER,
        borderRadius: scale(8),
        gap: scale(4),
        padding: scale(16),
        marginTop: scale(16),
    },
    toTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    inputBox: {
        // backgroundColor: 'red',
        flex: 1,
        // height: scale(36),
        height: Platform.OS == "ios" ? scale(36) : null,
        paddingHorizontal: 0,
        // includeFontPadding: false,
        textAlignVertical: "center",
        fontSize: scale(16),
        fontFamily: Fontconstants.REGULAR,
    }
})