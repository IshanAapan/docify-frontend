Docify - Doctor Appointment System 🏥

Live Demo:- https://doci-beta.vercel.app/

Overview
Docify is a MERN Stack-based doctor appointment system with four user roles: Guest, Patient, Doctor, and Admin. It provides an efficient way for patients to book appointments, doctors to manage their schedules, and admins to oversee the entire system.

Features
🔹 Guest
   Can browse the Home Page and Doctor Listings.
  Cannot book an appointment.
  
🔹 Patient
  Must register and log in to book an appointment.
  Can schedule an appointment with a specific doctor on a specific date & time.
  Can view booked appointments with status: Pending, Approved, or Rejected.
  Can apply to become a doctor (request is sent to the admin for approval).
  Can update their profile.

🔹 Doctor
  Becomes a doctor once approved by the admin.
  Can view appointment requests from patients.
  Has the ability to approve or reject appointments.

🔹 Admin
  Manages all users, doctors, and appointments.
  Reviews & approves doctor applications.
  Pages
  Home
  Sign Up / Sign In
  Doctor Listings
  Appointments
  Apply for Doctor
  About Us
  Contact Us
  Profile

Tech Stack
Frontend: React + Vite ⚡
Backend: Node.js, Express.js
Database: MongoDB


Installation & Setup
1️⃣ Clone the repository:
  git clone https://github.com/your-repo/docify.git
  cd docify
  
2️⃣ Install dependencies:
  npm install
  
3️⃣ Start the development server:
  npm run dev
🚀 Now, open http://localhost:5173/ in your browser to use Docify!
