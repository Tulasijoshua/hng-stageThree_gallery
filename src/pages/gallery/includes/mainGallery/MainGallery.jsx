import React, { useRef, useState } from 'react'
import './mainGallery.css'
import { useGalleryContext } from '../../../../context/galleryContext'
import { GALLERY } from '../../../../GalleryImages';

const MainGallery = () => {
  const [galleryImage, setGalleryImage] = useState(GALLERY);
  const [isDragging, setIsDragging] = useState(false);
  const {search, setSearch} = useGalleryContext();

  const filters = galleryImage.filter((item) => {
    return search.toLowerCase() === '' ? item : item.tagName.toLowerCase().includes(search);
})

  const dragItem = useRef(null)
  const dragOverItem = useRef(null)
  // const { galleryImages } = useGalleryContext();
  console.log(galleryImage);

  const handleSort = () => {
    //duplicate items
    let _galleryImage = [...galleryImage]

    //remove and save the dragged item content
    const draggedItemContent = _galleryImage.splice(dragItem.current, 1)[0]

    //switch the position
    _galleryImage.splice(dragOverItem.current, 0, draggedItemContent)

    //reset the position ref
    dragItem.current = null
    dragOverItem.current = null

    //update the actual array
    setGalleryImage(_galleryImage)
    setIsDragging(false);
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