const Heading = ({ title, text, className }) => {
  return (
    <div
      className={`${className || ""} mt-[10rem] sm:mt-0 max-w-[50rem] mx-auto mb-12 lg:mb-20 max-sm:mt-45 `}
    >
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4 lg:text-center">{text}</p>}
    </div>
  );
};

export default Heading;
