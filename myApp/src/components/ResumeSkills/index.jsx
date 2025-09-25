const ResumeSkills = ({ user }) => {
  return (
    <>
      <h2>Skills</h2>
      <ul>
        {user.skills.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};
export default ResumeSkills;
