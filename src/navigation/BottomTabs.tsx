import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet } from 'react-native';
import HomeScreen from '../screens/home/HomeScreen';
import ShopScreen from '../screens/shop/ShopScreen';
import CategoriesScreen from '../screens/categories/CategoriesScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { COLORS } from '../constants/colors';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary, // Un-commented to color your active tab label/icon
        tabBarInactiveTintColor: '#888888',
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600', paddingBottom: 4 },
        tabBarStyle: { height: 60, paddingStyle: 5 },
        // 🌟 ADDED: Dynamic icon layout router based on the target navigation route
        tabBarIcon: ({ color, focused }) => {
          let iconSymbol = '';

          switch (route.name) {
            case 'HOME':
              iconSymbol = '🏠';
              break;
            case 'SHOP':
              iconSymbol = '🛍️';
              break;
            case 'CATEGORIES':
              iconSymbol = '🏷️';
              break;
            case 'PROFILE':
              iconSymbol = '👤';
              break;
            default:
              iconSymbol = '📌';
          }

          return (
            <Text 
              style={[
                styles.tabIcon, 
                { color: color, opacity: focused ? 1 : 0.6 }
              ]}
            >
              {iconSymbol}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="HOME" component={HomeScreen} />
      <Tab.Screen name="SHOP" component={ShopScreen} />
      <Tab.Screen name="CATEGORIES" component={CategoriesScreen} />
      <Tab.Screen name="PROFILE" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    fontSize: 20,
    marginTop: 4,
  },
});