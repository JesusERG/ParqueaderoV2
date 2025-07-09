import { StyleSheet, Platform, SafeAreaView } from 'react-native';
import MainContent from '../components/MainContent';

const Main = () => {
  return (
    <>
      {Platform.OS === 'ios' ? (
        <SafeAreaView style={styles.mainContainer}>
          <MainContent />
        </SafeAreaView>
      ) : (
        <MainContent />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default Main;
