import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Paragraph, Button } from 'react-native-paper';

const defaultSnackUrl = 'exp://exp.host/@bycedric/talking-pizza+0nVAgXvzLn';

export function HomeScreen() {
  const navigation = useNavigation<any>();
  const [snackUrl, setSnackUrl] = useState(defaultSnackUrl);
  
  const onPress = useCallback(() => {
    navigation.navigate('Snack', { snackUrl });
  }, [snackUrl]);

  return (
    <View style={styles.container}>
      <Paragraph>This is an homescreen! You can do anything here.</Paragraph>
      <View>
        <TextInput value={snackUrl} onChangeText={setSnackUrl} />
        <Button onPress={onPress}>Go to Snack</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
