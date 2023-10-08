import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "ui/card";
import { Button } from "ui/button";
import { Dialog, DialogContent, DialogTrigger } from "ui/dialog";

export default function CorrelationPage() {
  return (
    <div className="m-auto max-w-screen-xl">
      <div className="mb-5 flex items-center gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Card className="grow">
              <CardContent className="flex h-60 cursor-pointer flex-col items-center justify-center gap-1 p-6">
                <div className="text-3xl font-medium">SELECT</div>
                <div className="text-xl">first dataset</div>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent></DialogContent>
        </Dialog>
        <Button>Correlate</Button>
        <Dialog>
          <DialogTrigger asChild>
            <Card className="grow">
              <CardContent className="flex h-60 cursor-pointer flex-col items-center justify-center gap-1 p-6">
                <div className="text-3xl font-medium">SELECT</div>
                <div className="text-xl">second dataset</div>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent></DialogContent>
        </Dialog>
      </div>
      <Card className="border-none p-0">
        <CardHeader className="px-0">
          <CardTitle>Recent Correlations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 px-0">
          {recentCorrelations.map((item) => (
            <Card key={item.id} className="p-0">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>Created Date: {item.date}</CardDescription>
              </CardHeader>
              <CardContent className="line-clamp-2 text-ellipsis">
                {item.description}
              </CardContent>
              <CardFooter className="justify-end pt-4">
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

const recentCorrelations = [
  {
    id: "0",
    title: "Deepwater CTD - 5_03_029.ctd.nc - 26.77N, -94.83W - 1993-06-02",
    date: "October 7, 2023",
    description:
      "The Minerals Management Service (MMS) of the U. S. Department of the Interior funded the Deepwater Physical Oceanography Reanalysis and Synthesis of Historical Data Study in the Gulf of Mexico. MMS awarded the contract to the Texas A&M Research Foundation in July 1998. The basic study area is bounded by the shelf edge and the 25DGN latitude, which is the southern boundary; it extends from sea surface to sea floor. MMS has four objectives for the study. First is to create an inventory of physical oceanographic data and compile it into a single database on a CD-ROM. Second is to conduct analyses and interpretations of the physical oceanographic data to identify physical processes and phenomena. Third is to produce a climatology of the processes from available data and analyses and to prioritize the processes in terms of importance to improved understanding, simulation, and prediction of deepwater circulation. Fourth is to provide criteria and constraints useful in design of future field observations and numerical modeling efforts. Study results will provide MMS with information needed to direct its resources more efficiently and effectively in the review and assessment of potential environmental impacts of offshore oil and gas operations in the deepwater Gulf of Mexico.",
  },
  {
    id: "1",
    title: "Fugro Cruise C16215 Line 1514, 300 kHz VMADCP",
    date: "October 5, 2023",
    description:
      "Program of vessel mount Acoustic Doppler Current Profiler (ADCP) measurements comprising a combination of 300kHz and 75kHz ADCP data collected in the vicinity of the Loop Current and drilling blocks between 2004 and 2007.",
  },
  {
    id: "2",
    title: "Dago Creek Mouth, Ugashik Bay, AK",
    date: "October 2, 2023",
    description:
      "Timeseries data from 'Dago Creek Mouth, Ugashik Bay, AK' (noaa_nos_co_ops_9464512)",
  },
  {
    id: "3",
    title: "OASDI Beneficiaries by State and ZIP Code - 2020",
    date: "October 1, 2023",
    description:
      "This annual publication focuses on the Social Security beneficiary population at the ZIP code level. It presents basic program data on the number and type of beneficiaries and the amount of benefits paid in each state, Social Security Administration field office, and ZIP code. It also shows the number of beneficiaries aged 65 or older. Report for 2020.",
  },
];
