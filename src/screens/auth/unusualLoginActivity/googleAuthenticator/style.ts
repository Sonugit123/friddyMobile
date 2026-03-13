import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../../utils/scale";
import { Fontconstants } from "../../../../constants/fontConstants";

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
        alignSelf: 'center',
        marginTop: scale(24),
        ...getTextStyle(20),
    },
    qrCode: {
        width: scale(300),
        height: scale(302),
        alignSelf: 'center',
        marginTop: scale(32),
    },
    codeTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.SEMIBOLD,
        alignSelf: 'center',
        marginTop: scale(8),
        ...getTextStyle(18),
    },
    codeDesc: {
        color: ColorConstants.CODE_DESC,
        fontFamily: Fontconstants.MEDIUM,
        textAlign: 'center',
        marginTop: scale(8),
        // width: scale(327),
        ...getTextStyle(16),
        // backgroundColor: 'red'
    },
        
    // welcomeText: {
    //     color: ColorConstants.BLACK,
    //     fontFamily: Fontconstants.REGULAR,
    //     marginTop: scale(24),
    //     ...getTextStyle(20),
    // },
    // loginText: {
    //     color: ColorConstants.GRAY_LABEL,
    //     fontFamily: Fontconstants.REGULAR,
    //     marginTop: scale(4),
    //     ...getTextStyle(14),
    // },
})