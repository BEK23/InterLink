import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "ui/card";
import { CheckIcon, PlusIcon } from "lucide-react";
import { cn } from "@/utils";
import { useState } from "react";
import { useCorrelation } from "@/store/correlation-store";
import { IData } from "@/type";
import { ItemFooter } from "@/pages/dataset/components/item-footer";

export const DatasetItem = ({ item }: { item: IData }) => {
  const [open, setOpen] = useState(false);

  const ids = useCorrelation((state) => state.datasets);
  const add = useCorrelation((state) => state.addDateset);
  const remove = useCorrelation((state) => state.removeDataset);

  return (
    <Card key={item.id} className="p-0">
      <CardHeader className="relative">
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>Created Date: {item.date}</CardDescription>
        <div className="absolute right-6 top-3 cursor-pointer hover:text-primary">
          {ids.includes(item.id) ? (
            <CheckIcon
              className="text-primary"
              onClick={() => remove(item.id)}
            />
          ) : (
            <PlusIcon onClick={() => add(item.id)} />
          )}
        </div>
      </CardHeader>
      <CardContent className={cn(!open && "line-clamp-2 text-ellipsis")}>
        {item.description}
        {open && <div>{/* Data  */}</div>}
      </CardContent>
      <CardFooter className="justify-end pt-4">
        <ItemFooter
          item={item}
          toggle={() => setOpen((prevState) => !prevState)}
        />
      </CardFooter>
    </Card>
  );
};
