import React from 'react'
import './searchBar.css'
import bgImg from '../../../assets/gallery/bike01.jpg'
import { useNavigate } from 'react-router-dom' 
import { useGalleryContext } from '../../../context/galleryContext'
import { auth } from '../../../firebase'
import { signOut } from 'firebase/auth'

const SearchBar = () => {
    const { setSearch } = useGalleryContext();

    const navigate = useNavigate();

    const handleClick = () => {
        signOut(auth).then(val => {
            console.log(val, "Signed out")
            navigate('/login')
        })
    }

    return (
        <div className='search-main'>
            <div className='search-container'>
                <div className='search-img'>
                    <img src={bgImg} />
                </div>
                <div className='overlapping'></div>
                <div className='search-section'>
                    <div className='logout'>
                        <button onClick={handleClick}>Signout</button>
                    </div>
                    <div className='search-input'>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className='search-inputbox'>
                                <input type="text" name="text" placeholder='Search' className='search-inputbox_search'
                                    onChange={e => setSearch(e.target.value)}
                                />
                                <div className='search-input_icon'>
                                    <input type="submit" />
                                </div>
                                

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar