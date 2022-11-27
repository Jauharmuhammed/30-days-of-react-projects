import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const links = [
    { name: "Random Color", url: "/random-color" },
    { name: "Random Color Bars", url: "/random-colors" },
    { name: "Basic Form", url: "/basic-form" },
    { name: "Number Generator", url: "/number-generator" },
    { name: "Random Color Grid", url: "/random-color-grid" },
  ];
  return (
    <div className="body">
      <div className="homeBody">
        <h1 className="content">Contents</h1>
        <table className="table--contents">
          <thead>
            <tr>
              <th colSpan="2"></th>
            </tr>
          </thead>
          <tbody>
            {links?.map((link, index) => (
              <tr key={index}>
                <td>
                  <span>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to={link.url}
                    >
                      {link.name}
                    </Link>
                  </span>
                </td>
                <td>{index + 1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
