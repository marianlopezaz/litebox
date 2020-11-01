import { getMovieCrud, addMovieCrud,editMovieCrud, deleteMovieCrud } from "../cruds/movie_cruds";
import Alert from "react-s-alert";


export async function getMovieService(type) {
    return await getMovieCrud(type).then((result) => {
        if (result.success) {

        } else {
            Alert.error('No se encontraron películas disponibles', {
                effect: "stackslide",
            });
        }
        return result;
    })
}

export async function addMovieService(data, onUploadProgress) {
    return await addMovieCrud(data, onUploadProgress).then((result) => {
        if (result.success) {
            Alert.success("Película cargada correctamente", {
                effect: "stackslide",
            });
        } else {
            Alert.error('Ocurrió un error al guardar la película', {
                effect: "stackslide",
            });
        }
        return result;
    })
}

