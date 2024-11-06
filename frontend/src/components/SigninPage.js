import React, { useState } from 'react';
import '../css/style.css';
import PageFooter from './PageFooter';

const SigninPage = () => {
  const [flip, setFlip] = useState(false);

  const handleToggleFlip = (event) => {
    event.preventDefault();
    setFlip(!flip);
  };

  return (
    <div className="login-root">
      <div className="box-root flex-flex flex-direction--column" style={{ minHeight: "100vh", flexGrow: 1 }}>
        <BackgroundAnimations />
        <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
          <Header />
          <LoginForm flip={flip} onToggleFlip={handleToggleFlip} />
          <div className='footer-spacer'></div>
          
          <PageFooter/>
        </div>
      </div>
    </div>
  );
};

const BackgroundAnimations = () => {
  return (
    <div className="loginbackground box-background--white padding-top--64">
      <div className="loginbackground-gridContainer">
        <div className="box-root flex-flex" style={{ gridArea: "top / start / 8 / end" }}>
          <div className="box-root" style={{ backgroundImage: "linear-gradient(white 0%, rgb(247, 250, 252) 33%)", flexGrow: 1 }}></div>
        </div>
        <div className="box-root flex-flex" style={{ gridArea: "4 / 2 / auto / 5" }}>
          <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
        </div>
        <div className="box-root flex-flex" style={{ gridArea: "6 / start / auto / 2" }}>
          <div className="box-root box-background--blue800" style={{ flexGrow: 1 }}></div>
        </div>
        <div className="box-root flex-flex" style={{ gridArea: "7 / start / auto / 4" }}>
          <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: 1 }}></div>
        </div>
        <div className="box-root flex-flex" style={{ gridArea: "8 / 4 / auto / 6" }}>
          <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
        </div>
        <div className="box-root flex-flex" style={{ gridArea: "2 / 15 / auto / end" }}>
          <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
        </div>
        <div className="box-root flex-flex" style={{ gridArea: "3 / 14 / auto / end" }}>
          <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: 1 }}></div>
        </div>
        <div className="box-root flex-flex" style={{ gridArea: "4 / 17 / auto / 20" }}>
          <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
        </div>
        <div className="box-root flex-flex" style={{ gridArea: "5 / 14 / auto / 17" }}>
          <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1 }}></div>
        </div>
      </div>
    </div>
  );
};

const Header = () => (
  <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
    <h1>TeraEdu</h1>
  </div>
);

const LoginForm = ({ flip, onToggleFlip }) => (
    <div className={`formbg-outer ${flip ? 'flip-active' : ''}`}>
      <div className="formbg">
        <div className="form-inner">
          {/* Sign Up Form */}
          {flip ? (
            <>
            <span className='flip-form'>
              <span className="padding-bottom--15">Sign up to your account</span>
              <form id="signup-form">
                <div className="field padding-bottom--24">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" />
                </div>
                <div className="field padding-bottom--24">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" />
                </div>
                <div className="field padding-bottom--24">
                  <label htmlFor="conpassword">Confirm Password</label>
                  <input type="password" name="conpassword" />
                </div>
                <div className="field padding-bottom--24">
                  <input type="submit" name="submit" value="Continue" />
                  <button className="login-btn" onClick={onToggleFlip}>Sign In</button>
                </div>
                <div className="field">
                  <a className="ssolink" href="#">Use single sign-on (Google) instead</a>
                </div>
              </form>
              <div className="footer-link padding-top--24">
                <span>Don't have an account? <a href="">Sign up</a></span>
              </div>
              </span>
            </>
          ) : (
            // Sign In Form
            <>
              <span className="padding-bottom--15">Sign in to your account</span>
              <form id="signin-form">
                <div className="field padding-bottom--24">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" />
                </div>
                <div className="field padding-bottom--24">
                  <label htmlFor="password">Password</label>
                  <div className="reset-pass">
                    <a href="#">Forgot your password?</a>
                  </div>
                  <input type="password" name="password" />
                </div>
                <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                  <label htmlFor="checkbox">
                    <input type="checkbox" name="checkbox" /> Stay signed in for a week
                  </label>
                </div>
                <div className="field padding-bottom--24">
                  <input type="submit" name="submit" value="Continue" />
                  <button className="login-btn" onClick={onToggleFlip}>Sign Up</button>
                </div>
                <div className="field">
                  <a className="ssolink" href="#">Use single sign-on (Google) instead</a>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );

export default SigninPage;
