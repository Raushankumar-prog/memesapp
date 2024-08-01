export default function Upload() {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Upload Meme</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter image URL"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Caption</label>
          <textarea
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter caption"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
