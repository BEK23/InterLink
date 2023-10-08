import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "ui/card";
import BarChart from "@/components/chats/bar-chart";
import { useState } from "react";
import { IData } from "@/type";
import { ItemFooter } from "@/pages/dataset/components/item-footer";

interface CorrelationDatasetItemProps {
  item: IData;
  data: number[][];
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
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <BarChart data={data} type={type} />
        {open && <p>{item.description}</p>}
      </CardContent>
      <CardFooter className="justify-end pt-4">
        <ItemFooter item={item} toggle={setOpen} />
      </CardFooter>
    </Card>
  );
};
