// import LeadProjectCard from "../components/LeadProject";

import projectStyles from "../assets/styles/Projects.module.css";
import LeadProjectCard from "../components/LeadProject";
import SideProject from "../components/SideProject";

function Projects() {
  const projectInfo = [
    {
      id: 1,
      title: "Airbnb Clone",
      description_short:
        "A clone Airbnb website that can be used to view and book rooms/stays in different locations",
      header_image_path: `/img/projects/Airbnb-Clone.png`,
      github_link: "https://github.com/Mihret-Getachew/airbnb-clone",
    },
    {
      id: 2,
      title: "Amazon Clone",
      description_short:
        "A clone E-Commerce website that allows purchase of different items",
      header_image_path: `/img/projects/Amazon-Clone.png`,
      github_link: "https://github.com/Mihret-Getachew/amazon-clone",
      // external_link: "https://amazon-clone-two-gold.vercel.app/",
    },
    {
      id: 3,
      title: "Ethiopian Fantasy Premier League - Admin",
      description_short:
        "A point based competitive platform that rewards users based on real world player performance of selected players. Web application allows admins to maintain teams in league, players, fixtures , fixtures scheduling and lineups.",
      header_image_path: `/img/projects/EFPL.png`,
      // github_link: "https://github.com/thomasalemayehu/EFPL",
      // external_link: "https://efpl-app.web.app",
    },
    {
      id: 4,
      title: "Ethiopian Fantasy Premier League - User",
      description_short:
        "A point based competitive platform that rewards users based on real world player performance of selected players. Mobile application allows users to select teams, view player information, view fixtures , view points gained ..",
      header_image_path: `/img/projects/EFPL-User.jpg`,
      // github_link: "https://github.com/thomasalemayehu/EFPL",
    },
    {
      id: 5,
      title: "Addis Complaints",
      description_short:
        "A web based complaint system made free from common web vulnerabilities such as XSS, SQLi, CSRF and automation etc.",
      header_image_path: `/img/projects/Addis-Complaints.png`,
      // github_link: "https://github.com/thomasalemayehu/Addis-Complaints",
    },
    {
      id: 6,
      title: "MicroBanka",
      description_short:
        "An online banking application built with an Express.js and MongoDB backend and an HTML,CSS,AJAX and JavaScript frontend that allows users to transfer,deposit and withdraw money.",
      header_image_path: `/img/projects/MicroBanka.jpg`,
      // github_link: "https://github.com/thomasalemayehu/WAP-Project",
    },
  ];

  const mentions = [
    {
      id: 2,
      title: "Advent of JavaScript (2022)",
      description_short:
        "A collection of UI Elements and pages based one the famous Advent of JavaScript challenge. (From https://www.adventofjs.com/signup)",
      github_link: "https://github.com/Mihret-Getachew/advent-of-react",
    },

    {
      id: 7,
      title: "Restaurant Website",
      description_short:
        "An html,css and js based restaurant website that is fully responsive.",
      github_link: "https://github.com/Mihret-Getachew/restuarant-website-two",
    },

    {
      id: 8,
      title: "Course Management API",
      description_short:
        "This RESTful API uses Express.js for server operations and MongoDB to store data, focusing on managing educational content.",
      github_link: "https://github.com/Mihret-Getachew/course-management",
    },

    {
      id: 9,
      title: "Playlist Application",
      description_short:
        "This comprehensive web application provides a platform for users to manage their music playlists through a RESTful API",
      github_link: "https://github.com/Mihret-Getachew/playlist-application",
    },

    {
      id: 10,
      title: "Pet Finder CLI",
      description_short:
        "A terminal application built with TypeScript that connects to the Pet Finder API",
      github_link: "https://github.com/Mihret-Getachew/MAP-Project",
    },

    {
      id: 8,
      title: "Restaurant Website",
      description_short:
        "An html,css and js based restaurant website that is fully responsive.",
      github_link: "https://github.com/Mihret-Getachew/restuarant-website-two",
    },
  ];

  const openSourceProjects = [
    {
      id: 12,
      title: "Express App Generator",
      description_short:
        "A lightweight and performant TypeScript project that helps generate a structure for Express.js and TypeScript RestApi",
      github_link: "https://github.com/Mihret-Getachew/express-app-generator",
    },
  ];

  return (
    <main className={projectStyles.container} id="WorkSection">
      <h3>My Projects</h3>

      <div className={projectStyles.cards__container}>
        {projectInfo.map((project, index) => (
          <LeadProjectCard key={index} projectInfo={project}></LeadProjectCard>
        ))}
      </div>

      <h3>Open Source Project</h3>

      <div
        className={projectStyles.mentionContainer}
        style={{ marginBottom: "24px" }}
      >
        {openSourceProjects.map(
          ({ id, title, description_short, github_link }) => (
            <SideProject
              key={id}
              title={title}
              description={description_short}
              github={github_link}
              external_link={""}
            />
          )
        )}
      </div>

      <h4>Noteworthy Project Mentions</h4>
      <div className={projectStyles.mentionContainer}>
        {mentions.map(({ id, title, description_short, github_link }) => (
          <SideProject
            key={id}
            title={title}
            description={description_short}
            github={github_link}
            external_link={""}
          />
        ))}
      </div>
    </main>
  );
}

export default Projects;
