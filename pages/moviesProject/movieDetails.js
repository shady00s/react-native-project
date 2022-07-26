import React, { useState, useEffect } from "react";
import { axiosInestance } from '../../axios/inestance'
import { MovieCard } from "../../components/movieCard";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export function MovieDetails({ route, navigation }) {
    const { itemId } = route.params;
    const [movieDetails, setMovieDetails] = useState({})
    useEffect(() => {

        axiosInestance.get('/' + itemId).
            then((res) => {
                setMovieDetails(() => res.data)

            })
            .catch(e => alert(e))

    }, [])
    return (

        <View>

            <View style={style.header}>
                <TouchableOpacity style={style.backButton} onPress={() => navigation.goBack()}>
                    <Text >Back</Text>
                </TouchableOpacity>
                <Text style={style.titleText}>{movieDetails.title}</Text>
            </View>
            <ScrollView>
                <Image style={style.image} source={{ uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` }} />
                <Text>{movieDetails.title}</Text>
                <Text>{movieDetails.overview}</Text>
            </ScrollView>
            <View>
                <SimilierMovies id={itemId} />
            </View>
        </View>


    )
}


function SimilierMovies(props) {
    const [popularMoviesList, setPopularMoviesTest] = useState([])
    useEffect(() => {

        axiosInestance.get('/' + props.id + '/similar').
            then((res) => {
                setPopularMoviesTest(() => res.data.results)

            })
            .catch(e => alert(e))

    }, [])
    return (<View>
        <Text>Similar Movies</Text>
        <ScrollView horizontal={true}>

            {popularMoviesList.map((element, i) => <MovieCard element={element} key={i} />)}
        </ScrollView>
    </View>
    )
}

const style = StyleSheet.create({
    header: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",

    },
    titleText: {
        marginLeft: 40,
        color: "black",
        fontSize: 17
    },
    backButton: {
        margin: 20
    },

    image: {
        width: "100%",
        height: 430,
        resizeMode: "contain"
    }
})