import React from "react";
import weather_pic from "../../assets/images/weather-app.jpg";
import workday_pic from "../../assets/images/work-day.PNG";
import burger_pic from "../../assets/images/burger.PNG";
import pandemic_pic from "../../assets/images/pandemic-pantry.PNG";
import aqir_pic from "../../assets/images/aqir.png";
import employeeDir_pic from "../../assets/images/employee-directory.PNG"

function Portfolio() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card mb-3 border-0">
            <div className="card-header">
              <h2>Portfolio</h2>
            </div>
          </div>
        </div>
      </div>{/*<!--end of header-->*/}

      <div className="row row-cols-1 row-cols-lg-3">
        <div className="col mb-3">
          <div className="card h-100">
            <div className="card-header">
              <h4>5-Day Weather-App</h4>
            </div>
            <img src={weather_pic} alt="img-thumbnail" />
            <div className="card-body">
              <h6 className="card-link ml-auto"><a href={"https://bmaha2.github.io/weather-app/"} target="_blank" rel="noopener noreferrer">Deployed-Link</a>
              </h6>
              <h6 className="card-link"><a href={"https://github.com/bmaha2/weather-app.git"}
                target="_blank" rel="noopener noreferrer">Github-Link</a></h6>

            </div>
          </div>
        </div>{/*<!--end of first image container-->*/}

        <div className="col mb-3">
          <div className="card h-100">
            <div className="card-header">
              <h4>Work Day Scheduler</h4>
            </div>
            <img src={workday_pic} alt="img-thumbnail" />
            <div className="card-body">
              <h6 className="card-link"><a href={"https://bmaha2.github.io/WorkDayScheduler/"}
                target="_blank" rel="noopener noreferrer">Deployed-Link</a></h6>
              <h6 className="card-link"><a href={"https://github.com/bmaha2/WorkDayScheduler.git"} target="_blank" rel="noopener noreferrer">Github
                Link</a></h6>
            </div>
          </div>
        </div>{/*<!--end of second image container-->*/}

        <div className="col mb-3">
          <div className="card h-100">
            <div className="card-header">
              <h4>Burger Logger</h4>
            </div>
            <img src={burger_pic} alt="img-thumbnail" />
            <div className="card-body">
              <h6 className="card-link"><a href={"https://secure-crag-20728.herokuapp.com/"}
                target="_blank" rel="noopener noreferrer">Deployed-Link</a></h6>
              <h6 className="card-link"><a href={"https://github.com/bmaha2/burger.git"} target="_blank" rel="noopener noreferrer">Github Link</a>
              </h6>
            </div>
          </div>
        </div>{/*<!--end of third image container-->*/}

        <div className="col mb-3">
          <div className="card h-100">
            <div className="card-header">
              <h4>Pandemic Pantry<br />group-project#1</h4>
            </div>
            <img src={pandemic_pic} alt="img-thumbnail" />
            <div className="card-body">
              <h6 className="card-link"><a href={"https://jeffreyadamo.github.io/GroupProject1-PandemicPantry/"}
                target="_blank" rel="noopener noreferrer">Deployed-Link</a></h6>
              <h6 className="card-link"><a href={"https://github.com/jeffreyadamo/GroupProject1-PandemicPantry.git"}
                target="_blank" rel="noopener noreferrer">Github Link</a></h6>
            </div>
          </div>
        </div>{/*<!--end of forth image container-->*/}

        <div className="col mb-3">
          <div className="card h-100">
            <div className="card-header">
              <h4>Aqir<br />group-project#2</h4>
            </div>
            <img src={aqir_pic} alt="img-thumbnail" />
            <div className="card-body">
              <h6 className="card-link"><a href={"https://thawing-castle-93200.herokuapp.com/"}
                target="_blank" rel="noopener noreferrer">Deployed-Link</a></h6>
              <h6 className="card-link"><a href={"https://github.com/ngoudeau2012/project_aqir.git"} target="_blank" rel="noopener noreferrer">Github
                Link</a></h6>
            </div>
          </div>
        </div>{/*<!--end of fifth image container-->*/}
        <div className="col mb-3">
          <div className="card h-100">
            <div className="card-header">
              <h4>Employee Directory</h4>
            </div>
            <img src={employeeDir_pic} alt="img-thumbnail" />
            <div className="card-body">
              <h6 className="card-link"><a href={"https://sad-payne-831947.netlify.app/"}
                target="_blank" rel="noopener noreferrer">Deployed-Link</a></h6>
              <h6 className="card-link"><a href={"https://github.com/bmaha2/Employee-Directory.git"} target="_blank" rel="noopener noreferrer">Github
                Link</a></h6>
            </div>
          </div>
        </div>{/*<!--end of sixth image container-->*/}
      </div>{/*<!--end of container holding all image container-->*/}
    </>
  );
}

export default Portfolio;
