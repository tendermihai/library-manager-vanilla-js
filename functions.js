function createHome() {
  let container = document.querySelector(".container");

  container.innerHTML = `
    
    <h1>Books</h1>
    <button class="create-new-book">Create New Book</button>

    <table>


        <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Genre</th>
                <th scope="col">Year</th>
            </tr>
        </thead>


        <tbody class="books-container">
           

        </tbody>

    </table>

    
    
    
    
    `;

  createRows(books);

  let btn = document.querySelector(".create-new-book");

  btn.addEventListener("click", () => {
    createNewBook();
  });
}

function createNewBook() {
  let container = document.querySelector(".container");

  container.innerHTML = `

    <h1>New Book</h1>

    <div class="container-new-book">

        <section class="card">
            <label for="title"><b>Title</b></label>
            <input type="text" name="title" class="title">
        </section>

        <section class="card">
            <label for="author"><b>Author</b></label>
            <input type="text" name="author" class="author">
        </section>

        <section class="card">
            <label for="genre"><b>Genre</b></label>
            <input type="text" name="genre" class="genre">
        </section>

        <section class="card">
            <label for="year"><b>Year</b></label>
            <input type="text" name="year" class="year">
        </section>

        <section class="buttons-new-book">
            <button class="create-new-book">Create New Book</button>
            <button class="cancel-new-book">Cancel</button>
        </section>

    </div>
    
    
    
    
    `;

  let btn = document.querySelector(".create-new-book");
  let cancelBtn = document.querySelector(".cancel-new-book");
  let titleInpt = document.querySelector(".title");
  let authorInpt = document.querySelector(".author");
  let genreInpt = document.querySelector(".genre");
  let yearInpt = document.querySelector(".year");

  btn.addEventListener("click", () => {
    let title = titleInpt.value;
    let author = authorInpt.value;
    let genre = genreInpt.value;
    let year = yearInpt.value;

    let book = {
      title: titleInpt.value,
      author: authorInpt.value,
      genre: genreInpt.value,
      year: yearInpt.value,
    };

    books.push(book);

    createHome();
  });

  cancelBtn.addEventListener("click", () => {
    createHome();
  });
}

function createRow(book) {
  console.log(book);
  let tr = document.createElement("tr");
  let tdauthor = document.createElement("td");
  let tdgenre = document.createElement("td");
  let tdyear = document.createElement("td");

  let th = document.createElement("th");

  th.scope = "row";
  th.textContent = book.title;
  tr.appendChild(th);
  tdauthor.textContent = book.author;
  tr.appendChild(tdauthor);

  tdgenre.textContent = book.genre;
  tr.appendChild(tdgenre);
  tdyear.textContent = book.year;
  tr.appendChild(tdyear);

  return tr;
}

function createRows(books) {
  let tbody = document.querySelector(".books-container");

  books.forEach((element) => {
    tbody.appendChild(createRow(element));
  });
}

function createUpdateBook() {
  let container = document.querySelector(".container");
  container.innerHTML = `
    
    <div class="container-update">
  
    <section class="card-update">
        <label for="title"><b>Title</b></label>
        <input type="text" name="title" class="title" placeholder="The Hunger Games">
    </section>
  
    <section class="card-update">
        <label for="author"><b>Author</b></label>
        <input type="text" name="author" class="author" placeholder="Suzanne Collins">
    </section>
  
    <section class="card-update">
        <label for="genre"><b>Genre</b></label>
        <input type="text" name="genre" class="genre" placeholder="Fantasy">
    </section>
  
    <section class="card-update">
        <label for="year"><b>Year</b></label>
        <input type="text" name="year" class="year" placeholder="2008">
    </section>
  
    <section class="update-buttons">
        <button class="update-book">Update Book</button>
        <button class="cancel">Cancel</button>
        <button class="delete-book">Delete Book</button>
    </section>
  </div>
    
    `;
}
