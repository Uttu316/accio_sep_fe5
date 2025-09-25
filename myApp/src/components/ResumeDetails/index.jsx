import ResumeRole from "../ResumeRole";
import ResumeSkills from "../ResumeSkills";

const ResumeDetails = ({ user }) => {
  return (
    <section className="resume_container resume_skills_container">
      <ResumeSkills user={user} />
      <ResumeRole user={user} />
    </section>
  );
};
export default ResumeDetails;
