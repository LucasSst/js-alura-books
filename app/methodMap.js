function handleDiscount(books){
    const discount = 0.3;
    const valueDiscount = books.map(book => 
    {
       return {...book, preco: book.preco - (book.preco * discount)}
    })
    return valueDiscount
}