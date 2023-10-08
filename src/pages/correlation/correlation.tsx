import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "ui/card";
import { Button } from "ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "ui/avatar";

import { StarIcon } from "lucide-react";
import { cn } from "@/utils";
import { useCorrelation } from "@/store/correlation-store";
import { useNavigate } from "react-router-dom";
import { dataset } from "@/data/data";

export default function CorrelationPage() {
  const navigate = useNavigate();

  const datasets = useCorrelation((state) => state.datasets);

  const first = datasets.length > 0 ? dataset[parseInt(datasets[0])] : null;
  const second = datasets.length > 1 ? dataset[parseInt(datasets[1])] : null;

  return (
    <div className="m-auto max-w-screen-xl">
      <div className="mb-5 flex items-center gap-4">
        <Card className="grow">
          <CardContent
            className="group relative flex h-60 cursor-pointer flex-col items-center justify-center gap-1 p-6"
            onClick={() => !first && navigate("/dataset")}
          >
            {first ? (
              <div className="max-w-[300px] text-center text-xl">
                {first.title}
              </div>
            ) : (
              <>
                <div className="text-3xl font-medium">SELECT</div>
                <div className="text-xl">first dataset</div>
              </>
            )}
          </CardContent>
        </Card>
        <Button onClick={() => navigate("/correlation/28031")}>
          Correlate
        </Button>
        <Card className="grow">
          <CardContent
            className="flex h-60 cursor-pointer flex-col items-center justify-center gap-1 p-6"
            onClick={() => !second && navigate("/dataset")}
          >
            {second ? (
              <div className="max-w-[300px] text-center text-xl">
                {second.title}
              </div>
            ) : (
              <>
                <div className="text-3xl font-medium">SELECT</div>
                <div className="text-xl">second dataset</div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
      <Card className="border-none p-0">
        <CardHeader className="px-0">
          <CardTitle>Recent Correlations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 px-0">
          {dataset.map((item) => (
            <Card key={item.id} className="p-0">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>Created Date: {item.date}</CardDescription>
              </CardHeader>
              <CardContent className="line-clamp-2 text-ellipsis">
                {item.description}
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
                  {item.avatars?.map((item) => (
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
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
