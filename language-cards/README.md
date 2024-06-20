# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More  

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
  

  About this application
  Step 1: Organize the Folder Structure
  The folder structure is as follows
  my-react-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── java.png
│   │   ├── javascript.png
│   │   └── go.png
│   ├── components/
│   │   └── ImageGallery.js
│   ├── data/
│   │   └── assets.js
│   ├── App.js
│   └── App.css
└── package.json

Step 2: Create the assets.js File
Create an assets.js file in the src/data folder to define an array of image objects:
// src/data/assets.js
import javaImage from '../assets/java.png';
import jsImage from '../assets/javascript.png';
import goImage from '../assets/go.png';

const images = [
  {
    src: javaImage,
    alt: 'Java Logo',
    description: 'The Java programming language logo',
  },
  {
    src: jsImage,
    alt: 'JavaScript Logo',
    description: 'The JavaScript programming language logo',
  },
  {
    src: goImage,
    alt: 'Go Logo',
    description: 'The Go programming language logo',
  },
];

export default images;

Step 3: Create the ImageGallery Component
Create an ImageGallery.js file in the src/components folder to display the images:
// src/components/ImageGallery.js
import React from 'react';
import images from '../data/assets';
import './ImageGallery.css';

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image.src} alt={image.alt} />
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

Step 4: Create CSS for the ImageGallery Component
Create a CSS file named ImageGallery.css in the src/components folder for styling:
/* src/components/ImageGallery.css */
.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.image-item {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  max-width: 200px;
  text-align: center;
}

.image-item img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto 10px;
}

.image-item p {
  margin: 0;
  font-size: 14px;
  color: #555;
}

Step 5: Use the ImageGallery Component in App.js
Import and use the ImageGallery component in your App.js file:
// src/App.js
import React from 'react';
import ImageGallery from './components/ImageGallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <ImageGallery />
    </div>
  );
}

export default App;

Step 6: Add Some Global Styles (Optional)
You can add some basic global styles in App.css:
/* src/App.css */
.App {
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

Explanation:
Folder Structure: The assets folder contains image files. The data folder contains the assets.js file where image paths are imported and organized into an array of objects.
Importing Images: Images are imported in assets.js using relative paths. This ensures that Webpack (used by Create React App) processes these images correctly.
ImageGallery Component: This component maps over the array of image objects and renders each image along with its description.
CSS Styling: Styles are added to make the gallery look presentable.
App Component: The App.js file imports and uses the ImageGallery component to display the images.


================================================================== 
To implement the image gallery where each image flips between showing the image and its description when clicked, and the image zooms in when hovered over, you will need to combine CSS for the animations and React for handling the state

Step 1: Create the ImageGallery Component
First, let's create the ImageGallery component that uses the FlippableCard component for each image.




