# FacultyFlow v8

Professional, phone-first Faculty Teaching Management PWA for GitHub Pages.

## Key features
- Today's classes open immediately
- Live lecture timer and actual teaching-time tracking
- Mark lecture complete and build semester history
- Regular + adjustment classes
- Faculty / university / school / department profile
- Timetable import from Excel/CSV, text-based PDF, or timetable image OCR
- Import preview and confirmation before replacing the schedule
- Manual timetable entry fallback
- Semester tracker and CSV report export
- PWA / standalone mode for Android Chrome and iPhone Safari
- Mobile layout prevents horizontal overflow and accidental page zoom as far as browser policy allows

## GitHub Pages
Upload the files in this folder to the repository root. Ensure `index.html` is at the repository root, then enable GitHub Pages from Settings → Pages → Deploy from branch → main → /(root).

## Timetable import
Excel/CSV parsing runs in the browser. PDF text extraction and image OCR require an internet connection the first time because the parsing libraries are loaded from public CDNs. Always review the detected rows before applying them.

## Data
Faculty profile, timetable, adjustments and lecture history are stored locally in the browser/device. They are not automatically synchronized between devices.
