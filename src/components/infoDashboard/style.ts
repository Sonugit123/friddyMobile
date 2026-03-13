import { StyleSheet } from "react-native";
import { ColorConstants } from "../../constants/colorConstants";
import { Fontconstants } from "../../constants/fontConstants";
import { getTextStyle, scale } from "../../utils/scale";

export const style = StyleSheet.create({
    container: {
        // backgroundColor: ColorConstants.WHITE,
        width: scale(343),
        height: scale(104),
        backgroundColor: ColorConstants.WARNING_CONTAINER,
        padding: scale(16),
        borderRadius: scale(12),
        marginVertical: scale(16),
    },
    heading: {
        color: ColorConstants.WARNING_TXT,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    waveIcon: {
        width: scale(18),
        height: scale(18),
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(4),
    },
    subHeading: {
        color: ColorConstants.WARNING_TXT,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
        marginTop: scale(4),
    },
    progressContainer: {
        width: scale(100),
        height: scale(24),
        borderColor: ColorConstants.PROGRESS_RED_BORDER,
        borderWidth: scale(1),
        borderRadius: scale(32),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: scale(8),
        // marginTop: scale(8),
    },
    progressTxt: {
        color: ColorConstants.WARNING_TXT,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(10),
    },
    arrowIcon: {
        width: scale(14.67),
        height: scale(14.67),
    },
    iconContainer: {
        width: scale(24),
        height: scale(24),
        borderRadius: scale(12),
        backgroundColor: ColorConstants.WARNING_TXT,
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressAndIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'blue',
                marginTop: scale(8),

    }
})