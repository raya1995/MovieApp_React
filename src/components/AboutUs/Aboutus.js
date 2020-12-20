import React, { Component, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import fire from "../../Firebase/Firebase.utils";

const AboutUs = () => {
  const [username, setUsername] = useState();
  const CurrentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      // pour dire si l'utilisateur et authentifier ou pas

      if (user) {
        console.log(user.displayName);

        setUsername(user.displayName);
      }
    });
  }, [username]);

  console.log("ayross", username);

  return (
    <>
      <div>
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        {/*---- Include the above in your HEAD tag --------*/}
        {/* Team */}
        <section id="team" className="pb-5">
          <div className="container">
            {username && CurrentUser ? (
              <h5 className="section-title h1">Welcome : {username}</h5>
            ) : (
              <p></p>
            )}
            <center>
              <div className="container">
                <div className="card">
                  <h5 className="section-title h1">Welcome : {username}</h5>
                </div>
              </div>
            </center>
            <br></br>
            <center>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div
                  className="image-flip"
                  ontouchstart="this.classList.toggle('hover');">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p>
                            <img
                              className=" img-fluid"
                              src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.0-9/125201733_835352850550400_3399893599145318980_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=EdtXHOEw2kwAX_khQYe&_nc_ht=scontent.fnbe1-2.fna&oh=5a97fa423cb75b32ce632cdc88403041&oe=60068745"
                              alt="card image"
                            />
                          </p>
                          <h4 className="card-title">Raya Hadhri</h4>
                          <p className="card-text">
                            This is my application for movies with React using
                            Redux
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </section>
      </div>
    </>
  );
};
export default AboutUs;
