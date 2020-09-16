import React from "react";
import Card from "./Cards";
import data from "./data";

const App = () =>(
  <>
    <h1 className="heading_style"> Cards of 3 Netflix Series </h1>
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        {data.map((val) => {
          return (
            <div className="col-md-4">
              <Card
                key={val.id}
                imgsrc={val.imgsrc}
                title={val.title}
                sname={val.sname}
                link={val.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  </>
);

export default App;