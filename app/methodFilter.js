const btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('click', filterBooks))

function filterBooks(){
    const elementBtn = document.getElementById(this.id)
    const categoryBtn = elementBtn.value
    const filter = categoryBtn == 'disponivel' ? filterBooksByQuantity() : filterBooksByCategory(categoryBtn) ;
    showTheBooksOnTheScreen(filter)
    if (categoryBtn == 'disponivel'){
        const amount = CalculateTotalValueOfAvailableBooks(filter)
        showTheAllValueofBooksAvailable(amount)
    }
}


function filterBooksByCategory(category){
    return books.filter(book => book.categoria == category);
}

function filterBooksByQuantity(){
    return books.filter(book => book.quantidade > 0)
}

function showTheAllValueofBooksAvailable(amount){
    valueElementOfAvailableBooks.innerHTML = `
    <section id="valor_total_livros_disponiveis">
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${amount}</span></p>
    </div>
    </section>
    `
}