import React from 'react'
import { useGalleryContext } from './context/galleryContext'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {currentUser} = useGalleryContext();

  if(!currentUser) {
    return <Navigate to="/login" replace={true} />
  }

  return children
}

export default PrivateRoute