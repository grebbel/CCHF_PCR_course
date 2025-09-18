# Copilot Instructions for CCHF_PCR_course

## Project Overview
This repository contains an interactive, browser-based course on real-time PCR (qPCR) principles and applications, with a focus on Crimean-Congo Hemorrhagic Fever (CCHF) diagnostics. The course is delivered as a static HTML/JS/CSS site with rich interactive elements and quizzes.

## Key Files & Structure
- `index.html`: Main course interface. All modules, navigation, and interactive content are defined here.
- `script.js`: Handles all interactive logic, navigation, quiz scoring, and dynamic content updates.
- `style.css`: Custom styles for layout, responsive design, and theming.
- `images/`: Contains all figures, diagrams, and icons used in the course.
- `issues/README.md`: Tracks known issues and feature requests for the course.

## Development Patterns
- **Single-page app**: All navigation and content switching is handled client-side via JavaScript. No page reloads.
- **Section IDs**: Each course module/section is a `<div class="content-section" id="...">` in `index.html`. Navigation shows/hides these sections.
- **Interactive elements**: Quizzes, dashboards, and visualizations are implemented as HTML blocks with event-driven JS logic.
- **Image references**: All images are relative to the `images/` directory. Use descriptive `alt` text for accessibility.
- **No build step**: All code is plain HTML/CSS/JS. No frameworks or bundlers are used.

## Editing & Extending
- To add a new module: Duplicate a `<div class="content-section">` in `index.html`, assign a unique `id`, and update navigation logic in `script.js`.
- To add a quiz: Follow the markup pattern for existing quizzes (form, options, feedback divs) and implement logic in `script.js`.
- For troubleshooting or dashboard features, use the structure in the Troubleshooting section as a template.

## Testing & Debugging
- Open `index.html` directly in a modern browser (Chrome, Firefox, Safari) to test changes.
- Use browser dev tools for JS debugging and CSS inspection.
- No automated tests are present; manual testing is required for all interactive features.

## Conventions
- Use semantic HTML for accessibility.
- Keep JS modular by grouping related functions.
- Use consistent naming for section IDs and navigation data attributes.
- Document new interactive logic with inline comments in `script.js`.

## Known Issues & TODOs
- See `issues/README.md` for current bugs and feature requests.
- Troubleshooting section: Needs improved image handling and quiz integration.
- Consider adding a scoring system and sidebar progress view.

## Example: Adding a New Quiz
1. Add a new `<form class="quiz-form">` block in the relevant section of `index.html`.
2. Implement answer checking and feedback logic in `script.js`.
3. Update navigation to include the new quiz section if needed.

---
For further details, see the main `README.md` and in-code comments.
