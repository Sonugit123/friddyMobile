import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import { style } from './style';
import BackHeader from '../../../../components/backHeader/BackHeader';
import { IconConstants } from '../../../../constants/iconConstants';
import { ColorConstants } from '../../../../constants/colorConstants';

const ChatScreen = () => {
  type Message = {
    id: string;
    text: string;
  };
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = () => {
    if (!message.trim()) return;

    setMessages(prev => [
      ...prev,
      { id: Date.now().toString(), text: message },
    ]);

    setMessage('');
  };
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <View style={style.caseIdRow}>
          <Text style={style.nameTxt}>John Doe</Text>
          <View style={style.caseIdView}>
            <Text style={style.nameTxt}>Case ID: #120225-P2P</Text>
            <Image source={IconConstants.copyIcon} style={style.copyIcon} />
          </View>
        </View>
        <Text style={style.troubleTxt}>Troubles verifying account</Text>
        <Text style={style.accountTxt}>Account Verification</Text>
        <View style={style.pendingView}>
          <Text style={style.pendingTxt}>Pending Support Response</Text>
        </View>
        <View style={style.profileViewRow}>
          <View style={style.profileView} />
          <Text style={style.profileNameTxt}>John Doe</Text>
        </View>
        <Text style={style.noResponseTxt}>
          No response yet from support team, please check back in later.
        </Text>
        <View style={{ flex: 1, marginTop: 16 }}>
          {messages.map(item => (
            <View key={item.id} style={style.myMessageBubble}>
              <Text style={style.myMessageText}>{item.text}</Text>
            </View>
          ))}
        </View>
        <View style={style.chatboxView}>
          <TextInput
            placeholder="Please type in message"
            style={style.chatboxInput}
            placeholderTextColor={ColorConstants.BLACK}
            value={message}
            onChangeText={setMessage}
          />
          <View style={style.attachmentSendView}>
            <View style={style.attachmentView}>
              <Image
                source={IconConstants.attachment}
                style={style.attachmentIcon}
              />
            </View>
            <TouchableOpacity style={style.sendView} onPress={handleSend}>
              <Image source={IconConstants.send} style={style.attachmentIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
