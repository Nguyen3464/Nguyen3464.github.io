import React from "react";
import javascript from '../assets/javascript.png'
import ruby from '../assets/ruby.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import rubyonrails from '../assets/rubyonrails.png'
import jest from '../assets/jest.png'
import rspec from '../assets/rspec.png'
import postgresql from '../assets/postgresql.png'
import postman from '../assets/postman.png'
import activerecords from '../assets/activerecords.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import macos from '../assets/macos.png'
import terminal from '../assets/terminal.png'
import yarn from '../assets/yarn.png'
import vscode from '../assets/vscode.png'
import trello from '../assets/trello.png'
import notion from '../assets/notion.png'
import slack from '../assets/slack.png'
import zoom from '../assets/zoom.png'


const Skills = () => {
  return (
    <div className="skills-page">
      <h1 className="skills-title">Skills</h1>
      <div className="skills">
        <div className="skills-logo">
          <h3>Javascript</h3>
          <img src={javascript} alt='javascript' className="skills-logo"/>
        </div>
        <div className="skills-description">
          <p>
            I have extensive experience with JavaScript, utilizing its
            versatility to create dynamic and interactive features on websites.
            I leverage JavaScript to handle user interactions, manipulate data,
            and build robust web applications.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>Ruby</h3>
          <img src={ruby} alt='ruby' className="skills-logo"/>
        </div>
        <div className="skills-description">
          <p>
            Ruby is a programming language I enjoy working with. Its simplicity
            and readability make development a pleasure. I have utilized Ruby's
            clean syntax and rich feature set to build various web applications,
            focusing on code clarity and maintainability.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>HTML</h3>
          <img src={html} alt='html' className="skills-logo"/>
        </div>
        <div className="skills-description">
          <p>
            HTML serves as the backbone of my web development projects. With
            HTML, I structure and organize web pages, defining elements and
            their layout. I have a strong command of HTML, enabling me to create
            well-structured and semantically meaningful web content.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>CSS</h3>
          <img src={css} alt='css' className="skills-logo"/>
        </div>
        <div className="skills-description">
          <p>
            CSS allows me to transform web pages into visually stunning
            experiences. I leverage CSS to style and design websites, ensuring
            an appealing and intuitive user interface. With CSS, I can customize
            layouts, colors, fonts, and animations to create engaging user
            experiences.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>React</h3>
          <img src={react} alt='react' className="skills-logo"/>
        </div>
        <div className="skills-description">
          <p>
            React is one of my core competencies for building user interfaces. I
            specialize in developing responsive and interactive web applications
            using React's component-based architecture. I have hands-on
            experience with React's efficient rendering and state management,
            ensuring seamless user interactions.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>Ruby on Rails</h3>
          <img src={rubyonrails} alt='rubyonrails' className="skills-logo"/>
        </div>
        <div className="skills-description">
          <p>
            Ruby on Rails is my go-to web application framework. I have built
            numerous projects using Rails, leveraging its
            convention-over-configuration approach for rapid development. With
            Rails, I focus on creating clean and maintainable code while
            adhering to the Model-View-Controller (MVC) pattern.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>Jest</h3>
          <img src={jest} alt='jest' className="skills-logo-jest"/>
        </div>
        <div className="skills-description">
          <p>
            I am proficient in Jest, a JavaScript testing framework commonly
            used for testing React applications. I utilize Jest's comprehensive
            features such as test suites, assertions, mocking, and code coverage
            analysis to ensure the reliability and quality of my code.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>RSpec</h3>
          <img src={rspec} alt='rspec' className="skills-logo-rspec"/>
        </div>
        <div className="skills-description">
          <p>
            RSpec is my preferred testing framework for Ruby applications. With
            RSpec, I follow a behavior-driven development (BDD) approach to
            write expressive and readable tests. I utilize RSpec's
            domain-specific language (DSL) to clearly define and verify the
            expected{" "}
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>PostgreSQL</h3>
          <img src={postgresql} alt='postgresql' className="skills-logo"/>
        </div>
        <div className="skills-description">
          <p>
            PostgreSQL is my preferred relational database management system. I
            have leveraged PostgreSQL's robust features for efficient data
            storage, retrieval, and querying in web applications. I am skilled
            in designing and implementing database schemas while ensuring data
            integrity and performance.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>Postman</h3>
          <img src={postman} alt='postman' className="skills-logo-postman"/>
        </div>
        <div className="skills-description">
          <p>
            I am experienced in using Postman, an API development and testing
            tool. With Postman, I test and debug APIs, send requests, analyze
            responses, and perform comprehensive API testing. Postman's
            intuitive interface and robust features streamline the API testing
            process, ensuring the reliability and functionality of web services.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>Active Records</h3>
          <img src={activerecords} alt='activerecords' className="skills-logo"/>
        </div>
        <div className="skills-description">
          <p>
            As part of Ruby on Rails, I extensively use Active Record, an ORM
            library. With Active Record, I seamlessly interact with databases by
            mapping database tables to Ruby objects. I leverage Active Record's
            intuitive API to perform database operations efficiently,
            simplifying complex SQL queries.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>Git</h3>
          <img src={git} alt='git' className="skills-logo"/>
        </div>
        <div className="skills-description">
          <p>
            Git plays a crucial role in my development workflow. I utilize Git's
            version control system to track code changes, collaborate with team
            members, and manage project history. With Git, I ensure code
            integrity, streamline teamwork, and simplify the process of
            branching, merging, and resolving conflicts.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>GitHub</h3>
          <img src={github} alt='github' className="skills-logo"/>
        </div>
        <div className="skills-description">
          <p>
            GitHub is an integral part of my development workflow. I use GitHub
            for version control and collaboration, managing code repositories
            and facilitating team collaboration. I am proficient in using Git
            commands, creating branches, merging code, and handling pull
            requests to ensure smooth and efficient code management.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>Mac OS</h3>
          <img src={macos} alt='macos' className="skills-logo"/>
        </div>
        <div className="skills-description">
          <p>
            As a macOS user, I am proficient in utilizing the powerful features
            and functionalities of the operating system. I am familiar with the
            macOS environment, its user interface, and its extensive toolset,
            allowing me to work efficiently and effectively on my development
            projects.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>Terminal</h3>
          <img src={terminal} alt='terminal' className="skills-logo"/>
        </div>
        <div className="skills-description">
          <p>
            As a developer, I am comfortable working with the Terminal or
            command-line interface. I leverage the Terminal to execute commands,
            navigate file systems, and perform various tasks efficiently. I am
            proficient in using command-line tools, managing packages, and
            running scripts, enabling me to streamline development workflows.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>Yarn</h3>
          <img src={yarn} alt='yarn' className="skills-logo-yarn"/>
        </div>
        <div className="skills-description">
          <p>
            Yarn is my package manager of choice for JavaScript projects. I use
            Yarn to manage dependencies, install packages, and ensure consistent
            builds. Yarn's performance and reliability make it a valuable tool
            for efficient package management in my development workflow.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>VS Code</h3>
          <img src={vscode} alt='vscode' className="skills-logo-vscode"/>
        </div>
        <div className="skills-description">
          <p>
            Visual Studio Code is my preferred code editor. I utilize VSCode's
            powerful features, including syntax highlighting, code completion,
            and debugging capabilities, to write clean and efficient code. I
            leverage its extensive collection of extensions to enhance
            productivity and tailor the editor to my specific development needs.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>Trello</h3>
          <img src={trello} alt='trello' className="skills-logo-trello"/>
        </div>
        <div className="skills-description">
          <p>
            Trello is a tool I rely on for project management and task
            organization. I use Trello's boards, lists, and cards to create
            visual representations of project workflows, track progress, and
            assign tasks. Trello's intuitive interface and collaboration
            features enhance team coordination and ensure project transparency.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>Notion</h3>
          <img src={notion} alt='notion ' className="skills-logo"/>
        </div>
        <div className="skills-description">
          <p>
            Notion is my go-to tool for organizing and managing projects. I
            utilize Notion cards to create kanban-style task boards, track
            progress, and collaborate with team members. Notion's flexibility
            allows me to customize workflows, capture ideas, and keep project
            documentation organized in a single, cohesive platform.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>Slack</h3>
          <img src={slack} alt='slack' className="skills-logo-slack"/>
        </div>
        <div className="skills-description">
          <p>
            Slack is my preferred communication and collaboration platform for
            teams. I use Slack to facilitate real-time communication, share
            files, and organize discussions in dedicated channels. I am
            proficient in utilizing Slack's features, such as direct messaging,
            thread conversations, and integration with other tools, to enhance
            team productivity.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-logo">
          <h3>Zoom</h3>
          <img src={zoom} alt='zoom' className="skills-logo-zoom"/>
        </div>
        <div className="skills-description">
          <p>
            Zoom is my preferred video conferencing tool for team meetings,
            client discussions, and remote collaboration. I am proficient in
            using Zoom's features, such as video and audio calls, screen
            sharing, and recording meetings. I leverage Zoom to facilitate clear
            and effective communication, regardless of geographical distances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
