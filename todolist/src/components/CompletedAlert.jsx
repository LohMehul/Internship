import React from "react";

// Components
import {
  Alert,
  AlertHeading,
} from "react-bootstrap";

export default function CompletedAlert() {
  return (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <Alert size="40px" mr={0} />
      <AlertHeading mt={4} mb={1} fontSize="lg">
        All Tasks Completed!
      </AlertHeading>
      <Alert maxWidth="sm">
        Take the rest of the day off. You've earned it.
      </Alert>
    </Alert>
  );
}
