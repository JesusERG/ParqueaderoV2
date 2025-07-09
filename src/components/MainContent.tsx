import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const MainContent = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.topContainer}>
        <Icon name="search" size={30} />
        <Text>Top</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('Settings' as never);
          }}
        >
          <Icon name="settings" size={30} />
        </Pressable>
      </View>
      <View style={styles.listContainer}>
        <Text>List</Text>
      </View>
      <View style={styles.mapContainer}>
        <Text>Map</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '1%',
  },
  listContainer: {
    borderColor: 'yellow',
    borderWidth: 1,
    flex: 8,
  },
  mapContainer: {
    borderColor: 'blue',
    borderWidth: 1,
    flex: 8,
  },
});

export default MainContent;
