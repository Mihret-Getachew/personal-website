// Import Styles
import navigationStyle from "../assets/styles/Navigation.module.css";
import mobileMenuStyles from "../assets/styles/MobileMenu.module.css";

// import MobileMenu from "./base/MobileMenu";

function Navigation() {
  // function to toggle the mobile navigation menu
  function toggleHamburgerMenu() {
    // get mobile menu
    const mobileMenuElement = document.getElementById("MobileMenu");

    if (!mobileMenuElement) return;

    if (mobileMenuElement.classList.contains("mobile__menu__activate")) {
      // move mobile menu up / hide
      mobileMenuElement.style.transform = "translateY(-100%)";

      // change hamburger container color - remove accent color
      const mobileMenuToggleButton = document.getElementById(
        "mobileMenuToggleButton"
      );

      if (!mobileMenuToggleButton) return;

      mobileMenuToggleButton.style.backgroundColor = "transparent";

      // Change hamburger lines color - remove primary color
      const hamburgerElements: NodeListOf<HTMLElement> =
        document.querySelectorAll("#mobileMenuToggleButton span");
      for (let i = 0; i < hamburgerElements.length; i++) {
        hamburgerElements[i].style.backgroundColor = "var(--accent-color)";
      }
    } else {
      // move mobile menu up / show
      mobileMenuElement.style.transform = "translateY(0%)";

      // change hamburger container color - add accent color
      const mobileMenuToggleButton = document.getElementById(
        "mobileMenuToggleButton"
      );

      if (!mobileMenuToggleButton) return;
      mobileMenuToggleButton.style.backgroundColor = "var(--accent-color)";

      // Change hamburger lines color -- remove accent color
      const hamburgerElements: NodeListOf<HTMLElement> =
        document.querySelectorAll("#mobileMenuToggleButton span");
      for (let i = 0; i < hamburgerElements.length; i++) {
        hamburgerElements[i].style.backgroundColor = "var(--primary-color)";
      }
    }

    // toggle check class
    // document.getElementById("navigationMenuMobileToggleCheck").checked = false;
    mobileMenuElement.classList.toggle("mobile__menu__activate");
  }

  return (
    <nav className={navigationStyle.navigation__container}>
      <MobileMenu />
      {/* Desktop Menu */}
      <ul className={navigationStyle.navigation__row}>
        <li className={`navigation__item`}>
          <a href="#LandingSection">Home</a>
          <div className="main__menu__border"></div>
        </li>
        <li className={`navigation__item`}>
          <a href="#AboutSection">About</a>
          <div className="main__menu__border"></div>
        </li>
        <li className={`navigation__item`}>
          <a href="#ServicesSection">Services</a>
          <div className="main__menu__border"></div>
        </li>
        <li className={`navigation__item`}>
          <a href="#WorkSection">Projects</a>
          <div className="main__menu__border"></div>
        </li>
        <a className={navigationStyle.action__button} href="#ContactSection">
          Contact Me
        </a>
      </ul>

      {/* Mobile Menu */}
      <div
        className={navigationStyle.mobile__menu__toggle__button}
        id="mobileMenuToggleButton"
      >
        <label htmlFor="navigationMenuMobileToggleCheck">
          <input
            type="checkbox"
            id="navigationMenuMobileToggleCheck"
            onClick={toggleHamburgerMenu}
          />
          <span className={navigationStyle.hamburger__lines}></span>
          <span className={navigationStyle.hamburger__lines}></span>
          <span className={navigationStyle.hamburger__lines}></span>
        </label>
      </div>
    </nav>
  );
}

function MobileMenu() {
  // function to toggle the mobile navigation menu
  function toggleHamburgerMenu() {
    // get mobile menu
    const mobileMenuElement = document.getElementById("MobileMenu");

    if (!mobileMenuElement) return;

    if (mobileMenuElement.classList.contains("mobile__menu__activate")) {
      // move mobile menu up / hide
      mobileMenuElement.style.transform = "translateY(-100%)";

      // change hamburger container color - remove accent color
      const mobileMenuToggleButton = document.getElementById(
        "mobileMenuToggleButton"
      );

      if (!mobileMenuToggleButton) return;

      mobileMenuToggleButton.style.backgroundColor = "var(--primary-color)";

      // Change hamburger lines color - remove primary color
      const hamburgerElements: NodeListOf<HTMLElement> =
        document.querySelectorAll("#mobileMenuToggleButton span");
      for (let i = 0; i < hamburgerElements.length; i++) {
        hamburgerElements[i].style.backgroundColor = "var(--accent-color)";
      }
    } else {
      // move mobile menu up / show
      mobileMenuElement.style.transform = "translateY(0%)";

      // change hamburger container color - add accent color
      const mobileMenuToggleButton = document.getElementById(
        "mobileMenuToggleButton"
      );

      if (!mobileMenuToggleButton) return;
      mobileMenuToggleButton.style.backgroundColor = "var(--accent-color)";

      // Change hamburger lines color -- remove accent color
      const hamburgerElements: NodeListOf<HTMLElement> =
        document.querySelectorAll("#mobileMenuToggleButton span");
      for (let i = 0; i < hamburgerElements.length; i++) {
        hamburgerElements[i].style.backgroundColor = "var(--primary-color)";
      }
    }

    // toggle check class
    const mobileMenuToggleCheck = document.getElementById(
      "navigationMenuMobileToggleCheck"
    ) as HTMLInputElement;

    if (!mobileMenuToggleCheck) return;
    mobileMenuToggleCheck.checked = false;
    mobileMenuElement.classList.toggle("mobile__menu__activate");
  }

  return (
    <section
      className={mobileMenuStyles.mobile__menu__container}
      id="MobileMenu"
    >
      <a href="#LandingSection" onClick={toggleHamburgerMenu}>
        Home
      </a>
      <a href="#AboutSection" onClick={toggleHamburgerMenu}>
        About
      </a>
      <a href="#ServicesSection" onClick={toggleHamburgerMenu}>
        Services
      </a>
      {/* <a href="#WorkSection" onClick={toggleHamburgerMenu}>
        Project
      </a> */}

      <a href="#ContactSection" onClick={toggleHamburgerMenu}>
        Contact Me
      </a>

      <div className={mobileMenuStyles.socials__container}>
        <div className={mobileMenuStyles.social__item}>
          <a href="https://github.com/thomasalemayehu" target="__blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 640 640"
            >
              <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
            </svg>
          </a>
        </div>
        <div className={mobileMenuStyles.social__item}>
          <a
            href="https://www.linkedin.com/in/thomas-alemayehu-6017891a0/"
            target="__blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 640 640"
            >
              <path d="M579.999 0H60C27 0 0 27 0 60v520c0 33 27 60 60 60h519.999c33 0 60-27 60-60V60c0-33-27-60-60-60zM239.991 519.999h-79.985V239.992h79.985v280.007zm-40.004-320.012c-22.11 0-39.993-17.882-39.993-39.993 0-22.122 17.882-40.004 39.993-40.004 22.122 0 40.004 17.882 40.004 40.004 0 22.11-17.882 39.993-40.004 39.993zm320.012 320.012h-79.986V360.005c0-22.122-17.893-40.004-40.004-40.004-22.122 0-40.004 17.882-40.004 40.004v159.994h-80.01V239.992h80.01v49.642c16.476-22.654 41.752-49.642 69.993-49.642 49.76 0 90 44.764 90 100.005v180.002z" />
            </svg>
          </a>
        </div>
        <div className={mobileMenuStyles.social__item}>
          <a href="https://twitter.com/thomas_alemayeh" target="__blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 640 640"
            >
              <path d="M640.012 121.513c-23.528 10.524-48.875 17.516-75.343 20.634 27.118-16.24 47.858-41.977 57.756-72.615-25.347 14.988-53.516 25.985-83.363 31.866-24-25.5-58.087-41.35-95.848-41.35-72.508 0-131.21 58.736-131.21 131.198 0 10.228 1.134 20.232 3.355 29.882-109.1-5.528-205.821-57.757-270.57-137.222a131.423 131.423 0 0 0-17.764 66c0 45.497 23.102 85.738 58.347 109.207-21.508-.638-41.74-6.638-59.505-16.359v1.642c0 63.627 45.225 116.718 105.32 128.718-11.008 2.988-22.63 4.642-34.606 4.642-8.48 0-16.654-.874-24.78-2.35 16.783 52.11 65.233 90.095 122.612 91.205-44.989 35.245-101.493 56.233-163.09 56.233-10.63 0-20.988-.65-31.334-1.89 58.229 37.359 127.206 58.997 201.31 58.997 241.42 0 373.552-200.069 373.552-373.54 0-5.764-.13-11.35-.366-16.996 25.642-18.343 47.87-41.493 65.469-67.844l.059-.059z" />
            </svg>
          </a>
        </div>
        <div className={mobileMenuStyles.social__item}>
          <a href="https://medium.com/@thomas2alexmech" target="__blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1333.34 1333.34"
            >
              <path
                d="M0 1333.34h1333.34V0H0v1333.34zm325.02-887.42a34.71 34.71 0 00-11.28-29.26L230.1 315.9v-15.05h259.69l200.72 440.21 176.47-440.21h247.56v15.05l-71.5 68.56a20.89 20.89 0 00-7.94 20.07v503.75a20.903 20.903 0 007.94 20.07l69.83 68.56v15.05H761.61v-15.05l72.35-70.23c7.11-7.11 7.11-9.2 7.11-20.07V499.43l-201.15 510.86h-27.18L378.56 499.43v342.38a47.254 47.254 0 0012.96 39.3l94.09 114.13v15.05h-266.8v-15.05l94.09-114.13a45.594 45.594 0 0012.13-39.3V445.92z"
                fill="#12100e"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
