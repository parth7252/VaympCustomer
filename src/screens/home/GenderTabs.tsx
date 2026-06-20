import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { GENDER_SEGMENTS } from '../../constants/mockData';
import { COLORS } from '../../constants/colors';

interface Props {
  selected: string;
  onSelect: (id: string) => void;
}

export const GenderTabs = ({ selected, onSelect }: Props) => {

  useEffect(() => {
    fetch('https://reactnative.dev/img/tiny_logo.png')
      .then(() => console.log('FETCH OK'))
      .catch(e => console.log('FETCH FAIL', e));
  }, []);

  return (
    <View style={styles.container}>
      {GENDER_SEGMENTS.map((item) => {
        const isActive = selected === item.id;

        return (
          <TouchableOpacity
            key={item.id}
            style={styles.node}
            onPress={() => onSelect(item.id)}
            activeOpacity={0.8}
          >
            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {item.title}
            </Text>

            <View style={[styles.circle, isActive && styles.activeCircle]}>
              <Image
                source={{ uri: item.image }}
                style={styles.img}
                resizeMode="cover"
                fadeDuration={0}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, marginBottom: 20 },
  node: { alignItems: 'center', width: 72 },
  circle: { 
    width: 66, 
    height: 66, 
    borderRadius: 33, 
    backgroundColor: COLORS.cardBackground || '#EAEAEA', 
    borderWidth: 2, 
    borderColor: 'transparent',
    // 🌟 FIX 1: Removed overflow: 'hidden' here to prevent the React 19/Fabric layout crash
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCircle: { borderColor: COLORS.primary || '#4342FF' },
  img: { 
    // 🌟 FIX 2: Explicitly size down the image to fit perfectly inside the circle
    // and clip it using a precise native borderRadius directly applied on the Image layout thread!
    width: 58, 
    height: 58, 
    borderRadius: 29, 
  },
  label: { fontSize: 12, marginBottom: 6, color: COLORS.textSecondary, fontWeight: '500' },
  activeLabel: { color: COLORS.primary || '#4342FF', fontWeight: '700' },
});