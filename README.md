# FacultyFlow v6 — Universal Faculty PWA

A phone-first faculty timetable, live lecture tracker and semester teaching-hours dashboard.

## New in v6
- University → School → Department → Faculty profile structure
- Department displayed throughout the app
- Timetable import area for Excel/CSV, PDF, image and manual workflows
- Preview/verification-oriented import design
- Live lecture timer: Start Lecture → real-time remaining countdown → Mark Complete
- Actual teaching time stored per lecture
- Regular + adjustment classes tracked together
- Semester totals and CSV export
- Local device storage and offline PWA shell
- SRM University-AP default branding/profile values, editable for any institution

## GitHub Pages
Upload `index.html`, `manifest.json`, `sw.js`, `icon-180.png`, and `icon-512.png` to the repository root. Enable GitHub Pages from Settings → Pages → Deploy from branch → main → root.

The app stores timetable, profile, adjustments and lecture history in the browser's local storage. Data does not automatically sync between devices.
