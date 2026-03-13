import { StyleSheet } from "react-native";
import { getTextStyle, moderateScale, scale } from "../../../../utils/scale";
import { ColorConstants } from "../../../../constants/colorConstants";
import { Fontconstants } from "../../../../constants/fontConstants";

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
    loginText: {
        color: ColorConstants.GRAY_Heading,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(4),
        ...getTextStyle(14),
    },
    newToFriddyTxt: {
        color: ColorConstants.BLACK,
        ...getTextStyle(14),
        fontFamily: Fontconstants.REGULAR,
    },
    createAccountTxt: {
        color: ColorConstants.BTNCOLOR,
        ...getTextStyle(14),
        textDecorationLine: 'underline',
        marginLeft: moderateScale(4),
        fontFamily: Fontconstants.MEDIUM,
    },
    newToFriddyView: {
        flexDirection: 'row',
        marginTop: scale(16),
    },
})