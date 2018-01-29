# Static Content challenge

#### Running the app
```
npm install
node app.js
```

Then to one of the following urls:  
* http://localhost:3000/about-page  
* http://localhost:3000/jobs  
* http://localhost:3000/valves

Which takes markdown files in their respective directories and renders them to a html page.

Testing,
run:
```
mocha
```

#### My approach
Having used express before, I was aware of how it's routes worked and that values (via keys) could be passed to views. This enabled me to get the static data (using nodes fs module) and pass it to the views based on the route.

#### Issues
As express uses ejs file types, I had to enable the app to use standard html files. Instead of script tags the template.html file uses: <%= content %>
