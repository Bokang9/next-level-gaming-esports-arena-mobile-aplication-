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
function HomeScreen({ navigate, onDetails, onToggle, selectedIds }) {
  return (
    <>
      <View style={styles.hero}>
        <MaterialCommunityIcons name="gamepad-variant" size={54} color={COLORS.purple} />
        <Text style={styles.heroTitle}>NEXT LEVEL</Text>
        <Text style={styles.heroSubtitle}>GAMING & ESPORTS ARENA</Text>
        <Text style={styles.bodyText}>
          A modern gaming and esports arena in Johannesburg. Play the latest
          games, compete in tournaments and celebrate with friends.
        </Text>
        <ActionButton title="Book now" onPress={() => navigate('Packages')} />
        <ActionButton
          title="Calculate fees"
          secondary
          onPress={() => navigate('Calculate Fees')}
        />
      </View>

      <Text style={styles.sectionTitle}>Popular packages</Text>
      {services
        .filter((item) => item.category === 'Package')
        .slice(0, 2)
        .map((item) => (
          <ServiceCard
            key={item.id}
            item={item}
            selected={selectedIds.includes(item.id)}
            onDetails={onDetails}
            onToggle={onToggle}
          />
        ))}

      <Text style={styles.sectionTitle}>More to explore</Text>
      <View style={styles.buttonRow}>
        <ActionButton
          title="About us"
          secondary
          onPress={() => navigate('About Us')}
          style={styles.flexButton}
        />
        <ActionButton
          title="Experiences"
          secondary
          onPress={() => navigate('Experiences')}
          style={styles.flexButton}
        />
      </View>
    </>
  );
}

function AboutScreen() {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>About Next Level Gaming</Text>
      <Text style={styles.bodyText}>
        Founded in 2023 by Jason Naidoo, Next Level Gaming & Esports Arena is a
        Johannesburg entertainment venue for casual players, competitive gamers,
        schools and businesses.
      </Text>

      <Text style={styles.subheading}>Our history</Text>
      <Text style={styles.bodyText}>
        The arena was created to give gamers access to high-performance gaming
        equipment and organised competitive events.
      </Text>

      <Text style={styles.subheading}>Our vision</Text>
      <Text style={styles.bodyText}>
        To be a welcoming, modern destination for gaming, esports and social
        events.
      </Text>

      <Text style={styles.subheading}>Our mission</Text>
      <Text style={styles.bodyText}>
        To provide exciting gaming experiences, quality equipment and
        well-organised events for our community.
      </Text>

      <Text style={styles.subheading}>Our goals</Text>
      <Text style={styles.bodyText}>
        • Make gaming accessible to more people{"\n"}
        • Host esports tournaments and events{"\n"}
        • Create memorable parties, school outings and team-building days
      </Text>

      <Text style={styles.subheading}>Events</Text>
      <Text style={styles.bodyText}>
        Gaming events, esports tournaments, birthday parties, school outings and
        corporate team-building events.
      </Text>
    </View>
  );
}

function ServicesScreen({ category, onDetails, onToggle, selectedIds }) {
  const list = services.filter((item) => item.category === category);

  return (
    <>
      <Text style={styles.bodyText}>
        {category === 'Package'
          ? 'Choose a package or combine several. More bookings earn a bigger discount.'
          : 'Pick an individual experience, or add it to a package.'}
      </Text>
      {list.map((item) => (
        <ServiceCard
          key={item.id}
          item={item}
          selected={selectedIds.includes(item.id)}
          onDetails={onDetails}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}

function DetailsScreen({ item, onBack, onToggle, selectedIds, navigate }) {
  if (!item) return null;

  const selected = selectedIds.includes(item.id);

  return (
    <>
      <ActionButton title="← Back to list" secondary onPress={onBack} />
      <View style={styles.card}>
        <View style={styles.serviceHeading}>
          <View style={styles.iconBox}>
            <MaterialCommunityIcons
              name={item.icon}
              size={34}
              color={item.category === 'Experience' ? COLORS.purple : COLORS.cyan}
            />
          </View>
          <View style={styles.serviceTitleWrap}>
            <Text style={styles.serviceTitle}>{item.name}</Text>
            <Text style={styles.price}>{formatRand(item.price)}</Text>
          </View>
        </View>

        <Text style={styles.bodyText}>{item.description}</Text>
        <Text style={styles.subheading}>What’s included</Text>
        {item.includes.map((feature) => (
          <View key={feature} style={styles.includeRow}>
            <MaterialCommunityIcons name="check-circle" size={21} color={COLORS.green} />
            <Text style={styles.bodyText}>{feature}</Text>
          </View>
        ))}

        <ActionButton
          title={selected ? 'Added — add another' : 'Add to booking'}
          onPress={() => onToggle(item.id)}
        />
        {selected && (
          <ActionButton
            title="Calculate fees"
            secondary
            onPress={() => navigate('Calculate Fees')}
          />
        )}
      </View>
    </>
  );
}
function FeesScreen({ selectedIds, onToggle }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const selectedServices = services.filter((item) => selectedIds.includes(item.id));
  const subtotal = selectedServices.reduce((sum, item) => sum + item.price, 0);
  const bookingCount = selectedServices.length;

  const discountRate =
    bookingCount >= 4 ? 0.15 : bookingCount === 3 ? 0.1 : bookingCount === 2 ? 0.05 : 0;
  const discount = subtotal * discountRate;
  const afterDiscount = subtotal - discount;
  const vat = afterDiscount * 0.15;
  const total = afterDiscount + vat;

  const requestQuote = () => {
    if (!name.trim() || !phone.trim() || !email.trim()) {
      Alert.alert('Missing details', 'Please enter your name, phone number and email.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      Alert.alert('Invalid email', 'Please enter a valid email address.');
      return;
    }
    if (!/^[0-9+()\-\s]{7,20}$/.test(phone.trim())) {
      Alert.alert('Invalid phone number', 'Please enter a valid phone number.');
      return;
    }
    if (selectedServices.length === 0) {
      Alert.alert('No bookings selected', 'Select at least one package or experience.');
      return;
    }

    Alert.alert(
      'Quote request ready',
      `Thank you, ${name.trim()}.\nSelected items: ${bookingCount}\nEstimated total (including VAT): ${formatRand(total)}\nA consultant can contact you to confirm your booking.`
    );
  };

  return (
    <>
      <Text style={styles.sectionTitle}>Your bookings</Text>
      <Text style={styles.bodyText}>
        Select one or more packages or experiences. The quote includes any
        multi-booking discount and 15% VAT.
      </Text>

      <Text style={styles.subheading}>Select packages and experiences</Text>
      {services.map((item) => {
        const checked = selectedIds.includes(item.id);
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => onToggle(item.id)}
            style={styles.checkboxRow}
          >
            <MaterialCommunityIcons
              name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={24}
              color={checked ? COLORS.green : COLORS.muted}
            />
            <Text style={styles.checkboxLabel}>{item.name}</Text>
            <Text style={styles.checkboxPrice}>{formatRand(item.price)}</Text>
          </TouchableOpacity>
        );
      })}

      <Text style={styles.subheading}>Customer details</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Your name"
        placeholderTextColor={COLORS.muted}
        autoCapitalize="words"
      />
      <Text style={styles.label}>Phone number</Text>
      <TextInput
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        placeholder="+27..."
        placeholderTextColor={COLORS.muted}
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>Email address</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholder="you@example.com"
        placeholderTextColor={COLORS.muted}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.subheading}>Fee summary</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={styles.tableHeaderText}>Description</Text>
          <Text style={styles.tableHeaderText}>Amount</Text>
        </View>

        {selectedServices.map((item) => (
          <View key={item.id} style={styles.tableRow}>
            <Text style={styles.tableText}>{item.name}</Text>
            <Text style={styles.tableText}>{formatRand(item.price)}</Text>
          </View>
        ))}

        <View style={styles.tableRow}>
          <Text style={styles.tableText}>Subtotal</Text>
          <Text style={styles.tableText}>{formatRand(subtotal)}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableText}>
            Discount ({Math.round(discountRate * 100)}%)
          </Text>
          <Text style={styles.tableText}>−{formatRand(discount)}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableText}>VAT (15%)</Text>
          <Text style={styles.tableText}>{formatRand(vat)}</Text>
        </View>
        <View style={[styles.tableRow, styles.totalRow]}>
          <Text style={styles.totalText}>Estimated total</Text>
          <Text style={styles.totalText}>{formatRand(total)}</Text>
        </View>
      </View>

      <Text style={styles.mutedText}>
        Discount: 1 booking—0%; 2 bookings—5%; 3 bookings—10%; 4 or more—15%.
        This is a quotation, not a formal invoice.
      </Text>
      <ActionButton title="Request a booking quote" onPress={requestQuote} />
    </>
  );
}

function ContactScreen() {
  const openLink = (url) => {
    Linking.openURL(url).catch(() =>
      Alert.alert('Unable to open link', 'Please try again later.')
    );
  };

  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Find us</Text>
      <Text style={styles.bodyText}>📍 Johannesburg, South Africa</Text>
      <Text style={styles.bodyText}>🕒 Opening hours to be confirmed</Text>
      <Text style={styles.bodyText}>✉ bookings@nextlevelgaming.example</Text>
      <Text style={styles.bodyText}>☎ +27 11 000 0000</Text>

      <ActionButton
        title="Open directions"
        secondary
        onPress={() =>
          openLink('https://www.google.com/maps/search/?api=1&query=Johannesburg')
        }
      />
      <ActionButton
        title="Email us"
        secondary
        onPress={() => openLink('mailto:bookings@nextlevelgaming.example')}
      />
      <ActionButton
        title="Call us"
        secondary
        onPress={() => openLink('tel:+27110000000')}
      />

      <Text style={styles.subheading}>Social media</Text>
      <Text style={styles.bodyText}>
        Add your official Instagram, Facebook or other social media links here.
      </Text>
    </View>
  );
}
