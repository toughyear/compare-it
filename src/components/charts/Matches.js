import React from "react";
// import the core library.
import ReactEchartsCore from "echarts-for-react/lib/core";

// then import echarts modules those you have used manually.
import echarts from "echarts/lib/echarts";
// import 'echarts/lib/chart/line';
//import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
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

export default function Wins() {
  return (
    <div>
      {" "}
      <ReactEchartsCore
        echarts={echarts}
        option={{
          backgroundColor: "#E2E8F0",

          textStyle: {
            fontFamily: "Poppins"
          },
          title: {
            text: "Total Matches",
            left: "center",
            top: 20,
            textStyle: {
              color: "#232323"
            }
          },

          label: {
            color: "#232323"
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          series: [
            {
              name: "Match Format",
              type: "pie",
              radius: ["30%", "50%"],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: true,
                  position: "center"
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: "30",
                    fontWeight: "bold"
                  }
                }
              },
              label: {
                color: "#232323"
              },
              labelLine: {
                lineStyle: {
                  color: "#232323"
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              },
              data: [
                { value: 200, name: "Test" },
                { value: 463, name: "ODI" },
                { value: 96, name: "T20" },
                { value: 551, name: "List A" },
                { value: 310, name: "1st Class" }
              ].sort(function(a, b) {
                return a.value - b.value;
              }),
              animationType: "scale",
              animationEasing: "elasticOut",
              animationDelay: function(idx) {
                return Math.random() * 200;
              }
            }
          ]
        }}
      />
      <h1 className="text-gray-800 font-bold text-xl pb-8 ">
        1620 Matches Played!
      </h1>
    </div>
  );
}
