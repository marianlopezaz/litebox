import { getMovieCrud, addMovieCrud,editMovieCrud, deleteMovieCrud } from "../cruds/movie_cruds";
import Alert from "react-s-alert";


export async function getMovieService(type) {
    return await getMovieCrud(type).then((result) => {
        if (result.success) {

        } else {
            Alert.error('No se encontraron películas disponibles', {
                position: "bottom",
                effect: "stackslide",
            });
        }
        return result;
    })
}

export async function addMovieService(data, token) {
    return await addMovieCrud(data, token).then((result) => {
        if (result.success) {
            Alert.success("Movie creado correctamente", {
                position: "bottom",
                effect: "stackslide",
            });
        } else {
            Alert.error('Ocurrió un error al guardar la película', {
                position: "bottom",
                effect: "stackslide",
            });
        }
        return result;
    })
}

