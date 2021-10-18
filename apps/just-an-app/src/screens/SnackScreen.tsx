import { useIsFocused, useRoute } from '@react-navigation/native';
import SnackApp from '@snack/runtime/App';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export function SnackScreen() {
  const isFocused = useIsFocused();
  const params: any = useRoute().params;

  return (
    <View style={styles.container}>
      {isFocused && <SnackApp snackUrl={params.snackUrl} />}
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
