// eslint-disable-next-line react/prop-types
export const DeleteCategory = ({onDeleteLastCategory}) => {

   

    const delateLast = (event) => {
        event.preventDefault();
        onDeleteLastCategory();
      
    }

    return (
        <div>
            <button onClick={delateLast}>
                Eliminar ultima busqueda
            </button>
        </div>
    )
}