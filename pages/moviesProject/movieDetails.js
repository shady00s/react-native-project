import React ,{useState,useEffect}from "react";
import { axiosInestance } from '../../axios/inestance'

import { View ,Text,Image,StyleSheet} from "react-native";

export function MovieDetails({route,navigation}){
    const { itemId } = route.params;
    const [movieDetails, setMovieDetails] = useState({})
    useEffect(() => {

        axiosInestance.get('/'+itemId).
            then((res) => {
                setMovieDetails(() => res.data)

            })
            .catch(e => alert(e))

    }, [])
    return(
        <View>
            <Image style={style.image} source={{uri:`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}}/>
            <Text>{movieDetails.title}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    image:{
        width:"100%",
        height:"80%",
        resizeMode:"cover"
    }
})