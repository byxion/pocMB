// HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { wordpressApi } from '../api';

const HomeScreen = () => {
    const { t, i18n } = useTranslation();
    const [content, setContent] = useState('');

    useEffect(() => {
        fetchData();
    }, [i18n.language]);

    const fetchData = async () => {
        try {
            const response = await wordpressApi.get('hello-world/', {
                params: { lang: i18n.language },
            });

            setContent(response.data.content);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>{t('helloWorld')}</Text>
            <Text>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
