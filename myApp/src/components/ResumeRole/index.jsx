const ResumeRole = ({ user }) => {
  return (
    <>
      <h2>Role</h2>
      {user.yoe > 6 && <p>Team Lead</p>}
      {user.yoe > 3 && user.yoe <= 6 && <p>Senior Software Engineer</p>}
      {user.yoe <= 3 && <p> Software Engineer</p>}
      {user.yoe === 0 && <p>Intern</p>}
    </>
  );
};
export default ResumeRole;
