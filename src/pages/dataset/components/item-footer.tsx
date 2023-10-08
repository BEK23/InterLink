import { StarIcon } from "lucide-react";
import { cn } from "@/utils";
import { Avatar, AvatarFallback, AvatarImage } from "ui/avatar";
import { Button } from "ui/button";
import { IData } from "@/type";
import { Dispatch, SetStateAction } from "react";

interface ItemFooterProps {
  item: IData;
  toggle: Dispatch<SetStateAction<boolean>>;
}

export const ItemFooter = ({ item, toggle }: ItemFooterProps) => {
  return (
    <>
      <div className="mr-auto flex items-center gap-2">
        Rate:
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((rate) => (
            <StarIcon
              key={rate}
              size={16}
              className={cn(item.score >= rate && "text-yellow-300")}
            />
          ))}
        </div>
      </div>
      <div className="mr-4 flex">
        {item.avatars.map((item, index) => (
          <Avatar key={index}>
            <AvatarImage src={item.url} />
            <AvatarFallback>{item.name[0]}</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <Button
        size="sm"
        variant="outline"
        onClick={() => toggle((prevState) => !prevState)}
      >
        Read More
      </Button>
    </>
  );
};
