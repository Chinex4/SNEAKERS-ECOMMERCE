import { THUMBNAILS } from '../util/data';
import nextIcon from '../assets/images/icon-next.svg';
import prevIcon from '../assets/images/icon-previous.svg';
import React, { forwardRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { IMAGES } from '../component/ItemImage';

const Modal = ({ }, ref) => {

    let [index, setindex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(IMAGES[index])

    const handleSelectImage = (indx) => {
        setSelectedImage(IMAGES[indx])
        setindex(0)
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


    return createPortal(
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog ref={ref} className="modal hidden lg:grid">
                <div className="modal-box bg-transparent shadow-none">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-[4.5rem] -top-2 font-bold text-white hover:text-primary-orangee transition-all duration-300 hover:bg-transparent">✕</button>
                    </form>
                    <div className='space-y-7 flex flex-col'>
                        <div className=''>
                            <img className='lg:w-[25rem] lg:rounded-xl' src={selectedImage} alt="item" />

                            <div className='-mt-44 absolute top-[24rem] left-0 flex justify-between space-x-[22rem]'>
                                <button disabled={index === 0} onClick={handlePrevIcon} className='btn btn-circle hover:cursor-pointer'>
                                    <img className='hover:text-primary-orangee' src={prevIcon} alt="prevIcon" />
                                </button>
                                <button disabled={index === IMAGES.length - 1} onClick={handleNextIcon} className='btn btn-circle hover:cursor-pointer'>
                                    <img className='hover:text-primary-orangee' src={nextIcon} alt="nextIcon" />
                                </button>
                            </div>
                        </div>

                        <ul className='hidden lg:flex space-x-6'>
                            {
                                THUMBNAILS.map((thumbnail, i) => {
                                    return <li
                                        onClick={() => handleSelectImage(i)}
                                        key={i}
                                        className={`
                                ${selectedImage === IMAGES[i] ? 'opacity-50 border-[3px] rounded-lg border-primary-orangee' : 'cursor-pointer hover:opacity-50 transition-all duration-500'}
                            `}
                                    >
                                        <img className='w-20 rounded-lg grow' src={thumbnail} />
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </dialog>
        </>,
        document.getElementById('modal')
    )
}

export default forwardRef(Modal) 
