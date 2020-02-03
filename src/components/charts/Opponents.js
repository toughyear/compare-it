import React from "react";
// import the core library.
import ReactEchartsCore from "echarts-for-react/lib/core";

// then import echarts modules those you have used manually.
import echarts from "echarts/lib/echarts";
// import 'echarts/lib/chart/line';
import "echarts/lib/chart/bar";
//import "echarts/lib/chart/pie";
// import 'echarts/lib/chart/scatter';
// import 'echarts/lib/chart/radar';

// import 'echarts/lib/chart/map';
// import 'echarts/lib/chart/treemap';
// import 'echarts/lib/chart/graph';
// import 'echarts/lib/chart/gauge';
// import 'echarts/lib/chart/funnel';
// import 'echarts/lib/chart/parallel';
// import 'echarts/lib/chart/sankey';
// import 'echarts/lib/chart/boxplot';
// import 'echarts/lib/chart/candlestick';
// import 'echarts/lib/chart/effectScatter';
// import 'echarts/lib/chart/lines';
// import 'echarts/lib/chart/heatmap';

// import 'echarts/lib/component/graphic';
// import 'echarts/lib/component/grid';
// import 'echarts/lib/component/legend';
import "echarts/lib/component/tooltip";
// import 'echarts/lib/component/polar';
// import 'echarts/lib/component/geo';
// import 'echarts/lib/component/parallel';
// import 'echarts/lib/component/singleAxis';
// import 'echarts/lib/component/brush';

import "echarts/lib/component/title";

// import 'echarts/lib/component/dataZoom';
// import 'echarts/lib/component/visualMap';

// import 'echarts/lib/component/markPoint';
// import 'echarts/lib/component/markLine';
// import 'echarts/lib/component/markArea';

// import 'echarts/lib/component/timeline';
// import 'echarts/lib/component/toolbox';

// import 'zrender/lib/vml/vml';

// The usage of ReactEchartsCore are same with above.

const data = [
  {
    opposition: "vs. Australia",
    matches: 71
  },
  {
    opposition: "vs. Bangladesh",
    matches: 12
  },
  {
    opposition: "vs. Bermuda",
    matches: 1
  },
  {
    opposition: "vs. England",
    matches: 37
  },
  {
    opposition: "vs. Ireland",
    matches: 2
  },
  {
    opposition: "vs. Kenya",
    matches: 10
  },
  {
    opposition: "vs. Namibia",
    matches: 1
  },
  {
    opposition: "vs. Netherlands",
    matches: 2
  },
  {
    opposition: "vs. New Zealand",
    matches: 42
  },
  {
    opposition: "vs. Pakistan",
    matches: 69
  },
  {
    opposition: "vs. South Africa",
    matches: 57
  },
  {
    opposition: "vs. Sri Lanka",
    matches: 84
  },
  {
    opposition: "vs. U.A.E.",
    matches: 2
  },
  {
    opposition: "vs. West Indies",
    matches: 39
  },
  {
    opposition: "vs. Zimbabwe",
    matches: 34
  }
];

let opponentarray = [];
let matchesarray = [];
data.forEach(entry => {
  opponentarray.push(entry.opposition);
  matchesarray.push(entry.matches);
});

export default function Opponents() {
  return (
    <div>
      <ReactEchartsCore
        echarts={echarts}
        option={{
          color: ["crimson"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            }
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: opponentarray,
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: "value"
            }
          ],
          series: [
            {
              name: "Matches Played",
              type: "bar",
              barWidth: "60%",
              data: matchesarray
            }
          ]
        }}
      />
      <h1 className="text-gray-800 font-bold text-xl  ">
        Distribution by opponents
      </h1>

      <h1 className="text-gray-800  text-base pb-8 ">for 463 ODI matches</h1>
    </div>
  );
}
