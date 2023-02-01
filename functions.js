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
  let updateBtn = document.querySelector(".update-book");
  let booksContainer = document.querySelector(".books-container");
  let delBtn = document.querySelector(".delete-book");

  btn.addEventListener("click", () => {
    createNewBook();
  });

  booksContainer.addEventListener("click", (e) => {
    let obj = e.target;
    if (obj.classList.contains("title")) {
      let title = obj.textContent;
      let book = findBookByTitle(title);

      createUpdateBook(book);
    }
  });
}

function createNewBook() {
  let container = document.querySelector(".container");

  container.innerHTML = `

    <h1>New Book</h1>

    <div class="container-new-book">


    <section class=error> 

    </section>

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
    let book = {
      title: titleInpt.value,
      author: authorInpt.value,
      genre: genreInpt.value,
      year: yearInpt.value,
    };

    if (
      book.title == "" ||
      book.author == "" ||
      book.genre == "" ||
      book.year == "" ||
      isNaN(+book.year)
    ) {
      attachErrors(book);
    } else {
      books.push(book);

      createHome();
    }
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
  th.classList.add("title");
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

// let container = document.querySelector(".container-update");
// document.addEventListener("DOMContentLoaded", function () {
//   createUpdateBook(book);
// });

function createUpdateBook(book) {
  let container = document.querySelector(".container");
  container.innerHTML = `
    
   <div class="container-update">

   
  <h1>Update Book</h1>
  <section class="error">

      <!-- <h1>Oooops!</h1>
      <p>Title is required</p>
      <p>Author is required</p> -->

  </section>


  
  <section class="error">

  <!-- <h1>Oooops!</h1>
  <p>Title is required</p>
  <p>Author is required</p> -->

  </section>

  <section class="card-update">
      <label for="title"><b>Title</b></label>
      <input type="text" name="title" class="title" disabled  placeholder="${book.title}">
  </section>

  <section class="card-update">
      <label for="author"><b>Author</b></label>
      <input type="text" name="author" class="author" placeholder="${book.author}">
  </section>

  <section class="card-update">
      <label for="genre"><b>Genre</b></label>
      <input type="text" name="genre" class="genre" placeholder="${book.genre}">
  </section>

  <section class="card-update">
      <label for="year"><b>Year</b></label>
      <input type="text" name="year" class="year" placeholder="${book.year}">
  </section>

  <section class="update-buttons">
      <button class="update-book">Update Book</button>
      <button class="cancel">Cancel</button>
      <button class="delete-book">Delete Book</button>
  </section>
</div>
</div>
    `;

  let title = document.querySelector(".title");
  let authorInpt = document.querySelector(".author");
  let genreInpt = document.querySelector(".genre");
  let yearInpt = document.querySelector(".year");

  let cancelBtn = document.querySelector(".cancel");
  let btnUpd = document.querySelector(".update-book");
  let delBtn = document.querySelector(".delete-book");
  btnUpd.addEventListener("click", () => {
    book.author = authorInpt.value;
    book.genre = genreInpt.value;
    book.year = yearInpt.value;

    if (
      book.author == "" ||
      book.genre == "" ||
      book.year == "" ||
      isNaN(+book.year)
    ) {
      attachErrorsUpdate(book);
    } else {
      updateBooks(book);
      createHome();
    }
  });

  cancelBtn.addEventListener("click", () => {
    createHome();
  });

  delBtn.addEventListener("click", () => {
    books = deleteByTitle(books, book.title);
    createHome();
  });
}

function findBookByTitle(title) {
  return books.filter((e) => e.title == title)[0];
}

function deleteByTitle(arr, title) {
  let filter = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].title !== title) {
      filter.push(arr[i]);
    }
  }
  return filter;
}

function updateBooks(arr, book) {
  for (let i = 0; i < arr.length; i++) {
    if (book.title == arr[i].title) {
      arr[i] = book;
    }
  }
}

function attachErrors(book) {
  let section = document.querySelector(".error");

  section.innerHTML = "";

  let h1 = document.createElement("h1");
  h1.textContent = "Ooopssss!";
  section.appendChild(h1);

  let title = document.querySelector(".title");
  let author = document.querySelector(".author");
  let genre = document.querySelector(".genre");
  let year = document.querySelector(".year");

  if (book.title == "") {
    section.appendChild(createError("Title is required"));
    title.classList.add("err");
  }

  // for (let i = 0; i < books.length; i++) {
  //   if (book.title == books.title) {
  //     section.appendChild(createError("You can't enter the same title"));
  //     title.classList.add("err");
  //   }
  // }

  if (findBookByTitle(book.title) !== undefined) {
    section.appendChild(createError("You can't enter the same title"));
    title.classList.add("err");
  }

  if (book.author == "") {
    section.appendChild(createError("Author is required"));
    author.classList.add("err");
  }

  if (book.genre == "") {
    section.appendChild(createError("Genre is requried"));
    genre.classList.add("err");
  }
  if (isNaN(+book.year)) {
    console.log(isNaN(+book.year));
    section.appendChild(createError("Please enter numbers"));
    year.classList.add("err");
  } else if (book.year == "") {
    section.appendChild(createError("Year is required"));
    year.classList.add("err");
  }
}

function createError(text) {
  let p = document.createElement("p");

  p.textContent = text;

  return p;
}

function attachErrorsUpdate(book) {

  let author = document.querySelector(".author");
  let genre = document.querySelector(".genre");
  let year = document.querySelector(".year");
  
  let section = document.querySelector(".error");

  section.innerHTML = "";

  if (book.author == "") {
    section.appendChild(createError("Author is required"));
    author.classList.add("err");
  }

  if (book.genre == "") {
    section.appendChild(createError("Genre is requried"));
    genre.classList.add("err");
  }
  if (isNaN(+book.year)) {
    section.appendChild(createError("Please enter numbers"));
    year.classList.add("err");
  } else if (book.year == "") {
    section.appendChild(createError("Year is required"));
    year.classList.add("err");
  }
}
