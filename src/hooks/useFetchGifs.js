import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])
    //recibe una funcion, donde se ponen las funciones que queramos realizar, 
    //y en el otro argumento un arreglo con las condiciones, que indican cuando se quiere ejecutar el callback anterior,
    //[] solo hacer efecto la primera renderizacion del componente
    return {
        images: images,
        isLoading: isLoading
    }
}
