import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        //categories.push('Apex') no usar push para no mutar objetos
        //setCategories([...categories, 'Apex']);
        /*se hace una copia del arreglo categories y se agrega el nuevo elemento al final*/
        //setCategories(cat => [...cat, 'Apex']); otra forma de hacerlo        
    }
    return (
        <>
            {/*titulo*/}
            <h1>GifExpertApp</h1>

            {/*Input*/}
            <AddCategory onNewCategory={(category) => onAddCategory(category)} />
            {/*Listado de Gif*/}
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }
            </ol>
            {/* Gif Item*/}
        </>
    )
}
