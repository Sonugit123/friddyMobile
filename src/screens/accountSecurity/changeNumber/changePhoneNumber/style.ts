import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../../utils/scale";
import { Fontconstants } from "../../../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        // paddingHorizontal: scale(8),
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
        marginTop: scale(16),
    },
    currentPhoneTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(18),
    },
    flagImg: {
        width: scale(24),
        height: scale(24),
    },
    currentPhoneView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(8),
        borderWidth: scale(1),
        borderColor: ColorConstants.BACKARROWBG,
        padding: scale(12),
        width: scale(129),
        borderRadius: scale(8),
    },
    downArrowImg: {
        width: scale(24),
        height: scale(24),
        tintColor: ColorConstants.BLACK,
    },
    countryCodeTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    countryTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    countryView: {

    },
    tickMark: {
        width: scale(16),
        height: scale(16),
    },
    phoneNumberView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(8),
        borderWidth: scale(1),
        borderColor: ColorConstants.BACKARROWBG,
        padding: scale(12),
        borderRadius: scale(8),
        width: scale(206),
    },
    currentPhoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(8),
    }
})