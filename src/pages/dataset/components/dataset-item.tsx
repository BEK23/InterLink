import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "ui/card";
import { ChevronDown, ChevronUp, StarIcon } from "lucide-react";
import { cn } from "@/utils";
import { Avatar, AvatarFallback, AvatarImage } from "ui/avatar";
import { Button } from "ui/button";
import { useState } from "react";

export const DatasetItem = ({ item }: { item: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card key={item.id} className="p-0">
      <CardHeader className="relative">
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>Created Date: {item.date}</CardDescription>
        <div
          className="absolute right-6 top-3 cursor-pointer"
          onClick={() => setOpen((prevState) => !prevState)}
        >
          {open ? <ChevronUp /> : <ChevronDown />}
        </div>
      </CardHeader>
      <CardContent className={cn(!open && "line-clamp-2 text-ellipsis")}>
        {item.description}
        {open && <div>{/* Data  */}</div>}
      </CardContent>
      <CardFooter className="justify-end pt-4">
        <div className="mr-auto flex items-center gap-2">
          Rate:
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((rate) => (
              <StarIcon
                size={16}
                className={cn(
                  item.score && item.score >= rate && "text-yellow-300"
                )}
              />
            ))}
          </div>
        </div>
        <div className="mr-4 flex">
          {item.avatars?.map((item: any) => (
            <Avatar>
              <AvatarImage src={item?.url} />
              <AvatarFallback>{item?.name[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <Button size="sm" variant="outline">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};
