# Contact-Manager-pro.
This Contact Manager project is a simple React application designed to manage a list of contacts. It allows users to add new contacts, view their details (name and email), and delete contacts. The contact data is stored in localStorage to persist even after the page is refreshed
Key Features:
Add Contacts:

Users can add a new contact by entering their name and email into a form. Once the form is submitted, the contact is added to the list, and the data is stored in localStorage.
Each contact is given a unique identifier using UUID (Universal Unique Identifier) to ensure that every contact has a distinct ID, which is necessary for operations like deleting a contact.
View Contacts:

The list of contacts is displayed on the main screen. For each contact, the name and email are shown.
A "Delete" button (represented by a DeleteIcon) next to each contact allows the user to remove that contact from the list.
Persistence with localStorage:

The contact list is stored in the browser’s localStorage, ensuring that the data persists even after the page is reloaded. This is achieved using React's useEffect hook to save the list to localStorage every time it changes.
On page load, the app checks if any contact data already exists in localStorage. If so, it loads the data and populates the contact list.
Delete Contacts:

Users can delete a contact from the list. When the delete button is clicked, the contact is removed from both the state and localStorage.
