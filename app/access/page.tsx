import { AccessContent } from '@/components/access/access-content';
import { AccessAgentPanel } from '@/components/access/agents/access-agent-panel';
import { AccessActivityPanel } from '@/components/access/activity/access-activity-panel';
import { ThreePanelLayout } from '@/components/layout/three-panel-layout';

export default function AccessPage() {
  return (
    <ThreePanelLayout
      leftPanel={<AccessAgentPanel />}
      centerPanel={<AccessContent />}
      rightPanel={<AccessActivityPanel />}
    />
  );
}