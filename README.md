# Chuck Norris Jokes
The goal of this educational assignment was to create a single-page application using React.js without any third-party libraries, incorporating various aspects of the framework, including:
- component and business logic decomposition
- state management and component lifecycle hooks
- styling and animations
- using WebAPI and external APIs

[https://chuck-norris-jokes.deno.dev](https://chuck-norris-jokes.deno.dev)

## Main Functionality
The web application provides random Chuck Norris jokes from free [API](https://api.chucknorris.io/#!) upon page load, when reaction buttons are clicked, or when a category is selected. The Like button saves a joke to the local IndexedDB database. Saved jokes are displayed in a list, can be deleted individually or all at once, and can be downloaded as a text file (which is generated on the client side). Clicking on a joke from the quote or list copies it to the clipboard. When a joke category is selected from the dropdown list, subsequent jokes will be fetched in the chosen theme.

## Design Features
The page title is fixed during scrolling. The subtitle animates on page load and smoothly hides under the title as you scroll.

The quote element with the random joke smoothly adjusts its height when the text changes. An image of Chuck Norris, which serves as a link to the repository, moves along with it.

Various page components smoothly enlarge on hover, and buttons have a disabled state design. Adding or deleting a saved joke smoothly animates the height of the appearing/disappearing list element.

When text is copied to the clipboard, a toast notification pops up at the bottom of the screen. This component is also used to display information about temporary API or database unavailability.

For consistent text display, all fonts were downloaded and locally connected in CSS.

## Deploy

Deno Deploy was chosen as the free hosting service for publishing the project.