import './i18n';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import HomeScreen from './screens/HomeScreen';
import PokemonScreen from './screens/PokemonScreen';
import LanguageScreen from './screens/LanguageScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
    const { t } = useTranslation();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStackScreen} options={{ title: t('home') }} />
                <Tab.Screen name="Pokemon" component={PokemonStackScreen} options={{ title: t('pokemon') }} />
                <Tab.Screen name="Language" component={LanguageStackScreen} options={{ title: t('language') }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const HomeStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
};

const PokemonStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    );
};

const LanguageStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
        </Stack.Navigator>
    );
};

export default App;