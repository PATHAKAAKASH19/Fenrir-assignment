const getStatusStyles = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700 border-green-700 border-1";
    case "Scheduled":
      return "bg-gray-100 text-gray-700 border-gray-700 border-1";
    case "Failed":
      return "bg-red-100 text-red-700 border-red-700 border-1";
    default:
      return "bg-gray-100 text-gray-700 border-gray-700 border-1";
  }
};

const getProgressColor = (progress: number) => {
  if (progress < 30) return "bg-red-500";
  if (progress < 60) return "bg-orange-500";
  if (progress < 80) return "bg-yellow-500";
  return "bg-teal-500";
};


 const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-500 text-white";
      case "high":
        return "bg-orange-500 text-white";
      case "medium":
        return "bg-amber-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getSeverityLabel = (severity: string) => {
    return severity.charAt(0).toUpperCase() + severity.slice(1);
  };

 
export {getProgressColor, getStatusStyles, getSeverityBadge, getSeverityLabel}
