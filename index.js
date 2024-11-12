function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(books => renderBooks(books))

}
//= Line 2 sends a request to the API endpoint for a list of books. 
//= It returns a Promise that resolves to a Response object when the data is fetched.
//= Line 3 takes the Response object and calls .json() on it, which also returns a Promise that resolves to the JSON data.
//= Line 4 takes the parsed books data and passes it to the renderBooks function, which should handle displaying the books.

//= The fetchBooks function retrieves a list of books from the An API of Ice and Fire 
//= and then passes the data to a function called renderBooks.

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}
//= Line 13 selects the <main> element where all the book titles will be displayed.
//= Line 14 The forEach method iterates over each item in the books array.
//= Line 15 creates an <h2> element.
//= Line 16 sets the h2 element’s inner HTML to the name of the book.
//= Line 17 appends the <h2> to the <main> element, displaying each book title on the page.

//= This function assumes that each book object has a name property and creates an <h2> heading for each book’s name, 
//= displaying them in the <main> section of the document. 
//= If used with the fetchBooks function from before, this would render a list of book titles fetched from the API.

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
//= Line 33 sets up an event listener that triggers once the initial HTML document has been fully loaded and parsed. 
//= This ensures that elements like <main> are available for JavaScript manipulation before any functions that rely on them 
//= (like fetchBooks) are called.
//= Line 34 is called once the DOM is ready. Assuming fetchBooks fetches book data from an API and 
//= calls renderBooks to display it, this setup will ensure that renderBooks has access to the DOM elements it needs.

//= Then when the page loads, fetchBooks will:
//= 1. Fetch book data from the API.
//= 2. Call renderBooks(books), which displays each book’s title in the <main> section.
//= This setup ensures that the book data is only fetched and displayed after the DOM is ready.