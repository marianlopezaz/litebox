import { LinearProgress } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { mutate } from 'swr';
import { getCategoriesService } from '../../../utils/categories/services/categories_services';
import config from '../../../utils/config';
import { addMovieService } from '../../../utils/movie/services/movie_services';
import SendMovieButtonComponent from '../../commons/buttons/send_movie_button_component/send_movie_button_component';
import Form from '../../commons/form/form';
import SuccessUploadForm from '../success_upload_form/success_upload_form';
import styles from './styles.module.scss';

const url = `${config.api_url}/movies`;
const AddMovieForm = ({handleClose}) => {
    const [options, setOptions] = useState([]);
    const [succesUpload, setSuccessUpload] = useState();
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState();
    const [uploadedMovie, setUploadedMovie] = useState();

    const handleSubmit = async (fields) => {
        setProgress(progress + 10);
        setIsLoading(true);
        addMovieService(fields, (event) => {
            setProgress(Math.round((100 * event.loaded) / event.total));
        }).then((result) => {
            setIsLoading(false);
            mutate(url)
            handleMovieData(fields);
            setTimeout(() => {
                setSuccessUpload(result.success);
            }, 100);
        });
    }

    const handleMovieData = (fields) =>{
        const category = options.filter((option)=>{return option.value === fields.select})[0].label;
        const MOVIE = {
            category: category,
            name: fields.text,
        }
        setUploadedMovie(MOVIE)
    }
    useEffect(() => {
        getCategoriesService().then((res) => {
            if (res.success) {
                let options = [];
                res.result.map((option) => {
                    const OPTION_DATA = {
                        value: option._id,
                        label: option.name
                    }
                    options.push(OPTION_DATA);
                })
                setOptions(options);
            }

        })
    }, []);

    return (
        <>
            {
                succesUpload ? 
                <SuccessUploadForm movie={uploadedMovie} succesUpload={succesUpload} handleClose={handleClose}/>
                    :
                    <>
                        {
                            progress > 0 &&
                            <div className={styles.loader_container}>
                                <LinearProgress variant="determinate" value={progress} />
                            </div>
                        }

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
                            button={<SendMovieButtonComponent disabled={isLoading}/>}
                            handleSubmit={handleSubmit}
                        />
                    </>
            }
        </>
    )
}

export default AddMovieForm;