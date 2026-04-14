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
        ...getTextStyle(20),
    },
    headingView: {
        marginTop: scale(24),
    },
    tickMarkView: {
        width: scale(343),
        height: scale(55),
        backgroundColor: ColorConstants.SUCCESS_VIEW,
        borderRadius: scale(4),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scale(4),
    },
    tickMarkImg: {
        width: scale(32),
        height: scale(32),
    }
})