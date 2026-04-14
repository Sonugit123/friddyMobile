import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../../utils/scale";
import { Fontconstants } from "../../../../constants/fontConstants";

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
    },
        tickMark: {
        width: scale(16),
        height: scale(16),
    },
    enabledContainer: {
        backgroundColor: ColorConstants.SIGNIN_BOX,
        borderRadius: scale(8),
        paddingHorizontal: scale(16),
        paddingVertical: scale(8),
        marginTop: scale(16),
    },
    tickMarkContainer: {
        flexDirection: 'row',
        gap: scale(8),
    },
    addedOnTxt: {
       color: ColorConstants.GRAY_LABEL,
       fontFamily: Fontconstants.REGULAR,
       ...getTextStyle(14), 
       marginTop: scale(8),
    }
})