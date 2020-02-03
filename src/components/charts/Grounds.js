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
    Ground: "Adelaide",
    Matches: 8
  },
  {
    Ground: "Ahmedabad",
    Matches: 5
  },
  {
    Ground: "Amritsar",
    Matches: 1
  },
  {
    Ground: "Auckland",
    Matches: 3
  },
  {
    Ground: "Bangalore",
    Matches: 11
  },
  {
    Ground: "Belfast",
    Matches: 4
  },
  {
    Ground: "Benoni",
    Matches: 1
  },
  {
    Ground: "Birmingham",
    Matches: 3
  },
  {
    Ground: "Bloemfontein",
    Matches: 3
  },
  {
    Ground: "Bridgetown",
    Matches: 2
  },
  {
    Ground: "Brisbane",
    Matches: 9
  },
  {
    Ground: "Bristol",
    Matches: 3
  },
  {
    Ground: "Bulawayo",
    Matches: 5
  },
  {
    Ground: "Canberra",
    Matches: 1
  },
  {
    Ground: "Cape Town",
    Matches: 3
  },
  {
    Ground: "Centurion",
    Matches: 9
  },
  {
    Ground: "Chandigarh",
    Matches: 3
  },
  {
    Ground: "Chennai",
    Matches: 6
  },
  {
    Ground: "Chester-le-Street",
    Matches: 1
  },
  {
    Ground: "Chittagong",
    Matches: 1
  },
  {
    Ground: "Christchurch",
    Matches: 2
  },
  {
    Ground: "Colombo (RPS)",
    Matches: 27
  },
  {
    Ground: "Colombo (SSC)",
    Matches: 12
  },
  {
    Ground: "Cuttack",
    Matches: 10
  },
  {
    Ground: "Dambulla",
    Matches: 3
  },
  {
    Ground: "Delhi",
    Matches: 8
  },
  {
    Ground: "Dhaka",
    Matches: 15
  },
  {
    Ground: "Dunedin",
    Matches: 3
  },
  {
    Ground: "Durban",
    Matches: 8
  },
  {
    Ground: "East London",
    Matches: 3
  },
  {
    Ground: "Faridabad",
    Matches: 3
  },
  {
    Ground: "Galle",
    Matches: 1
  },
  {
    Ground: "Gujranwala",
    Matches: 1
  },
  {
    Ground: "Guwahati",
    Matches: 5
  },
  {
    Ground: "Gwalior",
    Matches: 9
  },
  {
    Ground: "Hamilton",
    Matches: 3
  },
  {
    Ground: "Harare",
    Matches: 6
  },
  {
    Ground: "Hobart",
    Matches: 5
  },
  {
    Ground: "Hove",
    Matches: 1
  },
  {
    Ground: "Hyderabad (Deccan)",
    Matches: 7
  },
  {
    Ground: "Hyderabad (Sind)",
    Matches: 1
  },
  {
    Ground: "Indore",
    Matches: 3
  },
  {
    Ground: "Jaipur",
    Matches: 7
  },
  {
    Ground: "Jalandhar",
    Matches: 1
  },
  {
    Ground: "Jamshedpur",
    Matches: 4
  },
  {
    Ground: "Jodhpur",
    Matches: 1
  },
  {
    Ground: "Johannesburg",
    Matches: 5
  },
  {
    Ground: "Kanpur",
    Matches: 8
  },
  {
    Ground: "Karachi",
    Matches: 2
  },
  {
    Ground: "Kingstown",
    Matches: 1
  },
  {
    Ground: "Kochi",
    Matches: 4
  },
  {
    Ground: "Kolkata",
    Matches: 13
  },
  {
    Ground: "Kuala Lumpur",
    Matches: 4
  },
  {
    Ground: "Lahore",
    Matches: 4
  },
  {
    Ground: "Leeds",
    Matches: 3
  },
  {
    Ground: "Lord's",
    Matches: 3
  },
  {
    Ground: "Mackay",
    Matches: 1
  },
  {
    Ground: "Manchester",
    Matches: 3
  },
  {
    Ground: "Margao",
    Matches: 4
  },
  {
    Ground: "Melbourne",
    Matches: 7
  },
  {
    Ground: "Mohali",
    Matches: 7
  },
  {
    Ground: "Moratuwa",
    Matches: 1
  },
  {
    Ground: "Multan",
    Matches: 1
  },
  {
    Ground: "Mumbai",
    Matches: 11
  },
  {
    Ground: "Mumbai (BS)",
    Matches: 1
  },
  {
    Ground: "Nagpur",
    Matches: 9
  },
  {
    Ground: "Nairobi (Gym)",
    Matches: 4
  },
  {
    Ground: "Napier",
    Matches: 4
  },
  {
    Ground: "New Delhi",
    Matches: 1
  },
  {
    Ground: "Nottingham",
    Matches: 2
  },
  {
    Ground: "Paarl",
    Matches: 3
  },
  {
    Ground: "Perth",
    Matches: 8
  },
  {
    Ground: "Peshawar",
    Matches: 2
  },
  {
    Ground: "Pietermaritzburg",
    Matches: 1
  },
  {
    Ground: "Port Elizabeth",
    Matches: 4
  },
  {
    Ground: "Port of Spain",
    Matches: 6
  },
  {
    Ground: "Pune",
    Matches: 5
  },
  {
    Ground: "Rajkot",
    Matches: 7
  },
  {
    Ground: "Rawalpindi",
    Matches: 2
  },
  {
    Ground: "Sharjah",
    Matches: 42
  },
  {
    Ground: "Singapore",
    Matches: 5
  },
  {
    Ground: "Southampton",
    Matches: 1
  },
  {
    Ground: "Sydney",
    Matches: 8
  },
  {
    Ground: "Taunton",
    Matches: 1
  },
  {
    Ground: "Taupo",
    Matches: 1
  },
  {
    Ground: "The Oval",
    Matches: 5
  },
  {
    Ground: "Toronto",
    Matches: 12
  },
  {
    Ground: "Vadodara",
    Matches: 7
  },
  {
    Ground: "Visakhapatnam",
    Matches: 3
  },
  {
    Ground: "Wellington",
    Matches: 6
  }
];

let groundarray = [];
let matchesarray = [];
data.forEach(entry => {
  groundarray.push(entry.Ground);
  matchesarray.push(entry.Matches);
});

export default function Grounds() {
  return (
    <div>
      <ReactEchartsCore
        echarts={echarts}
        option={{
          color: ["#3398DB"],
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
              data: groundarray,
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
        Distribution by grounds
      </h1>

      <h1 className="text-gray-800  text-base pb-8 ">for 463 ODI matches</h1>
    </div>
  );
}
