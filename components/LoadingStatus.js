import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const LoadingStatus = () => {
  return (
    <View style={styles.loadingStatusContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingStatusContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoadingStatus;
