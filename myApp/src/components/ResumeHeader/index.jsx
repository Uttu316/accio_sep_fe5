import "./resumeHeader.css";
const ResumeHeader = (props) => {
  // const { title } = props;
  return (
    <header className="resume_header">
      <h1 className="resume_header_heading">{props.title}</h1>
    </header>
  );
};

export default ResumeHeader;
