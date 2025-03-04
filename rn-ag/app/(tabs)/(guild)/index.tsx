import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GuildScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Guild</Text>
      {/* <Link href="/details/1">View first user details</Link>
      <Link href="/details/2">View second user details</Link>
      <Link
        href={{
          pathname: '/details/[id]',
          params: { id: 'bacon' },
        }}>
        View user details
      </Link> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
