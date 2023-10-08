import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "ui/card";
import BarChart from "@/components/chats/bar-chart";
import { StarIcon } from "lucide-react";
import { cn } from "@/utils";
import { Avatar, AvatarFallback, AvatarImage } from "ui/avatar";
import { Button } from "ui/button";
import { useState } from "react";

interface CorrelationDatasetItemProps {
  item: any;
  data: any;
  type: string;
}

export const CorrelationDatasetItem = ({
  item,
  data,
  type,
}: CorrelationDatasetItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="col-span-1">
      <CardHeader className="h-20">
        <CardTitle>{item?.title}</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <BarChart data={data} type={type} />
        {open && <p>{data?.description}</p>}
      </CardContent>
      <CardFooter className="justify-end pt-4">
        <div className="mr-auto flex items-center gap-2">
          Rate:
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((rate) => (
              <StarIcon
                size={16}
                className={cn(
                  item?.score && item.score >= rate && "text-yellow-300"
                )}
              />
            ))}
          </div>
        </div>
        <div className="mr-4 flex">
          {item?.avatars?.map((item) => (
            <Avatar>
              <AvatarImage src={item?.url} />
              <AvatarFallback>{item?.name[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setOpen((prevState) => !prevState)}
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};
