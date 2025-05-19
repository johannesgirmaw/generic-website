export default function Fields() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Fields</h1>
      <div className="mt-4">
        <p className="text-gray-600">
          This is a placeholder for the fields page.
        </p>
      </div>
    </main>
  );
}

export async function loader() {
  return null;
}
