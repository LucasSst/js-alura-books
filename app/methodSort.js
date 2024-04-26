const btnSortValue = document.getElementById('btnOrdenarPorPreco');
btnSortValue.addEventListener('click', sortBooktoValue);


function sortBooktoValue(){
    let sortBooks = books.sort((a, b) => a.preco - b.preco)
    showTheBooksOnTheScreen(sortBooks)

}