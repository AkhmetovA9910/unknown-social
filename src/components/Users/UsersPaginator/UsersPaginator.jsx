import React from 'react';
import s from './UsersPaginator.module.css';

const PageButton = ({ page, currentPage, onPageChange }) => (
   <button
      className={`${s.users__pageButton} ${(currentPage === page) ? s.currentPage : ''}`}
      onClick={() => { onPageChange(page); }}
   >{page}</button>
);

const ArrowPageButton = ({ next = false, prev = false, currentPage, onPageChange, pagesNumber }) => {
   let [onClickFunc, isDisabled, value] = [null, null, null];

   if (next) {
      onClickFunc = () => { if (currentPage < pagesNumber) onPageChange(currentPage + 1); };
      isDisabled = currentPage === pagesNumber;
      value = '>>';
   }
   if (prev) {
      onClickFunc = () => { if (currentPage > 1) onPageChange(currentPage - 1); };
      isDisabled = currentPage === 1;
      value = '<<';
   }

   return (
      <button
         onClick={onClickFunc}
         className={`${s.users__arrowPageButton} ${(isDisabled) ? s.disabled : ''}`}
      >{value}</button>
   );
}

const UsersPaginator = ({ pagesPortionSize = 10, ...props }) => (
   <div className={s.users__pages}>
      <ArrowPageButton prev={true} {...props} />

      <PageButton
         page={props.pageButtons.firstPage}
         currentPage={props.currentPage}
         onPageChange={props.onPageChange}
      />

      {(props.pagesNumber > 10 && props.currentPage - 1 > 7) ? <span className={s.users__threePointer}>...</span> : null}

      {props.pageButtons.pagesWithoutFirstAndLast.map(
         page => (
            <PageButton
               key={page}
               page={page}
               currentPage={props.currentPage}
               onPageChange={props.onPageChange}
            />
         )
      )}

      {(props.pagesNumber > 10 && props.pagesNumber - props.currentPage > 8) ? <span className={s.users__threePointer}>...</span> : null}

      {(!props.pageButtons.lastPage) ? null
         : <PageButton
            page={props.pageButtons.lastPage}
            currentPage={props.currentPage}
            onPageChange={props.onPageChange}
         />
      }

      <ArrowPageButton next={true} {...props} />
   </div>
);

export default UsersPaginator;