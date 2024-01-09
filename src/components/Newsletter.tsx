import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="green-section wow fadeInUp" style={{ padding: '50px 0' }}>
      <div className="container">
        <div className="col-md-6 col-sm-12">
          <div className="row">
            <span className="white-text montserrat-text uppercase" style={{ fontSize: '30px', display: 'block' }}>
              you think we're cool? let's work together
            </span>
            <a href="#" className="btn white" style={{ marginTop: '30px' }}>
              <span>get in touch</span>
            </a>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="row">
            <div className="white-section" style={{ padding: '20px' }}>
              <span className="montserrat-text uppercase" style={{ fontSize: '24px' }}>
                stay informed with our newsletter
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <form action="#" method="post">
                <div className="input_1">
                  <input type="text" name="email" />
                  <span>your email</span>
                </div>
                <button type="submit" className="btn green" style={{ marginTop: '20px' }}>
                  <span>send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
