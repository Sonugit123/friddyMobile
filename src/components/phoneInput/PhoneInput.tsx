import React, { useMemo, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Modal,
    FlatList,
    Image,
} from 'react-native';

import countriesData from '../../data/countries.json';
import { style } from './style';
import { IconConstants } from '../../constants/iconConstants';
import { ColorConstants } from '../../constants/colorConstants';

//
// ---- Types ----
//

type Country = {
    name: string;
    iso2: string;
    dialCode: string;
    flag: string;
};

type PhoneInputProps = {
    value: string;
    onChange: (text: string) => void;
    topHeight?: number;
};

//
// ---- Cast JSON to typed array ----
//
const countries = countriesData as Country[];

//
// ---- Component ----
//
const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange, topHeight }) => {
    const [selected, setSelected] = useState<Country>(
        countries.find(c => c.iso2 === 'IN') || countries[0]
    );

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);

    const filteredCountries = useMemo<Country[]>(() => {
        if (!search) return countries;
        return countries.filter(c =>
            c.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    const selectCountry = (country: Country) => {
        setSelected(country);
        setModalVisible(false);
    };

    return (
        <View style={[style.container, { marginTop: topHeight }]}>
            {/* Flag + Code */}
            <View>
                <Text style={style.countryText}>Country</Text>
                <TouchableOpacity
                    style={style.countryBox}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={style.flag}>{selected.flag}</Text>
                    <Text style={style.code}>{selected.dialCode}</Text>
                    <Image source={IconConstants.downArrow} style={style.downArrow} />
                </TouchableOpacity>
            </View>

            {/* Phone Input */}
            <View>
                <Text style={[style.phoneText,isPhoneFocused && { color: ColorConstants.BTNCOLOR}]}>Phone</Text>
                <TextInput
                style={[style.input,isPhoneFocused && { borderColor: ColorConstants.BTNCOLOR}]}
                keyboardType="phone-pad"
                value={value}
                onChangeText={onChange}
                placeholder="Your phone number"
                onFocus={() => setIsPhoneFocused(true)}
                onBlur={() => setIsPhoneFocused(false)}
            />
            </View>


            {/* Country Picker Modal */}
            <Modal visible={modalVisible} animationType="slide" statusBarTranslucent={true}  >
                <View style={style.modalContainer}>
                    <TextInput
                        placeholder="Search country..."
                        style={style.search}
                        value={search}
                        onChangeText={setSearch}
                    />

                    <FlatList
                        data={filteredCountries}
                        keyExtractor={(item) => item.iso2}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={style.countryItem}
                                onPress={() => selectCountry(item)}
                            >
                                <Text style={style.flag}>{item.flag}</Text>
                                <Text style={style.countryName}>
                                    {item.name} ({item.dialCode})
                                </Text>
                            </TouchableOpacity>
                        )}
                    />

                    <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                        style={style.closeBtn}
                    >
                        <Text style={{ color: ColorConstants.WHITE }}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

export default PhoneInput;

