// Import Styles
import servicesStyle from "../assets/styles/Services.module.css";

function Services() {
  return (
    <section
      className={`${servicesStyle.container} services__container`}
      id="ServicesSection"
    >
      <h3>My Services</h3>
      <div className={servicesStyle.cards__container}>
        {/* Front End */}
        <div className={servicesStyle.card__container}>
          <div>
            <div className={servicesStyle.card__image__container}>
              <WebDevIcon />
            </div>
            <h3>Front End Development</h3>
            <p className={servicesStyle.card__content__container}>
              I love building exceptional, responsive and beautiful digital
              experiences. I also sometimes design front end designs.
              Well-versed with HTML5, CSS, Bootstrap, Tailwind, React.js and
              WordPress. I am open to learning more technologies based on the
              project requirements.
            </p>
            <div className={servicesStyle.stacks__section}>
              <section>
                <div>HTML5</div>
                <div>CSS3</div>
                <div>JavaScript</div>
              </section>
              <section>
                <div>React.js / Next.js</div>
                <div>Angular</div>
                <div>WordPress</div>
              </section>
            </div>
          </div>

          <div className={servicesStyle.services__card__border}></div>
        </div>

        {/* Backend */}
        <div className={servicesStyle.card__container}>
          <div>
            <div className={servicesStyle.card__image__container}>
              <BackEndDevIcon></BackEndDevIcon>
            </div>
            <h3>Back End Development</h3>
            <p className={servicesStyle.card__content__container}>
              Highly skilled in building scalable and efficient backend systems
              with readable code and easy to manage architecture. Highly skilled
              in RestAPI development. Well-versed with MongoDB, MYSQL,
              JavaScript(Node.js,Express.js), SpringBoot and Spring Core. I am
              open to learning more technologies based on the project
              requirements.
            </p>
            <div className={servicesStyle.stacks__section}>
              <section>
                <div>Node.js </div>
                <div>Express.js</div>
              </section>
              <section>
                <div>MongoDB</div>
                <div>Mongoose</div>
              </section>
            </div>
          </div>

          <div className={servicesStyle.services__card__border}></div>
        </div>

        {/* Mobile */}
        <div className={servicesStyle.card__container}>
          <div>
            <div className={servicesStyle.card__image__container}>
              <MobileAppDevIcon></MobileAppDevIcon>
            </div>
            <h3>Mobile Application Development</h3>
            <p className={servicesStyle.card__content__container}>
              I can build performant,scalable, responsive and good looking
              mobile applications using Flutter/Dart. I specialize in the Domain
              Driven Design when using flutter.
            </p>
            <div className={servicesStyle.stacks__section}>
              <section>
                <div>React Native</div>
                <div>Flutter</div>
                <div>Dart</div>
              </section>
              <section></section>
            </div>
          </div>

          <div className={servicesStyle.services__card__border}></div>
        </div>
      </div>
    </section>
  );
}

function WebDevIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382.2 382">
      <symbol id="a" viewBox="-8.2 -8 16.4 16">
        <path d="M8.2-.1v1.4H-3.2c.1 1.1.5 2 1.2 2.6s1.7.9 3 .9a14.7 14.7 0 0 0 6.5-1.9v3.8c-1.2.4-2.3.8-3.5 1-1.1.2-2.3.3-3.5.3-2.8 0-4.9-.7-6.5-2.1C-7.5 4.5-8.2 2.6-8.2 0c0-2.5.8-4.5 2.3-5.9S-2.4-8 .3-8c2.4 0 4.3.7 5.7 2.1A7.8 7.8 0 0 1 8.2-.1zm-5-1.6c0-.9-.3-1.7-.8-2.2-.6-.6-1.3-.9-2.1-.9-.9 0-1.7.3-2.3.8s-1 1.3-1.1 2.3h6.3z" />
      </symbol>
      <symbol id="b" viewBox="-5.7 -7.9 11.4 15.8">
        <path d="m5.7-3.3-1.3-.4-1.3-.2C1.8-3.9.9-3.5.2-2.7s-1 2-1 3.5v7.1h-4.9V-7.5h4.9V-5c.6-1 1.3-1.7 2.2-2.2.8-.5 1.8-.7 2.9-.7h.5l.8.1.1 4.5z" />
      </symbol>
      <symbol id="c" viewBox="-8.4 -8 16.8 16">
        <path d="M0-4.5a3 3 0 0 0-2.5 1.2c-.5.7-.8 1.8-.8 3.3s.3 2.6.8 3.4c.6.8 1.4 1.1 2.5 1.1s1.9-.4 2.4-1.2c.6-.7.9-1.8.9-3.3S3-2.6 2.5-3.4A3.1 3.1 0 0 0 0-4.5zM0-8c2.6 0 4.7.7 6.2 2.1S8.4-2.5 8.4 0s-.7 4.5-2.2 5.9S2.7 8 0 8c-2.6 0-4.7-.7-6.2-2.1S-8.4 2.5-8.4 0s.7-4.5 2.2-5.9S-2.6-8 0-8z" />
      </symbol>
      <symbol id="d" viewBox="-6.1 -9.8 12.2 19.6">
        <path d="M1.1-9.8v4.3h5V-2h-5v6.5c0 .7.1 1.2.4 1.4s.8.4 1.7.4h2.5v3.5H1.6c-1.9 0-3.3-.4-4.1-1.2s-1.2-2.2-1.2-4.1V-2h-2.4v-3.5h2.4v-4.3h4.8z" />
      </symbol>
      <symbol id="e" viewBox="-8.4 -10.1 16.8 20.3">
        <path d="M-8.4-10.1H.3c2.6 0 4.6.6 6 1.7 1.4 1.1 2.1 2.8 2.1 4.9S7.7.2 6.3 1.3C4.9 2.5 2.9 3 .3 3h-3.5v7.1h-5.2v-20.2zm5.3 3.7v5.7h2.9c1 0 1.8-.2 2.4-.8.5-.4.8-1.1.8-2s-.3-1.6-.8-2.1c-.6-.5-1.4-.8-2.4-.8h-2.9z" />
      </symbol>
      <symbol id="f" viewBox="-7.7 -7.9 15.4 15.8">
        <path d="M7.7-1.5v9.3H2.8V.7L2.7-2l-.3-1.1a2 2 0 0 0-.8-.8c-.3-.2-.7-.2-1.1-.2-1 0-1.8.4-2.4 1.2S-2.8-1-2.8.4v7.5h-4.9V-7.5h4.9v2.2c.7-.9 1.5-1.5 2.3-2 .8-.4 1.8-.6 2.8-.6 1.8 0 3.1.5 4 1.6a7.8 7.8 0 0 1 1.4 4.8z" />
      </symbol>
      <symbol id="g" viewBox="-6.8 -8 13.6 16">
        <path d="M6.8-7.2v4c-.7-.5-1.3-.8-2-1l-2.1-.3c-1.4 0-2.4.4-3.2 1.2S-1.7-1.4-1.7 0s.4 2.5 1.1 3.3c.8.8 1.8 1.2 3.2 1.2.8 0 1.5-.1 2.2-.3a7 7 0 0 0 1.9-1v4c-.7.3-1.5.5-2.3.6-.8.2-1.5.2-2.3.2-2.8 0-4.9-.7-6.5-2.1S-6.8 2.5-6.8 0s.8-4.5 2.3-5.9A9.7 9.7 0 0 1 2.1-8a9 9 0 0 1 2.3.2l2.4.6z" />
      </symbol>
      <symbol id="h" viewBox="-12.3 -7.9 24.6 15.8">
        <path d="M1.9-4.8a5.5 5.5 0 0 1 5-2.9c1.8 0 3.1.5 4 1.6s1.4 2.7 1.4 4.7v9.3H7.4v-9c0-1.1-.2-1.9-.5-2.3S6.1-4 5.4-4c-.9 0-1.6.3-2.2 1.1-.5.8-.7 1.9-.7 3.3v7.5h-4.9v-8c0-1.7-.1-2.8-.4-3.3s-.8-.7-1.6-.7c-.9 0-1.7.4-2.2 1.2S-7.4-1-7.4.4v7.5h-4.9V-7.4h4.9v2.2a5.6 5.6 0 0 1 4.7-2.7c1.1 0 2 .3 2.8.8.8.6 1.4 1.4 1.8 2.3z" />
      </symbol>
      <symbol id="i" viewBox="-8.7 -10.6 17.4 21.3">
        <path d="M-8.7-10.6h4.9L.3-.3l3.5-10.4h4.9L2.3 6.1C1.6 7.8.9 9 0 9.6c-.9.7-2 1-3.4 1h-2.8V7.5h1.5c.8 0 1.4-.1 1.8-.4.4-.3.7-.8.9-1.5l.1-.4-6.8-15.8z" />
      </symbol>
      <symbol id="j" viewBox="-8.2 -10.9 16.4 21.7">
        <path d="M-.1 7.3c1.1 0 1.9-.4 2.4-1.1.6-.8.8-1.9.8-3.2 0-1.5-.3-2.6-.8-3.3-.5-1-1.3-1.4-2.4-1.4S-2-1.3-2.5-.5c-.5.7-.8 1.9-.8 3.3s.3 2.6.8 3.3c.6.8 1.4 1.2 2.4 1.2zm-3.2-9.9c.7-.9 1.4-1.5 2.2-2A6.4 6.4 0 0 1 6.4-3C7.6-1.5 8.2.4 8.2 2.8s-.6 4.4-1.8 5.8-2.8 2.2-4.7 2.2c-1.1 0-2-.2-2.8-.6s-1.6-1.1-2.2-2v2.2h-4.9v-21.3h4.9v8.3z" />
      </symbol>
      <symbol id="k" viewBox="-8.1 -10.8 16.3 21.6">
        <path d="M3.3-2.6v-8.2h4.9v21.3H3.3V8.2c-.7.9-1.4 1.6-2.2 2s-1.8.6-2.8.6c-1.9 0-3.4-.8-4.6-2.2a9 9 0 0 1-1.8-5.8c0-2.4.5-4.3 1.8-5.8s2.8-2.2 4.6-2.2c1.1 0 2 .2 2.8.6s1.5 1.1 2.2 2zM.1 7.3a3 3 0 0 0 2.4-1.1c.5-.8.8-1.9.8-3.4S3 .2 2.5-.5C1.9-1.3 1.1-1.7.1-1.7s-1.8.4-2.4 1.2-.8 1.9-.8 3.3c0 1.5.3 2.6.8 3.3.5.8 1.3 1.2 2.4 1.2z" />
      </symbol>
      <symbol id="l" viewBox="-7.8 -8 15.5 16">
        <path d="M.4.8c-1 0-1.8.2-2.3.5s-.8.9-.8 1.5.2 1.1.6 1.5c.4.3 1 .5 1.7.5.9 0 1.7-.3 2.3-1s1-1.5 1-2.5V.8H.4zm7.4-1.9v8.7H2.9V5.4c-.6.9-1.4 1.6-2.2 2s-1.8.6-3 .6c-1.6 0-2.9-.4-3.9-1.3s-1.5-2.1-1.5-3.6c0-1.8.6-3.1 1.8-3.9s3.2-1.3 5.8-1.3h2.9v-.4c0-.8-.3-1.3-.9-1.7-.5-.4-1.5-.6-2.8-.6-1.1 0-2 .1-2.9.3-1 .2-1.8.5-2.5.9v-3.7l3.1-.6L0-8c2.8 0 4.8.5 6 1.6s1.8 2.9 1.8 5.3z" />
      </symbol>
      <symbol id="m" viewBox="-4.1 -13.6 8.2 27.3">
        <path d="M-.8-7.7h4.9v15c0 2.1-.5 3.6-1.5 4.7s-2.4 1.6-4.3 1.6h-2.4v-3.2h.9c.9 0 1.6-.2 1.9-.6.3-.4.5-1.2.5-2.5v-15zm0-5.9h4.9v4H-.8v-4z" />
      </symbol>
      <symbol id="n" viewBox="-7.7 -7.8 15.4 15.7">
        <path d="M-7.7 1.6v-9.3h4.9v7.1l.1 2.7.3 1.2.8.8c.3.2.7.2 1.1.2 1 0 1.8-.4 2.4-1.2s.9-1.9.9-3.3v-7.6h4.9V7.6H2.8V5.2c-.7.9-1.5 1.6-2.3 2s-1.7.6-2.7.6c-1.8 0-3.1-.5-4-1.6-1-1-1.5-2.5-1.5-4.6z" />
      </symbol>
      <symbol id="o" viewBox="-9.1 -10.2 18.3 20.4">
        <path d="M-9.1-10.2h5.9l7.4 14v-14h5v20.4H3.3l-7.4-14v14h-5v-20.4z" />
      </symbol>
      <symbol id="p" viewBox="-7.7 -10.6 15.4 21.3">
        <path d="M7.7 1.2v9.3H2.8V3.4L2.7.6a4 4 0 0 0-.3-1c-.2-.4-.5-.6-.8-.8S.9-1.4.5-1.4c-1 0-1.8.4-2.4 1.2s-.9 1.9-.9 3.3v7.5h-4.9v-21.3h4.9v8.2c.7-.9 1.5-1.5 2.3-2 .9-.4 1.8-.6 2.8-.6 1.8 0 3.1.5 4 1.6a7.1 7.1 0 0 1 1.4 4.7z" />
      </symbol>
      <symbol id="q" viewBox="-5.9 -10.7 11.8 21.4">
        <path d="M5.9-10.6v3.2H3.2c-.6 0-1.1.1-1.4.4-.3.2-.4.6-.4 1.3v1.1h4.2v3.5H1.4v11.8h-4.9V-1.2h-2.4v-3.5h2.4v-1.1c0-1.7.5-2.9 1.4-3.7.9-.8 2.4-1.2 4.3-1.2l3.7.1z" />
      </symbol>
      <symbol id="r" viewBox="-6.9 -8 13.9 16">
        <path d="M6-7.2v3.7A14 14 0 0 0 .2-4.8c-.9 0-1.6.1-2.1.3-.4.2-.7.6-.7 1.1 0 .4.2.7.5.9s1 .4 1.8.5l.9.1c2.6.4 4.3.9 5.1 1.6C6.6.4 7 1.6 7 3.1 7 4.7 6.4 6 5.2 6.8S2.2 8-.1 8l-3.2-.2-3.3-.7V3.4c1 .5 2 .8 3 1.1 1 .2 2.1.3 3.1.3s1.7-.1 2.2-.4c.4-.3.7-.7.7-1.2 0-.4-.2-.8-.5-1s-1-.4-2-.5l-.9-.1C-3.2 1.3-4.7.8-5.6.1s-1.3-1.9-1.3-3.4c0-1.6.6-2.8 1.7-3.6A9.7 9.7 0 0 1-.1-8a22 22 0 0 1 6.1.8z" />
      </symbol>
      <symbol id="s" viewBox="-2.6 -10.2 5.2 20.4">
        <path d="M-2.6-10.2h5.2v20.4h-5.2v-20.4z" />
      </symbol>
      <symbol id="t" viewBox="-2.5 -10.6 4.9 21.2">
        <path d="M-2.5-4.7h4.9v15.3h-4.9V-4.7zm0-5.9h4.9v4h-4.9v-4z" />
      </symbol>
      <symbol id="u" viewBox="-8.7 -10.6 17.4 21.1">
        <path d="M8.7 9.1c-1 .5-2 .9-3 1.1-1 .3-2.1.4-3.3.4-3.4 0-6.1-.9-8.1-2.8s-3-4.5-3-7.7c0-3.3 1-5.8 3-7.7s4.7-2.9 8.1-2.9c1.1 0 2.2.1 3.3.4 1.1.2 2.1.6 3 1.1v4.2c-1-.7-2-1.2-2.9-1.5s-1.9-.5-3-.5C.9-6.8-.6-6.2-1.6-5c-1.1 1.2-1.6 2.9-1.6 5s.5 3.8 1.6 5S.9 6.8 2.8 6.8c1.1 0 2.1-.1 3-.5.9-.3 1.9-.8 2.9-1.4v4.2z" />
      </symbol>
      <path d="M66 116.6V46c0-13.5 11-24.5 24.5-24.5h17.1a5 5 0 0 0 0-9.8H90.5A34.4 34.4 0 0 0 56.2 46v70.6c0 16.9-5 33.2-14.3 47.3l-14.3 21.4a4.8 4.8 0 0 0 .1 5.5L41 210.1a85.7 85.7 0 0 1 15.3 48.7v71.4a34.4 34.4 0 0 0 34.3 34.3h17.2a5 5 0 0 0 0-9.8H90.5c-13.5 0-24.5-11-24.5-24.5v-71.4c0-19.5-5.9-38.3-17-54.2L37.6 188l12.5-18.7A94.6 94.6 0 0 0 66 116.6zM363.6 185.4 349.3 164a85 85 0 0 1-14.4-47.3V46.1a34.4 34.4 0 0 0-34.3-34.3h-17.1a5 5 0 0 0 0 9.8h17.1c13.5 0 24.5 11 24.5 24.5v70.6c0 18.8 5.5 37.1 16 52.8l12.5 18.7-11.4 16.5a94.8 94.8 0 0 0-17 54.2v71.4c0 13.5-11 24.5-24.5 24.5h-17.1a5 5 0 0 0 0 9.8h17.1a34.4 34.4 0 0 0 34.3-34.3v-71.4c0-17.5 5.2-34.3 15.3-48.7l13.3-19.2a5.2 5.2 0 0 0 0-5.6z" />
      <defs>
        <path id="SVGID_1_" d="M.6 428.4h12.2v14.8H.6z" />
      </defs>
      <clipPath id="SVGID_2_">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="17.4"
          height="21.1"
          x="-8.7"
          y="-10.6"
          transform="matrix(.7 0 0 .7 6.7 435.8)"
          overflow="visible"
        />
      </g>
      <defs>
        <path id="SVGID_3_" d="M15.6 432h8v11h-8z" />
      </defs>
      <clipPath id="SVGID_4_">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="11.4"
          height="15.8"
          x="-5.7"
          y="-7.9"
          transform="matrix(.7 0 0 .7 19.6 437.4)"
          overflow="visible"
        />
      </g>
      <defs>
        <path id="SVGID_5_" d="M24.5 432H36v11.3H24.5z" />
      </defs>
      <clipPath id="SVGID_6_">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="16.4"
          height="16"
          x="-8.2"
          y="-8"
          transform="matrix(.7 0 0 .7 30.2 437.6)"
          overflow="visible"
        />
      </g>
      <defs>
        <path id="SVGID_7_" d="M37.8 432h10.9v11.3H37.8z" />
      </defs>
      <clipPath id="SVGID_8_">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="15.5"
          height="16"
          x="-7.8"
          y="-8"
          transform="matrix(.7 0 0 .7 43.2 437.6)"
          overflow="visible"
        />
      </g>
      <defs>
        <path id="SVGID_9_" d="M50.4 429.2h8.7V443h-8.7z" />
      </defs>
      <clipPath id="SVGID_10_">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="12.2"
          height="19.6"
          x="-6.1"
          y="-9.8"
          transform="matrix(.7 0 0 .7 54.8 436)"
          overflow="visible"
        />
      </g>
      <defs>
        <path id="SVGID_11_" d="M59.5 442.9h490v490h-490z" />
      </defs>
      <clipPath id="SVGID_12_">
        <use overflow="visible" />
      </clipPath>
      <g>
        <defs>
          <path id="SVGID_13_" d="M60.4 432h11.5v11.3H60.4z" />
        </defs>
        <clipPath id="SVGID_14_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="16.4"
            height="16"
            x="-8.2"
            y="-8"
            transform="matrix(.7 0 0 .7 66.1 437.6)"
            overflow="visible"
          />
        </g>
      </g>
      <defs>
        <path id="SVGID_15_" d="M73.7 428h11.5v15.2H73.7z" />
      </defs>
      <clipPath id="SVGID_16_">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="16.3"
          height="21.6"
          x="-8.1"
          y="-10.8"
          transform="matrix(.7 0 0 .7 79.5 435.6)"
          overflow="visible"
        />
      </g>
      <defs>
        <path id="SVGID_17_" d="M95.3 428h11.5v15.2H95.3z" />
      </defs>
      <clipPath id="SVGID_18_">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="16.4"
          height="21.7"
          x="-8.2"
          y="-10.9"
          transform="matrix(.7 0 0 .7 101 435.6)"
          overflow="visible"
        />
      </g>
      <defs>
        <path id="SVGID_19_" d="M108 432.2h12.2v15H108z" />
      </defs>
      <clipPath id="SVGID_20_">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="17.4"
          height="21.3"
          x="-8.7"
          y="-10.6"
          transform="matrix(.7 0 0 .7 114 439.6)"
          overflow="visible"
        />
      </g>
      <defs>
        <path id="SVGID_21_" d="M129.1 428.6h11.8v14.3h-11.8z" />
      </defs>
      <clipPath id="SVGID_22_">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="16.8"
          height="20.3"
          x="-8.4"
          y="-10.1"
          transform="matrix(.7 0 0 .7 135 435.7)"
          overflow="visible"
        />
      </g>
      <defs>
        <path id="SVGID_23_" d="M141.7 442.9h490v490h-490z" />
      </defs>
      <clipPath id="SVGID_24_">
        <use overflow="visible" />
      </clipPath>
      <g>
        <defs>
          <path id="SVGID_25_" d="M143.3 432h8v11h-8z" />
        </defs>
        <clipPath id="SVGID_26_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="11.4"
            height="15.8"
            x="-5.7"
            y="-7.9"
            transform="matrix(.7 0 0 .7 147.3 437.4)"
            overflow="visible"
          />
        </g>
      </g>
      <defs>
        <path id="SVGID_27_" d="M153 428h3.4v14.9H153z" />
      </defs>
      <clipPath id="SVGID_28_">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="4.9"
          height="21.2"
          x="-2.5"
          y="-10.6"
          transform="matrix(.7 0 0 .7 154.7 435.5)"
          overflow="visible"
        />
      </g>
      <defs>
        <path id="SVGID_29_" d="M159.7 432h17.2v11h-17.2z" />
      </defs>
      <clipPath id="SVGID_30_">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="24.6"
          height="15.8"
          x="-12.3"
          y="-7.9"
          transform="matrix(.7 0 0 .7 168.3 437.4)"
          overflow="visible"
        />
      </g>
      <g>
        <defs>
          <path id="SVGID_31_" d="M178.5 442.9h490v490h-490z" />
        </defs>
        <clipPath id="SVGID_32_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <defs>
            <path id="SVGID_33_" d="M179.3 432h11.5v11.3h-11.5z" />
          </defs>
          <clipPath id="SVGID_34_">
            <use overflow="visible" />
          </clipPath>
          <g>
            <use
              width="16.4"
              height="16"
              x="-8.2"
              y="-8"
              transform="matrix(.7 0 0 .7 185 437.6)"
              overflow="visible"
            />
          </g>
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_35_" d="M200.4 428.6h3.6v14.3h-3.6z" />
        </defs>
        <clipPath id="SVGID_36_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="5.2"
            height="20.4"
            x="-2.6"
            y="-10.2"
            transform="matrix(.7 0 0 .7 202.2 435.8)"
            overflow="visible"
          />
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_37_" d="M206.7 432h9.4v11.3h-9.4z" />
        </defs>
        <clipPath id="SVGID_38_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="13.6"
            height="16"
            x="-6.8"
            y="-8"
            transform="matrix(.7 0 0 .7 211.5 437.6)"
            overflow="visible"
          />
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_39_" d="M218.4 432h11.8v11.3h-11.8z" />
        </defs>
        <clipPath id="SVGID_40_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="16.8"
            height="16"
            x="-8.4"
            y="-8"
            transform="matrix(.7 0 0 .7 224.2 437.6)"
            overflow="visible"
          />
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_41_" d="M232.6 432h10.8v11h-10.8z" />
        </defs>
        <clipPath id="SVGID_42_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="15.4"
            height="15.8"
            x="-7.7"
            y="-7.9"
            transform="matrix(.7 0 0 .7 238 437.4)"
            overflow="visible"
          />
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_43_" d="M246 432h9.7v11.3H246z" />
        </defs>
        <clipPath id="SVGID_44_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="13.9"
            height="16"
            x="-6.9"
            y="-8"
            transform="matrix(.7 0 0 .7 250.8 437.6)"
            overflow="visible"
          />
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_45_" d="M0 447.6h8.3v14.9H0z" />
        </defs>
        <clipPath id="SVGID_46_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="11.8"
            height="21.4"
            x="-5.9"
            y="-10.7"
            transform="matrix(.7 0 0 .7 4.1 455)"
            overflow="visible"
          />
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_47_" d="M8.1 462.5h490v490H8.1z" />
        </defs>
        <clipPath id="SVGID_48_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <defs>
            <path id="SVGID_49_" d="M9.8 451.6h8v11h-8z" />
          </defs>
          <clipPath id="SVGID_50_">
            <use overflow="visible" />
          </clipPath>
          <g>
            <use
              width="11.4"
              height="15.8"
              x="-5.7"
              y="-7.9"
              transform="matrix(.7 0 0 .7 13.8 457)"
              overflow="visible"
            />
          </g>
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_51_" d="M17.8 462.5h490v490h-490z" />
        </defs>
        <clipPath id="SVGID_52_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <defs>
            <path id="SVGID_53_" d="M18.6 451.6h11.8v11.3H18.6z" />
          </defs>
          <clipPath id="SVGID_54_">
            <use overflow="visible" />
          </clipPath>
          <g>
            <use
              width="16.8"
              height="16"
              x="-8.4"
              y="-8"
              transform="matrix(.7 0 0 .7 24.5 457.2)"
              overflow="visible"
            />
          </g>
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_55_" d="M31.2 462.5h490v490h-490z" />
        </defs>
        <clipPath id="SVGID_56_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <defs>
            <path id="SVGID_57_" d="M32.9 451.6h17.2v11H32.9z" />
          </defs>
          <clipPath id="SVGID_58_">
            <use overflow="visible" />
          </clipPath>
          <g>
            <use
              width="24.6"
              height="15.8"
              x="-12.3"
              y="-7.9"
              transform="matrix(.7 0 0 .7 41.5 457)"
              overflow="visible"
            />
          </g>
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_59_" d="M58.5 462.5h490v490h-490z" />
        </defs>
        <clipPath id="SVGID_60_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <defs>
            <path id="SVGID_61_" d="M58.8 448.8h8.7v13.8h-8.7z" />
          </defs>
          <clipPath id="SVGID_62_">
            <use overflow="visible" />
          </clipPath>
          <g>
            <use
              width="12.2"
              height="19.6"
              x="-6.1"
              y="-9.8"
              transform="matrix(.7 0 0 .7 63.1 455.6)"
              overflow="visible"
            />
          </g>
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_63_" d="M69.5 447.6h10.8v14.9H69.5z" />
        </defs>
        <clipPath id="SVGID_64_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="15.4"
            height="21.3"
            x="-7.7"
            y="-10.6"
            transform="matrix(.7 0 0 .7 75 455.1)"
            overflow="visible"
          />
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_65_" d="M81.8 462.5h490v490h-490z" />
        </defs>
        <clipPath id="SVGID_66_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <defs>
            <path id="SVGID_67_" d="M82.7 451.6h11.5v11.3H82.7z" />
          </defs>
          <clipPath id="SVGID_68_">
            <use overflow="visible" />
          </clipPath>
          <g>
            <use
              width="16.4"
              height="16"
              x="-8.2"
              y="-8"
              transform="matrix(.7 0 0 .7 88.4 457.2)"
              overflow="visible"
            />
          </g>
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_69_" d="M103.8 448.2h12.8v14.3h-12.8z" />
        </defs>
        <clipPath id="SVGID_70_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="18.3"
            height="20.4"
            x="-9.1"
            y="-10.2"
            transform="matrix(.7 0 0 .7 110.2 455.4)"
            overflow="visible"
          />
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_71_" d="M118.3 462.5h490v490h-490z" />
        </defs>
        <clipPath id="SVGID_72_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <defs>
            <path id="SVGID_73_" d="M119.2 451.6H131v11.3h-11.8z" />
          </defs>
          <clipPath id="SVGID_74_">
            <use overflow="visible" />
          </clipPath>
          <g>
            <use
              width="16.8"
              height="16"
              x="-8.4"
              y="-8"
              transform="matrix(.7 0 0 .7 125 457.2)"
              overflow="visible"
            />
          </g>
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_75_" d="M133.3 451.8h10.8v11h-10.8z" />
        </defs>
        <clipPath id="SVGID_76_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="15.4"
            height="15.7"
            x="-7.7"
            y="-7.8"
            transform="matrix(.7 0 0 .7 138.7 457.3)"
            overflow="visible"
          />
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_77_" d="M145.8 462.5h490v490h-490z" />
        </defs>
        <clipPath id="SVGID_78_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <defs>
            <path id="SVGID_79_" d="M147.4 451.6h10.8v11h-10.8z" />
          </defs>
          <clipPath id="SVGID_80_">
            <use overflow="visible" />
          </clipPath>
          <g>
            <use
              width="15.4"
              height="15.8"
              x="-7.7"
              y="-7.9"
              transform="matrix(.7 0 0 .7 152.8 457)"
              overflow="visible"
            />
          </g>
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_81_" d="M166.5 462.5h490v490h-490z" />
        </defs>
        <clipPath id="SVGID_82_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <defs>
            <path id="SVGID_83_" d="M168.3 448.2h11.8v14.3h-11.8z" />
          </defs>
          <clipPath id="SVGID_84_">
            <use overflow="visible" />
          </clipPath>
          <g>
            <use
              width="16.8"
              height="20.3"
              x="-8.4"
              y="-10.1"
              transform="matrix(.7 0 0 .7 174.2 455.3)"
              overflow="visible"
            />
          </g>
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_85_" d="M180.9 462.5h490v490h-490z" />
        </defs>
        <clipPath id="SVGID_86_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <defs>
            <path id="SVGID_87_" d="M182.5 451.6h8v11h-8z" />
          </defs>
          <clipPath id="SVGID_88_">
            <use overflow="visible" />
          </clipPath>
          <g>
            <use
              width="11.4"
              height="15.8"
              x="-5.7"
              y="-7.9"
              transform="matrix(.7 0 0 .7 186.5 457)"
              overflow="visible"
            />
          </g>
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_89_" d="M190.6 462.5h490v490h-490z" />
        </defs>
        <clipPath id="SVGID_90_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <defs>
            <path id="SVGID_91_" d="M191.4 451.6h11.8v11.3h-11.8z" />
          </defs>
          <clipPath id="SVGID_92_">
            <use overflow="visible" />
          </clipPath>
          <g>
            <use
              width="16.8"
              height="16"
              x="-8.4"
              y="-8"
              transform="matrix(.7 0 0 .7 197.3 457.2)"
              overflow="visible"
            />
          </g>
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_93_" d="M203.4 447.6h5.7v19.1h-5.7z" />
        </defs>
        <clipPath id="SVGID_94_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="8.2"
            height="27.3"
            x="-4.1"
            y="-13.6"
            transform="matrix(.7 0 0 .7 206.2 457.2)"
            overflow="visible"
          />
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_95_" d="M210.8 462.5h490v490h-490z" />
        </defs>
        <clipPath id="SVGID_96_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <defs>
            <path id="SVGID_97_" d="M211.6 451.6h11.5v11.3h-11.5z" />
          </defs>
          <clipPath id="SVGID_98_">
            <use overflow="visible" />
          </clipPath>
          <g>
            <use
              width="16.4"
              height="16"
              x="-8.2"
              y="-8"
              transform="matrix(.7 0 0 .7 217.4 457.2)"
              overflow="visible"
            />
          </g>
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_99_" d="M224.1 462.5h490v490h-490z" />
        </defs>
        <clipPath id="SVGID_100_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <defs>
            <path id="SVGID_101_" d="M224.9 451.6h9.4v11.3h-9.4z" />
          </defs>
          <clipPath id="SVGID_102_">
            <use overflow="visible" />
          </clipPath>
          <g>
            <use
              width="13.6"
              height="16"
              x="-6.8"
              y="-8"
              transform="matrix(.7 0 0 .7 229.6 457.2)"
              overflow="visible"
            />
          </g>
        </g>
      </g>
      <g>
        <defs>
          <path id="SVGID_103_" d="M235.6 462.5h490v490h-490z" />
        </defs>
        <clipPath id="SVGID_104_">
          <use overflow="visible" />
        </clipPath>
        <g>
          <defs>
            <path id="SVGID_105_" d="M235.9 448.8h8.7v13.8h-8.7z" />
          </defs>
          <clipPath id="SVGID_106_">
            <use overflow="visible" />
          </clipPath>
          <g>
            <use
              width="12.2"
              height="19.6"
              x="-6.1"
              y="-9.8"
              transform="matrix(.7 0 0 .7 240.3 455.6)"
              overflow="visible"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

function MobileAppDevIcon() {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 394 554.9"
    >
      <path d="M58.5 336a5.6 5.6 0 0 0-5.6 5.6v123.2a67.2 67.2 0 0 0 67.2 67.2h161.8a67.2 67.2 0 0 0 67.2-67.2V341.6a5.6 5.6 0 1 0-11.2 0V412H64.1v-70.4a6 6 0 0 0-1.6-4 6 6 0 0 0-4-1.6zm279.4 87.2v41.6a56 56 0 0 1-56 56H120.1a56 56 0 0 1-56-56v-41.6h273.8zM343.5 173.6a6 6 0 0 0 4-1.6 5.5 5.5 0 0 0 1.6-4V89.6A61.4 61.4 0 0 0 287.5 28h-173a61.4 61.4 0 0 0-61.6 61.6V168a5.6 5.6 0 1 0 11.2 0v-57.5h273.8V168a6 6 0 0 0 1.6 4 6 6 0 0 0 4 1.6zM64.1 99.3v-9.7a50.6 50.6 0 0 1 50.4-50.4h173a50.3 50.3 0 0 1 50.4 50.4v9.7H64.1z" />
      <path d="M164.9 477.9h72.2a5.6 5.6 0 1 0 0-11.2h-72.2a5.6 5.6 0 1 0 0 11.2zM382 253.6l-93-93a5.6 5.6 0 0 0-7.6.3 5.6 5.6 0 0 0-.3 7.6l89 89.1-89.1 89.1a5.7 5.7 0 0 0-2 4c-.1 1.6.5 3.1 1.6 4.2a5.6 5.6 0 0 0 8.2-.4l93.1-93a5.6 5.6 0 0 0 1.7-4c0-1.4-.6-2.8-1.6-3.9zM20 261.6l93 93a5.6 5.6 0 0 0 7.6-.3 5.6 5.6 0 0 0 .3-7.6l-89-89.1 89.1-89.1a5.6 5.6 0 0 0-.3-7.6 5.6 5.6 0 0 0-7.6-.3l-93.1 93a5.6 5.6 0 0 0-1.7 4c.1 1.5.7 2.9 1.7 4z" />
      <use
        width="17.4"
        height="21.2"
        x="-8.7"
        y="-10.6"
        transform="translate(-69 633.8)"
        overflow="visible"
      />
      <use
        width="11.4"
        height="15.7"
        x="-5.7"
        y="-7.8"
        transform="translate(-50.4 636.2)"
        overflow="visible"
      />
      <use
        width="16.4"
        height="16.1"
        x="-8.2"
        y="-8"
        transform="translate(-35.2 636.4)"
        overflow="visible"
      />
      <use
        width="15.5"
        height="16.1"
        x="-7.7"
        y="-8"
        transform="translate(-16.7 636.4)"
        overflow="visible"
      />
      <use
        width="12.4"
        height="19.7"
        x="-6.2"
        y="-9.8"
        transform="translate(-.2 634.2)"
        overflow="visible"
      />
      <clipPath id="a">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="16.4"
          height="16.1"
          x="-8.2"
          y="-8"
          transform="translate(16 636.4)"
          overflow="visible"
        />
      </g>
      <use
        width="16.4"
        height="21.7"
        x="-8.2"
        y="-10.8"
        transform="translate(35 633.6)"
        overflow="visible"
      />
      <use
        width="16.4"
        height="21.7"
        x="-8.2"
        y="-10.8"
        transform="translate(66 633.6)"
        overflow="visible"
      />
      <use
        width="17.4"
        height="21.4"
        x="-8.7"
        y="-10.7"
        transform="translate(84.5 639.4)"
        overflow="visible"
      />
      <use
        width="21.4"
        height="20.4"
        x="-10.7"
        y="-10.2"
        transform="translate(114.3 633.8)"
        overflow="visible"
      />
      <use
        width="15.4"
        height="15.7"
        x="-7.7"
        y="-7.8"
        transform="translate(135.2 636.2)"
        overflow="visible"
      />
      <use
        width="4.9"
        height="21.3"
        x="-2.4"
        y="-10.6"
        transform="translate(149.9 633.4)"
        overflow="visible"
      />
      <use
        width="4.9"
        height="21.3"
        x="-2.4"
        y="-10.6"
        transform="translate(159.5 633.4)"
        overflow="visible"
      />
      <use
        width="11.9"
        height="21.3"
        x="-5.9"
        y="-10.6"
        transform="translate(-72.5 661.4)"
        overflow="visible"
      />
      <clipPath id="b">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="11.4"
          height="15.7"
          x="-5.7"
          y="-7.8"
          transform="translate(-58.8 664.2)"
          overflow="visible"
        />
      </g>
      <use
        width="16.8"
        height="16.1"
        x="-8.4"
        y="-8"
        transform="translate(-43.4 664.4)"
        overflow="visible"
      />
      <use
        width="24.6"
        height="15.7"
        x="-12.3"
        y="-7.8"
        transform="translate(-19.1 664.2)"
        overflow="visible"
      />
      <clipPath id="c">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="12.4"
          height="19.7"
          x="-6.2"
          y="-9.8"
          transform="translate(11.7 662.2)"
          overflow="visible"
        />
      </g>
      <use
        width="15.4"
        height="21.3"
        x="-7.7"
        y="-10.6"
        transform="translate(28.6 661.4)"
        overflow="visible"
      />
      <clipPath id="d">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="16.4"
          height="16.1"
          x="-8.2"
          y="-8"
          transform="translate(47.9 664.4)"
          overflow="visible"
        />
      </g>
      <use
        width="18.3"
        height="20.4"
        x="-9.1"
        y="-10.2"
        transform="translate(79 661.8)"
        overflow="visible"
      />
      <clipPath id="e">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="16.8"
          height="16.1"
          x="-8.4"
          y="-8"
          transform="translate(100.3 664.4)"
          overflow="visible"
        />
      </g>
      <use
        width="15.4"
        height="15.7"
        x="-7.7"
        y="-7.9"
        transform="translate(119.8 664.5)"
        overflow="visible"
      />
      <clipPath id="f">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="15.4"
          height="15.7"
          x="-7.7"
          y="-7.8"
          transform="translate(139.9 664.2)"
          overflow="visible"
        />
      </g>
      <use
        width="16.8"
        height="20.4"
        x="-8.4"
        y="-10.2"
        transform="translate(170.5 661.8)"
        overflow="visible"
      />
      <g>
        <clipPath id="g">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="11.4"
            height="15.7"
            x="-5.7"
            y="-7.8"
            transform="translate(188 664.2)"
            overflow="visible"
          />
        </g>
      </g>
      <g>
        <clipPath id="h">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="16.8"
            height="16.1"
            x="-8.4"
            y="-8"
            transform="translate(203.4 664.4)"
            overflow="visible"
          />
        </g>
      </g>
      <use
        width="8.2"
        height="27.3"
        x="-4.1"
        y="-13.7"
        transform="translate(216.2 664.4)"
        overflow="visible"
      />
      <g>
        <clipPath id="i">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="16.4"
            height="16.1"
            x="-8.2"
            y="-8"
            transform="translate(232 664.4)"
            overflow="visible"
          />
        </g>
      </g>
      <use
        width="13.5"
        height="16.1"
        x="-6.8"
        y="-8"
        transform="translate(249.6 664.4)"
        overflow="visible"
      />
      <g>
        <clipPath id="j">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="12.4"
            height="19.7"
            x="-6.2"
            y="-9.8"
            transform="translate(264.8 662.2)"
            overflow="visible"
          />
        </g>
      </g>
    </svg>
  );
}

function BackEndDevIcon() {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 394 554.9"
    >
      <path d="M58.5 336a5.6 5.6 0 0 0-5.6 5.6v123.2a67.2 67.2 0 0 0 67.2 67.2h161.8a67.2 67.2 0 0 0 67.2-67.2V341.6a5.6 5.6 0 1 0-11.2 0V412H64.1v-70.4a6 6 0 0 0-1.6-4 6 6 0 0 0-4-1.6zm279.4 87.2v41.6a56 56 0 0 1-56 56H120.1a56 56 0 0 1-56-56v-41.6h273.8zM343.5 173.6a6 6 0 0 0 4-1.6 5.5 5.5 0 0 0 1.6-4V89.6A61.4 61.4 0 0 0 287.5 28h-173a61.4 61.4 0 0 0-61.6 61.6V168a5.6 5.6 0 1 0 11.2 0v-57.5h273.8V168a6 6 0 0 0 1.6 4 6 6 0 0 0 4 1.6zM64.1 99.3v-9.7a50.6 50.6 0 0 1 50.4-50.4h173a50.3 50.3 0 0 1 50.4 50.4v9.7H64.1z" />
      <path d="M164.9 477.9h72.2a5.6 5.6 0 1 0 0-11.2h-72.2a5.6 5.6 0 1 0 0 11.2zM382 253.6l-93-93a5.6 5.6 0 0 0-7.6.3 5.6 5.6 0 0 0-.3 7.6l89 89.1-89.1 89.1a5.7 5.7 0 0 0-2 4c-.1 1.6.5 3.1 1.6 4.2a5.6 5.6 0 0 0 8.2-.4l93.1-93a5.6 5.6 0 0 0 1.7-4c0-1.4-.6-2.8-1.6-3.9zM20 261.6l93 93a5.6 5.6 0 0 0 7.6-.3 5.6 5.6 0 0 0 .3-7.6l-89-89.1 89.1-89.1a5.6 5.6 0 0 0-.3-7.6 5.6 5.6 0 0 0-7.6-.3l-93.1 93a5.6 5.6 0 0 0-1.7 4c.1 1.5.7 2.9 1.7 4z" />
      <use
        width="17.4"
        height="21.2"
        x="-8.7"
        y="-10.6"
        transform="translate(-69 633.8)"
        overflow="visible"
      />
      <use
        width="11.4"
        height="15.7"
        x="-5.7"
        y="-7.8"
        transform="translate(-50.4 636.2)"
        overflow="visible"
      />
      <use
        width="16.4"
        height="16.1"
        x="-8.2"
        y="-8"
        transform="translate(-35.2 636.4)"
        overflow="visible"
      />
      <use
        width="15.5"
        height="16.1"
        x="-7.7"
        y="-8"
        transform="translate(-16.7 636.4)"
        overflow="visible"
      />
      <use
        width="12.4"
        height="19.7"
        x="-6.2"
        y="-9.8"
        transform="translate(-.2 634.2)"
        overflow="visible"
      />
      <clipPath id="a">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="16.4"
          height="16.1"
          x="-8.2"
          y="-8"
          transform="translate(16 636.4)"
          overflow="visible"
        />
      </g>
      <use
        width="16.4"
        height="21.7"
        x="-8.2"
        y="-10.8"
        transform="translate(35 633.6)"
        overflow="visible"
      />
      <use
        width="16.4"
        height="21.7"
        x="-8.2"
        y="-10.8"
        transform="translate(66 633.6)"
        overflow="visible"
      />
      <use
        width="17.4"
        height="21.4"
        x="-8.7"
        y="-10.7"
        transform="translate(84.5 639.4)"
        overflow="visible"
      />
      <use
        width="21.4"
        height="20.4"
        x="-10.7"
        y="-10.2"
        transform="translate(114.3 633.8)"
        overflow="visible"
      />
      <use
        width="15.4"
        height="15.7"
        x="-7.7"
        y="-7.8"
        transform="translate(135.2 636.2)"
        overflow="visible"
      />
      <use
        width="4.9"
        height="21.3"
        x="-2.4"
        y="-10.6"
        transform="translate(149.9 633.4)"
        overflow="visible"
      />
      <use
        width="4.9"
        height="21.3"
        x="-2.4"
        y="-10.6"
        transform="translate(159.5 633.4)"
        overflow="visible"
      />
      <use
        width="11.9"
        height="21.3"
        x="-5.9"
        y="-10.6"
        transform="translate(-72.5 661.4)"
        overflow="visible"
      />
      <clipPath id="b">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="11.4"
          height="15.7"
          x="-5.7"
          y="-7.8"
          transform="translate(-58.8 664.2)"
          overflow="visible"
        />
      </g>
      <use
        width="16.8"
        height="16.1"
        x="-8.4"
        y="-8"
        transform="translate(-43.4 664.4)"
        overflow="visible"
      />
      <use
        width="24.6"
        height="15.7"
        x="-12.3"
        y="-7.8"
        transform="translate(-19.1 664.2)"
        overflow="visible"
      />
      <clipPath id="c">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="12.4"
          height="19.7"
          x="-6.2"
          y="-9.8"
          transform="translate(11.7 662.2)"
          overflow="visible"
        />
      </g>
      <use
        width="15.4"
        height="21.3"
        x="-7.7"
        y="-10.6"
        transform="translate(28.6 661.4)"
        overflow="visible"
      />
      <clipPath id="d">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="16.4"
          height="16.1"
          x="-8.2"
          y="-8"
          transform="translate(47.9 664.4)"
          overflow="visible"
        />
      </g>
      <use
        width="18.3"
        height="20.4"
        x="-9.1"
        y="-10.2"
        transform="translate(79 661.8)"
        overflow="visible"
      />
      <clipPath id="e">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="16.8"
          height="16.1"
          x="-8.4"
          y="-8"
          transform="translate(100.3 664.4)"
          overflow="visible"
        />
      </g>
      <use
        width="15.4"
        height="15.7"
        x="-7.7"
        y="-7.9"
        transform="translate(119.8 664.5)"
        overflow="visible"
      />
      <clipPath id="f">
        <use overflow="visible" />
      </clipPath>
      <g>
        <use
          width="15.4"
          height="15.7"
          x="-7.7"
          y="-7.8"
          transform="translate(139.9 664.2)"
          overflow="visible"
        />
      </g>
      <use
        width="16.8"
        height="20.4"
        x="-8.4"
        y="-10.2"
        transform="translate(170.5 661.8)"
        overflow="visible"
      />
      <g>
        <clipPath id="g">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="11.4"
            height="15.7"
            x="-5.7"
            y="-7.8"
            transform="translate(188 664.2)"
            overflow="visible"
          />
        </g>
      </g>
      <g>
        <clipPath id="h">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="16.8"
            height="16.1"
            x="-8.4"
            y="-8"
            transform="translate(203.4 664.4)"
            overflow="visible"
          />
        </g>
      </g>
      <use
        width="8.2"
        height="27.3"
        x="-4.1"
        y="-13.7"
        transform="translate(216.2 664.4)"
        overflow="visible"
      />
      <g>
        <clipPath id="i">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="16.4"
            height="16.1"
            x="-8.2"
            y="-8"
            transform="translate(232 664.4)"
            overflow="visible"
          />
        </g>
      </g>
      <use
        width="13.5"
        height="16.1"
        x="-6.8"
        y="-8"
        transform="translate(249.6 664.4)"
        overflow="visible"
      />
      <g>
        <clipPath id="j">
          <use overflow="visible" />
        </clipPath>
        <g>
          <use
            width="12.4"
            height="19.7"
            x="-6.2"
            y="-9.8"
            transform="translate(264.8 662.2)"
            overflow="visible"
          />
        </g>
      </g>
    </svg>
  );
}
export default Services;
