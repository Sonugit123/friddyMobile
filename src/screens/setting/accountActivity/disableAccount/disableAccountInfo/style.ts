import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../../../utils/scale";
import { Fontconstants } from "../../../../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        // paddingHorizontal: scale(8),
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
        ...getTextStyle(20),
        marginTop: scale(16),
    },
    subHeading: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(8),
        width: scale(320),
    },
    infoTitle: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    bulletRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: scale(12),
    },

    bullet: {
        marginRight: scale(8),
        fontSize: scale(18),
        color: ColorConstants.GRAY_LABEL,
    },
})