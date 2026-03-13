import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../utils/scale";
import { Fontconstants } from "../../../constants/fontConstants";
import { get } from "react-native/Libraries/NativeComponent/NativeComponentRegistry";

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
        marginTop: scale(16),
        ...getTextStyle(20),
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(24),
    },
    inputContainer: {
        // backgroundColor: 'red',
    },
    timeTxt: {
        fontFamily: Fontconstants.REGULAR,
        color: ColorConstants.BTNCOLOR,
        ...getTextStyle(14),
        position: 'absolute',
        marginTop: scale(24),
        alignSelf: 'flex-end',
    },
    resendTxt: {
        fontFamily: Fontconstants.REGULAR,
        color: ColorConstants.GRAY_LABEL,
        ...getTextStyle(14),
        textDecorationLine: 'underline',
    },
    verifyContainer: {
        backgroundColor: ColorConstants.SIGNIN_BOX,
        position: 'absolute',
        paddingHorizontal: scale(8),
        paddingVertical: scale(2),
        borderRadius: scale(4),
        alignSelf: 'flex-end',
        // marginTop: scale(24 + 17 + 8),
        // marginTop: scale(65),
        // marginTop: scale(24+8),
        marginRight: scale(8),
        bottom: scale(13),
    },
    verifyTxt: {
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        color: ColorConstants.BTNCOLOR,
    },
})