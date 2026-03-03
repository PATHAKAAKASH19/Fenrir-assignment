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
  // Add more mock data as needed
];

export const mockConsoleLogs = [
  {
    timestamp: "09:00:00",
    message: "Initiating reconnaissance on target: helpdesk.demo.corp.com",
    type: "info",
  },
  // More logs from PDF
];
