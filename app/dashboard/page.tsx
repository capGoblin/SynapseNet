import { DashboardContent } from '@/components/dashboard/dashboard-content';
import { ActivityPanel } from '@/components/dashboard/activity/activity-panel';
import { AgentPanel } from '@/components/dashboard/agents/agent-panel';
import { ThreePanelLayout } from '@/components/layout/three-panel-layout';

export default function DashboardPage() {
  return (
    <ThreePanelLayout
      leftPanel={<AgentPanel />}
      centerPanel={<DashboardContent />}
      rightPanel={<ActivityPanel />}
    />
  );
}