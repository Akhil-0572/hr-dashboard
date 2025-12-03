# HR Management Dashboard  
A clean, responsive HR Dashboard built in **Angular 12**, demonstrating UI layout design, responsive structure, modular components, and interactive UX typical of real enterprise web applications.

---

## 🎯 Objective
Build a modern HR dashboard including:

- Responsive sidebar with collapsible behavior  
- Top navbar with search, notifications, and user dropdown  
- Dashboard with stats, performance chart, recent activity, and employee table  
- Add/Edit employee modal  
- Clean, consistent UI with spacing, typography, and hover interactions  
- Strong use of CSS Grid + Flexbox  
- Smooth UX flow and responsive design across devices  

Focus is on **layout, structure, and interactivity**, not on matching templates.

---

## 🛠️ Tech Stack
- **Angular 12**
- **TypeScript**
- **RxJS**
- **SCSS / CSS Grid / Flexbox**
- **Vercel Hosting**

---

## 📌 Features

### 🔹 Layout & Navigation
- Fully responsive two-column layout  
- Collapsible sidebar on mobile  
- Sticky top navbar  
- Footer aligned across all screens  

### 🔹 Dashboard
- Summary statistic cards  
- Recent activity feed  
- Performance chart  
- Employee table preview (read-only on dashboard)  

### 🔹 Employee Management
- Full table view with:
  - Sorting (ascending/descending)
  - Pagination
  - Click row to open detail view
- Global search (debounced)
- Add candidate modal
- Edit employee modal (same component, prefilled)
- Delete functionality
- All operations update instantly using an in-memory service

### 🔹 UI/UX Enhancements
- Toast notifications (no alerts)
- Smooth animations & hover states
- Consistent spacing and professional layout
- Mobile-friendly structure  
- Modal system controlled by service

---

## 📂 Folder Structure

```
src/
│
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── sidebar/
│   │   ├── footer/
│   │   ├── toast/
│   │   ├── employee-table/
│   │   └── add-candidate/
│   │
│   ├── pages/
│   │   ├── dashboard/
│   │   ├── employees/
│   │   └── employee-detail/
│   │
│   ├── services/
│   │   ├── employee.service.ts
│   │   └── toast.service.ts
│   │
│   ├── models/employee.ts
│   └── app.module.ts
│
├── assets/
└── styles.css
```

---

## 🚀 Getting Started

### Install dependencies
```
npm install
```

### Start development server
```
ng serve --open
```

App URL: **http://localhost:4200**

---

## 📦 Build for Production
```
ng build --prod
```

Output will be available in:

```
dist/<project-name>/
```

---

## 🌍 Deploy to Vercel

Below is a **ready-to-use Vercel configuration** for Angular projects.

### 1️⃣ Install Vercel CLI
```
npm install -g vercel
```

### 2️⃣ Build the Angular app
```
ng build --prod
```

### 3️⃣ Create a `vercel.json` in the project root
Copy this:

```json
{
  "version": 2,
  "name": "hr-dashboard",
  "builds": [
    {
      "src": "dist/**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "dist/index.html"
    }
  ]
}
```

### 4️⃣ Deploy using CLI
```
vercel
```

Then select:
- "dist/***" folder when asked for the output directory
- Yes to project settings  
- And deployment completes

You’ll get a public URL like:
```
https://hr-dashboard.vercel.app
```

---

## 🧪 Feature Demonstration

### 🔍 Search (Debounced)
- Navbar search triggers filtering after **300ms** of no typing  
- Uses RxJS `debounceTime` and `distinctUntilChanged`  
- Filters across name, role, team, email  

### ➕ Add Candidate
- Opens a global modal  
- Submit shows toast: *"Added successfully"*  
- Employee table updates instantly  

### ✏ Edit Candidate
- Opens same modal pre-filled  
- Submit shows toast: *"Updated successfully"*  
- Live update in details & table pages  

### ❌ Delete Candidate
- Confirmation prompt  
- Auto-refresh employee table  

### 📊 Sorting & Pagination
- Click headers to sort  
- Ascending/descending toggle  
- Pagination buttons with active page highlight  

### 📱 Responsive Design
- Sidebar collapses into a slide-in menu  
- Cards stack on smaller screens  
- Table scrolls horizontally on mobile  

---

## 🏁 Conclusion
This HR dashboard demonstrates:

- Clean component architecture  
- Strong layout design  
- Interactive UX  
- Use of RxJS for state & debounce  
- Modal and toast systems  
- Sorting, pagination, and filtering  
- Fully responsive layout  
- Ready for production deployment  

It is suitable as a professional, presentable front-end assignment for interviews or production-style projects.

---

If you want a README **with screenshots**, a **dark mode version**, or **backend integration**, just tell me.  
