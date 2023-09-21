import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from '../reducer/galleryReducer'
import {GALLERY} from '../GalleryImages'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const GalleryContext = createContext();

const initialState = {
    isLoading: false,
    galleryImages: [],
}

const GalleryContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [search, setSearch] = useState('');
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            console.log(user)
        })

        return () => {
            unsub();
        }
    }, [])

    const getImages = (galleryImages) => {
        dispatch({type: "LOADING_IMAGES"})

        dispatch({type: "GET_GALLERY_IMAGES", payload: galleryImages})
        console.log(galleryImages)
    }

    useEffect(() => {
        getImages(GALLERY);
    }, [])

    return <GalleryContext.Provider value={{...state, search, setSearch, currentUser, setCurrentUser}}>
        {children}
    </GalleryContext.Provider>
}

export const useGalleryContext = () => {
    return useContext(GalleryContext);
}

export default GalleryContextProvider;