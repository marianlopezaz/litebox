import { getCategoriesCrud} from "../cruds/categories_cruds";
import Alert from "react-s-alert";


export async function getCategoriesService() {
    return await getCategoriesCrud().then((result) => {
        if (result.success) {

        } else {
            Alert.error("No se encontraron categorías", {
                effect: "stackslide",
            });
        }
        return result;
    })
}