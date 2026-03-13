import { StyleSheet } from "react-native";
import { getTextStyle, moderateScale, scale } from "../../../../utils/scale";
import { Fontconstants } from "../../../../constants/fontConstants";
import { ColorConstants } from "../../../../constants/colorConstants";

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
        width: scale(32),
        height: scale(32),
    },
    quickTxt: {
        fontFamily: Fontconstants.REGULAR,
        color: ColorConstants.GRAY_LABEL,
        ...getTextStyle(16),
        marginTop: scale(24),
    },
    transferText: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(8),
        ...getTextStyle(20),
    },
    description: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(8),
        ...getTextStyle(14),
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(24),
    }
})