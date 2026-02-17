# CodePath Intermediate Web Development Portfolio

This repository contains my projects, experiments, and learning outputs from the **10-week CodePath Intermediate Web Development Program**. Each week builds progressively on core frontend concepts such as React components, props, state, styling, data-driven UI, and interactive application design.

### Week 1: Timetable
Built a weekly timetable interface that displays days, times, and scheduled events using reusable React components.
**Expanded beyond the base lesson** by implementing **template-driven rendering** and dynamically filling the page using `posts.map`-style data mapping.

```.tsx
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
```

**Tech & Concepts Learned:**
* React component structure and planning
* Props for passing structured data into components
* Mapping arrays to UI (`.map`) for scalable rendering
* Layout thinking for real interfaces (calendar grid mindset)