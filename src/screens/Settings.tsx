import { View, Text, Switch } from 'react-native';

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
      <View>
        <Text>Dark Mode</Text>
        <Switch value={false} onValueChange={() => {}} />
      </View>
    </View>
  );
};

export default Settings;
