// Import Styles
import contactStyle from "../assets/styles/Contact.module.css";
import Button from "../components/Button";
import content from "../content.json";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { sendEmail } from "../util/EmailUtil";
function Contact() {
  async function handleFormSubmission() {
    const firstNameInput = document.getElementById(
      "FirstName"
    ) as HTMLInputElement;
    let firstName = "";
    if (firstNameInput) firstName = firstNameInput.value;

    //
    const lastNameInput = document.getElementById(
      "LastName"
    ) as HTMLInputElement;
    let lastName = "";
    if (lastNameInput) lastName = lastNameInput.value;

    //

    const emailInput = document.getElementById("Email") as HTMLInputElement;
    let email = "";
    if (emailInput) email = emailInput.value;

    //
    const phoneInput = document.getElementById("Phone") as HTMLInputElement;
    let phone = "";
    if (phoneInput) phone = phoneInput.value;

    //
    const subjectInput = document.getElementById("Subject") as HTMLInputElement;
    let subject = "";
    if (subjectInput) subject = phoneInput.value;

    //
    const messageInput = document.getElementById("Message") as HTMLInputElement;
    let message = "";
    if (message) message = messageInput.value;

    await sendEmail({ firstName, lastName, email, subject, phone, message });

    messageInput.value = "";
    subjectInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";
    lastNameInput.value = "";
    firstNameInput.value = "";
  }
  return (
    <section
      className={`${contactStyle.contact__container} contact__container`}
      id="ContactSection"
    >
      {/* Left Container */}
      <div
        className={`${contactStyle.contact__container__left} contact__container__left`}
      >
        <div>
          <h2>get in touch</h2>
          <p>
            Fill up the form and I will get back to you as soon as possible! You
            can also contact me on <span> </span>
            <a
              href="https://www.linkedin.com/in/mihret-getachew"
              target="__blank"
            >
              Linkedin
            </a>{" "}
            or <a href="mailto:mihret.a.getachew@gmail.com">email me</a>.
          </p>
          {/* Email */}
          <div className={contactStyle.contact__info__container}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 465.5 311.8"
            >
              <path d="m280.4 168.1-41.6 35.3a8.8 8.8 0 0 1-11.4 0l-41.6-35.2-170 143.6h433.8L280.4 168.1zM0 10.7v290.4l171.1-145.2z" />
              <path d="m15.9 0 216.9 184L449.6 0zM294.4 155.9l171.1 145.2V10.7z" />
            </svg>
            <div className={contactStyle.flag}>{content.location} </div>
          </div>
          {/* Location */}
          <div className={contactStyle.contact__info__container}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 395.7 395.7"
            >
              <path d="M197.8 0A137.5 137.5 0 0 0 60.5 137.3c0 72.9 124.6 243.2 129.9 250.4l5 6.7c.6.8 1.5 1.3 2.5 1.3s1.9-.5 2.5-1.3l4.9-6.7c5.3-7.2 129.9-177.5 129.9-250.4C335.2 61.6 273.6 0 197.8 0zm0 88.1a49.3 49.3 0 0 1 0 98.4 49.3 49.3 0 0 1 0-98.4z" />
            </svg>
            <div>{content.email}</div>
          </div>
        </div>

        {/* Socials */}
        <div className={contactStyle.contact__socials__container}>
          <a
            href="https://github.com/Mihret-Getachew"
            target="__blank"
            className={contactStyle.contact__socials}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 640 640"
            >
              <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/mihret-getachew"
            target="__blank"
            className={contactStyle.contact__socials}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 640 640"
            >
              <path d="M579.999 0H60C27 0 0 27 0 60v520c0 33 27 60 60 60h519.999c33 0 60-27 60-60V60c0-33-27-60-60-60zM239.991 519.999h-79.985V239.992h79.985v280.007zm-40.004-320.012c-22.11 0-39.993-17.882-39.993-39.993 0-22.122 17.882-40.004 39.993-40.004 22.122 0 40.004 17.882 40.004 40.004 0 22.11-17.882 39.993-40.004 39.993zm320.012 320.012h-79.986V360.005c0-22.122-17.893-40.004-40.004-40.004-22.122 0-40.004 17.882-40.004 40.004v159.994h-80.01V239.992h80.01v49.642c16.476-22.654 41.752-49.642 69.993-49.642 49.76 0 90 44.764 90 100.005v180.002z"></path>
            </svg>
          </a>
         
         
        </div>

        <div className={contactStyle.contact__decoration}></div>
        <div className={contactStyle.contact__decoration_small}></div>
      </div>

      {/* Right Container */}
      <form
        className={contactStyle.contact__container__right}
        id="Form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2>Our very own smoke signal!</h2>
        <div
          className={`${contactStyle.container__row} ${contactStyle.justify__space__between}`}
        >
          {/* First Name */}
          <div className={`${contactStyle.container__col} ${contactStyle.w45}`}>
            <label
              htmlFor="FirstName"
              className={contactStyle.contact__form__label}
            >
              First Name <span>*</span>
            </label>
            <input type="text" name="FirstName" id="FirstName" />
            <span id="FirstNameErrorMessage">Message</span>
          </div>

          {/* Last Name */}
          <div className={`${contactStyle.container__col} ${contactStyle.w45}`}>
            <label
              htmlFor="LastName"
              className={contactStyle.contact__form__label}
            >
              Last Name
            </label>
            <input type="text" name="LastName" id="LastName" />
            <span id="LastNameErrorMessage">Message</span>
          </div>
        </div>

        <div
          className={`${contactStyle.container__row} ${contactStyle.justify__space__between} ${contactStyle.margin__top__50}`}
        >
          {/* Email */}
          <div className={`${contactStyle.container__col} ${contactStyle.w45}`}>
            <label
              htmlFor="Email"
              className={contactStyle.contact__form__label}
            >
              Email <span>*</span>
            </label>
            <input type="text" name="Email" id="Email" />

            <span id="EmailErrorMessage">Message</span>
          </div>

          {/* Phone Number */}
          <div className={`${contactStyle.container__col} ${contactStyle.w45}`}>
            <label
              htmlFor="Phone"
              className={contactStyle.contact__form__label}
            >
              Phone
            </label>
            <input type="number" name="Phone" id="Phone" />

            <span id="PhoneErrorMessage">Message</span>
          </div>
        </div>

        {/* Subject */}
        <div
          className={`${contactStyle.container__col} ${contactStyle.margin__top__50}`}
        >
          <label
            htmlFor="Subject"
            className={contactStyle.contact__form__label}
          >
            Subject
          </label>

          <input type="text" name="Subject" id="Subject" />
          <span id="SubjectErrorMessage">Message</span>
        </div>

        {/* Message */}
        <div
          className={`${contactStyle.container__col} ${contactStyle.margin__top__50}`}
        >
          <label
            htmlFor="Message"
            className={contactStyle.contact__form__label}
          >
            Message <span>*</span>
          </label>

          <input type="text" name="Message" id="Message" />
          <span id="MessageErrorMessage">Message</span>
        </div>

        {/* Submit Button */}
        <Button label="Send" callback={handleFormSubmission} />
      </form>
    </section>
  );
}

export default Contact;
