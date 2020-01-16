import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (initialValue) =>  {
    const [darkValue, setDarkValue] = useLocalStorage('darkValue', initialValue);
    
    useEffect(()=> {
        if(darkValue) {
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [darkValue])
    return [darkValue, setDarkValue]
}