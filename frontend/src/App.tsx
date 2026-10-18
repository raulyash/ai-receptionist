
import "./App.css";

const calls = [
  { name: "Priya Sharma", reason: "Appointment booking", time: "09:42 AM", status: "Booked" },
  { name: "Rahul Mehta", reason: "Business hours enquiry", time: "09:28 AM", status: "Resolved" },
  { name: "Anonymous caller", reason: "Requested a callback", time: "09:15 AM", status: "Follow-up" },
  { name: "Ananya Patel", reason: "Service enquiry", time: "08:56 AM", status: "Resolved" },
];

const appointments = [
  { name: "Priya Sharma", service: "Consultation", time: "10:30 AM" },
  { name: "Aarav Shah", service: "Follow-up", time: "11:15 AM" },
  { name: "Neha Kapoor", service: "New appointment", time: "12:00 PM" },
];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-icon">R</span> RingPilot</div>
        <div className="workspace">WORKSPACE</div>
        <nav>
          <a className="nav-item active" href="#overview">▦ <span>Overview</span></a>
          <a className="nav-item" href="#calls">◷ <span>Call history</span></a>
          <a className="nav-item" href="#appointments">▣ <span>Appointments</span></a>
          <a className="nav-item" href="#assistant">◉ <span>AI assistant</span></a>
          <a className="nav-item" href="#settings">⚙ <span>Settings</span></a>
        </nav>
        <div className="sidebar-bottom">
          <div className="avatar">SC</div>
          <div><strong>Sunrise Clinic</strong><small>Business workspace</small></div>
        </div>
      </aside>

      <main className="main-content" id="overview">
        <header className="topbar">
          <div className="breadcrumb">Workspace <span>/</span> Overview</div>
          <div className="profile"><span className="online-dot" /> Assistant online <div className="avatar">SC</div></div>
        </header>

        <section className="welcome">
          <div>
            <p className="eyebrow">SUNDAY, OCTOBER 18</p>
            <h1>Good morning!</h1>
            <p className="muted">Here's what's happening with your calls today.</p>
          </div>
          <button className="primary-button" onClick={() => alert("Assistant configuration will be available soon.")}>＋ Configure assistant</button>
        </section>

        <section className="stats-grid">
          <article className="stat-card">
            <p>Total calls</p><div className="stat-number">128</div>
            <span className="stat-note positive">↑ 12% <span>vs. last week</span></span>
          </article>
          <article className="stat-card">
            <p>Calls answered by AI</p><div className="stat-number">116</div>
            <span className="stat-note positive">90.6% <span>answer rate</span></span>
          </article>
          <article className="stat-card">
            <p>Appointments booked</p><div className="stat-number">34</div>
            <span className="stat-note positive">↑ 8 <span>this week</span></span>
          </article>
          <article className="stat-card">
            <p>Needs follow-up</p><div className="stat-number">7</div>
            <span className="stat-note warning">Action required</span>
          </article>
        </section>

        <section className="content-grid">
          <article className="panel calls-panel" id="calls">
            <div className="panel-heading">
              <div><h2>Recent calls</h2><p className="muted">Latest customer conversations</p></div>
              <a href="#calls">View all →</a>
            </div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>CALLER</th><th>REASON</th><th>TIME</th><th>OUTCOME</th></tr></thead>
                <tbody>
                  {calls.map((call) => (
                    <tr key={call.name}>
                      <td><strong>{call.name}</strong></td>
                      <td>{call.reason}</td>
                      <td>{call.time}</td>
                      <td><span className={`status ${call.status.toLowerCase()}`}>{call.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="panel appointments-panel" id="appointments">
            <div className="panel-heading">
              <div><h2>Upcoming appointments</h2><p className="muted">Today's schedule</p></div>
              <a href="#appointments">View all →</a>
            </div>
            <div className="appointment-list">
              {appointments.map((appointment) => (
                <div className="appointment" key={appointment.name}>
                  <div className="appointment-time">{appointment.time}</div>
                  <div className="appointment-info"><strong>{appointment.name}</strong><span>{appointment.service}</span></div>
                  <span className="appointment-dot" />
                </div>
              ))}
            </div>
            <button className="secondary-button" onClick={() => alert("Appointment creation will be available soon.")}>＋ Add appointment</button>
          </article>
        </section>

        <section className="assistant-banner" id="assistant">
          <div className="assistant-symbol">✳</div>
          <div className="assistant-copy">
            <strong>Your AI receptionist is ready</strong>
            <p>Your assistant can answer common questions and help customers request appointments.</p>
          </div>
          <span className="live-pill"><span className="online-dot" /> Online</span>
        </section>

        <footer>RingPilot · AI-powered customer conversations</footer>
      </main>
    </div>
  );
}

export default App;
