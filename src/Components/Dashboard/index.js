import React from "react";
import { GET_DATA } from "../../Helpers/FetchHelper";
import { useLoaderData, useNavigation } from "react-router-dom";

const Dashboard = () => {
  const loaderData = useLoaderData();
  const navigate = useNavigation();
  console.log("🍂 🍃 | Dashboard | navigate", navigate);
  return (
    <div>
      Dashboard
      {loaderData.map((data, idx) => (
        <li key={idx}>{data.name}</li>
      ))}
    </div>
  );
};

export default Dashboard;

export const loader = () => {
  return GET_DATA();
};
