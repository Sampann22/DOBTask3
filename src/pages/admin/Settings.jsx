export default function Settings() {
  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>

      <form className="bg-white p-6 rounded shadow space-y-4">
        <div>
          <label className="block text-sm text-gray-600">
            Level 1 Commission (%)
          </label>
          <input className="w-full mt-1 p-2 border rounded" type="number" />
        </div>

        <div>
          <label className="block text-sm text-gray-600">
            Level 2 Commission (%)
          </label>
          <input className="w-full mt-1 p-2 border rounded" type="number" />
        </div>

        <div>
          <label className="block text-sm text-gray-600">
            Level 3 Commission (%)
          </label>
          <input className="w-full mt-1 p-2 border rounded" type="number" />
        </div>

        <button className="w-full bg-primary text-white py-2 rounded">
          Save Settings
        </button>
      </form>
    </div>
  );
}
