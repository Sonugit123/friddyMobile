import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import BackHeader from '../../../components/backHeader/BackHeader';
import { style } from './style';
import CustomButton from '../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../constants/fontConstants';
import InputBox from '../../../components/inputBox/InputBox';
import { IconConstants } from '../../../constants/iconConstants';
import { ColorConstants } from '../../../constants/colorConstants';
import { launchImageLibrary } from 'react-native-image-picker';

const AccountSettings = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleUpload = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      response => {
        if (response.didCancel) return;
        if (response.errorCode) return;

        const uri = response.assets?.[0]?.uri;
        if (uri) {
          setImage(uri);
        }
      },
    );
  };

  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <Text style={style.headingTxt}>Account Settings</Text>
        <View style={style.profileIconAndBtnView}>
          <View style={style.profileIconView}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: 60, height: 60, borderRadius: 30 }}
              />
            ) : (
              <Text style={style.profileIconTxt}>JO</Text>
            )}
          </View>
          <View style={style.profileBtnAndTxtView}>
            <View style={style.profileBtnView}>
              <TouchableOpacity
                style={style.uploadBtnView}
                onPress={handleUpload}
              >
                <Text style={style.uploadBtnTxt}>Upload Image</Text>
              </TouchableOpacity>
              <View style={style.saveBtnView}>
                <Text style={style.saveBtnTxt}>Save</Text>
              </View>
            </View>
            <Text style={style.fileSizeTxt}>
              Must be JPEG, PNG, or GIF and cannot exceed 10MB.
            </Text>
          </View>
        </View>
        <Text style={style.profileSettingsTxt}>Profile settings</Text>
        <InputBox
          placeholder={'First Name'}
          label="First Name"
          keyboardType="default"
          autoCapitalize="none"
          value="John"
          height={48}
          topHeight={16}
        />
        <InputBox
          placeholder={'Last Name'}
          label="Last Name"
          keyboardType="default"
          autoCapitalize="none"
          value="Oreo"
          height={48}
          topHeight={16}
        />
        <InputBox
          placeholder={'Email address'}
          label="Email address"
          keyboardType="email-address"
          autoCapitalize="none"
          value="joreos@gmail.com"
          height={48}
          topHeight={16}
        />
        <View style={style.verifyEmailView}>
          <Text style={style.verifyEmailTxt}>Verify Email Address</Text>
          <Image
            source={IconConstants.arrowRight}
            style={style.arrowRightIcon}
          />
        </View>
        <View style={style.btnView}>
          <CustomButton
            disable={false}
            title="Edit"
            rightImage={IconConstants.editIcon}
            iconColor={ColorConstants.BTNCOLOR}
            bgColor={ColorConstants.UPLOAD_BTN}
            txtColor={ColorConstants.BTNCOLOR}
            margLeft={8}
            imageSize={18}
            width={163}
            topHeight={0}
            fontsize={14}
            fontfamily={Fontconstants.SEMIBOLD}
            onPress={() => console.log('Edit')}
          />
          <CustomButton
            disable={false}
            title="Save"
            width={163}
            bgColor={ColorConstants.BACKARROWBG}
            borderColor={ColorConstants.MODEL_BORDER_COLOR}
            txtColor={ColorConstants.GRAY_LABEL}
            borderWidth={1}
            topHeight={0}
            fontsize={14}
            fontfamily={Fontconstants.SEMIBOLD}
            onPress={() => console.log('Save')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountSettings;
