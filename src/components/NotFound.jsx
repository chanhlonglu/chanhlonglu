import React from "react";
function NotFound({ location }) {
  return (
    <p>
      404 NotFound <code>{location.pathname}</code>
    </p>
  );
}
export default NotFound;
