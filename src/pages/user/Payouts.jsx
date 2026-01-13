export default function Payouts() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Payouts</h1>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">01 Jan 2026</td>
              <td className="p-3">₹2,500</td>
              <td className="p-3 text-green-600">Paid</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">15 Jan 2026</td>
              <td className="p-3">₹1,200</td>
              <td className="p-3 text-yellow-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
