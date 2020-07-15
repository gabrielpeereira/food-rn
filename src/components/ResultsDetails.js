import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetails = ({ results }) => {
    return(
        <View>
            <Image style={styles.image} source={{ uri: results.image_url }} />
            <Text>{results.name}</Text>
            <Text>{results.rating} Stars, {results.review_count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    }
})

export default ResultsDetails;