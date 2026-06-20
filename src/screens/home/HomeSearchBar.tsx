import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/colors';

export const HomeSearchBar = () => {
  return (
    <View style={styles.searchSectionContainer}>
      {/* Left Input Area */}
      <View style={styles.inputWrapper}>
        <Text style={styles.searchIconSymbol}>🔍</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Search “winter clothes”"
          placeholderTextColor="#999999"
          editable={false} // Keeps it acting like a clickable button for a prototype layout
        />
      </View>

      {/* Right TryNbuy Premium Tag */}
      <TouchableOpacity style={styles.tryNbuyBadge} activeOpacity={0.8}>
        <Text style={styles.tryNbuyText}>TryNbuy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16, // Adds clean spacing before GenderTabs
    width: '100%',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F9', // Subtle light gray for search inputs
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    marginRight: 10,
  },
  searchIconSymbol: {
    fontSize: 16,
    marginRight: 8,
    color: '#888888',
  },
  textInputStyle: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textPrimary,
    paddingVertical: 0, // Fixes vertical clipping issues on Android platforms
  },
  tryNbuyBadge: {
    backgroundColor: '#676769', // Exact Figma target backdrop color
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
  },
  tryNbuyText: {
    color: '#FFFFFF', // Clean readable text contrast
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});