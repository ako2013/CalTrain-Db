# CalTrain-Db

## Description

CS 157A - Semester Project Team 1.
This project emphasizing on SQL queries and database manipulation.

## Details

> A mock up system of trains, stations and users are being administrated through our website.
> The website provide two UIs:
>  - For client to add/remove items from the database.
>  - For customers to view/buy/check the schedule, tickets, prices.

> As required to use Java to communicate with MySQL server, we chose to learn Spring Boot to connect and provide RESTFUL API endpoints. We deployed the app to Heroku, you can access it <a href="https://evening-reef-56543.herokuapp.com">here</a> (may take a while to boot up).
>  - Sample API: https://evening-reef-56543.herokuapp.com/api/check
>    - JSON: {
                "message": "API service running!"
             }

> On the other hand, we chose Angular as the frontend framework to build and deploy fast UIs as we already known about it before. You can visit the page <a href="http://caltraindb1.x10host.com/">here</a> !!(No longer working)

> The frontend website calls the RESTFUL API from the server and fetch/update data through the UI. 
> Due to complexity of the course, simple security measures are implemented such as SQL injections by restricting user's input.

## Final Report
> Click <a href ="https://docs.google.com/document/d/1ufIhSs3JgL2FtX0WqMd6LFmZn1_eflY5-U3JN4bJKog/edit?usp=sharing" target="_blank">here</a> for more implementations and documentations about the project.

## Stacks

- **Software**:
  - [GitHub](https://www.github.com/)
  - [IntellJ](https://www.jetbrains.com/idea/)
  - [Google Chrome](https://www.google.com/chrome/)
  
 - **Front-end**:
  - [Angular](https://angular.io/)
  - [Boostrap](https://getbootstrap.com/)
  
 - **Back-end**:
  - [Spring Boot](https://spring.io/guides/gs/serving-web-content/)
  - [Maven](https://maven.apache.org/)
