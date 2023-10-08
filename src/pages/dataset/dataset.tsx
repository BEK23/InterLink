import { Filter } from "@/pages/dataset/components/filter";
import { Card, CardContent, CardHeader, CardTitle } from "ui/card";
import { DatasetItem } from "@/pages/dataset/components/dataset-item";
import { dataset } from "@/data";

export default function DatasetPage() {
  return (
    <div className="m-auto grid max-w-screen-xl grid-cols-9 gap-6">
      <div className="col-span-2">
        <Filter />
      </div>
      <div className="col-span-7">
        <Card className="border-none p-0">
          <CardHeader className="px-0">
            <CardTitle>Datasets</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 px-0">
            {dataset.map((item) => (
              <DatasetItem key={item.id} item={item} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
