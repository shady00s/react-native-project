import React from "react";

import { View, Text, Button } from "react-native";

export function IntroPage({ navigation }) {
    return (
        <View>
            <Text>Please choose project to view</Text>
            <Button onPress={() => navigation.navigate('moviesApp')} title="Go to Movies Application" />
            <Button onPress={() => navigation.navigate('cvPage')} title="Go to Cv page" />
        </View>
    )
}