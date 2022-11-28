const SectionHeading = ({ children, styles = "" }) => {
  const classes = `${styles}`;
  return <h2 className={classes}>{children}</h2>;
};

export default SectionHeading;
