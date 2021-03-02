import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

// Component that contains a loadingSpinner
const LoadingSpinner = () => {
  return (
    <View style={styles.loadingStatusContainer}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingStatusContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoadingSpinner;
