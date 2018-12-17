# CalTrain-Db

## Description

CS 157A - Semester Project Team 1.
This project emphasizing on SQL queries and database manipulation.

## Details

> A mock up system of trains, stations and users are being administrated through our website.
> The website provide two UIs:
>  - For client to add/remove items from the database.
>  - For customers to view/buy/check the schedule, tickets, prices.

### Flow
![Alt text](screenshot/architecture_flow.png?raw=true "Title")

### ERD
![Alt text](screenshot/ER_diagram.png?raw=true "ERD")

> As the requirements to Java with SQL, we chose Spring Boot conneting to MySQL server and provide RESTFUL API endpoints to the client side. Then we deployed the server on Heroku hosting which you can access it <a href="https://evening-reef-56543.herokuapp.com">here</a> (may take a while to boot up as it's currently under free host).
>  - Sample API: https://evening-reef-56543.herokuapp.com/api/check
>    - JSON: {
                "message": "API service running!"
             }

### API Snippet
![Alt text](screenshot/api1.png?raw=true "Title")

![Alt text](screenshot/api2.png?raw=true "Title")

> For the UI, we chose Angular as the front-end framework as we already used it before. You can visit the page <a href="http://caltraindb1.x10host.com/">here</a> !!(No longer working)

> The client side will call the RESTFUL API from the server to fetch or update data. 
> Due to the course's main focus is on databases, only simple security measures are implemented, such as SQL injections by validating user's input.

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

## Demo Screenshots

### Index Page
![Alt text](screenshot/Index.png?raw=true "Title")
### Buy Ticket
![Alt text](screenshot/buy.png?raw=true "Buy")
### Confirmation
![Alt text](screenshot/confirmation.png?raw=true "Confirm")
### Check Tickets
![Alt text](screenshot/ticket_check.png?raw=true "Checking")
### Station Listing
![Alt text](screenshot/station.png?raw=true "Stations")
### Admin Page
![Alt text](screenshot/admin_login.png?raw=true "Log In")
### Admin Dashboard
![Alt text](screenshot/dashboard.png?raw=true "Dashboard")
### Manage Database
![Alt text](screenshot/manage.png?raw=true "Manage")
### Logout
![Alt text](screenshot/admin_logout.png?raw=true "Logout")

## License

CalTrain-Db is licensed under the MIT license. (http://opensource.org/licenses/MIT)

