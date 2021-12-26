import style from './Button.module.scss';
import { FaDownload } from 'react-icons/fa';

export default function LoadMoreButton({ onLoadMore }) {
   return (
      <button onClick={onLoadMore} type="button" className={style.button}>
         Load more
         <span className={style.button__icon}>
            <FaDownload />
         </span>
      </button>
   );
}
