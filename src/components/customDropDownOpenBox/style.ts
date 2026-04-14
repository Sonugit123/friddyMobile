import { StyleSheet } from "react-native";
import { ColorConstants } from "../../constants/colorConstants";
import { Fontconstants } from "../../constants/fontConstants";
import { getTextStyle, scale } from "../../utils/scale";

export const style = StyleSheet.create({
    arrowIcon: {
        width: scale(24),
        height: scale(24),
        tintColor: ColorConstants.BLACK,
    },
    dropDownView: {
        flexDirection: 'row',
        width: scale(167),
        height: scale(40),
        backgroundColor: ColorConstants.BACKARROWBG,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: scale(4),
        paddingHorizontal: scale(16),
    },
    dropDownTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    // dropDownBox: {
    //     borderWidth: scale(5),
    //     borderColor: ColorConstants.UPLOAD_BTN,
    //     borderRadius: scale(8),
    //     marginTop: scale(16),
    //     paddingTop: scale(19),
    // },
    dropDownBox: {
        position: 'absolute',
        top: scale(48),
        left: 0,
        right: 0,
        zIndex: 999,
        borderWidth: scale(5),
        borderRadius: scale(8),
        borderColor: ColorConstants.UPLOAD_BTN,
        paddingTop: scale(19),
        backgroundColor: ColorConstants.WHITE,
    },
    drowDownRowView: {
        width: scale(320),
        height: scale(40),
        alignSelf: 'center',
        justifyContent: 'center',
        paddingLeft: scale(16),
        borderRadius: scale(4),
        marginBottom: scale(10),
    },
    dropDownValue: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    }
})