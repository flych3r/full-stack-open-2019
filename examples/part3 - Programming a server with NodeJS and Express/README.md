# Deploy to the heroku

Initialize git repository: `git init`

Ignore node modules: `echo "/node_modules" >> .gitginore`

Create heroku application: `heroku create`

Add files to commit: `git add .`

Commit files: `git commit -m {message}`

Push application to repository: `git push heroku master`

Ensure that at least one instance of the app is running: `heroku ps:scale web=1`

Open application: `heroku open`

