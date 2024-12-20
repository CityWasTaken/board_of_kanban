# 14 Full-Stack React: Kanban Board

## Your Task

Authentication with JSON Web Tokens (JWTs) is crucial for full-stack applications, as it provides a secure and scalable method for verifying user identities. JWTs are compact, URL-safe tokens that encode a user's authentication data, allowing servers to authenticate requests. Additionally, JWTs can include metadata and be easily verified and decoded, enhancing security while enabling seamless authentication across various parts of an application.

Your Challenge this week is to add authentication with JWT to an existing Kanban board application.

The Kanban board application has already been created. It's your job to complete the UI for the login page, add authentication with JWT to the server API, and then deploy the entire application to Render.


## User Story

```md
AS A member of an agile team
I WANT a Kanban board with a secure login and register page
SO THAT I can securely access and manage my work tasks
```

## Acceptance Criteria

```md
GIVEN a Kanban board with a secure login and register page
WHEN I load the login or register page
THEN I am presented with form inputs for username and password
WHEN I enter my existing username and password on the login page
THEN I am authenticated using JSON Web Tokens (JWT) and redirected to the main Kanban board page
WHEN I enter an invalid username or password
THEN I am presented with an error message indicating that the credentials are incorrect
WHEN I enter my username and password on the register page
THEN I am authenticated using JSON Web Tokens (JWT) and redirected to the main Kanban board page
WHEN I enter an invalid values
THEN I am presented with an error message indicating that the information is incorrect
WHEN I successfully log in or register
THEN a JWT is stored securely on a client cookie for subsequent authenticated requests
WHEN I log out
THEN the JWT cookie is removed from the client cookie storage and I am redirected to the login page
WHEN I try to access the Kanban board page without being authenticated
THEN I am redirected to the login page
WHEN I remain inactive for a defined period
THEN my session expires, the JWT is invalidated, and I am redirected to the login page upon my next action
```

## Mock-Up

The following images show the web application's appearance and functionality:

![The Kanban board application displays a Login Required page.](./Assets/14-00-unauthenticated-page.png)

![The Kanban board application displays a Login page.](./Assets/14-01-login-page.png)

![The Kanban board application includes a main page that displays a list of all tasks sorted into three columns according their statuses.](./Assets/14-02-main-page.png)

## Getting Started

The starter code provides a complete, working full-stack application without authentication.

You will need to:

* Run the `install:all` script at the top level package.json to install all necessary modules

* Create a `.env` file for the server that includes:

  * The DB_NAME variable for the database username

  * The DB_USER variable for the database name

  * The DB_PASSWORD variable for the database password

  * The JWT_SECRET variable for the JWT secret key (this can be any random string)

* You can run the `seed` script at the top level package.json to insert some dummy data into your tables

* To start the client and server development servers, you can run the `start:dev` script at the top level

### Server Instructions

* Complete the `loginUser` function in `server/src/controllers/user-controller.ts`

* Complete the `blockGuests` function in `server/src/routes/middleware/auth.ts`

* Add the `blockGuests` function as a middleware callback to the API routes in `server/src/routes/index.ts`

* Complete the missing deployment setup code in `server/src/server.ts`

### Client Instructions

* Complete the `login` function in `client/src/api/authAPI.tsx`

* Complete the `getUser` function in `client/src/api/authAPI.tsx`

* Complete the `logOut` function in `client/src/api/authAPI.tsx`

--

You can refer to the [Deploy with Render and PostgreSQL guide](https://coding-boot-camp.github.io/full-stack/render/deploy-with-render-and-postgresql) and the [Render documentation on setting environment variables](https://docs.render.com/configure-environment-variables) as needed.

---

## Hints

* Use Insomnia to test the server API directly.


## Bonus

As a bonus exercise, try adding the capability to sort and filter the list of tickets in the Kanban board.

## Grading Requirements

> **note** If a Challenge assignment submission is marked as “0”, it's considered incomplete and won't count toward your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code.
>
> * A repository that includes a unique name but nothing else.
>
> * A repository that includes a README file but nothing else.
>
> * A repository that includes only starter code.

This Challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * Application server API verifies login requests, creates and signs tokens, and validates that API requests for tickets and users include an authenticated token.

  * Application's client stores tokens in `cookies` and passes tokens to the server API with each request.

  * Application must be deployed to Render.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.

### Bonus

Fulfilling any of the following can add up to 10 points to your grade. Note that the highest grade you can achieve is still 100:

* Application contains functionality to sort Kanban tickets (5 points).

* Application contains functionality to filter Kanban tickets (5 points).

## Review

You're required to submit BOTH of the following for review:

* The URL of the functional, deployed application

* The URL of the GitHub repository. Give the repository a unique name and include a README file describing the project

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
