import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import rootStore from './Stores/rootStore'
import { StoreProvider } from './Stores/StoreProvider';
import PrimaryNavigator from './Navigators/PrimaryNavigator'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const queryClient = new QueryClient()

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar hidden={true} />
      <StoreProvider>
        <SafeAreaView style={styles.container}>
          <PrimaryNavigator />
        </SafeAreaView>
      </StoreProvider>
    </QueryClientProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
