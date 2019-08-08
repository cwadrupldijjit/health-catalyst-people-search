# The People Search Application

## Requirements

### Business Requirements

- The application accepts search input in a text box and then displays in a pleasing style a list of people where any part of their first or last name matches what was typed in the search box (displaying at least name, address, age, interests, and a picture). 
- Solution should either seed data or provide a way to enter new users or both
- Simulate search being slow and have the UI gracefully handle the delay

### Technical Requirements

- A Web Application using WebAPI and a front-end JavaScript framework (e.g., Angular, AngularJS, React, Aurelia, etc.) 
- Use an ORM framework to talk to the database
- Unit Tests for appropriate parts of the application

## Notes from Trent
At Catalyst, the process begins with a coding problem that I will be giving to you in this email.  It is meant to assess your competency with .NET and other technologies we use every day, plus software engineering principles and design patterns.  As such, it is a key component in our interviewing and hiring process.  Please use this as a chance to show off your best work.  After completing it, we will review your solution and consider you for the next step in the process. 

Our preference is that you do your development in GitHub, so that we can clone your solution directly from there. Please ensure that cloning the repository, then running it directly (without any additional setup steps) will start the app properly. We consider this a reflection of how you work. If the application does not run, we will not be able to grade it.

Also, it is expected that you would use Internet resources to help answer technical questions you might have so feel free to use them. VS 2017 Community is available as a free download and are fine to be used to do the development.  If you have any questions on the assignment feel free to email  trent.wignall@healthcatalyst.com.

Please get your solution completed by end of day **August 7th, 2019**.  If you need more time, just let me know.

Best of luck!  We look forward to your solution!

## Prerequisites to run

- Dotnet Core SDK
    - Make sure that the dev https cert is installed that comes with the SDK
- Microsoft SQL Server, Development edition at the least

## Running

From your terminal, enter the `back-end/HealthCatalystPeople.Api` folder and then use the command `dotnet run`

If everything goes well, it will start up and run successfully.  To view it in your browser, make sure to open to https://localhost:5001

## Final note

I ran out of time so there are some visual things that need cleaning up.  However, the back-end is complete, though I wished that I had time to implement image uploads, too.
