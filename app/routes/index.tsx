//  Home page
import { Links } from 'remix';

export default function Index() {
  return (
    <html lang="en">
      <head>
        <Links />
      </head>
      <div>
        {/* Logo row*/}
        <div className="row light-blue-container">
          <div className="dark-blue-container">
            <img
              src="blueClubLogo.png"
              className="img-fluid my-3"
              alt="Club Logo"
            />
          </div>

          <div className="col-lg-8 my-auto">
            <p></p>
            <p style={{ fontSize: 50 }}>We are PASSIONATE about</p>
            <p style={{ fontSize: 90 }}> PROGRAMMING</p>
            <b
              style={{
                fontSize: 30,
                fontFamily: 'Helvetica Neue',
                color: '#233F61',
                lineHeight: '9rem',
              }}
            >
              Meetings every Wednesday @ 6:30pm
            </b>
          </div>
        </div>

        {/* Club summary row*/}
        <div className="row my-3 white-container-with-dark-text">
          <div className="col-lg-6 my-auto">
            <p>
              The <strong>Computer Science Club at UAA </strong>
              is committed to positively impacting the
              <strong> Alaskan community </strong>
              by supporting the next generation of computer enthusiasts. We
              foster a
              <strong> supportive, learning-focused environment </strong>
              where friends and mentors can work together to reach new heights.
            </p>
          </div>

          <div className="col-lg-6 my-auto" style={{ textAlign: 'center' }}>
            <img
              src="mountainBg.png"
              className="img-fluid"
              width="500rem"
              alt="Alaskan Mountain Image taken by Mya Schroder"
            />
          </div>
        </div>

        {/* Club stats row*/}
        <div className="row yellow-container">
          <div className="card mx-auto my-5" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title " style={{ fontSize: 80 }}>
                10
              </h5>
              <p className="card-text">members</p>
            </div>
          </div>

          <div className="card mx-auto my-5" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: 80 }}>
                3
              </h5>
              <p className="card-text">projects</p>
            </div>
          </div>

          <div className="card mx-auto my-5" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: 80 }}>
                5
              </h5>
              <p className="card-text">speakers</p>
            </div>
          </div>
        </div>

        {/* Club spotlight row*/}
        <div className="row m-4 white-container-with-light-text ">
          <div className="col-md-4 mt-auto">
            <p>
              Club <br />
              Spotlight:
            </p>
          </div>

          <div className="col-md-4 my-auto" style={{ textAlign: 'left' }}>
            {/* TODO: replace w/ other image*/}
            <img
              src="mountainBg.png"
              className="img-fluid"
              width="500rem"
              alt="Alaskan Mountain Image taken by Mya Schroder"
            />
          </div>

          <div className="col-md-4 my-auto" style={{ textAlign: 'left' }}>
            {/* TODO: replace w/ other image*/}
            <img
              src="mountainBg.png"
              className="img-fluid"
              width="500rem"
              alt="Alaskan Mountain Image taken by Mya Schroder"
            />
          </div>
        </div>
      </div>
    </html>
  );
}
