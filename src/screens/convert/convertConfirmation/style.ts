import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../../utils/scale";
import { ColorConstants } from "../../../constants/colorConstants";
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
    convertContainer: {
        // width: scale(327),
        // height: scale(113),
        borderRadius: scale(8),
        borderWidth: scale(1),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        gap: scale(8),
        paddingTop: scale(8),
        paddingBottom: scale(17),
        paddingHorizontal: scale(16),
        marginTop: scale(24),
    },
    convertTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    coinStyle: {
        width: scale(32),
        height: scale(32),
    },
    coinTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(20),
    },
    coinView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    coinValue: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    coinValueTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    receiveContainer: {
        borderRadius: scale(8),
        borderWidth: scale(1),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        gap: scale(8),
        paddingTop: scale(8),
        paddingBottom: scale(17),
        paddingHorizontal: scale(16),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        marginTop: scale(16),
    },
    friddyFeesTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    friddyFeesValue: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    friddyFeesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(16),
    }
})