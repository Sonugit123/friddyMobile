import { StyleSheet } from "react-native";
import { fontScale, getTextStyle, scale } from "../../utils/scale";
import { ColorConstants } from "../../constants/colorConstants";
import { Fontconstants } from "../../constants/fontConstants";

export const style = StyleSheet.create({
    inputBox: {
        borderWidth: scale(1.5),
        borderColor: ColorConstants.BORDER_COLOR,
        borderRadius: scale(8),
        height: scale(40),
        paddingLeft: scale(25),
        fontSize: fontScale(14),
        fontFamily: Fontconstants.REGULAR,
    },
    dollarTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    eyeIconView: {
        position: 'absolute',
        left: scale(8),
        top: scale(10),
    },
    inputBoxLabel: {
        color: ColorConstants.BLACK,
        fontSize: fontScale(14),
        fontFamily: Fontconstants.REGULAR,
        // paddingBottom: scale(8),
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: scale(8),
    },
    labelText: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        // paddingBottom: scale(8),
    },
})