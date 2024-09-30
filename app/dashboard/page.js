import Table from './table';

export default function DashboardPage() {
  return (
    <div className="p-6 bg-gray-100 h-screen">
      <h1 className="text-3xl font-bold mb-4 text-gray-700">Dashboard</h1>
      <Table />
    </div>
  );
}
