import style from './App.module.scss';
import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Seachbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import PixabayApiService from './services/pixabayApi';

export default function App() {
   const [searchQuery, setSearchQuery] = useState('');
   const [showModal, setShowModal] = useState(false);
   const [page, setPage] = useState(1);
   const [images, setImages] = useState([]);
   const [error, setError] = useState(null);
   const [currentImage, setCurrntImage] = useState({});
   const [status, setStatus] = useState('idle');

   useEffect(() => {
      if (searchQuery) {
         setStatus('pending');
         setPage(1);
         setImages([]);
         findImageByName();
         scroll.scrollToBottom();
      }
   }, [searchQuery]);

   useEffect(() => {
      if (searchQuery && page !== 1) {
         setStatus('pending');
         findImageByName();
         scroll.scrollToBottom();
      }
   }, [page]);

   const findImageByName = async () => {
      try {
         const response = await PixabayApiService(searchQuery, page);
         if (response.ok) {
            const articles = await response.json();
            setImages(prevState => [...prevState, ...articles.hits]);
            setStatus('resolved');
         } else {
            return Promise.reject(
               new Error(`${searchQuery} - matches not detected!`),
            );
         }
      } catch (error) {
         setError(error);
         setStatus('rejected');
         toast.error('The input field shouldn`t empty!');
      }
   };

   const toggleModal = image => {
      setShowModal(!showModal);
      setCurrntImage(image);
   };

   return (
      <div className={style.app}>
         <Searchbar onSubmit={setSearchQuery} />
         {status === 'idle' && (
            <h1 className={style.app__title}>
               Best photos still
               <span className={style.title__after}> waiting for you</span>
            </h1>
         )}

         {status === 'rejected' && <h1>{error.message}</h1>}

         {status === 'resolved' && (
            <>
               <ImageGallery images={images} onOpenModal={toggleModal} />
               {images.length !== 0 && (
                  <Button
                     onLoadMore={() => setPage(prevState => prevState + 1)}
                  />
               )}
               {images.length === 0 && <div>{searchQuery} - not detected</div>}
            </>
         )}

         {status === 'pending' && (
            <>
               <ImageGallery images={images} onOpenModal={toggleModal} />
               <Loader
                  className={style.app__loader}
                  type="MutatingDots"
                  color="#00FF55"
                  secondaryColor="#FF9900"
                  height={80}
                  width={80}
               />
            </>
         )}

         {showModal && (
            <Modal onClose={toggleModal}>
               <img src={currentImage.largeImageURL} alt={currentImage.tags} />
            </Modal>
         )}
         <ToastContainer
            position="top-left"
            autoClose={3000}
            newestOnTop={true}
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover
         />
      </div>
   );
}
