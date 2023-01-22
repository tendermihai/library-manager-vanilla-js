function createHome() {
  let contaienr = document.querySelector(".container");

  contaienr.innerHTML = `
    
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


        <tbody>
            <tr>
                <th scope="row">The Hunger Games</th>
                <td>Suzanne Collins</td>
                <td>Fantasy</td>
                <td>2008</td>
            </tr>

            <tr>
                <th scope="row">Catching Fire</th>
                <td>Suzanne Collins</td>
                <td>Fantasy</td>
                <td>2009</td>
            </tr>

            <tr>
                <th scope="row">Mockingjay</th>
                <td>Suzanne Collins</td>
                <td>Fantasy</td>
                <td>2010</td>
            </tr>

            <tr>
                <th scope="row">The Ballad of Songbirds and Snakes</th>
                <td>Suzanne Collins</td>
                <td>Fantasy</td>
                <td>2010</td>
            </tr>

            <tr>
                <th scope="row">The Memory Police</th>
                <td>Yogo Ogawa</td>
                <td>Science Fiction</td>
                <td>1994</td>
            </tr>

            <tr>
                <th scope="row">Nickel Boys</th>
                <td>Colson Whitehead</td>
                <td>Historical Fiction</td>
                <td>2019</td>
            </tr>

            <tr>
                <th scope="row">The Book of Unknown Americans</th>
                <td>Cristina Henriquez</td>
                <td>Fiction</td>
                <td>2014</td>
            </tr>

            <tr>
                <th scope="row">A Brief History of Time</th>
                <td>Stephen Hawking</td>
                <td>Non Fiction</td>
                <td>1988</td>
            </tr>

            <tr>
                <th scope="row">Armada</th>
                <td>Ernest Cline</td>
                <td>Science Fiction</td>
                <td>2015</td>
            </tr>

            <tr>
                <th scope="row">Emma</th>
                <td>Jane Austen</td>
                <td>Classic</td>
                <td>1815</td>
            </tr>

            <tr>
                <th scope="row">Frankenstein</th>
                <td>Mary Shelley</td>
                <td>Horror</td>
                <td>1818</td>
            </tr>

            <tr>
                <th scope="row">Pride and Prejudice</th>
                <td>Jane Austen</td>
                <td>Classic</td>
                <td>1813</td>
            </tr>

            <tr>
                <th scope="row">Ready Player One</th>
                <td>Ernest Cline</td>
                <td>Science Fiction</td>
                <td>2011</td>
            </tr>

            <tr>
                <th scope="row">The Martian</th>
                <td>Andy Weir</td>
                <td>Science Fiction</td>
                <td>2014</td>
            </tr>

            <tr>
                <th scope="row">The Universe in a Nutshell</th>
                <td>Stephen Hawking</td>
                <td>Non Fiction</td>
                <td>2001</td>
            </tr>

        </tbody>

    </table>

    
    
    
    
    `;
}
