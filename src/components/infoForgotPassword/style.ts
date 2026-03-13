import { StyleSheet } from "react-native";
import { getTextStyle, moderateScale, scale } from "../../utils/scale";
import { Fontconstants } from "../../constants/fontConstants";
import { ColorConstants } from "../../constants/colorConstants";


export const style = StyleSheet.create({
    container: {
        paddingHorizontal: scale(16),
        flex: 1,
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
    },
    welcomeText: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(24),
        ...getTextStyle(20),
    },
    emailSentView: {
        backgroundColor: ColorConstants.SUCCESS_VIEW,
        width: scale(343),
        height: scale(55),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scale(8),
        borderRadius: moderateScale(8),
    },
    checkIcon: {
        width: scale(18),
        height: scale(20),
        marginLeft: moderateScale(8),
    },
    emailSentText: {
        color: ColorConstants.SUCCESS_Text,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    emailText: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(8),
    }
})