const FeatureNotAvailable = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "70vh",
  };

  const illustrationStyle = {
    fontSize: "4rem",
    marginBottom: "1rem",
  };

  const illustrationWrapper = {
    width: "200px",
    height: "200px",
  };

  return (
    <div style={containerStyle}>
      <div style={illustrationWrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={illustrationStyle}
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12" y2="16" />
        </svg>
      </div>
      <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        This feature is currently not available
      </h2>
    </div>
  );
};

export default FeatureNotAvailable;
