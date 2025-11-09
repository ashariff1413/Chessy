# Chessy Front-End Prototype

This project is a static prototype of a Chess.com-inspired landing page. It is built with vanilla HTML, CSS, and JavaScript.

## Project Structure
- `index.html` – main page markup containing navigation, hero section, feature panels, and placeholders for interactive content.
- `styles.css` – styling for the layout, chess board visuals, and responsive design.
- `script.js` – renders the chess board, populates the AI PvP roster, and updates the footer year.

## How to Test
Because the site is a static build, you only need a modern web browser to preview it. You can open the `index.html` file directly or serve the folder with a lightweight HTTP server.

### Option 1: Open the file directly
1. Locate the `index.html` file in the repository root.
2. Double-click it (or right-click → “Open with”) to launch it in your preferred browser.
3. Verify the following behaviours:
   - The navigation bar shows the tabs **Home**, **Play**, **AI PvP**, **Puzzles**, **Achievements**, **Stats**, and **Profile**.
   - The hero section displays the chess board from White’s perspective (white pieces at the bottom).
   - Scrolling reveals the feature panels, including puzzles, achievements, and player stats.
   - The footer year reflects the current calendar year.

### Option 2: Serve with a local HTTP server
Serving over HTTP is closer to how the page will behave in production and is recommended if you are testing on Chrome (which blocks some features when opening files via the `file://` protocol).

1. Ensure you have Node.js (16+) installed.
2. From the project root, run one of the following commands:
   - `npx serve` (installs a temporary static server)
   - `npx http-server .`
3. Open the URL shown in the terminal (typically `http://localhost:3000` or `http://127.0.0.1:8080`).
4. Repeat the verification checklist from Option 1.

## Additional Notes
- The AI PvP list is generated at runtime. Reloading the page randomises the “Mystery” opponent’s Elo. The hidden “Random Guy” boss does not appear in the list but can be surfaced later if desired.
- The layout is responsive; resize the browser window or use device emulation tools to check the mobile presentation.

