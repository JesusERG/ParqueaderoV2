import { View, Text, StyleSheet, Platform, SafeAreaView } from 'react-native';

const Main = () => {
  return (
    <>
      {Platform.OS === 'ios' ? (
        <SafeAreaView style={styles.mainContainer}>
          <View style={styles.topContainer}>
            <Text>Top</Text>
          </View>
          <View style={styles.listContainer}>
            <Text>List</Text>
          </View>
          <View style={styles.mapContainer}>
            <Text>Map</Text>
          </View>
        </SafeAreaView>
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.topContainer}>
            <Text>Top</Text>
          </View>
          <View style={styles.listContainer}>
            <Text>List</Text>
          </View>
          <View style={styles.mapContainer}>
            <Text>Map</Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
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

export default Main;
