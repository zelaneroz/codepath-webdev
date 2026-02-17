# CodePath Intermediate Web Development Portfolio

This repository contains my projects, experiments, and learning outputs from the **10-week CodePath Intermediate Web Development Program**. Each week builds progressively on core frontend concepts such as React components, props, state, styling, data-driven UI, and interactive application design.

## Week 1: Timetable
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


## Week 2.1: Samosa Selector

Created an interactive counter app where users select items and see real-time updates reflected in the UI through React state and event handling.
**Expanded beyond the base lesson** by refining component structure, improving state-driven rendering, and ensuring smooth user interaction patterns.

**Tech & Concepts Learned:**

* React `useState` for dynamic UI updates
* Event handling with button clicks
* State-driven rendering and reactivity
* Clean component logic and user interaction flow


## Week 2.2: Palabras — Spanish Vocab Flashcards

Built a one-page flashcard application that flips between English and Spanish vocabulary and allows navigation through multiple words using both buttons and keyboard controls.
**Going Beyond:** implemented keyboard event listeners, conditional styling based on state, and smooth interaction logic to create a more realistic learning experience.

**Tech & Concepts Learned:**

* Multiple state variables (`isFlipped`, `currentIndex`)
* Conditional rendering and dynamic styling from state
* Keyboard event handling with `useEffect` and cleanup
* Data-driven UI using arrays and index navigation
