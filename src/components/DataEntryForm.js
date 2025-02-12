import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const DataEntryForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    location: "",
    voyageNo: "",
    distRun: "",
    engineSpeed: "",
    fuelConsumed: "",
    cylOilUsed: "",
    freshWaterUsed: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "ship_logs"), formData);
      alert("Data Submitted Successfully!");
      setFormData({
        date: "",
        time: "",
        location: "",
        voyageNo: "",
        distRun: "",
        engineSpeed: "",
        fuelConsumed: "",
        cylOilUsed: "",
        freshWaterUsed: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Ship Data Entry</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="border p-2 rounded" required />
        <input type="time" name="time" value={formData.time} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="border p-2 rounded" required />
        <input type="text" name="voyageNo" value={formData.voyageNo} onChange={handleChange} placeholder="Voyage No" className="border p-2 rounded" required />
        <input type="number" name="distRun" value={formData.distRun} onChange={handleChange} placeholder="Distance Run (nm)" className="border p-2 rounded" required />
        <input type="number" name="engineSpeed" value={formData.engineSpeed} onChange={handleChange} placeholder="Engine Speed (kt)" className="border p-2 rounded" required />
        <input type="number" name="fuelConsumed" value={formData.fuelConsumed} onChange={handleChange} placeholder="Fuel Consumed (MT)" className="border p-2 rounded" required />
        <input type="number" name="cylOilUsed" value={formData.cylOilUsed} onChange={handleChange} placeholder="Cylinder Oil Used (Litres)" className="border p-2 rounded" required />
        <input type="number" name="freshWaterUsed" value={formData.freshWaterUsed} onChange={handleChange} placeholder="Fresh Water Used (m3)" className="border p-2 rounded" required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default DataEntryForm;
