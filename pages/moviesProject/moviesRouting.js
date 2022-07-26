import React from "react";

import { View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomePage } from "./homePage";
import { FavPage } from "./favoritesPage";
import { ProfilePage } from './profilePage';



const Drawer = createDrawerNavigator();
export function MoviesRoutepage() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="home" component={HomePage} />
            <Drawer.Screen name="favorites" component={FavPage} />
            <Drawer.Screen name="profile" component={ProfilePage} />
        </Drawer.Navigator>
    )
}