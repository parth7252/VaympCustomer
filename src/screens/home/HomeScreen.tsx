import React, { useState, useCallback } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; //  ADDED
import { HomeHeader } from '../home/HomeHeader';
import { HomeSearchBar } from '../home/HomeSearchBar';
import { GenderTabs } from '../home/GenderTabs';
import { HeroCarousel } from '../home/HeroCarousel';
import { PromoSection } from '../home/PromoSection';
import { COLORS } from '../../constants/colors';

export default function HomeScreen() {
  const [segment, setSegment] = useState('all');

  const renderContentTree = useCallback(() => (
    <View style={styles.innerLayout}>
      <HomeSearchBar />
      <GenderTabs selected={segment} onSelect={setSegment} />
      <HeroCarousel />
      <PromoSection />
    </View>
  ), [segment]);

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <FlatList
        data={[1]}
        keyExtractor={(_, idx) => idx.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderContentTree}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  innerLayout: { paddingVertical: 16 },
});