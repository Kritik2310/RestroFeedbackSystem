import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon, PlusIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="sidebar-container">

      {/* Hamburger Button */}
      <button id="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
        ☰
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        {!collapsed && (
          <>
            <h2 className="sidebar-title">Menu</h2>

            <nav>
              <ul>
                <li>
                  <Link to="/" className="sidebar-link">
                    <HomeIcon className="icon" /> Home
                  </Link>
                </li>

                <li>
                  <Link to="/add-restaurant" className="sidebar-link">
                    <PlusIcon className="icon" /> Top Rated
                  </Link>
                </li>

                <li>
                  <Link to="/about" className="sidebar-link">
                    <InformationCircleIcon className="icon" /> About
                  </Link>
                </li>

                <li>
                  <Link to="/admin" className="sidebar-link">
                    <InformationCircleIcon className="icon" />Admin Dashboard
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )}
      </aside>
    </div>
  );
}
