import SendMovieButtonComponent from '../../commons/buttons/send_movie_button_component/send_movie_button_component';
import Form from '../../commons/form/form';

const AddMovieForm = () => {
    const handleSubmit = async (fields) => { 
    }
    return (
        <Form
            inputs={[
                {
                    type: "file",
                    name: "media",
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
                    label: "Nombre de la película",
                    autofocus: true,
                    validatable: true,
                },
                {
                    type: "select",
                    options: [
                        { value: 1, label: "Acción" },
                        { value: 2, label: "Animación" },
                        { value: 3, label: "Aventura" },
                        { value: 4, label: "Ciencia Ficción" },
                        { value: 5, label: "Comedia" },
                        { value: 6, label: "Documentales" },
                    ],
                    name: "select",
                    label: "Categoría",
                },
            ]
            }
            button = {<SendMovieButtonComponent />}
            handleSubmit = {handleSubmit}
        />
    )
}

export default AddMovieForm;