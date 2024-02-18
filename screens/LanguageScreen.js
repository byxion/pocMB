import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const LanguageScreen = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        if (i18n && i18n.changeLanguage) {
            i18n.changeLanguage(lang);
        }
        console.log('Language changed to:', lang, i18n.language);
    };

    return (
        <View style={styles.container}>
            <Button title={t('english')} onPress={() => changeLanguage('en')} />
            <Button title={t('french')} onPress={() => changeLanguage('fr')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LanguageScreen;
