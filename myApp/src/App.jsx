import "./App.css";
import ResumeFooter from "./components/ResumeFooter";
import ResumeHeader from "./components/ResumeHeader";
const App = () => {
  const user = {
    fName: "Utkarsh",
    lName: "Gupta",
    bio: "I am very good engineer  with experites in building Scalable Frontend for Millions of User",
    age: 25,
    address: {
      city: "Agra",
      pincode: 21312,
    },
    phone: 98987878,
    skills: ["Javascript", "Html", "React", "Css"],
    yoe: 5,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/utkarsh-gupta-032223147/",
    },
    img: "https://avatar.iran.liara.run/public",
  };

  return (
    <div className="resume_page">
      {/* {Header()} */}
      <ResumeHeader />
      <hr />
      <section className="resume_container resume_intro_container">
        <div className="resume_name_intro">
          <h2>{`${user.fName} ${user.lName}`}</h2>
          <p>{user.bio}</p>
          <p>Age: {user.age}</p>
          <p>{user.address.city + "-" + user.address.pincode}</p>
        </div>
        <div className="resume_intro_img">
          <img src={user.img} />
          <a target="blank" href={user.socialLinks.linkedin}>
            Linkedin
          </a>
          <a href={`tel:${user.phone}`}>{user.phone}</a>
        </div>
      </section>
      <hr />
      <section className="resume_container resume_skills_container">
        <h2>Skills</h2>
        <ul>
          {user.skills.map((item, index) => (
            <li>{item}</li>
          ))}
        </ul>
        <h2>Role</h2>
        {user.yoe > 6 && <p>Team Lead</p>}
        {user.yoe > 3 && user.yoe <= 6 && <p>Senior Software Engineer</p>}
        {user.yoe <= 3 && <p> Software Engineer</p>}
        {user.yoe === 0 && <p>Intern</p>}
      </section>
      <ResumeFooter />
    </div>
  );
};
export default App;
