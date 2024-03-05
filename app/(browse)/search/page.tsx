import { redirect } from "next/navigation";
import { Results, ResultsSkeleton } from "./_components/results";
import { Suspense } from "react";

interface SearchPageProps {
  searchParams: {
    term?: string;
  };
}

const SearchPage = ({ searchParams }: SearchPageProps) => {
  if (!searchParams.term) {
    redirect("/");
  }

  return (
    <div className="mx-auto h-full max-w-screen-2xl p-8">
      <Suspense fallback={<ResultsSkeleton />}>
        <Results term={searchParams.term}/>
      </Suspense>
    </div>
  );
};

export default SearchPage;
