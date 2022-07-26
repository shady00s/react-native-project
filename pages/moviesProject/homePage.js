import React, { useState, useEffect } from "react";
import { axiosInestance } from '../../axios/inestance'
import { View, Text, ScrollView } from "react-native";
import { MovieCard } from "../../components/movieCard";

export function HomePage(props) {

    return (
        <ScrollView>
            <View>
                <PopularMovies />
                <TopRatedMovies />
                <UpComing />
            </View>
        </ScrollView>
    )

}

function PopularMovies() {
    const [popularMoviesList, setPopularMoviesTest] = useState([])
    useEffect(() => {

        axiosInestance.get('/popular').
            then((res) => {
                setPopularMoviesTest(() => res.data.results)

            })
            .catch(e => alert(e))

    }, [])
    return (<View>
        <Text>Popular Movies</Text>
        <ScrollView horizontal={true}>

            {popularMoviesList.map((element, i) => <MovieCard element={element} key={i} />)}
        </ScrollView>
    </View>

    )

}

function TopRatedMovies() {
    const [popularMoviesList, setPopularMoviesTest] = useState([])
    useEffect(() => {

        axiosInestance.get('/top_rated').
            then((res) => {
                setPopularMoviesTest(() => res.data.results)

            })
            .catch(e => alert(e))

    }, [])
    return (<View>
        <Text>Top Rated Movies</Text>
        <ScrollView horizontal={true}>

            {popularMoviesList.map((element, i) => <MovieCard element={element} key={i} />)}
        </ScrollView>
    </View>

    )

}

function UpComing() {
    const [popularMoviesList, setPopularMoviesTest] = useState([])
    useEffect(() => {

        axiosInestance.get('/upcoming').
            then((res) => {
                setPopularMoviesTest(() => res.data.results)

            })
            .catch(e => alert(e))

    }, [])
    return (<View>
        <Text>Upcoming Movies</Text>
        <ScrollView horizontal={true}>

            {popularMoviesList.map((element, i) => <MovieCard element={element} key={i} />)}
        </ScrollView>
    </View>

    )

}