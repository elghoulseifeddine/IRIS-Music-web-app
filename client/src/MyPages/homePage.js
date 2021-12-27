import React from 'react';

const homePage = () => {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("index");
      return function cleanup() {
        document.body.classList.remove("index");
      };
    });
  return (
    <div>
      
    </div>
  );
}

export default homePage;
