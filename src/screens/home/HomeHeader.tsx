import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/colors';

export const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.locationBlock} activeOpacity={0.7}>
        <Text style={styles.subText}>Enter Location</Text>
        <View style={styles.row}>
          <Text style={styles.mainText} numberOfLines={1}>Gandhinagar, Gujarat</Text>
          <Text style={styles.arrow}>▼</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.iconGroup}>
        <TouchableOpacity style={styles.btn}><Text style={styles.emoji}>❤️</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Text style={styles.emoji}>🛒</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: COLORS.border, backgroundColor: COLORS.background },
  locationBlock: { flex: 1, marginRight: 12 },
  subText: { fontSize: 10, color: COLORS.textSecondary, fontWeight: '500', textTransform: 'uppercase' },
  row: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  mainText: { fontSize: 14, fontWeight: '700', color: COLORS.textPrimary, maxWidth: '85%' },
  arrow: { fontSize: 9, marginLeft: 5, color: COLORS.textSecondary },
  iconGroup: { flexDirection: 'row', alignItems: 'center' },
  btn: { marginLeft: 16, padding: 4 },
  emoji: { fontSize: 19 },
});