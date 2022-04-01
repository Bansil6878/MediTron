import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import AgoraUIKit from 'agora-rn-uikit';


const Videocall = () => {
    const [videoCall, setVideoCall] = useState(true);
    const rtcProps = {
      appId: 'f713405f1c984f569bba198b4f92e342',
      channel: 'test',
    };
    const callbacks = {
      EndCall: () => setVideoCall(false),
    };
    return videoCall ? (
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    ) : (
      <Text onPress={()=>setVideoCall(true)}>Start Call</Text>
    );
}

export default Videocall

const styles = StyleSheet.create({})