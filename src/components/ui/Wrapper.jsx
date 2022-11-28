const Wrapper = ({ children, className = "" }) => {
  const classes = `container mx-auto px-4 ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Wrapper;
