import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../constants/colorConstants";
import { getTextStyle, moderateScale, scale } from "../../../../utils/scale";
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
        marginTop: scale(8),
    },
    bankIcon: {
        width: scale(32),
        height: scale(32),
        marginTop: scale(16),
    },
    countryText: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    downArrow: {
        width: scale(14),
        height: scale(14),
    },
    countryBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: scale(343),
        height: scale(52),
        borderRadius: moderateScale(8),
        borderWidth: moderateScale(1.5),
        borderColor: ColorConstants.BORDER_COLOR,
        // gap: scale(8),
        marginTop: scale(8),
        paddingHorizontal: scale(16),
    },
    flag: {
        ...getTextStyle(18),
    },
    code: {
        ...getTextStyle(14),
        fontFamily: Fontconstants.MEDIUM,
        color: ColorConstants.GRAY_LABEL,
    },
    modalContainer: {
        flex: 1,
        paddingTop: scale(50),
    },
    search: {
        borderWidth: moderateScale(1),
        borderColor: '#ccc',
        margin: scale(12),
        borderRadius: moderateScale(6),
        paddingHorizontal: scale(10),
        height: scale(40),
    },
    countryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: scale(14),
    },
    countryName: {
        marginLeft: scale(10),
    },
    closeBtn: {
        backgroundColor: ColorConstants.BLACK,
        padding: scale(14),
        margin: scale(16),
        borderRadius: moderateScale(6),
        alignItems: 'center',
    },
    countryBoxInner:{
        flexDirection: 'row',
        alignItems: 'center',
        // gap: scale(8),
    },
    stateAndZipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})