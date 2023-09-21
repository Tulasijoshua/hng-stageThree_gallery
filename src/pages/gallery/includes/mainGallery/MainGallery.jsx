import React, { useRef, useState } from 'react'
import './mainGallery.css'
import { useGalleryContext } from '../../../../context/galleryContext'
import { GALLERY } from '../../../../GalleryImages';

const MainGallery = () => {
  const [galleryImage, setGalleryImage] = useState(GALLERY);
  const [isDragging, setIsDragging] = useState(false);
  const {galleryImages, search, setSearch, isLoading} = useGalleryContext();

  const filters = galleryImage.filter((item) => {
    return search.toLowerCase() === '' ? item : item.tagName.toLowerCase().includes(search);
})

  const dragItem = useRef(null)
  const dragOverItem = useRef(null)
  console.log(galleryImage);

  const handleSort = () => {
    let _galleryImage = [...galleryImage]

    const draggedItemContent = _galleryImage.splice(dragItem.current, 1)[0]

    _galleryImage.splice(dragOverItem.current, 0, draggedItemContent)

    dragItem.current = null
    dragOverItem.current = null

    setGalleryImage(_galleryImage)
    setIsDragging(false);
  }

  if (isLoading) {
    return <div className='text-center text-4xl font-bold'> 
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
     </div>
}

  return (
    <div className='main-gallery'>
      <div className='gallery-container'> 
        {
          filters.map((curItem, index) => {
            const isDragging = dragItem.current === index;
            return (
              <div key={index} className={`gallery-card ${isDragging ? 'dragging' : ''}`} draggable
              onDragStart={(e) => {
                dragItem.current = index
                setIsDragging(true); 
              } }
              onDragEnter={(e) => {
                dragOverItem.current = index
                setIsDragging(true); 
              } }
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
              >
                <div className='gallery-img blur-load'>
                  <img src={curItem.img} />
                </div>
                <div className='gallery-desc'>
                  <div className='gallery-img_name'>{curItem.tagName}</div>
                  <div className='gallery-img_cat'>{curItem.category}</div>
                </div>
              </div>)

          })
        }
      </div>
    </div>
  )
}

export default MainGallery