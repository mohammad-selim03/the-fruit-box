import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("system-setting");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);

      // Set document title
      document.title = parsedData.title || "The Fruit Box Ltddd";

      // Set favicon
      const favicon = document.querySelector("link[rel='icon']");
      if (favicon) {
        favicon.href = parsedData.image;
      } else {
        const newFavicon = document.createElement("link");
        newFavicon.rel = "icon";
        newFavicon.href = parsedData.image;
        document.head.appendChild(newFavicon);
      }
    }
  }, []);

  return (
    <div className="app-container">
      <header>
        {data ? (
          <>
            <img src={data.image} alt={`${data.title} logo`} className="site-logo" />
            <h1>{data.title}</h1>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
}

export default App;
