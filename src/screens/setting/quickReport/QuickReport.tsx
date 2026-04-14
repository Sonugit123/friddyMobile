import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import BackHeader from '../../../components/backHeader/BackHeader';
import { style } from './style';
import InputBox from '../../../components/inputBox/InputBox';
import CustomDropDownOpenBox from '../../../components/customDropDownOpenBox/CustomDropDownOpenBox';
import { ColorConstants } from '../../../constants/colorConstants';
import { IconConstants } from '../../../constants/iconConstants';
import CustomButton from '../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../constants/fontConstants';
import { scale } from '../../../utils/scale';

const QuickReport = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const casesData = [
    { id: 1, title: 'All cases' },
    { id: 2, title: 'Pending support response' },
    { id: 3, title: 'Pending customer response' },
    { id: 4, title: 'Active' },
    { id: 5, title: 'In Review' },
    { id: 6, title: 'Resolved' },
  ];
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <ScrollView
        contentContainerStyle={{ paddingBottom: scale(60), flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.container}>
          <BackHeader />
          <Text style={style.headingTxt}>Quick Report</Text>
          <View style={style.reportSubmittedView}>
            <Text style={style.reportSubmittedTxt}>
              Report submitted successfully
            </Text>
            <Image source={IconConstants.check} style={style.tickMark} />
          </View>
          <InputBox
            placeholder={'Enter Email here'}
            label="Please type in your email"
            keyboardType="email-address"
            autoCapitalize="none"
            height={48}
            topHeight={16}
          />
          <Text style={style.reportCategoryTxt}>Report category</Text>
          <View style={style.dropDownView}>
            <CustomDropDownOpenBox
              data={casesData}
              open={open}
              setOpen={setOpen}
              selected={selected}
              setSelected={setSelected}
              width={343}
              height={48}
              bgColor={ColorConstants.WHITE}
              borderWidth={1.5}
              borderRadius={8}
              placeholder="Please select Report category."
              iconColor={ColorConstants.GRAY_LABEL}
              dropDownBoxMarginTop={8}
            />
          </View>
          <InputBox
            placeholder={'Enter order N.O here'}
            label="Order N.o ( If applicable )"
            topHeight={24}
            keyboardType="numeric"
            autoCapitalize="none"
          />
          <Text style={style.reportCategoryTxt}>Attachment</Text>
          <View style={style.attachmentView}>
            <Text style={style.attachmentTxt}>
              Please add any screenshots that might help the support team better
            </Text>
            <Image
              source={IconConstants.attachment}
              style={style.attachmentIcon}
            />
          </View>
          <Text style={style.reportCategoryTxt}>Please enter description</Text>
          <TextInput
            style={style.descriptionInput}
            multiline
            placeholder="Please describe The nature of your issue here so that we may best understand how to serve you."
          />
          {/* <CustomButton
            disable={false}
            title="Submit"
            rightImage={IconConstants.plus}
            iconColor={ColorConstants.VERIFY_BTN_TXT}
            txtColor={ColorConstants.VERIFY_BTN_TXT}
            bgColor={ColorConstants.BACKARROWBG}
            borderWidth={1}
            borderColor={ColorConstants.MODEL_BORDER_COLOR}
            imageSize={18}
            width={343}
            topHeight={24}
            fontsize={14}
            fontfamily={Fontconstants.SEMIBOLD}
            onPress={() => console.log('Add Communication Method')}
          /> */}

          <View style={style.btnView}>
            <CustomButton
              disable={false}
              title="Close"
              width={163}
              topHeight={0}
              fontsize={14}
              fontfamily={Fontconstants.SEMIBOLD}
              onPress={() => console.log('Close')}
            />
            <CustomButton
              disable={false}
              title="Submitted"
              width={163}
              rightImage={IconConstants.check}
              iconColor={ColorConstants.BTNCOLOR}
              bgColor={ColorConstants.UPLOAD_BTN}
              txtColor={ColorConstants.BTNCOLOR}
              imageSize={18}
              topHeight={0}
              fontsize={14}
              fontfamily={Fontconstants.SEMIBOLD}
              onPress={() => console.log('Submitted')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuickReport;
