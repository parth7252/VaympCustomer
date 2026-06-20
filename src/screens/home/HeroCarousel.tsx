import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions, Animated } from 'react-native';
import { HERO_CAROUSELS } from '../../constants/mockData';
import { COLORS } from '../../constants/colors';

const { width } = Dimensions.get('window');

export const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems && viewableItems.length > 0) {
      setActiveSlide(viewableItems[0].index || 0);
    }
  }).current;

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={HERO_CAROUSELS}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        renderItem={({ item }) => (
          <View style={[styles.slide, { backgroundColor: item.color }]}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>Hyperlocal Delivery</Text>
          </View>
        )}
      />
      <View style={styles.track}>
        {HERO_CAROUSELS.map((_, index) => (
          <View key={index} style={[styles.dot, index === activeSlide && styles.activeDot]} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%', alignItems: 'center', marginBottom: 24 },
  slide: { width: width - 32, height: 160, borderRadius: 12, marginHorizontal: 16, justifyContent: 'center', paddingHorizontal: 24 },
  title: { fontSize: 20, fontWeight: '800', color: COLORS.white, lineHeight: 26 },
  subtitle: { fontSize: 12, color: COLORS.white, opacity: 0.8, marginTop: 4 },
  track: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#E0E0E0', marginHorizontal: 4 },
  activeDot: { backgroundColor: COLORS.primary, width: 16 },
});