import React from "react";
import Timeblock from "./Timeblock";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const times = ["8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm"];
const events = [
  { dayIndex: 2, timeIndex: 2, eventName: "Web 102", location: "Room 301", color: "#3b82f6" },
  { dayIndex: 0, timeIndex: 1, eventName: "Gym", location: "Anytime", color: "#22c55e" },
  { dayIndex: 4, timeIndex: 4, eventName: "Meeting", location: "Zoom", color: "#ef4444" },
];


function Calendar() {
  return (
    <div style={styles.page}>
      {/* Header row */}
      <div style={styles.headerRow}>
        <div style={styles.corner} /> {/* empty top-left corner */}
        {days.map((d) => (
          <div key={d} style={styles.dayHeader}>
            {d}
          </div>
        ))}
      </div>

      {/* Main grid: times + 7-day schedule */}
      <div style={styles.body}>
        {/* Time labels column */}
        <div style={styles.timeCol}>
          {times.map((t) => (
            <div key={t} style={styles.timeLabel}>
              {t}
            </div>
          ))}
        </div>

        {/* Schedule grid */}
        <div style={styles.grid}>
          {times.map((_, timeIndex) =>
            days.map((_, dayIndex) => {
                const cellEvents = events.filter(
                    (e) => e.dayIndex === dayIndex && e.timeIndex === timeIndex
                );


              return (
                <div key={`${dayIndex}-${timeIndex}`} style={styles.cell}>
                    {cellEvents.map((e, i) => (
                        <Timeblock
                            key={i}
                            eventName={e.eventName}
                            location={e.location}
                            color={e.color}
                        />
                    ))}
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
}

export default Calendar

const styles = {
  page: {
    maxWidth: "1000px",
    margin: "24px auto",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },

  headerRow: {
    display: "grid",
    gridTemplateColumns: "100px repeat(7, 1fr)",
    gap: "8px",
    marginBottom: "8px",
  },
  corner: {
    height: "40px",
  },
  dayHeader: {
    fontWeight: "bold",
    textAlign: "center" as const,
    padding: "10px 0",
    borderRadius: "8px",
    backgroundColor: "#f3f4f6",
  },

  body: {
    display: "grid",
    gridTemplateColumns: "100px 1fr",
    gap: "8px",
  },

  timeCol: {
    display: "grid",
    gridTemplateRows: `repeat(${times.length}, 80px)`,
    gap: "8px",
  },
  timeLabel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "8px",
    fontWeight: 600,
    color: "#374151",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gridTemplateRows: `repeat(${times.length}, 80px)`,
    gap: "8px",
  },

  cell: {
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "6px",
    backgroundColor: "white",
    boxSizing: "border-box" as const,
  },
};