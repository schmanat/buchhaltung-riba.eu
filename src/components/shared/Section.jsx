const Section = ({ children, className }) => {
  return (
    <div
      className={`mx-auto py-16 px-3 ${className ? className : "max-w-5xl"}`}
    >
      {children}
    </div>
  );
};

export default Section;
