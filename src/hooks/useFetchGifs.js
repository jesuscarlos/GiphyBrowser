import React, { useEffect, useState } from 'react'
import { getGif } from '../components/helpers/getGifs';


export const useFetchGifs = ( categoria ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGif( categoria )
            .then(imgs => {

                setState({
                    data: imgs,
                    loading: false
                });
            
            });

    }, [categoria]);

    return state;
    
}

