# Hi!

I'm copying the code from my "HTTP / AJAX React Module Project" in order to refactor it to use application state rather than server.js, as deploying a backend and a frontend would require two different deployments. 

Below is the Readme copy from the "Deploying Web Apps" project, and below that is the Readme from the "HTTP/CRUD" project. 

# *********************************************************************

# Module Project: Deploying Web Apps - Portfolio Piece

## Introduction

In this module you will use what you've learned about deploying a web application, and deploy one of the apps you've built so that you can add it to your portfolio page

## Instructions 

### Task 1: Project Set Up

Think about which project you are most proud of up to this point that you have built from the ground up. For this project, you will work on deploying that project using Vercel, and prepare it to be added to your portfolio site. 

Follow these steps for completing your project.

- [ ] Send your team lead the link to your web app 
- [ ] Show them that it has been added to your portfolio
- [ ] If you don't have a portfolio, use this project time to create a portfolio, and deploy it with Vercel ([here](https://github.com/LambdaSchool/portfolio-website) is a guide for this)
- [ ] Once you have finished, your TL will count the project as completed

### Task 2a: MVP

After you have figured out which project you want to deploy, sign up for an account with Vercel and start the deployment process as outlined in training kit for this module. Once the project is deployed, you will add it to your porfolio site. Finally, work on updating this project so that it is polished and bug free! 

Submit the link to your hosted project in canvas. Good luck!

### Task 3: Stretch Problems

Do not attempt stretch problems until MVP has been reached and a final commit has been made.

Work on deploying a second, or even third portfolio project. If you have extra time, go back and update the styles, add features, fix bugs, etc, on all the sites so that they will look good for potential employers.

## Submission Format
* [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**


# *********************************************************************


# HTTP / AJAX II React Module Project: Movie CRUD

This module explored HTTP methods, REST interfaces, CRUD apps and using put and delete to allow editing and deleting functionality. We also dug into how to pass props to Route connected components and using URL params to get values from an api. In this project, you will practice each of these skills by implement various pieces of functionality in a movie database CRUD app.

## Objectives
- Understand how to use the post, put and delete HTTP methods to interact with server data.
- Understand how to sync server data with an applications internal state.
- Understand how to pass values into a Route component to allow for the updating of state.

## Introduction
CRUD applications are the foundation of most web applications. Being able to manage creating, edit and deleting data from an external source is as key a skill as it gets. In this project, you will complete the code nessisary to allow all of these fundmental actions.

![Movie DB Example](project-goals.gif)

***Make sure to complete your tasks one at a time and complete test each task before proceeding forward.***

## Instructions
### Task 1: Project Set Up
* [ ] Create a forked copy of this project.
* [ ] Clone your OWN version of the repository in your terminal
* [ ] cd into the project base directory `cd web-module-project-HTTP`
* [ ] Download server dependencies by running `npm install`
* [ ] Run the local web server by running `node server.js`
* [ ] Open a new terminal window and cd into the client code `cd client`
* [ ] Download project dependencies by running `npm install`
* [ ] Start up the app using `npm start`

### Task 2: Project Requirements
#### Editing a Movie
> *Let's start by walking through the process of adding the routing, component and service calls need for resource updating*

* [ ] First, we need to be able to navigate to the edit movie component. In App.js, add in the `<EditMovieForm> `component to the supplied edit route.

* [ ] Next, we need to grab the id being passed into the component through the url. Use the `useParams` hook to get the id value.

* [ ] We need to be able to load in the current movie's attributes into our local form state. When `EditMovieForm` mount, retrieve our current id's movie from the api and save the data returned to local state.

* [ ] At this point, nothing happens when the edit form is submitted. Add in the api call needed to update the server with our updated movie data.

* [ ] Don't forget to make sure that your server data and your local state are in sync! Make any changes the edit route needed to give the edit form access to App's `setMovies` method.

* [ ] Now that we have access to `setMovies`, made sure the updated list of movies is saved to our global state.

* [ ] Redirect the user to the currently edited movie's individual info page.

#### Deleting a Movie
> *You added in a CRUD feature! Good job! Now let's get deleted squared away...*

* [ ] Identify the component that holds the "button" needed for deletion. Add an event handler to that button.

* [ ] Build an event handler that makes a request to delete the currently viewed movie. Observe what is returned from the request.

* [ ] You will once again need to keep the server and state data in sync. In `App.js`, complete the `deleteMovie` method so that it receives an id, filters out any movie with that id and sets state to that resultant movie list.

* [ ] Pass `deleteMovie` into the approprate component.

* [ ] Run `deleteMovie` on the currently selected movie when your delete request is complete and redirect the user to the `/movies` route.

#### Adding a Movie
> *Alright! You ready! Let's see you use the skills of the previous steps to build a crud function from start to finish.*

* [ ] Use `EditMovieForm.js` as a model to build an `AddMovieForm` component from scratch. The component should hold all the attributes of a new movie in local state.

* [ ] Add in a route that allows access to `AddMovieForm`.

* [ ] Locate the part of the ui that should redirect to your new `AddMovieForm`. Make that button works as expected.

* [ ] In `AddMovieForm,` add an event handler for form submission. When the form is submitted, run the approprate request for adding a movie with the component's state values.

* [ ] Make sure your component has access to and runs and modifications needed to global state and redirects to `/movies` after creation.

### Stretch goals
- Make the added DeleteMovieModal appear and be reacted to before deletion occurs.
- Add in `addToFavorites` functionality. When the favorite button is pushed in the `Movie` component, make sure that when the favorite button is pushed, the id and name of the currently viewed into the favorite state slice in `App.js.`
- For extra credit, ensure that only unique movies can be added as favorites. Consider the `.find` method for arrays.
- Add in some Style!

### Resource: API documentation 

#### GET `http://localhost:5000/api/movies`
- Retrieves all the Movies with the following formatting:
```
[{
  id: 5,
  title: 'Tombstone',
  director: 'George P. Cosmatos',
  metascore: 89,
  genre: "Drama",
  description: : "A successful lawman's plans to retire anonymously in Tombstone, Arizona are disrupted by the kind of outlaws he was famous for eliminating."
}]
```
#### GET `http://localhost:5000/api/movies`
- Retrieves all movies on the server.

#### GET `http://localhost:5000/api/movies/:id`
- Retrieves a movie with the passed value as id.

#### POST `http://localhost:5000/api/movies`
- Adds the movie passed in through body to the server movies list. Returns updated movies list.

#### PUT `http://localhost:5000/api/movies/:id`
- Replaced the movie with the passed in id with data passed in through body. Returns update movies list.

#### DELETE `http://localhost:5000/api/movies/:id`
- Removed movie with the passed in id. Returns the deleted movie's id.
