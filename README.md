# setting up scripts to run the dev and production build
- "start" : "parcel index.html"
- "build" : "parcel build index.html"
//usage - npm start, npm run start and npm run build

# babel //read documents
- it is a js compiler or transpiler
- create browser compatible js
- parcel uses babel to transpile jsx code into react code so that it can be understood by js engines
- not only jsx to react but it also converts es6 js to a js that older browsers understand
- go see how babel works behind the scene

# what is a functional component
- any js function that returns some piece of jsx code which is a react element (nested react element as well)
- always initialize with capital letter

# render functional component into root
- root.render(HeadingComponent) // does not work