import React from "react";

import { View ,TouchableOpacity,Image,Text,StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
export function MovieCard(props) {
    const navigation = useNavigation();

    return (<View style={style.movieContainer} >
        <TouchableOpacity onPress={() => navigation.navigate("moviesdetails",{itemId:props.element.id})} style={style.pressed} underlayColor={'gray'}>
            <View style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                <Image style={style.images} source={{ uri: `https://image.tmdb.org/t/p/w500${props.element.poster_path}`, }} />
                <Text style={style.titleStyle}>{props.element.title}</Text>

                <Text>Rating: {props.element.vote_average}</Text>

            </View>

        </TouchableOpacity>
    </View>)
}

const style = StyleSheet.create({
    pressed: {
        borderRadius: 21,

    },
    movieContainer: {
        width: 140,
        height: 270,
    },
    images: {
        marginBottom: 12,
        width: 120,
        height: 160,
        resizeMode: "cover",
        borderRadius: 18
    },
    titleStyle: {
        color: "black",
        fontSize: 16,
        marginBottom: 8,
    }
})