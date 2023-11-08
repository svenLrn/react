import { useState } from "react";

export function Container({ title, children }) {
    const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="custom-container">
      <h1 className="container-title" onClick={toggleCollapsed}>
        {title}
      </h1>
      {!collapsed && (
        <div className="container-children">
          {children}
        </div>
      )}
    </div>
  );
};

