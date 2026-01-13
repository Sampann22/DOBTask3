import { Tree, TreeNode } from "react-organizational-chart";

export default function ReferralAnalytics() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Referral Analytics</h1>

      {/* Tree */}
      <div className="bg-white p-6 rounded shadow mb-6 overflow-x-auto">
        <Tree
          label={<div className="p-2 bg-primary text-white rounded">Root</div>}
        >
          <TreeNode label={<div className="p-2 bg-gray-200 rounded">Level 1</div>}>
            <TreeNode label={<div className="p-2 bg-gray-100 rounded">Level 2</div>} />
          </TreeNode>
        </Tree>
      </div>

      {/* Reports */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="font-semibold mb-2">Reports</h2>
        <p className="text-gray-600 text-sm">
          Referral performance and commission summaries will appear here.
        </p>
      </div>
    </div>
  );
}
