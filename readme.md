# DevCamper API

> Backend API for DevCamper application, which is a bootcamp directory website

## Usage

Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```

## Database Seeder

To seed the database with users, bootcamps, courses and reviews with data from the "\_data" folder, run

```
# Destroy all data
node seeder -d

# Import all data
node seeder -i
```

## Demo

The API is live at [devcamper.io](https://devcamper.io)

Extensive documentation with examples [here](https://documenter.getpostman.com/view/8923145/SVtVVTzd?version=latest)

# …or create a new repository on the command line

> echo "# devcamperapi" >> README.md
> git init

```
> git add README.md
```

> git commit -m "first commit">

```
> git remote add origin https://github.com/zAhmedAly/devcamperapi.git
```

> git push -u origin master

# …or push an existing repository from the command line

> git remote add origin https://github.com/zAhmedAly/devcamperapi.git

```
> git push -u origin master
```
