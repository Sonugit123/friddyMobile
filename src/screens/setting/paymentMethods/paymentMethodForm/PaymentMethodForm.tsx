import { View, Text, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import { IconConstants } from '../../../../constants/iconConstants';
import InputBox from '../../../../components/inputBox/InputBox';
import { scale } from '../../../../utils/scale';
import countriesData from '../../../../data/countries.json';
import CustomDropDown from '../../../../components/customDropDown/CustomDropDown';
import { Fontconstants } from '../../../../constants/fontConstants';
import { ColorConstants } from '../../../../constants/colorConstants';
import CustomButton from '../../../../components/customButton/CustomButton';

const countries = countriesData;

type DropdownItem = {
  label: string;
  value: string;
  extra?: any;
};
const countryData = countries.map(c => ({
  label: `${c.name} (${c.dialCode})`,
  value: c.iso2,
  extra: c,
}));
const states = [
  { name: 'Uttar Pradesh', code: 'UP' },
  { name: 'Maharashtra', code: 'MH' },
  { name: 'Delhi', code: 'DL' },
];
const stateData = states.map(s => ({
  label: s.name,
  value: s.code,
}));

const PaymentMethodForm = () => {
  const [selectedCountry, setSelectedCountry] = useState<DropdownItem | null>(
    null,
  );
  const [selectedState, setSelectedState] = useState<DropdownItem | null>(null);

  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <ScrollView
        contentContainerStyle={{ paddingBottom: scale(60), flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.container}>
          <BackHeader />
          <Image source={IconConstants.bankTransfer} style={style.bankIcon} />
          <Text style={style.headingTxt}>Bank Transfer ( WIRE )</Text>
          <InputBox
            placeholder={'E.g John Doe '}
            label="Account Holder Name"
            keyboardType="default"
            autoCapitalize="none"
            topHeight={16}
          />
          <InputBox
            placeholder={'E.g First commercial bank'}
            label="Bank Name"
            keyboardType="default"
            autoCapitalize="none"
            topHeight={16}
          />
          <InputBox
            placeholder={'Enter here'}
            label="IBAN"
            keyboardType="default"
            autoCapitalize="none"
            topHeight={16}
          />
          <InputBox
            placeholder={'Enter here'}
            label="BIC/SWIFT"
            keyboardType="default"
            autoCapitalize="none"
            topHeight={16}
          />
          <InputBox
            placeholder={'E.g 123, go street, friddy, wakanda'}
            label="Legal Address"
            keyboardType="default"
            autoCapitalize="none"
            topHeight={16}
          />
          <InputBox
            placeholder={'E.g 123, go street, friddy, wakanda'}
            label="Apt/Suite/Floor"
            keyboardType="default"
            autoCapitalize="none"
            topHeight={16}
          />
          <CustomDropDown
            data={countryData}
            selected={selectedCountry}
            onSelect={setSelectedCountry}
            label="Country"
            placeholder="Select Country"
            topHeight={16}
          />
          <View style={style.stateAndZipContainer}>
            <CustomDropDown
              data={stateData}
              selected={selectedState}
              onSelect={setSelectedState}
              placeholder="State"
              label="State"
              width={164}
              topHeight={16}
            />
            <InputBox
              placeholder={'Zip/Postal'}
              label="Zip/Postal code"
              keyboardType="default"
              autoCapitalize="none"
              topHeight={16}
              width={164}
            />
          </View>
          <CustomButton
            disable={true}
            title="Proceed"
            bgColor={ColorConstants.BACKARROWBG}
            txtColor={ColorConstants.DISABLE_BTN_TXT}
            width={343}
            topHeight={28}
            fontsize={14}
            fontfamily={Fontconstants.SEMIBOLD}
            onPress={() => console.log('Proceed')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentMethodForm;
