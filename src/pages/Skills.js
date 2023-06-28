import React from "react";
import javascript from "../assets/javascript.png";
import ruby from "../assets/ruby.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import rubyonrails from "../assets/rubyonrails.png";
import jest from "../assets/jest.png";
import rspec from "../assets/rspec.png";
import postgresql from "../assets/postgresql.png";
import postman from "../assets/postman.png";
import activerecords from "../assets/activerecords.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import macos from "../assets/macos.png";
import terminal from "../assets/terminal.png";
import yarn from "../assets/yarn.png";
import vscode from "../assets/vscode.png";
import trello from "../assets/trello.png";
import notion from "../assets/notion.png";
import slack from "../assets/slack.png";
import zoom from "../assets/zoom.png";

const Skills = () => {
  return (
    <div className="skills-page">
      {/* <h1 className="skills-title">Skills</h1> */}
      <div className="skills">
        <div className="skills-description">
          <h3>Javascript</h3>
          <img src={javascript} alt="javascript" className="skills-logo" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3>Ruby</h3>
          <img src={ruby} alt="ruby" className="skills-logo-ruby" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3>HTML</h3>
          <img src={html} alt="html" className="skills-logo-html" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3 className="railsh4">CSS</h3>
          <img src={css} alt="css" className="skills-logo-css" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3 className="rails5">React</h3>
          <img src={react} alt="react" className="skills-logo-react" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3 className="railsh3">Ruby on Rails</h3>
          <img src={rubyonrails} alt="rubyonrails" className="skills-logo-rubyonrails" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3 className="rails5">Jest</h3>
          <img src={jest} alt="jest" className="skills-logo-jest" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3 className="railsh4">RSpec</h3>
          <img src={rspec} alt="rspec" className="skills-logo-rspec" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3>PostgreSQL</h3>
          <img src={postgresql} alt="postgresql" className="skills-logo" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3>Postman</h3>
          <img src={postman} alt="postman" className="skills-logo-postman" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3 className="railsh4">Active Records</h3>
          <img src={activerecords} alt="activerecords" className="skills-logo-activerecord" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3 className="railsh3">Git</h3>
          <img src={git} alt="git" className="skills-logo-git" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3>GitHub</h3>
          <img src={github} alt="github" className="skills-logo-github" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3>Mac OS</h3>
          <img src={macos} alt="macos" className="skills-logo-macos" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3>Terminal</h3>
          <img src={terminal} alt="terminal" className="skills-logo-terminal" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3 className="rails5">Yarn</h3>
          <img src={yarn} alt="yarn" className="skills-logo-yarn" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3>VS Code</h3>
          <img src={vscode} alt="vscode" className="skills-logo-vscode" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3 className="rails5">Trello</h3>
          <img src={trello} alt="trello" className="skills-logo-trello" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3 className="rails5">Notion</h3>
          <img src={notion} alt="notion " className="skills-logo-notion" />
        </div>
      </div>
      <div className="skills">
        <div className="skills-description">
          <h3 className="rails5">Slack</h3>
          <img src={slack} alt="slack" className="skills-logo-slack" />
        </div>
      </div>
      <div className="skills">

        <div className="skills-description">
          <h3 className="rails5">Zoom</h3>
          <img src={zoom} alt="zoom" className="skills-logo-zoom" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
