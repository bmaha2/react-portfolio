import weather_pic from "../assets/images/weather-app.png";
import workday_pic from "../assets/images/work-day.PNG";
import election_pic from "../assets/images/election.PNG";
import pandemic_pic from "../assets/images/pandemic-pantry.PNG";
import aqir_pic from "../assets/images/aqir.png";
import employeeDir_pic from "../assets/images/employee-directory.PNG";

const data = [
  {
    pic: pandemic_pic,
    title: "Pandemic Pantry",
    description1:
      "Group Proj#1: Search for the recipe with any item, tolerences can be set as well",
    description2:
      "Technologies: HTML, CSS, Javascript, jQuery, Easy Fonts, ZURB Foundation, MediaWiki and APISpoonacular API",
    github: "jeffreyadamo/GroupProject1-PandemicPantry.git",
    deployed: "https://jeffreyadamo.github.io/GroupProject1-PandemicPantry/",
  },

  {
    pic: aqir_pic,
    title: "Aqir",
    description1:
      "Group Proj#2: e-comm site with user authentication to post items",
    description2:
      "Technologies: Bulma, Express, Handlebars, MySQL, Sequelize, bcript and Passport",
    github: "ngoudeau2012/project_aqir.git",
    deployed: "https://thawing-castle-93200.herokuapp.com/",
  },
  {
    pic: election_pic,
    title: "Represent-Me",
    description1:
      "Group Proj#3 app to find information on their local government with user authentication",
    description2:
      "Technologies: UI kit, Express, bcript, Passport, MongoDB, React, Civic API, GNewsAPI",
    github: "gidmp/Represent-Me.git",
    deployed: "https://represent-me-2020.herokuapp.com/",
  },
  {
    pic: weather_pic,
    title: "5-Day forecast",
    description1:
      "Search the city to view current forecast in the dashboard as well as 5 day forecast",
    description2: "Technologies: Bootstrap, jQuery, Weather API",
    github: "bmaha2/weather-app.git",
    deployed: "https://bmaha2.github.io/weather-app/",
  },
  {
    pic: workday_pic,
    title: "Work Day Scheduler",
    description1:
      "Schedule your workday with hour colored blocked to indicate present, past or future",
    description2: "Technologies: bootstrap, fontawesome, moment.js, jQuery",
    github: "bmaha2/WorkDayScheduler.git",
    deployed: "https://bmaha2.github.io/WorkDayScheduler/",
  },
  {
    pic: employeeDir_pic,
    title: "Employee Directory",
    description1:
      "Employee directory with search functionality by name of the employee",
    description2: "Technologies: bootstrap, React, random user API",
    github: "bmaha2/Employee-Directory.git",
    deployed: "https://sad-payne-831947.netlify.app/",
  },
];
export default data;
