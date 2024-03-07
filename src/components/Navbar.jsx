import "./Navbar.css";
import HomeIcon from "../assets/icons/Home.svg";
import AboutMeIcon from "../assets/icons/AboutMe.svg";
import ResumeIcon from "../assets/icons/Resume.png";
import ProjectsIcon from "../assets/icons/Projects.png";
import GalleryIcon from "../assets/icons/Gallery.png";
import ContactIcon from "../assets/icons/Contact.png";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="NavbarContainer">
        <button className="NavbarItem">
          <img src={HomeIcon} className="NavbarIcon" />
          <p className="NavbarText">Home</p>
        </button>

        <button className="NavbarItem">
          <img src={AboutMeIcon} className="NavbarIcon" />
          <p className="NavbarText">About</p>
        </button>

        <button className="NavbarItem">
          <img src={ProjectsIcon} className="NavbarIcon"></img>
          <p className="NavbarText">Projects</p>
        </button>

        <button className="NavbarItem">
          <img src={ResumeIcon} className="NavbarIcon"></img>
          <p className="NavbarText">Resume</p>
        </button>

        <button className="NavbarItem">
          <img src={GalleryIcon} className="NavbarIcon"></img>
          <p className="NavbarText">Gallery</p>
        </button>

        <button className="NavbarItem">
          <img src={ContactIcon} className="NavbarIcon"></img>
          <p className="NavbarText">Contact</p>
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
