import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

interface Props {
  data: Array<Array<number>>;
  type?: string;
}

function BarChart({ data, type = "column" }: Props) {
  const options = {
    title: {},
    chart: {
      backgroundColor: "transparent",
      type: type,
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
      data: data,
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  );
}

export default BarChart;
