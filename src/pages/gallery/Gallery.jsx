import React from 'react'
// import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import MainGallery from './includes/mainGallery/MainGallery'

import SearchBar from './searchBar/SearchBar';

const Gallery = () => {

  
  return (
    <div>
      <SearchBar />
        <MainGallery />
    </div>
  )
}

export default Gallery