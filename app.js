// @ts-nocheck
// Book Constructor

function Book(title, author, isbn){
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

// UI Constructor
function UI(){}

// Add Book To List
UI.prototype.addBookToList = function(book){
	const list = document.getElementById('book-list');
	 // Create tr Element
	const row = document.createElement('tr');

	 // Insert Cols
	 row.innerHTML = `
	 <td>${book.title}</td>
	 <td>${book.author}</td>
	 <td>${book.isbn}</td>
	 <td><a href='#' class='delete'>X</a></td>
	 `;
	 list.appendChild(row);
}

// Clear Fields

UI.prototype.clearFields = function(){
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
}


// Event Listners
document.getElementById('book-form').addEventListener('submit', function(e){
// get form value
	const title = document.getElementById('title').value,
				author = document.getElementById('author').value,
				isbn = document.getElementById('isbn').value

	// Instantiate book 			
	const book = new Book(title, author, isbn);

	// Instantiate UI
	const ui = new UI();

	// add Book to List
	ui.addBookToList(book);

	// Clear fields
	ui.clearFields();

	e.preventDefault();
});
