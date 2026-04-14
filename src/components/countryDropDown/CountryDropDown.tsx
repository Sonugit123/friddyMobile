import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import { IconConstants } from '../../constants/iconConstants';
import { ColorConstants } from '../../constants/colorConstants';
import { style } from './style';
import { scale } from '../../utils/scale';

type DropdownItem = {
  label: string;
  value: string;
  extra?: any;
};

const CountryDropDown = ({
  data,
  selected,
  onSelect,
  placeholder = 'Select Country',
  topHeight = 0,
}: {
  data: DropdownItem[];
  selected: DropdownItem | null;
  onSelect: (item: DropdownItem) => void;
  placeholder?: string;
  topHeight?: number;
}) => {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState('');

  const filteredData = useMemo(() => {
    if (!search) return data;
    return data.filter(item =>
      item.label.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, data]);

  return (
    <>
      {/* 🔥 Trigger */}
      <View style={{marginTop: scale(topHeight)}}>
        <Text style={style.countryText}>Country</Text>

        <TouchableOpacity
          style={style.countryBox}
          onPress={() => setVisible(true)}
        >
          <View style={style.countryBoxInner}>
            {selected ? (
              <>
                {selected.extra?.flag && (
                  <Text style={style.flag}>{selected.extra.flag}</Text>
                )}
                <Text style={style.countryName}>{selected.label}</Text>
              </>
            ) : (
              <Text style={style.countryName}>{placeholder}</Text>
            )}
          </View>

          <Image source={IconConstants.downArrow} style={style.downArrow} />
        </TouchableOpacity>
      </View>

      {/* 🔥 Modal */}
      <Modal
        visible={visible}
        animationType="slide"
        statusBarTranslucent={true}
      >
        <View style={style.modalContainer}>
          <TextInput
            placeholder="Search country..."
            style={style.search}
            value={search}
            onChangeText={setSearch}
          />

          <FlatList
            data={filteredData}
            keyExtractor={item => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={style.countryItem}
                onPress={() => {
                  onSelect(item);
                  setVisible(false);
                }}
              >
                {item.extra?.flag && (
                  <Text style={style.flag}>{item.extra.flag}</Text>
                )}
                <Text style={style.countryName}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={style.closeBtn}
          >
            <Text style={{ color: ColorConstants.WHITE }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default CountryDropDown;
