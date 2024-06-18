const responseParser = (response) => {
  if (!response) {
    return { message: "something went wrong..." };
  }

  const { data, status, connection } = response || {};

  if (connection === "true" && status === "true") {
    if (data && data !== undefined && data !== null) {
      return {
        message: response.message,
        data: data,
      };
    } else {
      return {
        message: response.message,
      };
    }
  } else {
    return {
      message: response.message,
    };
  }
};

export default responseParser;
