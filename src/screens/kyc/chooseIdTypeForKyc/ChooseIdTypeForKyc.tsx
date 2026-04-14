import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import BackHeader from '../../../components/backHeader/BackHeader';
import CustomDropDown from '../../../components/customDropDown/CustomDropDown';
import countriesData from '../../../data/countries.json';
import { IconConstants } from '../../../constants/iconConstants';
import CustomButton from '../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../constants/fontConstants';
import { ColorConstants } from '../../../constants/colorConstants';

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

const ChooseIdTypeForKyc = () => {
  const [selectedCountry, setSelectedCountry] = useState<DropdownItem | null>(
    null,
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);

  console.log('selectedCountry->', selectedCountry);

  const idData = [
    {
      id: '1',
      name: 'Government issued ID card',
      icon: IconConstants.governmentId,
    },
    {
      id: '2',
      name: 'Passport',
      icon: IconConstants.passport,
    },
  ];
const isButtonEnabled = selectedCountry && selectedId;
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <BackHeader />
      <Text style={style.headingTxt}>Choose an ID type to add</Text>
      <CustomDropDown
        data={countryData}
        selected={selectedCountry}
        onSelect={setSelectedCountry}
        label="Issuing country/Region"
        placeholder="Select Country"
        topHeight={16}
      />
      {idData.map((item, index) => {
        const isSelected = selectedId === item.id;
        return (
          <TouchableOpacity
            key={item.id}
            style={[
              style.idTypeContainer,
              isSelected && style.selectedIdTypeContainer,
            ]}
            onPress={() => setSelectedId(item.id)}
          >
            <Image source={item.icon} style={style.idTypeIcon} />
            <Text style={style.idTypeTxt}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
      <CustomButton
        disable={!isButtonEnabled}
        title="Continue"
        bgColor={isButtonEnabled ? ColorConstants.BTNCOLOR : ColorConstants.BACKARROWBG}
        txtColor={isButtonEnabled ? ColorConstants.WHITE : ColorConstants.VERIFY_BTN_TXT}
        width={343}
        topHeight={16}
        fontsize={14}
        fontfamily={Fontconstants.SEMIBOLD}
        onPress={() => console.log('Continue')}
      />
    </SafeAreaView>
  );
};

export default ChooseIdTypeForKyc;
