<<<<<<< HEAD
# FrontEndProjects
=======
# University Lost & Found

A single-page web application for university students and staff to report, browse, and claim lost or found items on campus.

---

## Features

### Student / Staff Portal
- **Report Items** — Submit lost or found items with a title, category, location, description, and optional photo upload.
- **Browse Items** — Filter all reported items by type (lost/found), category, or keyword search.
- **Claim Items** — Submit a claim with proof of ownership for any item you didn't report yourself.
- **My Claims** — Track the status (pending / approved / rejected) of all submitted claims.
- **Smart Matching** — When you report an item, the app automatically suggests potential matches from the opposite type (e.g. a "found" match for a "lost" report) based on title keywords, category, and location.
- **Dashboard** — View your profile, active claims, total items reported, and recovered item count.

### Admin Portal
- **Claims Management** — Review all claims across all users in a table view.
- **Approve / Reject Claims** — One-click action buttons for pending claims.
- **Filter by Status** — Filter claims by All / Pending / Approved / Rejected.
- **Statistics Panel** — See total pending, approved, rejected, and overall recovery rate at a glance.
- **Role-based Access** — Admin roles include Super Admin, Moderator, Item Manager, and Viewer.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, CSS Grid, Flexbox) |
| Logic | Vanilla JavaScript (ES6+) |
| Storage | Browser `localStorage` |
| No dependencies | No frameworks, no build step |

---

## Getting Started

No installation or server is required. Just open the file in any modern browser:

```bash
# Simply open in your browser
open university-lost-found.html
```

Or drag the file into a browser window.

---

## Demo Accounts

Pre-seeded accounts are available for testing (password for all: `password123`):

| Role | Email | Portal |
|---|---|---|
| Student | `ali.hassan@uni.edu.pk` | Student / Staff |
| Admin | `sara.khan@uni.edu.pk` | Admin Portal |

Other pre-seeded student accounts use the same password:
- `usman.tariq@uni.edu.pk`
- `ayesha.malik@uni.edu.pk`
- `bilal.ahmed@uni.edu.pk`
- `zara.hussain@uni.edu.pk`

---

## Project Structure

The entire application is contained in a single HTML file:

```
university-lost-found.html
├── <style>         — All CSS (variables, layout, components, responsive)
├── HTML pages      — Login, Student Signup, Admin Signup, Dashboard,
│                     Browse, My Claims, Admin Panel, Modals
└── <script>
    ├── DB          — localStorage helpers (get/set/maxId)
    ├── seed()      — Seeds demo users, admins, categories, items, claims
    ├── Auth        — Login, student signup, admin signup, logout
    ├── Dashboard   — Profile card, stats, report item modal
    ├── Browse      — Item grid with filters and claim modal
    ├── My Claims   — User's claim history table
    └── Admin       — Claims management table with approve/reject actions
```

---

## Data Model

All data is stored in `localStorage` under the `lf_` prefix:

| Key | Description |
|---|---|
| `lf_users` | Registered students and staff |
| `lf_admins` | Admin records linked to users |
| `lf_categories` | Item categories (Electronics, Books, etc.) |
| `lf_items` | Reported lost/found items |
| `lf_claims` | Claims submitted by users |
| `lf_session` | Currently logged-in user session |

---

## Pre-seeded Data

The app seeds the following on first load:

- **8 users** across departments (CS, EE, Business, Math, Physics, Chemistry)
- **5 admins** with roles: Super Admin, Moderator, Item Manager, Viewer
- **7 categories**: Electronics, Books & Stationery, Clothing & Accessories, ID Cards & Documents, Keys & Locks, Sports Equipment, Bags & Wallets
- **10 items**: A mix of lost and found items across campus locations
- **10 claims**: With various statuses (approved, pending, rejected)

---

## Responsive Design

- Desktop: Full navigation bar and admin sidebar layout
- Tablet (≤900px): Admin sidebar hidden, single-column forms
- Mobile (≤680px): Navigation menu hidden, single-column item grid

---

## Limitations

Since this is a frontend-only demo:

- All data is stored in the browser's `localStorage` and is not shared between users or devices.
- Clearing browser data will reset the app to its seeded state.
- Passwords are stored in plain text — not suitable for production use.
- Image uploads are stored as base64 strings in `localStorage`, which can be limited in size.

---

## Future Improvements

- Backend integration (Node.js / Django / Laravel) with a real database
- Secure password hashing
- Email notifications for claim status updates
- Image hosting via a cloud storage service
- Mobile app version
>>>>>>> 8e9d42d020ae17cff3ac509fe0969452e1daa4a8
