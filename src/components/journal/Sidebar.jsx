import React from "react";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h4>
                    <i className="far fa-moon" />
                    <span>Eduardo</span>
                </h4>

                <button className="btn">Logout</button>
            </div>
            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x" />
                <p className="mt-5">New entry</p>

                <JournalEntries />
            </div>
        </aside>
    );
};
