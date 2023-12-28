// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { searchQuran } from '../services/QuranSearchService';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      return; // Don't perform search if query is empty
    }

    // Call the AI-powered search service
    const results = await searchQuran(searchQuery);

    // Update state with search results
    setSearchResults(results);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your query"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      {searchResults.length > 0 ? (
        searchResults.map((result, index) => (
          <Text key={index}>{result}</Text>
        ))
      ) : (
        <Text>No results found</Text>
      )}
    </View>
  );
};

export default HomeScreen;
