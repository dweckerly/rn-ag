import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(guild)" />
      <Tabs.Screen name="(recruit)" />
      <Tabs.Screen name="(quests)" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}