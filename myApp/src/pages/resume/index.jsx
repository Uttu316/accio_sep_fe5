import "./resume.css";
import ResumeFooter from "../../components/ResumeFooter";
import ResumeHeader from "../../components/ResumeHeader";
import ResumeIntro from "../../components/ResumeIntro";
import ResumeDetails from "../../components/ResumeDetails";
const ResumePage = () => {
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
      <ResumeHeader title="Resume" />

      <hr />
      <ResumeIntro user={user} />

      <hr />
      <ResumeDetails user={user} />
      <ResumeFooter />
    </div>
  );
};
export default ResumePage;
