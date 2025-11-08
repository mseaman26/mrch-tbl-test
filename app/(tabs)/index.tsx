import { Image } from 'expo-image';
import { Platform, StyleSheet, ScrollView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
        headerImage={<ThemedView style={{ height: 200, backgroundColor: 'transparent' }} />}
        headerBackgroundColor={{ light: '#dfdfdfff', dark: '#f1f1f1ff' }}
      >
        <ThemedView style={styles.titleContainer}>
        </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">CART</ThemedText>
          <ThemedView style={styles.qrContainer}>
            <QRCode
              value="https://google.com"
              size={280}
              backgroundColor="white"
              color="black"
            />
          </ThemedView>
        </ThemedView>
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">RECENT</ThemedText>
          <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
            style={styles.scrollView}
          >
            <ThemedView style={styles.whiteSquare} />
            <ThemedView style={styles.whiteSquare} />
            <ThemedView style={styles.whiteSquare} />
            <ThemedView style={styles.whiteSquare} />
            <ThemedView style={styles.whiteSquare} />
          </ScrollView>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  sectionContainer: {
    gap: 12,
    marginBottom: 16,
  },
  whiteSquare: {
    width: 250,
    height: 350,
    backgroundColor: '#ffffff',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  qrContainer: {
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareRow: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  scrollView: {
    height: 370,
  },
  scrollContent: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 5,
  },
});
