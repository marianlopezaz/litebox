import { getCategoriesCrud} from "../cruds/categories_cruds";
import Alert from "react-s-alert";


export async function getCategoriesService() {
    return await getCategoriesCrud().then((result) => {
        return result;
    })
}