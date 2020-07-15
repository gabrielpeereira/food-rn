import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults('')

  const filterResultsbyPrice = (price) => {
      return results.filter(result => {
          return result.price === price

      })
  }

  return (
    <View>
    <SearchBar 
      term={term} 
      onTermChange={setTerm} 
      onTermSubmit={() => searchApi(term)}  
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have foung {results.length} results</Text>
      <ResultsList results={filterResultsbyPrice('$')} title="Cost Pricier"/>
      <ResultsList results={filterResultsbyPrice('$$')} title="Bit Pricier"/>
      <ResultsList results={filterResultsbyPrice('$$$')} title="Big Spender"/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
