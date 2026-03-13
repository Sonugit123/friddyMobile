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
    verifiedContainer: {
        backgroundColor: ColorConstants.SUCCESS_BOX_BG,
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(4),
        position: 'absolute',
        alignSelf: 'flex-end',
        // marginTop: scale(70),
        bottom: scale(13),
        marginRight: scale(8),
        paddingHorizontal: scale(8),
        paddingVertical: scale(2),
    },
    verifiedTxt: {
        color: ColorConstants.GREEN_DOT,
    },
    checkIcon: {
        width: scale(16),
        height: scale(16),
    }
})