'use client';

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/hooks/use-debounce";

export function SearchBar() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (debouncedSearch !== "") {
      const params = new URLSearchParams(searchParams.toString());
      params.set("search", debouncedSearch);
      router.push(`?${params.toString()}`);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("search");
      router.push(`?${params.toString()}`);
    }
  }, [debouncedSearch, router, searchParams]);

  return (
    <section>
      <div className="relative space-y-0">
        <Search className="absolute left-2.5 top-2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 text-md sm:w-[300px] md:w-[300px] lg:w-[300px]"
        />
      </div>
    </section>
  );
}
