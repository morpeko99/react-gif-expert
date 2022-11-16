import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        //setCategories(cat => [inputValue, ...cat]);
        onNewCategory(inputValue.trim())

        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            /*se puede escribir asi (event) => onInputChange(event)
        se puede escribir de la forma onImputChange porque se esta ejecutando una 
        funcion que se le manda un argumento el cual es el mismo al primer argumento que recibe*/
            />


        </form>

    )
}
