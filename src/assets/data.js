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
    description:
      "Group Proj#1 Search for the recipe with any item, tolerences can be set as well",
    github: "jeffreyadamo/GroupProject1-PandemicPantry.git",
    deployed: "https://jeffreyadamo.github.io/GroupProject1-PandemicPantry/",
  },

  {
    pic: aqir_pic,
    title: "Aqir",
    description:
      "Group Proj#2 e-comm site with user authentication to post items",
    github: "ngoudeau2012/project_aqir.git",
    deployed: "https://thawing-castle-93200.herokuapp.com/",
  },
  {
    pic: election_pic,
    title: "Represent-Me",
    description:
      "Group Proj#3 app to find information on their local government",
    github: "gidmp/Represent-Me.git",
    deployed: "https://represent-me-2020.herokuapp.com/",
  },
  {
    pic: weather_pic,
    title: "5-Day forecast",
    description:
      "Search the city to view current forecast in the dashboard as well as 5 day forecast",
    github: "bmaha2/weather-app.git",
    deployed: "https://bmaha2.github.io/weather-app/",
  },
  {
    pic: workday_pic,
    title: "Work Day Scheduler",
    description:
      "Schedule your workday with hour colored blocked to indicate present, past or future",
    github: "bmaha2/WorkDayScheduler.git",
    deployed: "https://bmaha2.github.io/WorkDayScheduler/",
  },
  {
    pic: employeeDir_pic,
    title: "Employee Directory",
    description:
      "Employee directory with search functionality by name of the employee",
    github: "bmaha2/Employee-Directory.git",
    deployed: "https://sad-payne-831947.netlify.app/",
  },
];
export default data;
