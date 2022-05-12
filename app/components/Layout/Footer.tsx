const darkBlue = {
  backgroundColor: '#233F61',
  fontFamily: 'Impact',
  fontSize: 25,
  color: 'white',
};

const Footer = () => {
  return (
    <footer className="row" style={darkBlue}>
      <div className="col-9 my-auto align-middle">UAA CS Club</div>

      <div className="col-1 my-3">
        <img src="discordIcon.png" className="img-fluid " alt="Discord Icon" />
      </div>
      <div className="col-1 my-3">
        <img src="mailIcon.png" className="img-fluid" alt="Email Icon" />
      </div>
      <div className="col-1 my-3">
        <img src="githubIcon.png" className="img-fluid" alt="Github Icon" />
      </div>
    </footer>
  );
};

export default Footer;
