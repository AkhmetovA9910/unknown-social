
export const getPageButtons = (currentPage, pagesNumber, pagesPortion) => {
   debugger
   const pagesPortionSize = (pagesPortion >= pagesNumber) ? pagesNumber : pagesPortion;
   const lastPage = (pagesNumber > 1) ? pagesNumber : null
   let pagesWithoutFirstAndLast = [];


   if (pagesNumber > 2) {
      const arrayLength = pagesPortionSize - 2;
      let firstArrayEl = (currentPage >= pagesPortionSize - 1) ? currentPage : 2;

      if (currentPage - 1 <= arrayLength - 1) {
         firstArrayEl = 2;
      } else if (pagesNumber - currentPage <= arrayLength) {
         firstArrayEl = pagesNumber - arrayLength;
      } else firstArrayEl = currentPage;

      for (let i = 0; i < arrayLength; i++) {
         pagesWithoutFirstAndLast.push(firstArrayEl);
         firstArrayEl++;
      }
   }

   return {
      firstPage: 1,
      lastPage,
      pagesWithoutFirstAndLast
   };
};