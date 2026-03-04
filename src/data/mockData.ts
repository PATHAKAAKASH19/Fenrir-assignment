export const mockScans = [
  {
    id: 1,
    name: "Production API Security Scan",
    type: "DAST",
    status: "in_progress",
    progress: 45,
    vulnerabilities: {
      critical: 2,
      high: 5,
      medium: 8,
      low: 12,
    },
    lastScan: "2024-01-15T10:30:00Z",
  },
];

export const mockConsoleLogs = [
  {
    timestamp: "09:00:00",
    message: "Initiating reconnaissance on target: helpdesk.demo.corp.com",
    type: "info",
  },
];

const activityLogs = [
  {
    time: "09:00:32",
    message: "Starting spidering phase on",
    url: "helpdesk.democorp.com",
    suffix: "...",
  },
  {
    time: "09:00:45",
    message: "Found configuration comment:",
    quote: "TODO: Delete the testing account (test:test)",
  },
  {
    time: "09:01:12",
    message: "Found endpoint:",
    path: "/api/users",
    suffix: "with parameters",
  },
  {
    time: "09:01:45",
    message: "Testing for",
    vulnerability: "IDOR vulnerability",
    suffix: "at",
    endpoint: "/api/users/123",
  },
  {
    time: "09:02:13",
    message: "Detected SQL injection at",
    path: "/login",
    suffix: "with credentials",
    credentials: "admin:admin123",
  },
  {
    time: "09:02:45",
    message: "Found header:",
    header: "X-UserId: 10032",
  },
  {
    time: "09:03:22",
    message: "  └─ Parameter: id=1337 (potential SQLi)",
    vulnerability: "SQL Injection",
    suffix: "confirmed",
  },
  {
    time: "09:03:45",
    message: "  └─ Payload: ' OR '1'='1",
    code: "sql-injection",
  },
  {
    time: "09:04:12",
    message: "Scanning",
    url: "api.github.com",
    path: "/repos",
  },
  {
    time: "09:04:45",
    message: "Found exposed",
    path: "/.git/config",
    suffix: "with sensitive data",
  },
];

const findingLogs = [
  {
    severity: "critical",
    time: "10:45:23",
    title: "SQL Injection in Authentication Endpoint",
    endpoint: "/api/users/profile",
    description:
      "Time-based blind SQL injection confirmed on user-controlled input in the profile update functionality. Attackers could potentially extract sensitive data from the database.",
  },
  {
    severity: "high",
    time: "10:45:23",
    title: "Unauthorized Access to User Metadata",
    endpoint: "/api/auth/login",
    description:
      "Authenticated low-privilege user was able to access metadata of other users through insecure direct object references in the user profile endpoint.",
  },
  {
    severity: "medium",
    time: "10:45:23",
    title: "Broken Authentication Rate Limiting",
    endpoint: "/api/search",
    description:
      "No effective rate limiting detected on login attempts, making the application vulnerable to brute force attacks and credential stuffing.",
  },
];

 const tableData = [
   {
     scanName: "Web App Servers",
     type: "Greybox",
     status: "Completed",
     progress: 85,
     vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
     lastScan: "4d ago",
   },
   {
     scanName: "IoT Devices",
     type: "Blackbox",
     status: "Scheduled",
     progress: 30,
     vulnerabilities: { critical: 0, high: 8, medium: 15, low: 10 },
     lastScan: "3d ago",
   },
   {
     scanName: "Temp Data",
     type: "Greybox",
     status: "Failed",
     progress: 45,
     vulnerabilities: { critical: 3, high: 7, medium: 0, low: 0 },
     lastScan: "2d ago",
   },
   {
     scanName: "Cloud Infrastructure",
     type: "Blackbox",
     status: "Completed",
     progress: 100,
     vulnerabilities: { critical: 2, high: 5, medium: 12, low: 8 },
     lastScan: "1d ago",
   },
   {
     scanName: "Database Servers",
     type: "Greybox",
     status: "Scheduled",
     progress: 15,
     vulnerabilities: { critical: 0, high: 0, medium: 6, low: 4 },
     lastScan: "5d ago",
   },
 ];



export {findingLogs, activityLogs, tableData}