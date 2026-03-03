import MainLayout from "../components/layout/MainLayout";
import PageWrapper from "../components/layout/PageWrapper";
import { Button } from "../components/ui/button";
import { IconPlus, IconFilter, IconColumns3 } from "@tabler/icons-react";

const Dashboard = () => {
  return (
    <MainLayout>
      <PageWrapper
        title="Scan Dashboard"
        actions={
          <Button className="bg-primary hover:bg-primary/90">
            <IconPlus size={16} className="mr-2" />
            New Scan
          </Button>
        }
      >
        {/* Stats will go here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Stat cards placeholder */}
        </div>

        {/* Table will go here */}
        <div className="bg-surface rounded-lg border border-border p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Scans</h2>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <IconFilter size={16} className="mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <IconColumns3 size={16} className="mr-2" />
                Columns
              </Button>
            </div>
          </div>

          {/* Table placeholder */}
          <div className="text-center py-8 text-muted-foreground">
            Scan table coming soon...
          </div>
        </div>
      </PageWrapper>
    </MainLayout>
  );
};

export default Dashboard;
