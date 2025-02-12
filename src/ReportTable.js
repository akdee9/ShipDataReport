import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const ReportTable = () => {
  const [shipLogs, setShipLogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "ship_logs"));
      const logs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setShipLogs(logs);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Ship Log Report</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Date</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Voyage No</th>
            <th className="border p-2">Distance Run (nm)</th>
            <th className="border p-2">Engine Speed (kt)</th>
            <th className="border p-2">Fuel Consumed (MT)</th>
            <th className="border p-2">Cylinder Oil Used (Litres)</th>
            <th className="border p-2">Fresh Water Used (m3)</th>
          </tr>
        </thead>
        <tbody>
          {shipLogs.map((log) => (
            <tr key={log.id} className="border">
              <td className="border p-2">{log.date}</td>
              <td className="border p-2">{log.time}</td>
              <td className="border p-2">{log.location}</td>
              <td className="border p-2">{log.voyageNo}</td>
              <td className="border p-2">{log.distRun}</td>
              <td className="border p-2">{log.engineSpeed}</td>
              <td className="border p-2">{log.fuelConsumed}</td>
              <td className="border p-2">{log.cylOilUsed}</td>
              <td className="border p-2">{log.freshWaterUsed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
