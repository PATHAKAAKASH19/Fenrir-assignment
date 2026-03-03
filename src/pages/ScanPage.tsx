import MainLayout from "../components/layout/MainLayout";
import PageWrapper from "../components/layout/PageWrapper";
import { Button } from "../components/ui/button";
import { IconDownload, IconSquare } from "@tabler/icons-react";

const ScanDetail = () => {
  return (
    <MainLayout>
      <PageWrapper
        title="Active Scan: Production API"
        actions={
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <IconDownload size={16} className="mr-2" />
              Export Report
            </Button>
            <Button variant="destructive" size="sm">
              <IconSquare size={16} className="mr-2" />
              Stop Scan
            </Button>
          </div>
        }
      >
        {/* Progress and metadata will go here */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-1 bg-surface rounded-lg border border-border p-4">
            <div className="text-center">Progress Circle</div>
          </div>
          <div className="lg:col-span-2 bg-surface rounded-lg border border-border p-4">
            <div>Step Tracker</div>
          </div>
        </div>

        {/* Split panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-surface rounded-lg border border-border p-4">
            <h3 className="font-semibold mb-4">Live Console</h3>
            <div className="text-center py-8 text-muted-foreground">
              Console logs coming soon...
            </div>
          </div>
          <div className="bg-surface rounded-lg border border-border p-4">
            <h3 className="font-semibold mb-4">Finding Log</h3>
            <div className="text-center py-8 text-muted-foreground">
              Findings coming soon...
            </div>
          </div>
        </div>
      </PageWrapper>
    </MainLayout>
  );
};

export default ScanDetail;
