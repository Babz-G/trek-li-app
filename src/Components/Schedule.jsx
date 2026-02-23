import { useState } from "react";
import { scheduleData } from "../data";

const tabs = [
  { key: "main", label: "Main Schedule", color: "var(--logoGold)" },
  { key: "celebrity", label: "Celebrity Schedules", color: "var(--logoBlue)" },
  {
    key: "photoOp",
    label: "Photo Op Schedule",
    color: "var(--trekFlyerMagenta)",
  },
  { key: "cosplay", label: "For Cosplayers", color: "var(--logoGreen)" },
  { key: "special", label: "Special Events", color: "var(--trekFlyerMagenta)" },
  { key: "kids", label: "Kid's Events", color: "var(--logoGreen)" },
];

function Schedule() {
  const [activeTab, setActiveTab] = useState("main");

  const activeEvents = scheduleData[activeTab];
  const activeLabel = tabs.find((tab) => tab.key === activeTab).label;

  return (
    <main className="schedule-page">
      <h1 className="schedule-title">Schedule</h1>
      <p className="schedule-quote">"Patience has its rewards." — Elim Garak</p>

      <nav aria-label="Schedule categories">
        <ul className="schedule-tabs" role="list">
          {tabs.map((tab) => (
            <li key={tab.key}>
              <button
                className={`schedule-tab ${
                  activeTab === tab.key ? "active" : ""
                }`}
                style={{ backgroundColor: tab.color }}
                onClick={() => setActiveTab(tab.key)}
                aria-pressed={activeTab === tab.key}
                aria-label={`Show ${tab.label}`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section aria-label={`${activeLabel} events`}>
        <ul className="schedule-list" role="list">
          {activeEvents.map((event) => (
            <li className="schedule-card" key={event.id}>
              <time className="schedule-time" dateTime={event.time}>
                {event.time}
              </time>
              <div className="schedule-details">
                <h2 className="schedule-event-title">{event.title}</h2>
                <p className="schedule-meta">
                  <span>{event.day}</span>
                  <span aria-hidden="true"> · </span>
                  <span>{event.location}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Schedule;
