# Note-Taker

<img src = "readme_assets\Note Taker.gif"></img>

Link to GitHub Repo: https://github.com/dchiev/Note-Taker

Link to deployed Heroku Application: https://agile-reaches-30799.herokuapp.com/


# Process

1. I started with initial routes on seperate folders. After this initally didn't work, I switched all onto a single server.js file. 

2. After the application was functional, I then switched all routes back to folders.

3. From the server.js file, I required the seperate route files.

4. For the html routes, I used get routes to server the various html files to the user.

5. To read the JSON, I used ``readFileAsync = util.promisify(fs.readFile);`` to read the JSON database. 

6. For the api routes, I used a post route with both ``readFileAsync`` and ``writeFileAsync`` to read and save the note data. Delete was handeled with a similar structure with the ``:id`` route. 
