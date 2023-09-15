"use client";
import { ISize } from "@/common.types";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import Button from "./button";
import { cn } from "@/lib/utils";

interface FiltersProps {
  name: string;
  valueKey: string;
  data: ISize[];
}
const Filters = ({ name, valueKey, data }: FiltersProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);

  const handleClick = (id: string) => {
    const currentParam = queryString.parse(searchParams.toString());
    const query = {
      ...currentParam,
      [valueKey]: id,
    };
    if (currentParam[valueKey] === id) {
      query[valueKey] = null;
      // delete query[valueKey];
    }
    const url = queryString.stringify(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );
    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="font-semibold text-lg">{name}</h3>
      <hr className="my-3" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div className="flex items-center" key={filter?.id}>
            <Button
              onClick={() => handleClick(filter?.id)}
              className={cn(
                "rounded-md text-sm text-gray-800 pb-2 bg-white border border-gray-300",
                selectedValue && "bg-black text-white"
              )}
            >
              {filter?.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
