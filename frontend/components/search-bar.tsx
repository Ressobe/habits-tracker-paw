import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <section>
      <div className="relative space-y-0">
        <Search className="absolute left-2.5 top-2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search ..."
          className="pl-10 text-md sm:w-[300px] md:w-[300px] lg:w-[300px]"
        />
      </div>
    </section>
  );
}
