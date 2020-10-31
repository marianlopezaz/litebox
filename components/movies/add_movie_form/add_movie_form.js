import { useEffect, useState } from 'react';
import { getCategoriesService } from '../../../utils/categories/services/categories_services';
import { addMovieService } from '../../../utils/movie/services/movie_services';
import SendMovieButtonComponent from '../../commons/buttons/send_movie_button_component/send_movie_button_component';
import Form from '../../commons/form/form';

const AddMovieForm = () => {
    const [options,setOptions] = useState([]);
    const [succesUpload,setSuccessUpload] = useState();
    const [isLoading,setIsLoading] = useState();

    const handleSubmit = async (fields) => { 
        setIsLoading(true);
        addMovieService(fields).then((result)=>{
        setIsLoading(false);
        setSuccessUpload(result.success);
        });
    }

    useEffect(()=>{
        getCategoriesService().then((res)=>{
            if(res.success){
                let options = [];
                res.result.map((option)=>{
                    const OPTION_DATA = {
                        value: option._id,
                        label: option.name
                    }
                    options.push(OPTION_DATA);
                })
                setOptions(options);
            }
            
        })
    },[]);

    return (
        <Form
            inputs={[
                {
                    type: "file",
                    name: "media",
                    required: true,
                    fileAreaDisabled: false,
                    fileAreaIcon: <img src="/logo.svg" style={{ width: 100 }} />,
                    fileAreaTitle: { text: "Agregar archivo o arrastrarlo y soltarlo aquí", size: 18 },
                    fileAreaDescription: {
                        text: "Solo se aceptan archivos jpg, png y svg",
                        size: 14,
                    },
                    fileType: "image/*",
                    fileAcceptMultiple: false,
                },
                {
                    type: "text",
                    name: "text",
                    required: true,
                    label: "Nombre de la película",
                    autofocus: true,
                    validatable: true,
                },
                {
                    type: "select",
                    required: true,
                    options: options,
                    name: "select",
                    label: "Categoría",
                },
            ]
            }
            button = {<SendMovieButtonComponent disabled={isLoading} successUpload={succesUpload}/>}
            handleSubmit = {handleSubmit}
        />
    )
}

export default AddMovieForm;