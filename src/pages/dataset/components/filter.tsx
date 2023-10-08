import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "ui/accordion";
import { Checkbox } from "ui/checkbox";
import { cn } from "@/utils";
import { Badge } from "ui/badge";

const filters = [
  {
    name: "Topic",
    items: [
      { title: "Arctic", count: 114 },
      { title: "Ecosystem Vulnerability", count: 65 },
      { title: "Human Health", count: 61 },
      { title: "Water", count: 61 },
      { title: "Arctic Ocean, Sea Ice", count: 55 },
      { title: "Food Resilience", count: 48 },
      { title: "Energy Infrastructure", count: 44 },
      { title: "Transportation", count: 42 },
      { title: "Atmospheric, Earth", count: 40 },
      { title: "Coastal Flooding", count: 38 },
    ],
  },
  {
    name: "Organization Types",
    items: [
      { title: "Federal Government", count: 230426 },
      { title: "State Government", count: 11891 },
      { title: "City Government", count: 10908 },
      { title: "University", count: 6161 },
      { title: "County Government", count: 3436 },
    ],
  },
  {
    name: "Organization",
    items: [
      { title: "National Oceanic...", count: 105403 },
      { title: "U.S. Census...", count: 42943 },
      { title: "Department of the Interior", count: 33094 },
      { title: "National...", count: 22222 },
      { title: "U.S. Environmental...", count: 5569 },
      { title: "Earth Data...", count: 5459 },
      { title: "State of California", count: 3982 },
      { title: "City of New York", count: 3234 },
      { title: "Department of Energy", count: 3114 },
      { title: "City of Austin", count: 2528 },
    ],
  },
  {
    name: "Publishers",
    items: [
      { title: "U.S. Geological Survey", count: 27967 },
      { title: "National...", count: 11165 },
      { title: "data.cityofnewyork.us", count: 3234 },
      { title: "U.S. EPA Office of...", count: 2951 },
      { title: "data.austintexas.gov", count: 2528 },
      { title: "National Park Service", count: 2406 },
      { title: "California...", count: 2015 },
      { title: "ORNL_DAAC", count: 1899 },
    ],
  },
];

export const Filter = () => {
  return (
    <form className="mt-4">
      <Accordion type="single" collapsible defaultValue={filters[0].name}>
        {filters.map((filter, index) => (
          <AccordionItem
            key={filter.name}
            value={filter.name}
            className={cn(index + 1 === filters.length && "border-none")}
          >
            <AccordionTrigger>{filter.name}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {filter.items.map((item) => (
                  <div key={item.title} className="flex items-center space-x-2">
                    <Checkbox id={item.title} />
                    <label
                      htmlFor={item.title}
                      className="ml-3 flex min-w-0 flex-1 items-center gap-2 text-gray-500"
                    >
                      {item.title}
                      <Badge variant="secondary">{item.count}</Badge>
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </form>
  );
};
