# AIonOS ACMS Mobile App

Mobile-first Crew Self-Service PWA for ACMS. It can run in the browser, be deployed on GitHub Pages, and be installed on phones as a Progressive Web App.

## Screens included

- M00 Login / device binding
- M01 Crew home
- M02 My roster calendar
- M03 Duty detail
- M04 Roster acknowledgement
- M05 Check-in
- M06 Delay/change alerts
- M07 Absence and MC upload
- M08 Leave apply
- M09 Leave status
- M10 Standby call-up
- M11 Duty swap request
- M12 Training and validity wallet
- M13 Profile and documents
- M14 Notifications inbox
- M15 Crew chatbot/help
- M16 Supervisor approval inbox
- M17 OCC mobile alert console
- M18 Settings and security

## Run locally

```bash
npm install
npm run dev
```

## Connect to the Apps Script backend

Deploy the backend as a Google Apps Script Web App and paste the `/exec` URL in **Settings** in the mobile app. The app uses simple text JSON POST calls to avoid Apps Script preflight issues.
