import React, { useMemo, useState } from 'react';
import {
  Alert,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { formatRand, services } from './src/data/catalog';

const COLORS = {
  background: '#08080d',
  surface: '#13131d',
  surfaceRaised: '#1b1b28',
  border: '#292938',
  cyan: '#20c9f2',
  green: '#29f381',
  purple: '#a15cff',
  white: '#f5f5fa',
  muted: '#b5b5c5',
  darkText: '#07110c',
};

const tabs = [
  { id: 'Home', label: 'Home', icon: 'home' },
  { id: 'Packages', label: 'Packages', icon: 'gamepad-variant' },
  { id: 'Experiences', label: 'Experiences', icon: 'creation' },
  { id: 'Calculate Fees', label: 'Fees', icon: 'calculator' },
  { id: 'Contact Us', label: 'Contact', icon: 'chat' },
];

function AppHeader({ title, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const choosePage = (page) => {
    setMenuOpen(false);
    onNavigate(page);
  };

  return (
    <View style={styles.headerWrap}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity
          accessibilityLabel="Open navigation menu"
          onPress={() => setMenuOpen((open) => !open)}
          style={styles.menuButton}
        >
          <MaterialCommunityIcons name="menu" size={27} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {menuOpen && (
        <View style={styles.dropdown}>
          {[
            'Home',
            'About Us',
            'Packages',
            'Experiences',
            'Calculate Fees',
            'Contact Us',
          ].map((page) => (
            <TouchableOpacity
              key={page}
              onPress={() => choosePage(page)}
              style={styles.dropdownItem}
            >
              <Text style={styles.dropdownText}>{page}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
function ActionButton({ title, onPress, secondary = false, style }) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={[
        styles.actionButton,
        secondary ? styles.secondaryButton : styles.primaryButton,
        style,
      ]}
    >
      <Text style={secondary ? styles.secondaryButtonText : styles.primaryButtonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

function ServiceCard({ item, onDetails, onToggle, selected }) {
  return (
    <View style={styles.card}>
      <View style={styles.serviceHeading}>
        <View style={styles.iconBox}>
          <MaterialCommunityIcons
            name={item.icon}
            size={32}
            color={item.category === 'Experience' ? COLORS.purple : COLORS.cyan}
          />
        </View>
        <View style={styles.serviceTitleWrap}>
          <Text style={styles.serviceTitle}>{item.name}</Text>
          <Text style={styles.price}>{formatRand(item.price)}</Text>
        </View>
      </View>

      <Text style={styles.bodyText}>{item.description}</Text>

      <View style={styles.buttonRow}>
        <ActionButton
          title="View details"
          secondary
          onPress={() => onDetails(item)}
          style={styles.flexButton}
        />
        <ActionButton
          title={selected ? 'Added ✓' : '+ Add to booking'}
          onPress={() => onToggle(item.id)}
          style={styles.flexButton}
        />
      </View>
    </View>
  );
}