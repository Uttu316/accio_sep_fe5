const ResumeIntro = ({ user }) => {
  // const {user} = props;

  return (
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
  );
};

export default ResumeIntro;
