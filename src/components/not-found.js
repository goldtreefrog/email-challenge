import React from "react";
import "./../index";
// Note: Do not use <Link> below because window.location does not get reset that way and you will stay in this component until someone decides to type in the URL box rather than clicking the link. <a> makes the whole page reload, which may not be ideal usually but it is the easiest way to get out of this component.

export default function NotFound() {
  return (
    <div>
      <h2>Error 404 - Not Found</h2>
      <p>I have looked and looked, and I cannot find the page you are seeking anywhere here.</p>
      <p>
        <a href="/inbox">Return Home</a>
      </p>
    </div>
  );
}
