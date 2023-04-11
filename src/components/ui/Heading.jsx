const Heading = ({ title, subtitle }) => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2
        className={`text-3xl font-semibold tracking-tight text-white sm:text-4xl ${
          subtitle ? "" : "mb-16"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg leading-8 text-gray-900 mb-16">{subtitle}</p>
      )}
    </div>
  );
};

export default Heading;
