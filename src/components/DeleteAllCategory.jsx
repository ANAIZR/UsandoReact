// eslint-disable-next-line react/prop-types
export const DeleteAllCategory = ({onDeleteAll}) => {
    const delateAll = (event) => {
        event.preventDefault();
        onDeleteAll();
      
    }

    return (
        <div>
            <button onClick={delateAll}>
                Eliminar todas las busquedas
            </button>
        </div>
    )
}