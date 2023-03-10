import Link from "next/link";

export default function ImageSearchResults({ results }) {
  return (
    <div className="sm:pb-24 pb-40  mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items.map((result) => (
          <div key={result.link} className="mb-8">
            <Link href={result.image.contextLink} className="group">
              <img
                src={result.link}
                alt={result.title}
                className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"
              />

              <h2 className="group-hover:underline truncate text-xl">
                {result.title}
              </h2>

              <p className="group-hover:underline text-gray-600">
                {result.displayLink}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className="ml-16"></div>
    </div>
  );
}
