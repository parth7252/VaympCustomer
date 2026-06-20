import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { PROMO_ITEMS } from '../../constants/mockData';
import { COLORS } from '../../constants/colors';

export const PromoSection = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.header}>Curated For You</Text>
      <FlatList
        data={PROMO_ITEMS}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listPadding}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} activeOpacity={0.95}>
            <Image source={{ uri: item.image }} style={styles.img} />
            <View style={styles.overlay}>
              <Text style={styles.label}>{item.label}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: { marginTop: 4 },
  header: { fontSize: 16, fontWeight: '700', color: COLORS.textPrimary, paddingHorizontal: 16, marginBottom: 12 },
  listPadding: { paddingHorizontal: 12 },
  card: { width: 150, height: 210, marginRight: 12, borderRadius: 8, overflow: 'hidden', backgroundColor: COLORS.cardBackground },
  img: { width: '100%', height: '100%', resizeMode: 'cover' },
  overlay: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.4)', paddingVertical: 8, paddingHorizontal: 8 },
  label: { color: COLORS.white, fontSize: 11, fontWeight: '600', textAlign: 'center' },
});