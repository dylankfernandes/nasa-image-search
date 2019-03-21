# Capital One SES Week Challenge - Interfacing with the NASA API
Submission by Dylan Fernandes.

## Frameworks and Libraries Used
* React (JavaScript library for developing web apps)
* SASS (CSS pre-processor that adds onto the functionality of CSS by including useful features such as variables and conditional/iterative logic)
* JSX (Used in concurrency with React to include and manipulate HTML with JavaScript functions)
* Axios (JavaScript library used to make requests to the NASA API. Data was queried under the specifications described by NASA in [this document](https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf))

## The Source Files
The code is located under `src/`, in three separate directories. 
* `assets/` - used for static images located in the header
* `components/` - location for all reusable components. Note that each component contains a `Component.js` file with the main code, a `component.imports.scss` file for the styles, and an `index.js` file for exporting files in that directory
* `config/` - location of SASS configuration files (variables, importing and exporting all SASS files for usage, utility functions, and SASS mixins)
* `pages/` - location of the search grid main page, and any future pages for added features I decide to include

## Running this project
While this project has already been deployed at this url, if you wish to experiment with the source code yourself. Make sure to npm and git installed beforehand.
* Clone the project using `git clone` or download the zip file
* `git checkout` the development branch
* `npm install` to install all the packages required
* Use `npm start` to start the development server

