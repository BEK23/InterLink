import { useEffect, useState } from "react";
import axios from "axios";
import { useCorrelation } from "@/store/correlation-store";
import { dataset } from "@/data";
import { CorrelationDatasetItem } from "@/pages/correlation/[id]/components/correlation-dataset-item";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { Card, CardContent, CardHeader, CardTitle } from "ui/card";

const CorrelationResultPage = () => {
  const [data, setData] = useState([]);
  // const [result, setResult] = useState([]);

  const datasets = useCorrelation((state) => state.datasets);

  const first = dataset[parseInt(datasets[0])];
  const second = dataset[parseInt(datasets[1])];

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://demo-live-data.highcharts.com/aapl-v.json"
      );
      setData(res.data);

      // await axios.get(
      //   "https://cdn.jsdelivr.net/gh/highcharts/highcharts@24912efc85/samples/data/olympic2012.json"
      // );
      // setResult(data);
    }

    getData();
  }, []);

  return (
    <div className="m-auto grid max-w-screen-xl grid-cols-2 gap-6 pb-6">
      <CorrelationDatasetItem item={first} data={data} type="pie" />
      <CorrelationDatasetItem item={second} data={data} type="spline" />
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Correlation Result</CardTitle>
        </CardHeader>
        <CardContent>
          <HighchartsReact
            highcharts={Highcharts}
            constructorType="stockChart"
            series={[
              {
                name: "Basketball",
                id: "basketball",
                marker: {
                  symbol: "circle",
                },
              },
              {
                name: "Triathlon",
                id: "triathlon",
                marker: {
                  symbol: "triangle",
                },
              },
              {
                name: "Volleyball",
                id: "volleyball",
                marker: {
                  symbol: "square",
                },
              },
            ]}
            options={{
              chart: {
                backgroundColor: "transparent",
                zoomType: "xy",
                type: "scatter",
              },
              rangeSelector: {
                selected: 4,
                inputEnabled: false,
                buttonTheme: {
                  visibility: "hidden",
                },
                labelStyle: {
                  visibility: "hidden",
                },
                buttons: [],
              },
              xAxis: {
                zoomEnabled: false,
              },
              yAxis: {
                zoomEnabled: false,
              },
              series: {
                data,
              },
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default CorrelationResultPage;
