import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../utils/scale";
import { Fontconstants } from "../../../constants/fontConstants";

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
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(24),
        ...getTextStyle(20)
    },
    photoFrame: {
        width: scale(343),
        height: scale(200),
        borderRadius: scale(8),
        borderWidth: scale(1.5),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        marginTop: scale(24),
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoBox: {
        width: scale(343),
        height: scale(52),
        borderRadius: scale(8),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        marginTop: scale(16),
        justifyContent: 'center',
        paddingHorizontal: scale(16),
    },
    infoTxt: {
        color: ColorConstants.GRAY_Heading,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    }
})