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
    recentTxt: {
        color: ColorConstants.GRAY_Heading,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(24),
    },
    recentCoinView: {
        width: scale(83),
        height: scale(36),
        borderRadius: scale(8),
        borderWidth: scale(1),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: scale(8),
    },
    recentCoinIcon: {
        width: scale(24),
        height: scale(24),
    },
    recentCoinTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(12),
    },
    recentCoinContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(12),
        marginTop: scale(8),
    },
    receiveTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginVertical: scale(24),
    },
    receiveCoinContainer: {
        // gap: scale(12),
        // backgroundColor: 'red',
    },
    receiveCoinIcon: {
        width: scale(24),
        height: scale(24),
    },
    receiveCoinTxt: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    receiveCoinView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: scale(8),
    },
    buttonContainer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: scale(88),
    },
    typeTxt: {
        color: ColorConstants.GRAY_Heading,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(4),
        ...getTextStyle(12),
    },
    coinAndTypeView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        borderRadius: scale(8),
    },
    amountTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    }
})