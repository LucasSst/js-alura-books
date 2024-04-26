let books = [];
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBooks();


async function getBooks(){
    const res = await fetch(endPointAPI);
    books = await res.json();
    let DiscountedBook = handleDiscount(books)
    showTheBooksOnTheScreen(DiscountedBook)
}   

