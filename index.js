// toggle spinner function 
const toggleSpinner = spinner => {
    document.getElementById("spinner").style.display = spinner;
}
// toggle spinner function 
const togglesearch = spinnertoggle => {
    document.getElementById("display-result").style.display = spinnertoggle;
}
// Data Load form API
const loadData = () => {
    const inputBook = document.getElementById("search-input");
    const inputValue = inputBook.value;
    inputBook.value = "";

    // TOOGLE FUNCTION CALL 
    toggleSpinner("block");
    togglesearch("none");
//  data call 
    const url = `https://openlibrary.org/search.json?q=${inputValue}`
        fetch(url)
            
        .then(rep => rep.json())
        .then(data => displayData(data.docs));
}
// Display Data or Book details 
const displayData = BookData => {
    const result = document.getElementById("display-result");
    result.textContent = "";
    
    if(BookData.length === 0) {  
    //    no result found 
        const Result = document.getElementById("no-result")
        Result.textContent= '';
       const h4 = document.createElement('h4')
       h4.innerHTML =` <h4 class ="text-center">No Result Found </h4> `
       Result.appendChild(h4);
        toggleSpinner("none");
        togglesearch("block");
      
        }
        else {
            const Result = document.getElementById("no-result")
            Result.textContent= '';
    //    Result.textContent = "";
       //    creat div & do inner html 
       let counter = 0;
        BookData?.forEach(book => {
    
      // book counter condition 
         if (book.type === "work") {
            counter++;
        }
        const div = document.createElement("div");
        
        div.innerHTML = `
        <div class="col">
     <div class="card">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="Loading..">
            <div class="card-body">
                <h5 class="card-title">Name :${book.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
            </div>
            <ul class="lis0t-group list-group-flush">
                <li class="list-group-item">Author Name : ${book.author_name}</li>
                <li class="list-group-item">Publish Year : ${book.publish_year}</li>
                
            </ul>   
            </div>
        
    </div>
           
        `
        // append div 
       result.appendChild(div);
        
        // toggle function call 
        toggleSpinner("none");
        togglesearch("block");
      
    })
    // total book count 
    const totalBooks = document.getElementById("total-books");
    totalBooks.textContent = "";
    const p = document.createElement("p")
    p.classList.add("text-center")
    p.innerText = `The amount of ${counter}  Books`
    totalBooks.appendChild(p);
    
  
}
    }