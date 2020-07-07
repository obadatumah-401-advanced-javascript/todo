// import React, { useState } from 'react';

// export const PageContext = React.createContext();

// function Pages(props) {

//     const [itemPerPage, setItemPerPage] = useState(3);
//     const [currentPage, setCurrentPage] = useState(1);

    
//     const indexOfLastItem = currentPage * itemPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemPerPage;
//     const list = props.list.sort((a, b) => a.difficulty > b.difficulty ? 1 : -1);
//     let currentItem = list.slice(indexOfFirstItem, indexOfLastItem);

//     const page = pageNumber => setCurrentPage(pageNumber);
//     const setItem = numberOfPages => setItemPerPage(numberOfPages);
//     const setcurrentItem = result => {
//         setItemPerPage(itemPerPage)
//         currentItem = result
//     };


//     let state = {
//         itemPerPage,
//         setItemPerPage: setItemPerPage,
//         currentPage,
//         setCurrentPage: setCurrentPage,
//         currentItem,
//         setItem,
//         page,
//         setcurrentItem
//     }

//     return (
//         <PageContext.Provider value={state}>
//             {props.children}
//         </PageContext.Provider>
//     );

// }

// export default Pages;