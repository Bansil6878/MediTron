import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Drawer_main')}>
        <Image
          source={require('../../assets/images/profile/meditron.png')}
          style={styles.imgStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  imgStyle: {
    marginLeft: 10,
    height: 40,
    width: 40,
    marginTop: 35,
    borderRadius: 17,
    marginBottom: 10,
  },
});
