import {
  IconClock,
  IconX,
  IconSpider,
  IconGridDots,
  IconFlask,
  IconClipboardCheck,
  IconFileDescription,
  IconChevronDown,
} from "@tabler/icons-react";
import { getSeverityBadge, getSeverityLabel } from "@/utils/utilsFuntions";
import { findingLogs, activityLogs } from "@/data/mockData";
import { useState } from "react";

const TealLink = ({ children }: { children: React.ReactNode }) => (
  <span className="text-teal-600 dark:text-teal-400 underline font-mono">
    {children}
  </span>
);

const DarkBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex">
    <span className="bg-gray-700/90 dark:bg-[#0f172a] text-white text-xs px-2 py-1 rounded-full font-mono border dark:border-gray-600 flex justify-center items-center">
      {children}
    </span>
  </span>
);

const TealBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex">
    <span className="bg-teal-600 dark:bg-teal-700 text-white text-xs px-2 py-0.5 rounded-full font-mono">
      {children}
    </span>
  </span>
);

const BoldRed = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold text-red-500 dark:text-red-400">{children}</span>
);

const QuotedTeal = ({ children }: { children: React.ReactNode }) => (
  <span className="text-teal-600 dark:text-teal-400 font-mono">
    "{children}"
  </span>
);

type Logs = {
  time?: string;
  message?: string;
  url?: string;
  suffix?: string;
  quote?: string;
  path?: string;
  vulnerability?: string;
  endpoint?: string;
  credentials?: string;
  header?: string;
  code?: string;
};

export default function Scans() {
  const [consoleExpanded, setConsoleExpanded] = useState(true);

  const renderActivityMessage = (log: Logs) => {
    const parts = [];

    if (log.message) {
      parts.push(
        <span key="message" className="text-gray-900 dark:text-gray-100">
          {log.message}{" "}
        </span>,
      );
    }
    if (log.url) parts.push(<TealLink key="url">{log.url} </TealLink>);
    if (log.quote)
      parts.push(<QuotedTeal key="quote">{log.quote} </QuotedTeal>);
    if (log.path) {
      parts.push(<DarkBadge key="path">{log.path}</DarkBadge>);
      parts.push(<span key="path-space"> </span>);
    }
    if (log.vulnerability)
      parts.push(<BoldRed key="vuln">{log.vulnerability} </BoldRed>);
    if (log.credentials) {
      parts.push(<TealBadge key="creds">{log.credentials}</TealBadge>);
      parts.push(<span key="creds-space"> </span>);
    }
    if (log.header) {
      parts.push(<TealBadge key="header">{log.header}</TealBadge>);
      parts.push(<span key="header-space"> </span>);
    }
    if (log.code) {
      parts.push(<DarkBadge key="code">{log.code}</DarkBadge>);
      parts.push(<span key="code-space"> </span>);
    }
    if (log.endpoint)
      parts.push(<TealLink key="endpoint">{log.endpoint} </TealLink>);
    if (log.suffix) {
      parts.push(
        <span key="suffix" className="text-gray-900 dark:text-gray-100">
          {log.suffix}
        </span>,
      );
    }

    return parts;
  };

  return (
    <div
      className="p-3 md:p-6 pb-0 relative min-h-screen font-sans bg-gray-50 dark:bg-gray-950"
      style={{
        fontFamily: "'DM Sans', 'Plus Jakarta Sans', system-ui, sans-serif",
      }}
    >
      <div className="space-y-4 md:space-y-6 pb-16 md:pb-20">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-4 md:p-6 shadow-sm border border-transparent dark:border-gray-700/50">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-32 h-32 md:w-40 md:h-40 border-r border-gray-300 dark:border-gray-700">
                <div className="absolute inset-0 rounded-full bg-black/80 dark:bg-gray-800 w-24 h-24 md:w-30 md:h-30 top-4 left-4 md:top-5 md:left-5 " />
                <div className="absolute inset-0 flex flex-col items-center justify-center ">
                  <span className="font-bold text-xl md:text-2xl text-teal-500 dark:text-teal-400">
                    0%
                  </span>
                  <span className="text-gray-400 dark:text-gray-500 text-[10px] md:text-xs">
                    In Progress
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div className="overflow-x-auto pb-4 hide-scrollbar">
                <div className="relative flex justify-between items-center mb-6 min-w-125 md:min-w-0">
                  <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 z-0" />
                  <div
                    className="absolute top-5 left-0 h-0.5 bg-teal-500 z-0"
                    style={{ width: "10%" }}
                  />

                  <div className="flex flex-col items-center z-10 gap-1 md:gap-2">
                    <div className="w-10 h-10 md:w-14 md:h-14 flex justify-center items-center rounded-full bg-teal-200/50 dark:bg-teal-900/40">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-teal-500 dark:bg-teal-600 flex items-center justify-center">
                        <IconSpider className="h-4 w-4 md:h-5 md:w-5 text-white" />
                      </div>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
                      Spidering
                    </span>
                  </div>

                  {[
                    {
                      icon: (
                        <IconGridDots className="h-4 w-4 md:h-5 md:w-5 text-gray-400 dark:text-gray-500" />
                      ),
                      label: "Mapping",
                    },
                    {
                      icon: (
                        <IconFlask className="h-4 w-4 md:h-5 md:w-5 text-gray-400 dark:text-gray-500" />
                      ),
                      label: "Testing",
                    },
                    {
                      icon: (
                        <IconClipboardCheck className="h-4 w-4 md:h-5 md:w-5 text-gray-400 dark:text-gray-500" />
                      ),
                      label: "Validating",
                    },
                    {
                      icon: (
                        <IconFileDescription className="h-4 w-4 md:h-5 md:w-5 text-gray-400 dark:text-gray-500" />
                      ),
                      label: "Reporting",
                    },
                  ].map(({ icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center z-10 gap-1 md:gap-2"
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center bg-white dark:bg-gray-800">
                        {icon}
                      </div>
                      <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-300 dark:border-gray-700 pt-4 md:pt-6">
                <div className="grid grid-cols-2 md:flex md:gap-6 text-xs md:text-sm gap-3 md:justify-between">
                  {[
                    { label: "Scan Type", value: "Grey Box", teal: false },
                    { label: "Targets", value: "google.com", teal: false },
                    {
                      label: "Started At",
                      value: "Nov 22, 09:00AM",
                      teal: false,
                    },
                    { label: "Credentials", value: "2 Active", teal: false },
                    { label: "Files", value: "Control.pdf", teal: false },
                    { label: "Checklists", value: "40/350", teal: true },
                  ].map(({ label, value, teal }) => (
                    <div
                      key={label}
                      className="flex flex-col gap-0.5 md:gap-1 "
                    >
                      <span className="text-gray-400 dark:text-gray-500 font-medium text-[10px] md:text-xs">
                        {label}
                      </span>
                      <span
                        className={`font-medium text-xs md:text-sm ${teal ? "text-teal-600 dark:text-teal-400" : "text-gray-900 dark:text-gray-100"}`}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-transparent dark:border-gray-700/50">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-green-500"></span>
              </span>
              <span className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">
                Live Scan Console
              </span>
              <div className="flex items-center gap-1 ml-1 md:ml-2 border border-gray-200 dark:border-gray-600 px-2 md:px-3 py-1 md:py-2 rounded-full bg-gray-100 dark:bg-gray-800">
                <IconClock className="h-3 w-3 md:h-4 md:w-4 text-gray-400 dark:text-gray-500" />
                <span className="text-[10px] md:text-xs text-gray-400 dark:text-gray-500">
                  Running...
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <button
                onClick={() => setConsoleExpanded(!consoleExpanded)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                <IconChevronDown
                  className={`h-4 w-4 md:h-5 md:w-5 text-gray-500 dark:text-gray-400 transition-transform ${consoleExpanded ? "" : "rotate-180"}`}
                />
              </button>
              <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                <IconX className="h-4 w-4 md:h-5 md:w-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
          </div>

          {consoleExpanded && (
            <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
              <div className="w-full md:w-[65%] p-3 md:p-4">
                <div className="flex gap-3 md:gap-4 mb-3 md:mb-4 border-b border-gray-200 dark:border-gray-700 overflow-x-auto hide-scrollbar">
                  <button className="pb-1 md:pb-2 px-1 text-xs md:text-sm font-medium text-teal-600 dark:text-teal-400 border-b-2 border-teal-600 dark:border-teal-400 whitespace-nowrap">
                    Activity Log
                  </button>
                  <button className="pb-1 md:pb-2 px-1 text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 whitespace-nowrap">
                    Verification Loops
                  </button>
                </div>

                <div
                  className="space-y-1 max-h-60 md:max-h-100 overflow-y-auto text-xs md:text-sm"
                  style={{
                    fontFamily: "'JetBrains Mono', 'IBM Plex Mono', monospace",
                  }}
                >
                  {activityLogs.map((log, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 md:gap-3 py-1 border-b border-gray-50 dark:border-gray-800 last:border-0"
                    >
                      <span className="text-gray-400 dark:text-gray-500 whitespace-nowrap text-[10px] md:text-xs">
                        [{log.time}]
                      </span>
                      <span className="text-gray-900 dark:text-gray-100 leading-relaxed text-[10px] md:text-xs">
                        {renderActivityMessage(log)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-[35%] p-3 md:p-4">
                <h3 className="text-xs md:text-sm font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                  Finding Log
                </h3>
                <div className="space-y-2 md:space-y-3 max-h-60 md:max-h-100 overflow-y-auto">
                  {findingLogs.map((finding, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-lg p-2 md:p-3 border border-gray-200 dark:border-gray-700 hover:shadow-md dark:hover:shadow-gray-900 transition-shadow duration-200"
                    >
                      <div className="flex items-center justify-between mb-1 md:mb-2">
                        <span
                          className={`px-1.5 md:px-2 py-0.5 rounded-full text-[8px] md:text-xs font-medium ${getSeverityBadge(finding.severity)}`}
                        >
                          {getSeverityLabel(finding.severity)}
                        </span>
                        <span className="text-[8px] md:text-xs text-gray-400 dark:text-gray-500 font-mono">
                          {finding.time}
                        </span>
                      </div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 text-[10px] md:text-sm mb-0.5 md:mb-1">
                        {finding.title}
                      </h4>
                      <div className="mb-1 text-[8px] md:text-xs leading-relaxed font-medium">
                        <TealLink>{finding.endpoint}</TealLink>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-[8px] md:text-xs leading-relaxed font-medium mt-2 md:mt-3">
                        {finding.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 lg:left-70 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-3 md:px-6 py-2 z-40">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 md:gap-6 text-[10px] md:text-sm">
            {["Sub-Agents: 0", "Parallel Executions: 2", "Operations: 1"].map(
              (label) => (
                <div key={label} className="flex items-center gap-1 md:gap-2">
                  <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-gray-400 dark:bg-gray-500"></span>
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 whitespace-nowrap">
                    {label}
                  </span>
                </div>
              ),
            )}
          </div>
          <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm">
            <span className="text-red-600 dark:text-red-400 font-medium whitespace-nowrap">
              Critical: 0
            </span>
            <span className="text-gray-300 dark:text-gray-600 hidden sm:inline">
              |
            </span>
            <span className="text-orange-600 dark:text-orange-400 font-medium whitespace-nowrap">
              High: 0
            </span>
            <span className="text-gray-300 dark:text-gray-600 hidden sm:inline">
              |
            </span>
            <span className="text-amber-600 dark:text-amber-400 font-medium whitespace-nowrap">
              Medium: 0
            </span>
            <span className="text-gray-300 dark:text-gray-600 hidden sm:inline">
              |
            </span>
            <span className="text-green-600 dark:text-green-400 font-medium whitespace-nowrap">
              Low: 0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
