use JSON server to manage the data

two endpoints on json server
a list of countries
a list of cities with country and population information

Used redux and thunks to maintain application state

Users should be able to filter the tabular data
filter by country
sort by asc or desc population
delete a city
when deleting a city, add a loading indicator or disable the delete button for that city only
Add loading indicators for the web application whenever required

use a UI library like Material UI
id	Country	City	Population	Edit	Delete
1	India	Delhi	19,000,000	Edit	Delete
2	SriLanka	Colombo	5,600,000	Edit	Delete
3	USA	Chicago	2,920,000	Edit	Delete
create a new route /add-country
User should be able to add a new country from the /add-country route
createa a new route /add-city
User should be able to add a new city from the /add-city route
When you add a new city, take the following fields
City name, Population and Country it belongs to
the countriese should be fetched from the list of countries that you have made
When you click the Edit button, you should, bring up a modal, and allow a user to edit the details and update the data