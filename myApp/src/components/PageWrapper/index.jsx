import ProductHeader from "../ProductHeader";

const PageWrapper = (props) => {
  const { children, className } = props;

  return (
    <div className={className}>
      <ProductHeader />
      {children}
    </div>
  );
};

export default PageWrapper;
