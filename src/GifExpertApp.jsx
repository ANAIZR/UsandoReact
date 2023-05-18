import { useState } from "react";
import { AddCategory, GifGrid, DeleteCategory, DeleteAllCategory } from "./components";
export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    const onAddCategory = (newCategory) => {
        //console.log(newCategory);
        //categories.push(newCategory);
        if (categories.includes(newCategory)) return;
        setCategories([
            //...categories,'Valorant'
            newCategory, ...categories
        ])
    }
    const deleteAllCategory = () => {
        setCategories([]);
      };
    
      const deleteLastCategory = () => {
        setCategories(categories.slice(1));
      };
    return (
        <>

            <h1>BUSQUEDA DE GIFTS</h1>

            <AddCategory
                //setCategories={setCategories}
                onNewCategory={onAddCategory}
            ></AddCategory>


            <DeleteCategory onDeleteLastCategory={deleteLastCategory}/>

            
            <DeleteAllCategory onDeleteAll={deleteAllCategory}/>
            {
                categories.map((category) => (
                    <GifGrid key={category}
                        category={category} />
                ))
            }


        </>
    )

}