import React from "react";
import profileImage from "../../assets/images/bipin.JPG"


function About() {
    return (
        <>
        <div className="container inside-container shadow bg-white rounded">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card mb-3 border-0">
                        <div className="card-header">
                            <h2>About Me</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/*end of header*/}
            <div className="row">
                <div className="col-lg-12">
                    <div className="image">
                        <img src={profileImage} alt="profile picture" />
                    </div>
                    {/*--end of image*/}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada augue vel elit ornare
                    sodales. Pellentesque gravida tortor nec tellus dignissim semper. Ut feugiat lorem eget orci tincidunt
                    pulvinar. Praesent interdum sem sit amet urna consequat tristique. Curabitur lectus purus, consectetur a
                    sagittis sed, rhoncus sit amet nisi. Praesent fringilla scelerisque libero in feugiat. Donec vitae nisi
                    aliquet, ultricies mi ut, iaculis dolor. Integer luctus nulla non condimentum lacinia. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
                </div>
                {/*end of side paragraph*/}
            </div> { /*end block with image and paragraph*/}
            <div className="row">
                <div className="col-lg-12">
                    <p> Sed feugiat, lectus id mollis vehicula, diam turpis aliquet nisi, hendrerit placerat enim neque nec
                    ante. In hac habitasse platea dictumst. In rutrum lectus id massa rutrum, aliquet venenatis dui congue.
                    Morbi eget leo massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </p>
                </div>
            </div>
            {/*<!--end second paragraph-->*/}
            <div className="row">
                <div className="col-lg-12">
                    <p>Maecenas erat arcu, convallis ac porta a, lobortis sit amet turpis. Ut non lectus est. Nulla auctor
                    mattis convallis. Curabitur condimentum dolor ultrices turpis dictum, et elementum purus porta. Praesent
                    interdum arcu ut diam posuere sollicitudin. Suspendisse cursus eget urna id convallis.
            </p>
                </div>
            </div>
            {/*end third paragraph*/}
        </div>{/*end of inside container*/ }
        </>
  );
}

export default About;
