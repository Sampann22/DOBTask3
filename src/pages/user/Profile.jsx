export default function Profile() {
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold mb-6">Edit Profile</h1>

      <form className="bg-white p-6 rounded shadow space-y-4">
        <div>
          <label className="block text-sm text-gray-600">Name</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-2 border rounded"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600">Password</label>
          <input
            type="password"
            className="w-full mt-1 p-2 border rounded"
            placeholder="New password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
