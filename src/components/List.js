import React, { useEffect, useState } from "react";

const List = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3004/cities")
      .then((res) => res.json())
      .then((res) => {
        setCities(res);
      });
  }, []);
  const style = {
    border: "2px solid black",
  };
  return (
    <div className="container w-75">
      <table class="table table-striped table-dark table-md text-center">
        <thead>
          <tr>
            <th>id</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((list) => {
            return (
              <tr>
                <td>{list.id}</td>
                <td>{list.country}</td>
                <td>{list.city}</td>
                <td>{list.population}</td>
                <td>
                  <button className="btn btn-warning">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
