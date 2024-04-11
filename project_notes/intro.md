# Project Vision

In this doc, I will outline the vision for the project.

## Core features

CRUD REST API with authentication and


## Technologies and libraries to be used:

One of the reasons why these technologies were chosen in the first place were that these are tools that I'm familiar with from my days in tutorial hell. These are also tools that I want to _"show that I'm really good at"_ and given their endurance and popularity I think they are safe bet.

### For the backend:

- **Express:** It’s the documentation that I understand best. But more than that, it provides the functionality I need for this specific project. It’s a basic CRUD that won’t really go into production so I don’t need to concern myself with too much optimization. I’d also like to adhere as closely as possible to REST constraints and I find that Express allows me to do that.
- **Supporting libraries:** Passport for auth, Helmet.
- **MongoDB:** Primarily because of GeoJSON. Although I haven’t specifically decided how I'm going to implement (there are a few ways to do it). As I expand the project, I might migrate or introduce another database instead.
- **Mongoose:** For types and schemas.
- **API documentation TBD**: Still undecided. But in addition to keeping a project log, I also intend on adding proper API docs. Most likely using Swagger.

### For the frontend

- **EJS:** To render templates and views
- **Bootstrap:** This will be used in the public user dashboard.
- **Vanilla JS:** Or jQuery if I'm feeling funky.