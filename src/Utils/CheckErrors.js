// SDK Configuration
const SDK_CONFIG = {
  reportingUrl: "https://your-error-reporting-endpoint.com",
  authToken: "your-authentication-token",
};

// Error Reporting Function
function reportError(errorData) {
  // Make an HTTP request to the reporting URL
  fetch(SDK_CONFIG.reportingUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SDK_CONFIG.authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(errorData),
  })
    .then((response) => {
      // Handle the response, e.g., log success or error
      console.log("Error reported successfully:", response);
    })
    .catch((error) => {
      console.error("Error reporting failed:", error);
    });
}

// Global Error Handler
window.onerror = function (message, source, line, column, error) {
  const errorData = {
    message: message,
    source: source,
    line: line,
    column: column,
    stack: error ? error.stack : null,
    timestamp: new Date().toISOString(),
    name: error ? error.name : null,
    fileName: error ? error.fileName : null,
    columnNumber: error ? error.columnNumber : null,
    lineNumber: error ? error.lineNumber : null,
    // Include additional relevant data as needed
  };

  // reportError(errorData);
};

// Unhandled Promise Rejection Handler
window.onunhandledrejection = function (event) {
  const errorData = {
    message: event.reason ? event.reason.toString() : null,
    stack: event.reason ? event.reason.stack : null,
    timestamp: new Date().toISOString(),
    // Include additional relevant data as needed
  };

  reportError(errorData);
};

// Example Usage
function throwError() {
  throw new Error("Something went wrong!");
}

try {
  throwError();
} catch (error) {
  const errorData = {
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString(),
    // Include additional relevant data as needed
  };

  reportError(errorData);
}
