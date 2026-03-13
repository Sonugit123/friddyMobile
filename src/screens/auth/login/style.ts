import { StyleSheet } from 'react-native';
import { fontScale, getTextStyle, moderateScale, scale } from '../../../utils/scale';
import { Fontconstants } from '../../../constants/fontConstants';
import { ColorConstants } from '../../../constants/colorConstants';

export const style = StyleSheet.create({
  container: {
    paddingHorizontal: scale(16),
  },
  welcomeText: {
    color: ColorConstants.BLACK,
    fontSize: fontScale(20),
    marginTop: scale(24),
    fontFamily: Fontconstants.REGULAR,
  },
  loginText: {
    color: ColorConstants.GRAY_Heading,
    fontSize: fontScale(14),
    marginTop: scale(4),
    fontFamily: Fontconstants.REGULAR,
  },
  forgotPasswordView: {
    alignSelf: 'flex-end',
    marginTop: scale(12),
  },
  forgotTxt: {
    ...getTextStyle(14),
    fontFamily: Fontconstants.MEDIUM,
    color: ColorConstants.BTNCOLOR,
    textDecorationLine: 'underline',
  },
  newToFriddyTxt: {
    color: ColorConstants.BLACK,
    ...getTextStyle(14),
    fontFamily: Fontconstants.REGULAR,
  },
  createAccountTxt: {
    color: ColorConstants.BTNCOLOR,
    ...getTextStyle(14),
    textDecorationLine: 'underline',
    marginLeft: moderateScale(4),
    fontFamily: Fontconstants.MEDIUM,
  },
  newToFriddyView: {
    flexDirection: 'row',
    marginTop: scale(22),
  },
});
