
interface FilterProps {
  selectedCategory: string;
  selectedStatus: string;
  onCategoryChange: (category: string) => void;
  onStatusChange: (status: string) => void;
}

export default function EventFilters({
  selectedCategory,
  selectedStatus,
  onCategoryChange,
  onStatusChange
}: FilterProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="bg-none-600 text-black px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        <option value="">All Categories</option>
        <option value="workshop">Workshops</option>
        <option value="conference">Conferences</option>
        <option value="webinar">Webinars</option>
        <option value="training">Training</option>
      </select>

      <select
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
        className="bg-none-600 text-black px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        <option value="">All Events</option>
        <option value="upcoming">Upcoming</option>
        <option value="past">Past</option>
      </select>
    </div>
  );
}