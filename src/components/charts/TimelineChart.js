import React from "react";
// import the core library.
import ReactEchartsCore from "echarts-for-react/lib/core";

// then import echarts modules those you have used manually.
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";
//import "echarts/lib/chart/bar";
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

var colors = ["#5793f3", "#d14a61", "#675bba"];

const data = [
  {
    date: "18-Dec-89",
    batting_score: 0,
    runs_conceded: 0
  },
  {
    date: "01-Mar-90",
    batting_score: 0,
    runs_conceded: 0
  },
  {
    date: "06-Mar-90",
    batting_score: 36,
    runs_conceded: 0
  },
  {
    date: "25-Apr-90",
    batting_score: 10,
    runs_conceded: 0
  },
  {
    date: "27-Apr-90",
    batting_score: 20,
    runs_conceded: 0
  },
  {
    date: "18-Jul-90",
    batting_score: 19,
    runs_conceded: 0
  },
  {
    date: "20-Jul-90",
    batting_score: 31,
    runs_conceded: 10
  },
  {
    date: "01-Dec-90",
    batting_score: 36,
    runs_conceded: 0
  },
  {
    date: "05-Dec-90",
    batting_score: 53,
    runs_conceded: 39
  },
  {
    date: "08-Dec-90",
    batting_score: 30,
    runs_conceded: 0
  },
  {
    date: "25-Dec-90",
    batting_score: 0,
    runs_conceded: 15
  },
  {
    date: "28-Dec-90",
    batting_score: 4,
    runs_conceded: 0
  },
  {
    date: "04-Jan-91",
    batting_score: 53,
    runs_conceded: 0
  },
  {
    date: "18-Oct-91",
    batting_score: 52,
    runs_conceded: 0
  },
  {
    date: "19-Oct-91",
    batting_score: 22,
    runs_conceded: 0
  },
  {
    date: "22-Oct-91",
    batting_score: 11,
    runs_conceded: 34
  },
  {
    date: "23-Oct-91",
    batting_score: 49,
    runs_conceded: 20
  },
  {
    date: "25-Oct-91",
    batting_score: 0,
    runs_conceded: 24
  },
  {
    date: "10-Nov-91",
    batting_score: 62,
    runs_conceded: 27
  },
  {
    date: "12-Nov-91",
    batting_score: 4,
    runs_conceded: 31
  },
  {
    date: "14-Nov-91",
    batting_score: 1,
    runs_conceded: 38
  },
  {
    date: "06-Dec-91",
    batting_score: 1,
    runs_conceded: 5
  },
  {
    date: "08-Dec-91",
    batting_score: 36,
    runs_conceded: 8
  },
  {
    date: "10-Dec-91",
    batting_score: 57,
    runs_conceded: 0
  },
  {
    date: "14-Dec-91",
    batting_score: 48,
    runs_conceded: 10
  },
  {
    date: "15-Dec-91",
    batting_score: 21,
    runs_conceded: 3
  },
  {
    date: "11-Jan-92",
    batting_score: 77,
    runs_conceded: 27
  },
  {
    date: "14-Jan-92",
    batting_score: 31,
    runs_conceded: 14
  },
  {
    date: "16-Jan-92",
    batting_score: 57,
    runs_conceded: 38
  },
  {
    date: "18-Jan-92",
    batting_score: 4,
    runs_conceded: 29
  },
  {
    date: "20-Jan-92",
    batting_score: 69,
    runs_conceded: 18
  },
  {
    date: "22-Feb-92",
    batting_score: 35,
    runs_conceded: 37
  },
  {
    date: "28-Feb-92",
    batting_score: 0,
    runs_conceded: 0
  },
  {
    date: "01-Mar-92",
    batting_score: 11,
    runs_conceded: 29
  },
  {
    date: "04-Mar-92",
    batting_score: 54,
    runs_conceded: 37
  },
  {
    date: "07-Mar-92",
    batting_score: 81,
    runs_conceded: 35
  },
  {
    date: "10-Mar-92",
    batting_score: 4,
    runs_conceded: 20
  },
  {
    date: "12-Mar-92",
    batting_score: 84,
    runs_conceded: 2
  },
  {
    date: "15-Mar-92",
    batting_score: 14,
    runs_conceded: 20
  },
  {
    date: "25-Oct-92",
    batting_score: 39,
    runs_conceded: 16
  },
  {
    date: "07-Dec-92",
    batting_score: 15,
    runs_conceded: 25
  },
  {
    date: "09-Dec-92",
    batting_score: 10,
    runs_conceded: 18
  },
  {
    date: "11-Dec-92",
    batting_score: 22,
    runs_conceded: 16
  },
  {
    date: "13-Dec-92",
    batting_score: 21,
    runs_conceded: 4
  },
  {
    date: "15-Dec-92",
    batting_score: 32,
    runs_conceded: 27
  },
  {
    date: "17-Dec-92",
    batting_score: 23,
    runs_conceded: 0
  },
  {
    date: "19-Dec-92",
    batting_score: 21,
    runs_conceded: 0
  },
  {
    date: "18-Jan-93",
    batting_score: 82,
    runs_conceded: 0
  },
  {
    date: "21-Jan-93",
    batting_score: 1,
    runs_conceded: 16
  },
  {
    date: "26-Feb-93",
    batting_score: 3,
    runs_conceded: 0
  },
  {
    date: "01-Mar-93",
    batting_score: 24,
    runs_conceded: 0
  },
  {
    date: "04-Mar-93",
    batting_score: 5,
    runs_conceded: 0
  },
  {
    date: "05-Mar-93",
    batting_score: 34,
    runs_conceded: 0
  },
  {
    date: "19-Mar-93",
    batting_score: 3,
    runs_conceded: 6
  },
  {
    date: "22-Mar-93",
    batting_score: 8,
    runs_conceded: 0
  },
  {
    date: "25-Mar-93",
    batting_score: 0,
    runs_conceded: 30
  },
  {
    date: "25-Jul-93",
    batting_score: 21,
    runs_conceded: 0
  },
  {
    date: "12-Aug-93",
    batting_score: 15,
    runs_conceded: 20
  },
  {
    date: "14-Aug-93",
    batting_score: 25,
    runs_conceded: 15
  },
  {
    date: "07-Nov-93",
    batting_score: 26,
    runs_conceded: 27
  },
  {
    date: "16-Nov-93",
    batting_score: 2,
    runs_conceded: 11
  },
  {
    date: "18-Nov-93",
    batting_score: 24,
    runs_conceded: 48
  },
  {
    date: "22-Nov-93",
    batting_score: 3,
    runs_conceded: 0
  },
  {
    date: "24-Nov-93",
    batting_score: 15,
    runs_conceded: 3
  },
  {
    date: "27-Nov-93",
    batting_score: 28,
    runs_conceded: 24
  },
  {
    date: "15-Feb-94",
    batting_score: 1,
    runs_conceded: 43
  },
  {
    date: "18-Feb-94",
    batting_score: 11,
    runs_conceded: 36
  },
  {
    date: "20-Feb-94",
    batting_score: 52,
    runs_conceded: 23
  },
  {
    date: "25-Mar-94",
    batting_score: 15,
    runs_conceded: 37
  },
  {
    date: "27-Mar-94",
    batting_score: 82,
    runs_conceded: 0
  },
  {
    date: "30-Mar-94",
    batting_score: 63,
    runs_conceded: 12
  },
  {
    date: "02-Apr-94",
    batting_score: 40,
    runs_conceded: 22
  },
  {
    date: "13-Apr-94",
    batting_score: 63,
    runs_conceded: 22
  },
  {
    date: "15-Apr-94",
    batting_score: 73,
    runs_conceded: 34
  },
  {
    date: "19-Apr-94",
    batting_score: 6,
    runs_conceded: 39
  },
  {
    date: "22-Apr-94",
    batting_score: 24,
    runs_conceded: 45
  },
  {
    date: "04-Sep-94",
    batting_score: 11,
    runs_conceded: 0
  },
  {
    date: "05-Sep-94",
    batting_score: 6,
    runs_conceded: 21
  },
  {
    date: "09-Sep-94",
    batting_score: 110,
    runs_conceded: 15
  },
  {
    date: "17-Sep-94",
    batting_score: 0,
    runs_conceded: 0
  },
  {
    date: "17-Oct-94",
    batting_score: 0,
    runs_conceded: 32
  },
  {
    date: "20-Oct-94",
    batting_score: 0,
    runs_conceded: 0
  },
  {
    date: "23-Oct-94",
    batting_score: 8,
    runs_conceded: 36
  },
  {
    date: "28-Oct-94",
    batting_score: 115,
    runs_conceded: 27
  },
  {
    date: "30-Oct-94",
    batting_score: 34,
    runs_conceded: 31
  },
  {
    date: "03-Nov-94",
    batting_score: 62,
    runs_conceded: 29
  },
  {
    date: "05-Nov-94",
    batting_score: 66,
    runs_conceded: 35
  },
  {
    date: "07-Nov-94",
    batting_score: 54,
    runs_conceded: 39
  },
  {
    date: "09-Nov-94",
    batting_score: 88,
    runs_conceded: 20
  },
  {
    date: "11-Nov-94",
    batting_score: 105,
    runs_conceded: 31
  },
  {
    date: "16-Feb-95",
    batting_score: 13,
    runs_conceded: 0
  },
  {
    date: "18-Feb-95",
    batting_score: 37,
    runs_conceded: 43
  },
  {
    date: "22-Feb-95",
    batting_score: 47,
    runs_conceded: 33
  },
  {
    date: "05-Apr-95",
    batting_score: 48,
    runs_conceded: 0
  },
  {
    date: "07-Apr-95",
    batting_score: 4,
    runs_conceded: 27
  },
  {
    date: "09-Apr-95",
    batting_score: 112,
    runs_conceded: 0
  },
  {
    date: "14-Apr-95",
    batting_score: 41,
    runs_conceded: 10
  },
  {
    date: "15-Nov-95",
    batting_score: 30,
    runs_conceded: 18
  },
  {
    date: "18-Nov-95",
    batting_score: 39,
    runs_conceded: 15
  },
  {
    date: "24-Nov-95",
    batting_score: 7,
    runs_conceded: 49
  },
  {
    date: "26-Nov-95",
    batting_score: 65,
    runs_conceded: 54
  },
  {
    date: "29-Nov-95",
    batting_score: 1,
    runs_conceded: 0
  },
  {
    date: "18-Feb-96",
    batting_score: 127,
    runs_conceded: 26
  },
  {
    date: "21-Feb-96",
    batting_score: 70,
    runs_conceded: 0
  },
  {
    date: "27-Feb-96",
    batting_score: 90,
    runs_conceded: 0
  },
  {
    date: "02-Mar-96",
    batting_score: 137,
    runs_conceded: 41
  },
  {
    date: "06-Mar-96",
    batting_score: 3,
    runs_conceded: 23
  },
  {
    date: "09-Mar-96",
    batting_score: 31,
    runs_conceded: 25
  },
  {
    date: "13-Mar-96",
    batting_score: 65,
    runs_conceded: 34
  },
  {
    date: "03-Apr-96",
    batting_score: 28,
    runs_conceded: 19
  },
  {
    date: "05-Apr-96",
    batting_score: 100,
    runs_conceded: 18
  },
  {
    date: "12-Apr-96",
    batting_score: 1,
    runs_conceded: 46
  },
  {
    date: "14-Apr-96",
    batting_score: 2,
    runs_conceded: 40
  },
  {
    date: "15-Apr-96",
    batting_score: 118,
    runs_conceded: 40
  },
  {
    date: "17-Apr-96",
    batting_score: 17,
    runs_conceded: 0
  },
  {
    date: "19-Apr-96",
    batting_score: 57,
    runs_conceded: 51
  },
  {
    date: "23-May-96",
    batting_score: 30,
    runs_conceded: 44
  },
  {
    date: "25-May-96",
    batting_score: 6,
    runs_conceded: 15
  },
  {
    date: "26-May-96",
    batting_score: 1,
    runs_conceded: 22
  },
  {
    date: "28-Aug-96",
    batting_score: 110,
    runs_conceded: 29
  },
  {
    date: "01-Sep-96",
    batting_score: 40,
    runs_conceded: 20
  },
  {
    date: "06-Sep-96",
    batting_score: 7,
    runs_conceded: 38
  },
  {
    date: "16-Sep-96",
    batting_score: 89,
    runs_conceded: 12
  },
  {
    date: "17-Sep-96",
    batting_score: 20,
    runs_conceded: 35
  },
  {
    date: "18-Sep-96",
    batting_score: 2,
    runs_conceded: 17
  },
  {
    date: "21-Sep-96",
    batting_score: 3,
    runs_conceded: 22
  },
  {
    date: "23-Sep-96",
    batting_score: 23,
    runs_conceded: 0
  },
  {
    date: "17-Oct-96",
    batting_score: 11,
    runs_conceded: 28
  },
  {
    date: "21-Oct-96",
    batting_score: 88,
    runs_conceded: 45
  },
  {
    date: "23-Oct-96",
    batting_score: 64,
    runs_conceded: 22
  },
  {
    date: "29-Oct-96",
    batting_score: 28,
    runs_conceded: 13
  },
  {
    date: "03-Nov-96",
    batting_score: 62,
    runs_conceded: 0
  },
  {
    date: "06-Nov-96",
    batting_score: 67,
    runs_conceded: 0
  },
  {
    date: "14-Dec-96",
    batting_score: 114,
    runs_conceded: 0
  },
  {
    date: "23-Jan-97",
    batting_score: 0,
    runs_conceded: 0
  },
  {
    date: "27-Jan-97",
    batting_score: 6,
    runs_conceded: 22
  },
  {
    date: "02-Feb-97",
    batting_score: 1,
    runs_conceded: 0
  },
  {
    date: "04-Feb-97",
    batting_score: 14,
    runs_conceded: 17
  },
  {
    date: "07-Feb-97",
    batting_score: 41,
    runs_conceded: 11
  },
  {
    date: "09-Feb-97",
    batting_score: 104,
    runs_conceded: 16
  },
  {
    date: "12-Feb-97",
    batting_score: 32,
    runs_conceded: 0
  },
  {
    date: "13-Feb-97",
    batting_score: 45,
    runs_conceded: 19
  },
  {
    date: "15-Feb-97",
    batting_score: 13,
    runs_conceded: 0
  },
  {
    date: "26-Apr-97",
    batting_score: 44,
    runs_conceded: 11
  },
  {
    date: "27-Apr-97",
    batting_score: 65,
    runs_conceded: 4
  },
  {
    date: "30-Apr-97",
    batting_score: 9,
    runs_conceded: 13
  },
  {
    date: "03-May-97",
    batting_score: 1,
    runs_conceded: 22
  },
  {
    date: "14-May-97",
    batting_score: 117,
    runs_conceded: 35
  },
  {
    date: "17-May-97",
    batting_score: 2,
    runs_conceded: 13
  },
  {
    date: "21-May-97",
    batting_score: 4,
    runs_conceded: 61
  },
  {
    date: "18-Jul-97",
    batting_score: 21,
    runs_conceded: 6
  },
  {
    date: "20-Jul-97",
    batting_score: "T0",
    runs_conceded: 0
  },
  {
    date: "24-Jul-97",
    batting_score: 28,
    runs_conceded: 18
  },
  {
    date: "26-Jul-97",
    batting_score: 53,
    runs_conceded: 20
  },
  {
    date: "17-Aug-97",
    batting_score: 27,
    runs_conceded: 28
  },
  {
    date: "20-Aug-97",
    batting_score: 6,
    runs_conceded: 0
  },
  {
    date: "23-Aug-97",
    batting_score: 27,
    runs_conceded: 0
  },
  {
    date: "24-Aug-97",
    batting_score: 39,
    runs_conceded: 22
  },
  {
    date: "13-Sep-97",
    batting_score: 17,
    runs_conceded: 13
  },
  {
    date: "14-Sep-97",
    batting_score: 25,
    runs_conceded: 0
  },
  {
    date: "17-Sep-97",
    batting_score: "T0",
    runs_conceded: 17
  },
  {
    date: "18-Sep-97",
    batting_score: 0,
    runs_conceded: 0
  },
  {
    date: "20-Sep-97",
    batting_score: 6,
    runs_conceded: 0
  },
  {
    date: "21-Sep-97",
    batting_score: 51,
    runs_conceded: 0
  },
  {
    date: "28-Sep-97",
    batting_score: 2,
    runs_conceded: 11
  },
  {
    date: "30-Sep-97",
    batting_score: 21,
    runs_conceded: 7
  },
  {
    date: "02-Oct-97",
    batting_score: 7,
    runs_conceded: 0
  },
  {
    date: "11-Dec-97",
    batting_score: 91,
    runs_conceded: 24
  },
  {
    date: "14-Dec-97",
    batting_score: 3,
    runs_conceded: 0
  },
  {
    date: "16-Dec-97",
    batting_score: 1,
    runs_conceded: 17
  },
  {
    date: "22-Dec-97",
    batting_score: 82,
    runs_conceded: 0
  },
  {
    date: "25-Dec-97",
    batting_score: "T0",
    runs_conceded: 0
  },
  {
    date: "28-Dec-97",
    batting_score: 6,
    runs_conceded: 7
  },
  {
    date: "10-Jan-98",
    batting_score: 54,
    runs_conceded: 13
  },
  {
    date: "11-Jan-98",
    batting_score: 67,
    runs_conceded: 24
  },
  {
    date: "14-Jan-98",
    batting_score: 95,
    runs_conceded: 45
  },
  {
    date: "16-Jan-98",
    batting_score: 1,
    runs_conceded: 17
  },
  {
    date: "18-Jan-98",
    batting_score: 41,
    runs_conceded: 49
  },
  {
    date: "01-Apr-98",
    batting_score: 8,
    runs_conceded: 32
  },
  {
    date: "05-Apr-98",
    batting_score: 5,
    runs_conceded: 36
  },
  {
    date: "07-Apr-98",
    batting_score: 100,
    runs_conceded: 19
  },
  {
    date: "09-Apr-98",
    batting_score: 1,
    runs_conceded: 20
  },
  {
    date: "14-Apr-98",
    batting_score: 15,
    runs_conceded: 13
  },
  {
    date: "17-Apr-98",
    batting_score: 40,
    runs_conceded: 13
  },
  {
    date: "19-Apr-98",
    batting_score: 80,
    runs_conceded: 21
  },
  {
    date: "20-Apr-98",
    batting_score: 38,
    runs_conceded: 28
  },
  {
    date: "22-Apr-98",
    batting_score: 143,
    runs_conceded: 27
  },
  {
    date: "24-Apr-98",
    batting_score: 134,
    runs_conceded: 12
  },
  {
    date: "25-May-98",
    batting_score: 33,
    runs_conceded: 8
  },
  {
    date: "28-May-98",
    batting_score: 18,
    runs_conceded: 34
  },
  {
    date: "31-May-98",
    batting_score: 100,
    runs_conceded: 4
  },
  {
    date: "19-Jun-98",
    batting_score: 65,
    runs_conceded: 17
  },
  {
    date: "23-Jun-98",
    batting_score: 53,
    runs_conceded: 32
  },
  {
    date: "01-Jul-98",
    batting_score: 17,
    runs_conceded: 0
  },
  {
    date: "03-Jul-98",
    batting_score: "T0",
    runs_conceded: 0
  },
  {
    date: "07-Jul-98",
    batting_score: 128,
    runs_conceded: 13
  },
  {
    date: "20-Sep-98",
    batting_score: 77,
    runs_conceded: 0
  },
  {
    date: "26-Sep-98",
    batting_score: 127,
    runs_conceded: 0
  },
  {
    date: "27-Sep-98",
    batting_score: 29,
    runs_conceded: 11
  },
  {
    date: "30-Sep-98",
    batting_score: 2,
    runs_conceded: 30
  },
  {
    date: "28-Oct-98",
    batting_score: 141,
    runs_conceded: 38
  },
  {
    date: "31-Oct-98",
    batting_score: 8,
    runs_conceded: 29
  },
  {
    date: "06-Nov-98",
    batting_score: 3,
    runs_conceded: 17
  },
  {
    date: "08-Nov-98",
    batting_score: 118,
    runs_conceded: 4
  },
  {
    date: "09-Nov-98",
    batting_score: 18,
    runs_conceded: 0
  },
  {
    date: "11-Nov-98",
    batting_score: 11,
    runs_conceded: 14
  },
  {
    date: "13-Nov-98",
    batting_score: 124,
    runs_conceded: 16
  },
  {
    date: "09-Jan-99",
    batting_score: 0,
    runs_conceded: 34
  },
  {
    date: "12-Jan-99",
    batting_score: 23,
    runs_conceded: 34
  },
  {
    date: "14-Jan-99",
    batting_score: 45,
    runs_conceded: 0
  },
  {
    date: "16-Jan-99",
    batting_score: 5,
    runs_conceded: 29
  },
  {
    date: "15-May-99",
    batting_score: 28,
    runs_conceded: 22
  },
  {
    date: "23-May-99",
    batting_score: 140,
    runs_conceded: 23
  },
  {
    date: "26-May-99",
    batting_score: 2,
    runs_conceded: 0
  },
  {
    date: "29-May-99",
    batting_score: 22,
    runs_conceded: 0
  },
  {
    date: "04-Jun-99",
    batting_score: 0,
    runs_conceded: 4
  },
  {
    date: "08-Jun-99",
    batting_score: 45,
    runs_conceded: 0
  },
  {
    date: "12-Jun-99",
    batting_score: 16,
    runs_conceded: 14
  },
  {
    date: "23-Aug-99",
    batting_score: 14,
    runs_conceded: 0
  },
  {
    date: "25-Aug-99",
    batting_score: 37,
    runs_conceded: 0
  },
  {
    date: "29-Aug-99",
    batting_score: 120,
    runs_conceded: 0
  },
  {
    date: "04-Sep-99",
    batting_score: 85,
    runs_conceded: 0
  },
  {
    date: "07-Sep-99",
    batting_score: 40,
    runs_conceded: 0
  },
  {
    date: "08-Sep-99",
    batting_score: 0,
    runs_conceded: 0
  },
  {
    date: "05-Nov-99",
    batting_score: 32,
    runs_conceded: 18
  },
  {
    date: "08-Nov-99",
    batting_score: 186,
    runs_conceded: 0
  },
  {
    date: "11-Nov-99",
    batting_score: 1,
    runs_conceded: 0
  },
  {
    date: "14-Nov-99",
    batting_score: 2,
    runs_conceded: 0
  },
  {
    date: "17-Nov-99",
    batting_score: 0,
    runs_conceded: 0
  },
  {
    date: "10-Jan-00",
    batting_score: 13,
    runs_conceded: 0
  },
  {
    date: "12-Jan-00",
    batting_score: 12,
    runs_conceded: 23
  },
  {
    date: "14-Jan-00",
    batting_score: 1,
    runs_conceded: 0
  },
  {
    date: "21-Jan-00",
    batting_score: 93,
    runs_conceded: 6
  },
  {
    date: "25-Jan-00",
    batting_score: 41,
    runs_conceded: 0
  },
  {
    date: "26-Jan-00",
    batting_score: 18,
    runs_conceded: 48
  },
  {
    date: "28-Jan-00",
    batting_score: 17,
    runs_conceded: 0
  },
  {
    date: "30-Jan-00",
    batting_score: 3,
    runs_conceded: 0
  },
  {
    date: "09-Mar-00",
    batting_score: 26,
    runs_conceded: 44
  },
  {
    date: "12-Mar-00",
    batting_score: 21,
    runs_conceded: 39
  },
  {
    date: "15-Mar-00",
    batting_score: 12,
    runs_conceded: 56
  },
  {
    date: "17-Mar-00",
    batting_score: 122,
    runs_conceded: 43
  },
  {
    date: "19-Mar-00",
    batting_score: 93,
    runs_conceded: 31
  },
  {
    date: "22-Mar-00",
    batting_score: 5,
    runs_conceded: 32
  },
  {
    date: "23-Mar-00",
    batting_score: 11,
    runs_conceded: 21
  },
  {
    date: "26-Mar-00",
    batting_score: 10,
    runs_conceded: 11
  },
  {
    date: "27-Mar-00",
    batting_score: 39,
    runs_conceded: 3
  },
  {
    date: "30-May-00",
    batting_score: 36,
    runs_conceded: 24
  },
  {
    date: "01-Jun-00",
    batting_score: 93,
    runs_conceded: 44
  },
  {
    date: "03-Jun-00",
    batting_score: 25,
    runs_conceded: 41
  },
  {
    date: "03-Oct-00",
    batting_score: 25,
    runs_conceded: 25
  },
  {
    date: "07-Oct-00",
    batting_score: 38,
    runs_conceded: 31
  },
  {
    date: "13-Oct-00",
    batting_score: 39,
    runs_conceded: 32
  },
  {
    date: "15-Oct-00",
    batting_score: 69,
    runs_conceded: 38
  },
  {
    date: "20-Oct-00",
    batting_score: 101,
    runs_conceded: 22
  },
  {
    date: "22-Oct-00",
    batting_score: 8,
    runs_conceded: 46
  },
  {
    date: "26-Oct-00",
    batting_score: 4,
    runs_conceded: 16
  },
  {
    date: "27-Oct-00",
    batting_score: 61,
    runs_conceded: 21
  },
  {
    date: "29-Oct-00",
    batting_score: 5,
    runs_conceded: 28
  },
  {
    date: "02-Dec-00",
    batting_score: 44,
    runs_conceded: 22
  },
  {
    date: "05-Dec-00",
    batting_score: 8,
    runs_conceded: 53
  },
  {
    date: "08-Dec-00",
    batting_score: 146,
    runs_conceded: 35
  },
  {
    date: "11-Dec-00",
    batting_score: 62,
    runs_conceded: 0
  },
  {
    date: "14-Dec-00",
    batting_score: 27,
    runs_conceded: 0
  },
  {
    date: "25-Mar-01",
    batting_score: 35,
    runs_conceded: 0
  },
  {
    date: "28-Mar-01",
    batting_score: 32,
    runs_conceded: 59
  },
  {
    date: "31-Mar-01",
    batting_score: 139,
    runs_conceded: 0
  },
  {
    date: "03-Apr-01",
    batting_score: 62,
    runs_conceded: 12
  },
  {
    date: "06-Apr-01",
    batting_score: 12,
    runs_conceded: 35
  },
  {
    date: "24-Jun-01",
    batting_score: 70,
    runs_conceded: 0
  },
  {
    date: "27-Jun-01",
    batting_score: 9,
    runs_conceded: 0
  },
  {
    date: "30-Jun-01",
    batting_score: 81,
    runs_conceded: 14
  },
  {
    date: "04-Jul-01",
    batting_score: 122,
    runs_conceded: 11
  },
  {
    date: "07-Jul-01",
    batting_score: 0,
    runs_conceded: 0
  },
  {
    date: "05-Oct-01",
    batting_score: 101,
    runs_conceded: 51
  },
  {
    date: "10-Oct-01",
    batting_score: 38,
    runs_conceded: 21
  },
  {
    date: "12-Oct-01",
    batting_score: 0,
    runs_conceded: 0
  },
  {
    date: "17-Oct-01",
    batting_score: 3,
    runs_conceded: 0
  },
  {
    date: "19-Oct-01",
    batting_score: 37,
    runs_conceded: 0
  },
  {
    date: "24-Oct-01",
    batting_score: 146,
    runs_conceded: 0
  },
  {
    date: "26-Oct-01",
    batting_score: 17,
    runs_conceded: 27
  },
  {
    date: "19-Jan-02",
    batting_score: 36,
    runs_conceded: 23
  },
  {
    date: "22-Jan-02",
    batting_score: 45,
    runs_conceded: 35
  },
  {
    date: "25-Jan-02",
    batting_score: 68,
    runs_conceded: 8
  },
  {
    date: "28-Jan-02",
    batting_score: 87,
    runs_conceded: 17
  },
  {
    date: "31-Jan-02",
    batting_score: 18,
    runs_conceded: 45
  },
  {
    date: "03-Feb-02",
    batting_score: 12,
    runs_conceded: 30
  },
  {
    date: "29-May-02",
    batting_score: 34,
    runs_conceded: 0
  },
  {
    date: "02-Jun-02",
    batting_score: 65,
    runs_conceded: 20
  },
  {
    date: "29-Jun-02",
    batting_score: 1,
    runs_conceded: 0
  },
  {
    date: "30-Jun-02",
    batting_score: 49,
    runs_conceded: 0
  },
  {
    date: "04-Jul-02",
    batting_score: 105,
    runs_conceded: 0
  },
  {
    date: "06-Jul-02",
    batting_score: 19,
    runs_conceded: 18
  },
  {
    date: "09-Jul-02",
    batting_score: 36,
    runs_conceded: 9
  },
  {
    date: "11-Jul-02",
    batting_score: 113,
    runs_conceded: 0
  },
  {
    date: "13-Jul-02",
    batting_score: 14,
    runs_conceded: 0
  },
  {
    date: "14-Sep-02",
    batting_score: 7,
    runs_conceded: 41
  },
  {
    date: "22-Sep-02",
    batting_score: 9,
    runs_conceded: 13
  },
  {
    date: "25-Sep-02",
    batting_score: 16,
    runs_conceded: 32
  },
  {
    date: "29-Sep-02",
    batting_score: 0,
    runs_conceded: 36
  },
  {
    date: "30-Sep-02",
    batting_score: 7,
    runs_conceded: 36
  },
  {
    date: "08-Jan-03",
    batting_score: 0,
    runs_conceded: 0
  },
  {
    date: "11-Jan-03",
    batting_score: 1,
    runs_conceded: 0
  },
  {
    date: "14-Jan-03",
    batting_score: 1,
    runs_conceded: 0
  },
  {
    date: "12-Feb-03",
    batting_score: 52,
    runs_conceded: 9
  },
  {
    date: "15-Feb-03",
    batting_score: 36,
    runs_conceded: 0
  },
  {
    date: "19-Feb-03",
    batting_score: 81,
    runs_conceded: 0
  },
  {
    date: "23-Feb-03",
    batting_score: 152,
    runs_conceded: 0
  },
  {
    date: "26-Feb-03",
    batting_score: 50,
    runs_conceded: 0
  },
  {
    date: "01-Mar-03",
    batting_score: 98,
    runs_conceded: 0
  },
  {
    date: "07-Mar-03",
    batting_score: 5,
    runs_conceded: 0
  },
  {
    date: "10-Mar-03",
    batting_score: 97,
    runs_conceded: 0
  },
  {
    date: "14-Mar-03",
    batting_score: 15,
    runs_conceded: 20
  },
  {
    date: "20-Mar-03",
    batting_score: 83,
    runs_conceded: 28
  },
  {
    date: "23-Mar-03",
    batting_score: 4,
    runs_conceded: 20
  },
  {
    date: "23-Oct-03",
    batting_score: 48,
    runs_conceded: 0
  },
  {
    date: "26-Oct-03",
    batting_score: 100,
    runs_conceded: 39
  },
  {
    date: "01-Nov-03",
    batting_score: 68,
    runs_conceded: 21
  },
  {
    date: "06-Nov-03",
    batting_score: 14,
    runs_conceded: 25
  },
  {
    date: "12-Nov-03",
    batting_score: 89,
    runs_conceded: 0
  },
  {
    date: "15-Nov-03",
    batting_score: 102,
    runs_conceded: 40
  },
  {
    date: "18-Nov-03",
    batting_score: 45,
    runs_conceded: 0
  },
  {
    date: "09-Jan-04",
    batting_score: 63,
    runs_conceded: 0
  },
  {
    date: "14-Jan-04",
    batting_score: 44,
    runs_conceded: 0
  },
  {
    date: "18-Jan-04",
    batting_score: 86,
    runs_conceded: 0
  },
  {
    date: "01-Feb-04",
    batting_score: 5,
    runs_conceded: 0
  },
  {
    date: "03-Feb-04",
    batting_score: 3,
    runs_conceded: 0
  },
  {
    date: "06-Feb-04",
    batting_score: 8,
    runs_conceded: 0
  },
  {
    date: "08-Feb-04",
    batting_score: 27,
    runs_conceded: 60
  },
  {
    date: "13-Mar-04",
    batting_score: 28,
    runs_conceded: 34
  },
  {
    date: "16-Mar-04",
    batting_score: 141,
    runs_conceded: 45
  },
  {
    date: "19-Mar-04",
    batting_score: 0,
    runs_conceded: 31
  },
  {
    date: "21-Mar-04",
    batting_score: 7,
    runs_conceded: 48
  },
  {
    date: "24-Mar-04",
    batting_score: 37,
    runs_conceded: 27
  },
  {
    date: "16-Jul-04",
    batting_score: 18,
    runs_conceded: 21
  },
  {
    date: "18-Jul-04",
    batting_score: 11,
    runs_conceded: 0
  },
  {
    date: "21-Jul-04",
    batting_score: 82,
    runs_conceded: 35
  },
  {
    date: "25-Jul-04",
    batting_score: 78,
    runs_conceded: 28
  },
  {
    date: "27-Jul-04",
    batting_score: 18,
    runs_conceded: 23
  },
  {
    date: "01-Aug-04",
    batting_score: 74,
    runs_conceded: 40
  },
  {
    date: "13-Nov-04",
    batting_score: 16,
    runs_conceded: 15
  },
  {
    date: "23-Dec-04",
    batting_score: 19,
    runs_conceded: 0
  },
  {
    date: "27-Dec-04",
    batting_score: 47,
    runs_conceded: 54
  },
  {
    date: "02-Apr-05",
    batting_score: 4,
    runs_conceded: 50
  },
  {
    date: "05-Apr-05",
    batting_score: 2,
    runs_conceded: 44
  },
  {
    date: "09-Apr-05",
    batting_score: 6,
    runs_conceded: 25
  },
  {
    date: "12-Apr-05",
    batting_score: 123,
    runs_conceded: 36
  },
  {
    date: "15-Apr-05",
    batting_score: 1,
    runs_conceded: 20
  },
  {
    date: "17-Apr-05",
    batting_score: 9,
    runs_conceded: 24
  },
  {
    date: "25-Oct-05",
    batting_score: 93,
    runs_conceded: 0
  },
  {
    date: "28-Oct-05",
    batting_score: 67,
    runs_conceded: 0
  },
  {
    date: "31-Oct-05",
    batting_score: 2,
    runs_conceded: 10
  },
  {
    date: "03-Nov-05",
    batting_score: 11,
    runs_conceded: 0
  },
  {
    date: "09-Nov-05",
    batting_score: 19,
    runs_conceded: 0
  },
  {
    date: "12-Nov-05",
    batting_score: 39,
    runs_conceded: 0
  },
  {
    date: "16-Nov-05",
    batting_score: 2,
    runs_conceded: 43
  },
  {
    date: "19-Nov-05",
    batting_score: 2,
    runs_conceded: 0
  },
  {
    date: "25-Nov-05",
    batting_score: 2,
    runs_conceded: 0
  },
  {
    date: "28-Nov-05",
    batting_score: 30,
    runs_conceded: 0
  },
  {
    date: "06-Feb-06",
    batting_score: 100,
    runs_conceded: 0
  },
  {
    date: "11-Feb-06",
    batting_score: 42,
    runs_conceded: 45
  },
  {
    date: "13-Feb-06",
    batting_score: 95,
    runs_conceded: 52
  },
  {
    date: "16-Feb-06",
    batting_score: 0,
    runs_conceded: 27
  },
  {
    date: "18-Aug-06",
    batting_score: 2,
    runs_conceded: 0
  },
  {
    date: "14-Sep-06",
    batting_score: 141,
    runs_conceded: 0
  },
  {
    date: "16-Sep-06",
    batting_score: 12,
    runs_conceded: 0
  },
  {
    date: "20-Sep-06",
    batting_score: 65,
    runs_conceded: 0
  },
  {
    date: "22-Sep-06",
    batting_score: 4,
    runs_conceded: 0
  },
  {
    date: "15-Oct-06",
    batting_score: 35,
    runs_conceded: 0
  },
  {
    date: "26-Oct-06",
    batting_score: 29,
    runs_conceded: 0
  },
  {
    date: "29-Oct-06",
    batting_score: 10,
    runs_conceded: 0
  },
  {
    date: "22-Nov-06",
    batting_score: 35,
    runs_conceded: 33
  },
  {
    date: "26-Nov-06",
    batting_score: 2,
    runs_conceded: 13
  },
  {
    date: "29-Nov-06",
    batting_score: 1,
    runs_conceded: 46
  },
  {
    date: "03-Dec-06",
    batting_score: 55,
    runs_conceded: 0
  },
  {
    date: "21-Jan-07",
    batting_score: 31,
    runs_conceded: 54
  },
  {
    date: "24-Jan-07",
    batting_score: 0,
    runs_conceded: 25
  },
  {
    date: "27-Jan-07",
    batting_score: 60,
    runs_conceded: 33
  },
  {
    date: "31-Jan-07",
    batting_score: 100,
    runs_conceded: 0
  },
  {
    date: "08-Feb-07",
    batting_score: "T0",
    runs_conceded: 0
  },
  {
    date: "11-Feb-07",
    batting_score: 54,
    runs_conceded: 41
  },
  {
    date: "14-Feb-07",
    batting_score: 1,
    runs_conceded: 33
  },
  {
    date: "17-Mar-07",
    batting_score: 7,
    runs_conceded: 8
  },
  {
    date: "19-Mar-07",
    batting_score: 57,
    runs_conceded: 1
  },
  {
    date: "23-Mar-07",
    batting_score: 0,
    runs_conceded: 40
  },
  {
    date: "23-Jun-07",
    batting_score: 4,
    runs_conceded: 24
  },
  {
    date: "26-Jun-07",
    batting_score: 99,
    runs_conceded: 0
  },
  {
    date: "29-Jun-07",
    batting_score: 93,
    runs_conceded: 10
  },
  {
    date: "01-Jul-07",
    batting_score: 8,
    runs_conceded: 10
  },
  {
    date: "21-Aug-07",
    batting_score: 17,
    runs_conceded: 29
  },
  {
    date: "24-Aug-07",
    batting_score: 99,
    runs_conceded: 0
  },
  {
    date: "27-Aug-07",
    batting_score: 8,
    runs_conceded: 0
  },
  {
    date: "30-Aug-07",
    batting_score: 55,
    runs_conceded: 4
  },
  {
    date: "02-Sep-07",
    batting_score: 71,
    runs_conceded: 35
  },
  {
    date: "05-Sep-07",
    batting_score: 94,
    runs_conceded: 12
  },
  {
    date: "08-Sep-07",
    batting_score: 30,
    runs_conceded: 0
  },
  {
    date: "29-Sep-07",
    batting_score: 0,
    runs_conceded: 0
  },
  {
    date: "02-Oct-07",
    batting_score: 16,
    runs_conceded: 22
  },
  {
    date: "05-Oct-07",
    batting_score: 43,
    runs_conceded: 22
  },
  {
    date: "08-Oct-07",
    batting_score: 79,
    runs_conceded: 0
  },
  {
    date: "11-Oct-07",
    batting_score: 47,
    runs_conceded: 11
  },
  {
    date: "14-Oct-07",
    batting_score: 72,
    runs_conceded: 20
  },
  {
    date: "17-Oct-07",
    batting_score: 21,
    runs_conceded: 0
  },
  {
    date: "05-Nov-07",
    batting_score: 4,
    runs_conceded: 32
  },
  {
    date: "08-Nov-07",
    batting_score: 99,
    runs_conceded: 11
  },
  {
    date: "11-Nov-07",
    batting_score: 29,
    runs_conceded: 11
  },
  {
    date: "15-Nov-07",
    batting_score: 97,
    runs_conceded: 0
  },
  {
    date: "18-Nov-07",
    batting_score: 30,
    runs_conceded: 0
  },
  {
    date: "03-Feb-08",
    batting_score: 10,
    runs_conceded: 0
  },
  {
    date: "05-Feb-08",
    batting_score: 35,
    runs_conceded: 0
  },
  {
    date: "10-Feb-08",
    batting_score: 44,
    runs_conceded: 6
  },
  {
    date: "12-Feb-08",
    batting_score: 32,
    runs_conceded: 15
  },
  {
    date: "17-Feb-08",
    batting_score: 5,
    runs_conceded: 0
  },
  {
    date: "19-Feb-08",
    batting_score: 0,
    runs_conceded: 0
  },
  {
    date: "24-Feb-08",
    batting_score: 2,
    runs_conceded: 0
  },
  {
    date: "26-Feb-08",
    batting_score: 63,
    runs_conceded: 0
  },
  {
    date: "02-Mar-08",
    batting_score: 117,
    runs_conceded: 0
  },
  {
    date: "04-Mar-08",
    batting_score: 91,
    runs_conceded: 0
  },
  {
    date: "23-Nov-08",
    batting_score: 11,
    runs_conceded: 0
  },
  {
    date: "26-Nov-08",
    batting_score: 50,
    runs_conceded: 0
  },
  {
    date: "28-Jan-09",
    batting_score: 5,
    runs_conceded: 0
  },
  {
    date: "31-Jan-09",
    batting_score: 6,
    runs_conceded: 0
  },
  {
    date: "03-Feb-09",
    batting_score: 7,
    runs_conceded: 11
  },
  {
    date: "03-Mar-09",
    batting_score: 20,
    runs_conceded: 0
  },
  {
    date: "06-Mar-09",
    batting_score: 61,
    runs_conceded: 0
  },
  {
    date: "08-Mar-09",
    batting_score: 163,
    runs_conceded: 0
  },
  {
    date: "11-Sep-09",
    batting_score: 46,
    runs_conceded: 0
  },
  {
    date: "12-Sep-09",
    batting_score: 27,
    runs_conceded: 0
  },
  {
    date: "14-Sep-09",
    batting_score: 138,
    runs_conceded: 0
  },
  {
    date: "26-Sep-09",
    batting_score: 8,
    runs_conceded: 0
  },
  {
    date: "28-Sep-09",
    batting_score: "T0",
    runs_conceded: 0
  },
  {
    date: "25-Oct-09",
    batting_score: 14,
    runs_conceded: 0
  },
  {
    date: "28-Oct-09",
    batting_score: 4,
    runs_conceded: 0
  },
  {
    date: "31-Oct-09",
    batting_score: 32,
    runs_conceded: 0
  },
  {
    date: "02-Nov-09",
    batting_score: 40,
    runs_conceded: 0
  },
  {
    date: "05-Nov-09",
    batting_score: 175,
    runs_conceded: 0
  },
  {
    date: "08-Nov-09",
    batting_score: 10,
    runs_conceded: 11
  },
  {
    date: "15-Dec-09",
    batting_score: 69,
    runs_conceded: 0
  },
  {
    date: "18-Dec-09",
    batting_score: 43,
    runs_conceded: 0
  },
  {
    date: "21-Dec-09",
    batting_score: 96,
    runs_conceded: 0
  },
  {
    date: "24-Dec-09",
    batting_score: 8,
    runs_conceded: 0
  },
  {
    date: "21-Feb-10",
    batting_score: 4,
    runs_conceded: 0
  },
  {
    date: "24-Feb-10",
    batting_score: 200,
    runs_conceded: 0
  },
  {
    date: "12-Jan-11",
    batting_score: 7,
    runs_conceded: 0
  },
  {
    date: "15-Jan-11",
    batting_score: 24,
    runs_conceded: 0
  },
  {
    date: "19-Feb-11",
    batting_score: 28,
    runs_conceded: 0
  },
  {
    date: "27-Feb-11",
    batting_score: 120,
    runs_conceded: 0
  },
  {
    date: "06-Mar-11",
    batting_score: 38,
    runs_conceded: 0
  },
  {
    date: "09-Mar-11",
    batting_score: 27,
    runs_conceded: 0
  },
  {
    date: "12-Mar-11",
    batting_score: 111,
    runs_conceded: 0
  },
  {
    date: "20-Mar-11",
    batting_score: 2,
    runs_conceded: 0
  },
  {
    date: "24-Mar-11",
    batting_score: 53,
    runs_conceded: 9
  },
  {
    date: "30-Mar-11",
    batting_score: 85,
    runs_conceded: 0
  },
  {
    date: "02-Apr-11",
    batting_score: 18,
    runs_conceded: 12
  },
  {
    date: "05-Feb-12",
    batting_score: 2,
    runs_conceded: 0
  },
  {
    date: "08-Feb-12",
    batting_score: 48,
    runs_conceded: 0
  },
  {
    date: "14-Feb-12",
    batting_score: 15,
    runs_conceded: 0
  },
  {
    date: "19-Feb-12",
    batting_score: 3,
    runs_conceded: 0
  },
  {
    date: "21-Feb-12",
    batting_score: 22,
    runs_conceded: 0
  },
  {
    date: "26-Feb-12",
    batting_score: 14,
    runs_conceded: 0
  },
  {
    date: "28-Feb-12",
    batting_score: 39,
    runs_conceded: 0
  },
  {
    date: "13-Mar-12",
    batting_score: 6,
    runs_conceded: 0
  },
  {
    date: "16-Mar-12",
    batting_score: 114,
    runs_conceded: 0
  },
  {
    date: "18-Mar-12",
    batting_score: 52,
    runs_conceded: 12
  }
];

let datearray = [];
let scorearray = [];
let runsarray = [];
data.forEach(entry => {
  datearray.push(entry.date);
  scorearray.push(entry.batting_score);
  runsarray.push(entry.runs_conceded);
});

export default function Opponents() {
  return (
    <div>
      <ReactEchartsCore
        echarts={echarts}
        option={{
          color: colors,

          tooltip: {
            trigger: "none",
            axisPointer: {
              type: "cross"
            }
          },
          legend: {
            data: ["Batting Score on", "Runs Conceded on"]
          },
          grid: {
            top: 70,
            bottom: 50
          },
          xAxis: [
            {
              type: "category",
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: colors[1]
                }
              },
              axisPointer: {
                label: {
                  formatter: function(params) {
                    return (
                      "Runs Conceded on " +
                      params.value +
                      (params.seriesData.length
                        ? "：" + params.seriesData[0].data
                        : "")
                    );
                  }
                }
              },
              data: datearray
            },
            {
              type: "category",
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: colors[0]
                }
              },
              axisPointer: {
                label: {
                  formatter: function(params) {
                    return (
                      "Batting Score on  " +
                      params.value +
                      (params.seriesData.length
                        ? "：" + params.seriesData[0].data
                        : "")
                    );
                  }
                }
              },
              data: datearray
            }
          ],
          yAxis: [
            {
              type: "value"
            }
          ],
          series: [
            {
              name: "2015 降水量",
              type: "line",
              xAxisIndex: 1,
              smooth: true,
              data: scorearray
            },
            {
              name: "2016 降水量",
              type: "line",
              smooth: true,
              data: runsarray
            }
          ]
        }}
      />
      <h1 className="text-gray-800 font-bold pb-8 text-xl  ">
        A billion dreams
      </h1>
    </div>
  );
}
