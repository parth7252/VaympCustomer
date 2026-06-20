import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; //  ADDED

export default function ShopScreen() {
  return (
    <SafeAreaView style={styles.box}>
      <Text style={styles.txt}>SHOP Blueprint</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  box: { flex: 1, justifyContent: 'center', alignItems: 'center' }, 
  txt: { fontSize: 16, fontWeight: '600' } 
});