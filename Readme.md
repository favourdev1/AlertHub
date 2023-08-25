
# AlertHub

AlertHub is a lightweight JavaScript library for creating customizable alert messages with various animations.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage/examples)
- [Animations](#animation)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

<br>

## Installation
Install with NPM
```css
 npm install alerthub --save 
 ```



Include the **Css** file alerthub.css in your HTML:
```css
<link rel="stylesheet" href="path/to/alerthub.min.css">
```


Include the **JavaScript** file alerthub.js in your HTML:
```javascript
<script src="path/to/alerthub.min.js"></script>
```


  
  

## Customization
AlertHub allows you to customize various aspects of the alerts, including title, description, position, type, timeout, and more. You can also customize the appearance by modifying the CSS in the provided CustomAlert.css file.
## Usage/Examples


To use AlertHub, 

**First:** Initialize the AlertHub instance:
```js
const alertHub = new AlertHub();
```
**secondly:**  call the showAlert method with the desired parameters: 
```js
alertHub.showAlert({
 title: "Alert Title",
    description: "This is the alert description.",
    position: "top-right", // Available positions: top-right, bottom-right, top-left, bottom-left
    type: "info", // Available types: primary, info, success, warning, danger, dark
    timeout: 5, // Timeout in seconds (optional)
    closeButton: true, // Show a close button (optional)
    closeButtonSize: 20, // Size of the close button icon (optional)
    animation: "fade-in", // Choose an animation: fade-in, slide-in, slide-in-right, slide-in-left (optional)
});
```
## Animation

AlertHub provides several animation options that you can use when showing or closing alerts. You can choose from animations like "fade-in", "slide-in", "slide-in-left", "slide-in-right", and more.

To apply an animation, provide the animation name when calling showAlert:





```javascript
alertHub.showAlert({
    // Other parameters
    animation: "slide-in-left"
});
```



## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/) - see the LICENSE file for details


## Contributing

Contributions are always welcome!
Feel free to contribute to this project by submitting issues or pull requests.

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Contact

If you have any questions, feedback, or need assistance, feel free to reach out:

- Email: favourappps17@gmail.com
- Twitter: [@favourdev](https://twitter.com/favourdev)
- GitHub: [favourdev1](https://github.com/favourdev1)

We appreciate your interest and welcome any contributions, suggestions, or bug reports!