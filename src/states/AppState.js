import AppContext from '../states/AppContext'
import { useState,useEffect } from 'react';

const AppState=(props)=>{

    useEffect(() => {
        const theme=localStorage.getItem('theme');
        if(theme){
            localStorage.setItem('theme',theme);
            settogleMode(theme);
        }
    }, [])
    
    const [toglemode,settogleMode]=useState('light');
    const tooglebutton=(value)=>{
        localStorage.setItem('theme',value);
            settogleMode(value);
    }
    return(
        <AppContext.Provider value={{toglemode,tooglebutton}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;