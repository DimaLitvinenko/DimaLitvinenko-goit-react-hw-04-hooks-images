import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import style from './Searchbar.module.scss';

export default function Searchbar({ onSubmit }) {
   const [searchQuery, setSearchQuery] = useState('');

   const searchQueryChangeHandler = ({ currentTarget }) => {
      setSearchQuery(currentTarget.value.toLowerCase());
   };

   const handleSubmit = event => {
      event.preventDefault();

      if (searchQuery.trim() !== '') {
         onSubmit(searchQuery);
         setSearchQuery('');
      } else
         toast.error(`The input field shouldn't be empty!`, {
            position: 'top-left',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
         });
   };

   return (
      <header id="header" className={style.searchHeader}>
         <a className={style.pixabay__logo_link} href="https://pixabay.com/">
            <img
               className={style.pixabay__logo_img}
               src="https://pixabay.com/static/img/public/medium_rectangle_a.png"
               alt="Pixabay-service-logo"
            />
         </a>

         <form onSubmit={handleSubmit} className={style.searchForm}>
            <input
               className={style.searchForm__input}
               id="input"
               type="text"
               autoComplete="off"
               autoFocus
               value={searchQuery}
               onChange={searchQueryChangeHandler}
               placeholder=" "
            />
            <div className={style.cut}></div>
            <label className={style.placeholder} htmlFor="input">
               Enter search image name
            </label>
            <button type="submit" className={style.searchForm__button}>
               <span className={style.searchForm__button_label}>Search</span>
               <ImSearch />
            </button>
         </form>

         <a className={style.pixabay__logo_link} href="https://pixabay.com/">
            <img
               className={style.pixabay__logo_img}
               src="https://pixabay.com/static/img/public/medium_rectangle_a.png"
               alt="Pixabay-service-logo"
            />
         </a>
      </header>
   );
}

Searchbar.propTypes = { searchQuery: PropTypes.string };
