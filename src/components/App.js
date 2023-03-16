import React from 'react'

const App = () => {
  return (
    <div id="main">
               {/* Do not remove the main div */}
        function DiwaliShoppingList() {
  const relativesList = [
    { key: "relativeListItem1", name: "Amit" },
    { key: "relativeListItem2", name: "Sonal" },
    { key: "relativeListItem3", name: "Neha" },
    { key: "relativeListItem4", name: "Rajesh" },
    { key: "relativeListItem5", name: "Aparna" },
  ];

  return (
    <div>
      <h2>Relatives to Visit During Diwali</h2>
      <ol>
        {relativesList.map((relative) => (
          <li key={relative.key}>{relative.name}</li>
        ))}
      </ol>
    </div>
  );
}
    </div>
  )
}

export default App
