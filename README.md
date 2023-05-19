# Menu Filtering Application

This is a JavaScript application that displays a menu and allows users to filter the menu items based on different categories. It provides an interactive user interface where users can select a category and see the corresponding menu items.

## Features
- Displays a list of menu items with their images, titles, prices, and descriptions.
- Generates filter buttons dynamically based on the unique categories in the menu.
- Allows users to filter the menu items by clicking on the filter buttons.
- When a category is selected, it displays only the menu items that belong to that category.
- Provides an "All" category option to show all menu items.

## Usage
To use the application, follow these steps:

1. Clone the repository or download the source code files.
2. Open the index.html file in a web browser.
3. The menu items will be displayed by default.
4. Click on the filter buttons to show menu items of a specific category.
5. Click on the "All" button to show all menu items.

## Customization
If you want to customize the menu items or categories, you can modify the menu array in the JavaScript file (`script.js`). Each menu item is represented by an object with the following properties:

- `img`: The image URL of the menu item.
- `title`: The title of the menu item.
- `price`: The price of the menu item.
- `desc`: The description of the menu item.
- `category`: The category of the menu item.

Add or remove objects from the `menu` array to change the menu items. Make sure to provide the necessary properties for each menu item.

## Dependencies
This application doesn't have any external dependencies. It's built with plain HTML, CSS, and JavaScript.

## Compatability
The application is compatible with modern web browsers.

## Acknowledgments
This application was developed as a practice project for educational purposes.