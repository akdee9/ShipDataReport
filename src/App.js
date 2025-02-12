import React, { useState } from "react";
import DataEntryForm from "./components/DataEntryForm";
import ReportTable from "./components/ReportTable";

function App() {
  const [view, setView] = useState("form");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="flex space-x-4 mb-4">
        <button onClick={() => setView("form")} className="bg-blue-500 text-white p-2 rounded">Data Entry</button>
        <button onClick={() => setView("report")} className="bg-green-500 text-white p-2 rounded">View Report</button>
      </div>
      {view === "form" ? <DataEntryForm /> : <ReportTable />}
    </div>
  );
}

export default App;
