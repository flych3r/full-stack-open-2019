# Deploy to heroku

Initialize git repository: `git init`

Ignore node modules: `echo $'node_modules\n.env' >> .gitignore`

Create the Procfile: `echo $'web: node src/index.js' >> Procfile`

Create heroku application: `heroku create`

Add files to commit: `git add .`

Commit files: `git commit -m {message}`

Push application to repository: `git push heroku master`

Ensure that at least one instance of the app is running: `heroku ps:scale web=1`

Open application: `heroku open`

Add MongoAtlas cluster to heroku: `heroku config:set MONGODB_URI=mongodb+srv://<user>:<password>@<cluster-name>-fathe.mongodb.net/<collection-name>?retryWrites=true&w=majority`

