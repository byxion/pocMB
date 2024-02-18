import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { pokeApi } from '../api';

const PokemonScreen = () => {
    const [pokemonImage, setPokemonImage] = useState('');

    useEffect(() => {
        fetchPokemonData();
    }, []);

    const fetchPokemonData = async () => {
        try {
            const response = await pokeApi.get('pokemon/ditto');
            setPokemonImage(response.data.sprites.front_default);
        } catch (error) {
            console.error('Error fetching Pokemon data:', error);
        }
    };

    return (
        <View style={styles.container}>
            {pokemonImage ? (
                <Image source={{ uri: pokemonImage }} style={styles.pokemonImage} />
            ) : (
                <View style={styles.loadingContainer}>
                    {/* Mettre un loading quand ça charge */}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pokemonImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PokemonScreen;
