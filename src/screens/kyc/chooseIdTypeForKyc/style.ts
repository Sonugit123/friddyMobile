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
    idTypeContainer: {
        width: scale(343),
        height: scale(52),
        borderRadius: scale(8),
        borderWidth: scale(1.5),
        borderColor: ColorConstants.BORDER_COLOR,
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        paddingHorizontal: scale(16),
        marginTop: scale(16),
    },
    idTypeIcon: {
        width: scale(18),
        height: scale(18),
    },
    idTypeTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    selectedIdTypeContainer: {
        borderColor: ColorConstants.BTNCOLOR,
    }
})