import React from "react";

function KeyboardKey({ children, status }) {
  const [keyStatus, setKeyStatus] = React.useState("");

  React.useEffect(() => {
    if (status) {
      setKeyStatus(status);
    }
  }, [status]);

  const className = keyStatus ? `keyboard-key ${keyStatus}` : "keyboard-key";
  return <button className={className}>{children}</button>;
}

export default KeyboardKey;
