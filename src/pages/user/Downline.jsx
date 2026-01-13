import { Tree, TreeNode } from "react-organizational-chart";

export default function Downline() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Downline</h1>

      <div className="bg-white p-6 rounded shadow overflow-x-auto">
        <Tree
          lineWidth={"2px"}
          lineColor={"#cbd5e1"}
          lineBorderRadius={"10px"}
          label={
            <div className="px-4 py-2 bg-primary text-white rounded text-sm">
              You
            </div>
          }
        >
          {/* Level 1 */}
          <TreeNode
            label={
              <div className="px-4 py-2 bg-green-500 text-white rounded text-sm">
                Level 1 - User A
              </div>
            }
          >
            {/* Level 2 */}
            <TreeNode
              label={
                <div className="px-4 py-2 bg-blue-500 text-white rounded text-sm">
                  Level 2 - User B
                </div>
              }
            >
              {/* Level 3 */}
              <TreeNode
                label={
                  <div className="px-4 py-2 bg-gray-500 text-white rounded text-sm">
                    Level 3 - User C
                  </div>
                }
              />
            </TreeNode>
          </TreeNode>

          <TreeNode
            label={
              <div className="px-4 py-2 bg-green-500 text-white rounded text-sm">
                Level 1 - User D
              </div>
            }
          />
        </Tree>
      </div>
    </div>
  );
}
