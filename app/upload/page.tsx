import { UploadContent } from '@/components/upload/upload-content';
import { UploadAgentPanel } from '@/components/upload/agents/upload-agent-panel';
import { UploadActivityPanel } from '@/components/upload/activity/upload-activity-panel';
import { ThreePanelLayout } from '@/components/layout/three-panel-layout';

export default function UploadPage() {
  return (
    <ThreePanelLayout
      leftPanel={<UploadAgentPanel />}
      centerPanel={<UploadContent />}
      rightPanel={<UploadActivityPanel />}
    />
  );
}