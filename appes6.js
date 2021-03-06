// @ts-nocheck

class Book {
	constructor(title, author, isbn){
	this.title = title;
	this.author = author;
	this.isbn = isbn;
	}
}
class UI {
// Add Book Function
addBookToList(book){

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

// Show Alert Function
showAlert(message, className){

	//	create Div
	const div = document.createElement('div');
		
	// Add Class
	div.className = `alert ${className}`;

	// Add Text
	div.appendChild(document.createTextNode(message));

	// Get Parent
	const container = document.querySelector('.container');

	// Get Form
	const form = document.querySelector('#book-form');

	// Insert alert
	container.insertBefore(div, form); 

	// Timeout after 3 Sec
	setTimeout(function(){
		document.querySelector('.alert').remove();
	}, 3000);		

}

	// Delete Book
	deleteBook(target){
		if(target.className === 'delete'){
			target.parentElement.parentElement.remove();
		}
	}

	// Clear Fields
	clearFields(){
		document.getElementById('title').value = '';
		document.getElementById('author').value = '';
		document.getElementById('isbn').value = '';
	}
}

// Event Listners for add Book
document.getElementById('book-form').addEventListener('submit', function(e){
	// get form value
		const title = document.getElementById('title').value,
					author = document.getElementById('author').value,
					isbn = document.getElementById('isbn').value
	
		// Instantiate book 			
		const book = new Book(title, author, isbn);
	
		// Instantiate UI
		const ui = new UI();
	
		// Validation
	
		if(title === '' || author === '' || isbn === ''){
			 ui.showAlert('Please fill in all fields', 'error');
	
			}else{
			// add Book to List
			ui.addBookToList(book);
			
			//Show Success
			ui.showAlert('Book Added', 'success'); 
	
			// Clear fields
			ui.clearFields();
		}	
		
		e.preventDefault();
	});
	
	// Event Listner for Delete
	document.getElementById('book-list').addEventListener('click', function(e){
	
		// Instantiate UI
		const ui = new UI();
	
		// Delete Book 
		ui.deleteBook(e.target);
	
		// Show message
		ui.showAlert('Book Removed!', 'success');
	
		e.preventDefault();
	})