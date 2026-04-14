import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../utils/scale";
import { Fontconstants } from "../../../constants/fontConstants";

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
    dropDownView: {
        marginTop: scale(8),
    },
    reportCategoryTxt: {
        color: ColorConstants.GRAY_LABEL,
        ...getTextStyle(14),
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(24),
    },
    attachmentView: {
        width: scale(343),
        height: scale(72),
        borderWidth: scale(1.5),
        borderRadius: scale(8),
        borderColor: ColorConstants.BORDER_COLOR,
        marginTop: scale(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: scale(16),
    },
    attachmentTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.MEDIUM,
        width: scale(240),
        ...getTextStyle(14),
    },
    attachmentIcon: {
        width: scale(18),
        height: scale(18),
        tintColor: ColorConstants.GRAY_LABEL,
    },
    descriptionInput: {
        width: scale(343),
        height: scale(100),
        borderWidth: scale(1.5),
        borderRadius: scale(8),
        borderColor: ColorConstants.BORDER_COLOR,
        marginTop: scale(8),
        paddingLeft: scale(16),
        paddingRight: scale(77),
        paddingTop: scale(16),
    },
    reportSubmittedView: {
        width: scale(343),
        height: scale(40),
        borderRadius: scale(4),
        backgroundColor: ColorConstants.SUCCESS_VIEW,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: scale(10),
        marginTop: scale(8),
    },
    reportSubmittedTxt: {
        color: ColorConstants.SUCCESS_Text,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    tickMark: {
        width: scale(24),
        height: scale(24),
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(24),
    }
})