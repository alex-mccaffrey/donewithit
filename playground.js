import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

export default function App() {
  // const handlePress = () => console.log("text press");
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'lightyellow',
          width: '100%',
          height: landscape ? '100%' : '30%',
        }}
      ></View>

      {/* <Text onPress={handlePress}> */}
      <Text>
        This is the homepage! This is the homepage! This is the homepage! This
        is the homepage! This is the homepage!
      </Text>
      <TouchableOpacity>
        <Image
          source={{
            width: 200,
            height: 200,
            uri: 'https://picsum.photos/200',
          }}
        />
      </TouchableOpacity>
      <Button
        title={'Click Me'}
        onPress={() =>
          Alert.alert('My Title', 'My message', [
            { text: 'Yes' },
            { text: 'No' },
          ])
        }
      />
    </SafeAreaView>
  );
}
const constainerStyle = { backgroundColor: 'lightyellow' };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    //
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
