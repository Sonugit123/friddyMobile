import { Platform, StyleSheet } from "react-native";
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
    caseIdRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(24),
    },
    copyIcon: {
        width: scale(18),
        height: scale(18),
    },
    caseIdView: {
        flexDirection: 'row',
        gap: scale(8),
    },
    nameTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    troubleTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(16),
        marginTop: scale(10),
    },
    accountTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(12),
        marginTop: scale(10),
    },
    pendingView: {
        backgroundColor: ColorConstants.BACKARROWBG,
        width: scale(210),
        height: scale(24),
        borderRadius: scale(8),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scale(10),
    },
    pendingTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    profileView: {
        backgroundColor: ColorConstants.QR_BOX_BG,
        width: scale(40),
        height: scale(40),
        borderRadius: scale(20),
    },
    profileNameTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    profileViewRow: {
        flexDirection: 'row',
        gap: scale(8),
        alignItems: 'center',
        width: scale(343),
        height: scale(56),
        marginTop: scale(8),
        borderTopWidth: scale(1),
        borderBottomWidth: scale(1),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        borderTopColor: ColorConstants.MODEL_BORDER_COLOR,
        borderEndColor: ColorConstants.MODEL_BORDER_COLOR,
    },
    noResponseTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
        marginTop: scale(8),
    },
    chatboxView: {
        width: scale(343),
        height: scale(48),
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? scale(16) : scale(24),
    },
    chatboxInput: {
        width: scale(343),
        height: scale(48),
        borderWidth: scale(1.5),
        borderColor: ColorConstants.BTNCOLOR,
        borderRadius: scale(8),
        paddingHorizontal: scale(12),
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    attachmentIcon: {
        width: scale(18),
        height: scale(18),
    },
    attachmentView: {
        width: scale(32),
        height: scale(32),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        borderRadius: scale(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendView: {
        width: scale(32),
        height: scale(32),
        backgroundColor: ColorConstants.BTNCOLOR,
        borderRadius: scale(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    attachmentSendView: {
        flexDirection: 'row',
        gap: scale(8),
        position: 'absolute',
        right: scale(16),
        top: scale(8),
    },
    myMessageBubble: {
        alignSelf: 'flex-end',
        backgroundColor: '#E7F0FF',
        padding: 10,
        borderRadius: 8,
        marginBottom: 8,
        maxWidth: '75%',
    },

    myMessageText: {
        color: '#000',
    }
})