import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  IconSearch,
  IconRefresh,
  IconBan,
  IconAlertTriangle,
  IconSearch as IconSearchMagnifying,
  IconArrowUp,
  IconArrowDown,
  IconFilter,
  IconColumns,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import { getProgressColor, getStatusStyles } from "@/utils/utilsFuntions";
import { tableData } from "@/data/mockData";
import { useState, useMemo } from "react";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: "",
    status: "",
    severity: "",
  });

  const severityCards = [
    {
      title: "Critical Severity",
      icon: IconBan,
      iconBg: "bg-red-100 dark:bg-red-900/30",
      iconColor: "text-red-600 dark:text-red-400",
      value: "86",
      trend: "+2%",
      trendIcon: IconArrowUp,
      trendColor: "text-red-600 dark:text-red-400",
      trendText: "increase than yesterday",
    },
    {
      title: "High Severity",
      icon: IconAlertTriangle,
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-red-600 dark:text-red-400",
      value: "16",
      trend: "+0.9%",
      trendIcon: IconArrowUp,
      trendColor: "text-red-600 dark:text-red-400",
      trendText: "increase than yesterday",
    },
    {
      title: "Medium Severity",
      icon: IconAlertTriangle,
      iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
      iconColor: "text-yellow-600 dark:text-yellow-400",
      value: "26",
      trend: "-0.9%",
      trendIcon: IconArrowDown,
      trendColor: "text-green-500 dark:text-green-400",
      trendText: "decrease than yesterday",
    },
    {
      title: "Low Severity",
      icon: IconSearchMagnifying,
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400",
      value: "16",
      trend: "+0.9%",
      trendIcon: IconArrowUp,
      trendColor: "text-red-600 dark:text-red-400",
      trendText: "increase than yesterday",
    },
  ];

 
  const filteredData = useMemo(() => {
    return tableData.filter((row) => {
     
      const matchesSearch =
        row.scanName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.type.toLowerCase().includes(searchQuery.toLowerCase());

    
      const matchesType = !filters.type || row.type === filters.type;

    
      const matchesStatus = !filters.status || row.status === filters.status;

    
      const matchesSeverity =
        !filters.severity ||
        (filters.severity === "critical" && row.vulnerabilities.critical > 0) ||
        (filters.severity === "high" && row.vulnerabilities.high > 0) ||
        (filters.severity === "medium" && row.vulnerabilities.medium > 0) ||
        (filters.severity === "low" && row.vulnerabilities.low > 0);

      return matchesSearch && matchesType && matchesStatus && matchesSeverity;
    });
  }, [searchQuery, filters]);

  const clearFilters = () => {
    setFilters({ type: "", status: "", severity: "" });
    setSearchQuery("");
  };

  return (
    <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="space-y-4 md:space-y-6">
       
        <div className="flex flex-col gap-4 md:gap-5 bg-white dark:bg-gray-900 px-3 md:px-2 py-3 md:py-3 rounded-2xl border border-transparent dark:border-gray-700/50">
         
          <div className="overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex items-center gap-2 text-xs md:text-sm min-w-max md:min-w-0 flex-nowrap md:flex-wrap justify-between mx-0 md:mx-3">
              {[
                { label: "Org:", value: "Project X" },
                { label: "Owner:", value: "Nammagiri" },
                { label: "Total Scans:", value: "100" },
                { label: "Scheduled:", value: "1000" },
                { label: "Rescans:", value: "100" },
                { label: "Failed Scans:", value: "100" },
              ].map(({ label, value }, i) => (
                <div
                  key={label}
                  className="flex items-center gap-1 md:gap-3 shrink-0"
                >
                  <span className="text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {label}
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                    {value}
                  </span>
                  {i < 5 && (
                    <span className="text-gray-300 dark:text-gray-600 mx-1 hidden md:inline">
                      |
                    </span>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-1 shrink-0 ml-2 md:ml-0">
                <IconRefresh className="h-3 w-3 md:h-3.5 md:w-3.5 text-gray-400 dark:text-gray-500" />
                <span className="text-gray-500 dark:text-gray-400 text-xs md:text-sm whitespace-nowrap">
                  10 mins ago
                </span>
              </div>
            </div>
          </div>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {severityCards.map((card) => (
              <div
                key={card.title}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md dark:hover:shadow-gray-900 border border-transparent dark:border-gray-700/50 transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-2 md:mb-4">
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    {card.title}
                  </span>
                  <div className={`p-1.5 md:p-2 rounded-full ${card.iconBg}`}>
                    <card.icon
                      className={`h-4 w-4 md:h-5 md:w-5 ${card.iconColor}`}
                    />
                  </div>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {card.value}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-1">
                    <div className="flex items-center gap-1">
                      <card.trendIcon
                        className={`h-3 w-3 md:h-3.5 md:w-3.5 ${card.trendColor}`}
                      />
                      <span
                        className={`text-xs md:text-sm font-medium ${card.trendColor}`}
                      >
                        {card.trend}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] md:text-xs ${card.trendColor} sm:ml-1`}
                    >
                      {card.trendText}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
        <div className="pt-2 md:pt-3 rounded-2xl bg-white dark:bg-gray-900 border border-transparent dark:border-gray-700/50">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4 mb-3 md:mb-4 px-3 md:px-3">
            <div className="w-full sm:flex-1">
              <div className="relative">
                <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-400 dark:text-gray-500" />
                <Input
                  placeholder="Search scans..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 w-full h-10 md:h-12 rounded-md text-sm md:text-base
                    border-gray-300 dark:border-gray-600
                    bg-white dark:bg-gray-800
                    text-gray-900 dark:text-white
                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                    focus:border-teal-500 focus:ring-teal-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <IconX className="h-3 w-3 md:h-4 md:w-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex-1 sm:flex-none border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 dark:bg-gray-800 flex items-center justify-center gap-2 h-10 md:h-12 text-sm md:text-base"
              >
                <IconFilter className="h-4 w-4" />
                Filter
                {(filters.type || filters.status || filters.severity) && (
                  <span className="ml-1 bg-teal-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {Object.values(filters).filter(Boolean).length}
                  </span>
                )}
              </Button>
              <Button
                variant="outline"
                className="flex-1 sm:flex-none border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 dark:bg-gray-800 flex items-center justify-center gap-2 h-10 md:h-12 text-sm md:text-base"
              >
                <IconColumns className="h-4 w-4" />
                <span className="hidden sm:inline">Column</span>
              </Button>
              <Button className="flex-1 sm:flex-none bg-[#00b8a2] hover:bg-[#00a08d] text-white rounded-md flex items-center justify-center gap-2 h-10 md:h-12 text-sm md:text-base">
                <IconPlus className="h-4 w-4" />
                <span className="hidden sm:inline">New scan</span>
              </Button>
            </div>
          </div>

       
          {showFilters && (
            <div className="mx-3 mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Filters
                </h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-teal-600 hover:text-teal-700 dark:text-teal-400"
                >
                  Clear all
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <select
                  value={filters.type}
                  onChange={(e) =>
                    setFilters({ ...filters, type: e.target.value })
                  }
                  className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm"
                >
                  <option value="">All Types</option>
                  <option value="Greybox">Greybox</option>
                  <option value="Blackbox">Blackbox</option>
                </select>
                <select
                  value={filters.status}
                  onChange={(e) =>
                    setFilters({ ...filters, status: e.target.value })
                  }
                  className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm"
                >
                  <option value="">All Status</option>
                  <option value="Completed">Completed</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Failed">Failed</option>
                </select>
                <select
                  value={filters.severity}
                  onChange={(e) =>
                    setFilters({ ...filters, severity: e.target.value })
                  }
                  className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm"
                >
                  <option value="">All Severities</option>
                  <option value="critical">Critical</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>
          )}

      
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs md:text-sm">
                <thead className="bg-gray-50 dark:bg-gray-800 text-slate-500 dark:text-gray-400 text-[10px] md:text-[12px] uppercase tracking-wider">
                  <tr>
                    {[
                      "Scan Name",
                      "Type",
                      "Status",
                      "Progress",
                      "Vulnerability",
                      "Last Scan",
                    ].map((col) => (
                      <th
                        key={col}
                        className="px-3 md:px-6 py-2 md:py-3 text-left font-medium whitespace-nowrap"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredData.length > 0 ? (
                    filteredData.map((row, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors"
                      >
                        
                        <td className="px-3 md:px-6 py-2 md:py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                          {row.scanName}
                        </td>

                      
                        <td className="px-3 md:px-6 py-2 md:py-4 text-gray-600 dark:text-gray-400 whitespace-nowrap">
                          {row.type}
                        </td>

                        
                        <td className="px-3 md:px-6 py-2 md:py-4">
                          <span
                            className={`px-2 md:px-3 py-1 md:py-2 rounded-sm text-[10px] md:text-xs font-medium ${getStatusStyles(row.status)} whitespace-nowrap`}
                          >
                            {row.status}
                          </span>
                        </td>

                       
                        <td className="px-3 md:px-6 py-2 md:py-4">
                          <div className="flex items-center gap-1 md:gap-3">
                            <div className="w-16 md:w-24 h-1.5 md:h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${getProgressColor(row.progress)} rounded-full`}
                                style={{ width: `${row.progress}%` }}
                              />
                            </div>
                            <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
                              {row.progress}%
                            </span>
                          </div>
                        </td>

                        <td className="px-3 md:px-6 py-2 md:py-4">
                          <div className="flex items-center gap-1">
                            {row.vulnerabilities.critical > 0 && (
                              <span className="px-2 md:px-3 py-1 md:py-2 bg-red-500 text-white rounded text-[10px] md:text-xs font-medium min-w-5 md:min-w-6 text-center">
                                {row.vulnerabilities.critical}
                              </span>
                            )}
                            {row.vulnerabilities.high > 0 && (
                              <span className="px-2 md:px-3 py-1 md:py-2 bg-orange-500 text-white rounded text-[10px] md:text-xs font-medium min-w-5 md:min-w-6 text-center">
                                {row.vulnerabilities.high}
                              </span>
                            )}
                            {row.vulnerabilities.medium > 0 && (
                              <span className="px-2 md:px-3 py-1 md:py-2 bg-yellow-400 text-white rounded text-[10px] md:text-xs font-medium min-w-5 md:min-w-6 text-center">
                                {row.vulnerabilities.medium}
                              </span>
                            )}
                            {row.vulnerabilities.low > 0 && (
                              <span className="px-2 md:px-3 py-1 md:py-2 bg-green-500 text-white rounded text-[10px] md:text-xs font-medium min-w-5 md:min-w-6 text-center">
                                {row.vulnerabilities.low}
                              </span>
                            )}
                          </div>
                        </td>

                       
                        <td className="px-3 md:px-6 py-2 md:py-4 text-gray-400 dark:text-gray-500 whitespace-nowrap">
                          {row.lastScan}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-6 py-8 text-center text-gray-500 dark:text-gray-400"
                      >
                        No scans found matching your criteria
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-3 md:px-6 py-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                Showing 1-{filteredData.length} of {filteredData.length} scans
              </span>
              <div className="flex items-center gap-1 md:gap-2 flex-wrap justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  disabled
                  className="h-8 md:h-9 text-xs md:text-sm border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 dark:bg-gray-800"
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 md:h-9 text-xs md:text-sm bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800"
                >
                  1
                </Button>
                {["2", "3"].map((page) => (
                  <Button
                    key={page}
                    variant="outline"
                    size="sm"
                    className="h-8 md:h-9 text-xs md:text-sm border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 dark:bg-gray-800 hover:dark:bg-gray-700"
                  >
                    {page}
                  </Button>
                ))}
                <span className="text-gray-400 dark:text-gray-500 text-xs md:text-sm">
                  ...
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 md:h-9 text-xs md:text-sm border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 dark:bg-gray-800 hover:dark:bg-gray-700"
                >
                  10
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 md:h-9 text-xs md:text-sm border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 dark:bg-gray-800 hover:dark:bg-gray-700"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
