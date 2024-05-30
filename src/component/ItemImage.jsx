import React, { useRef, useState } from 'react'
import showImg from '../assets/images/image-product-1.jpg'
import showImg2 from '../assets/images/image-product-2.jpg'
import showImg3 from '../assets/images/image-product-3.jpg'
import showImg4 from '../assets/images/image-product-4.jpg'
import { THUMBNAILS } from '../util/data'
import nextIcon from '../assets/images/icon-next.svg';
import prevIcon from '../assets/images/icon-previous.svg';
import Modal from '../UI/Modal'

export const IMAGES = [showImg, showImg2, showImg3, showImg4]


const ItemImage = () => {
  let [index, setindex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(IMAGES[index])

  const modalRef = useRef()

  const handleSelectImage = (indx) => {
    setSelectedImage(IMAGES[indx])
  }
  const handlePrevIcon = () => {
    const newIndex = index - 1 < 0 ? IMAGES.length - 1 : index - 1;
    setSelectedImage(IMAGES[newIndex]);
    setindex(newIndex);
  };

  const handleNextIcon = () => {
    const newIndex = index + 1 >= IMAGES.length ? 0 : index + 1;
    setSelectedImage(IMAGES[newIndex]);
    setindex(newIndex);
  };

  const openLightBox = () => {
    modalRef.current.showModal()
  }
  return (
    <>
      <Modal ref={modalRef} />
      <div className='space-y-7'>
        <div className=''>
          <img onClick={openLightBox} className='lg:w-[25rem] lg:rounded-lg cursor-pointer lg:hover:-translate-y-5 transition-all duration-500' src={selectedImage} alt="item" />

          <div className='z-40 absolute top-[17.5rem] md:top-[25rem] lg:hidden flex justify-between w-full px-6'>
            <button disabled={index === 0} onClick={handlePrevIcon} className='btn btn-circle hover:cursor-pointer'>
              <img src={prevIcon} alt="prevIcon" />
            </button>
            <button disabled={index === IMAGES.length - 1} onClick={handleNextIcon} className='btn btn-circle hover:cursor-pointer'>
              <img src={nextIcon} alt="nextIcon" />
            </button>
          </div>
        </div>
        <ul className='hidden lg:flex space-x-6 '>
          {
            THUMBNAILS.map((thumbnail, i) => {
              return <li
                onClick={() => handleSelectImage(i)}
                key={i}
                className={`
                                ${selectedImage === IMAGES[i] ? 'opacity-50 border-[3px] rounded-lg border-primary-orangee' : 'cursor-pointer hover:-translate-y-2 transition-transform duration-500'}
                            `}
              >
                <img className='w-20 rounded-lg grow' src={thumbnail} />
              </li>
            })
          }
        </ul>
      </div>
    </>
  )
}

export default ItemImage
