import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../utils/scale";
import { ColorConstants } from "../../constants/colorConstants";
import { Fontconstants } from "../../constants/fontConstants";

export const style = StyleSheet.create({
    shareTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scale(16),
        marginBottom: scale(16),
    },
    shareTitle: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginRight: scale(4),
    },
    downArrow: {
        width: scale(12),
        height: scale(12),
        tintColor: ColorConstants.GRAY_LABEL,
    },
    shareItemsRow: {
        flexDirection: 'row',
        gap: scale(16),
        paddingHorizontal: scale(8),
        paddingBottom: scale(24),
    },
    shareItemContainer: {
        alignItems: 'center',
    },
    shareIconBox: {
        width: scale(32),
        height: scale(32),
        borderRadius: scale(22),
        backgroundColor: ColorConstants.WHITE,
        borderWidth: scale(1),
        borderColor: ColorConstants.BORDER_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shareIcon: {
        width: scale(32),
        height: scale(32),
    },
    shareIconInner: {
        width: scale(20),
        height: scale(20),
        tintColor: ColorConstants.BTNCOLOR,
    },
    shareText: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    }
});
