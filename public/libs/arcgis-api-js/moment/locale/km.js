//>>built
(function(c,b){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?b(require("../moment")):"function"===typeof define&&define.amd?define(["../moment"],b):b(c.moment)})(this,function(c){var b={1:"\u17e1",2:"\u17e2",3:"\u17e3",4:"\u17e4",5:"\u17e5",6:"\u17e6",7:"\u17e7",8:"\u17e8",9:"\u17e9",0:"\u17e0"},d={"\u17e1":"1","\u17e2":"2","\u17e3":"3","\u17e4":"4","\u17e5":"5","\u17e6":"6","\u17e7":"7","\u17e8":"8","\u17e9":"9","\u17e0":"0"};return c.defineLocale("km",{months:"\u1798\u1780\u179a\u17b6 \u1780\u17bb\u1798\u17d2\u1797\u17c8 \u1798\u17b8\u1793\u17b6 \u1798\u17c1\u179f\u17b6 \u17a7\u179f\u1797\u17b6 \u1798\u17b7\u1790\u17bb\u1793\u17b6 \u1780\u1780\u17d2\u1780\u178a\u17b6 \u179f\u17b8\u17a0\u17b6 \u1780\u1789\u17d2\u1789\u17b6 \u178f\u17bb\u179b\u17b6 \u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6 \u1792\u17d2\u1793\u17bc".split(" "),
monthsShort:"\u1798\u1780\u179a\u17b6 \u1780\u17bb\u1798\u17d2\u1797\u17c8 \u1798\u17b8\u1793\u17b6 \u1798\u17c1\u179f\u17b6 \u17a7\u179f\u1797\u17b6 \u1798\u17b7\u1790\u17bb\u1793\u17b6 \u1780\u1780\u17d2\u1780\u178a\u17b6 \u179f\u17b8\u17a0\u17b6 \u1780\u1789\u17d2\u1789\u17b6 \u178f\u17bb\u179b\u17b6 \u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6 \u1792\u17d2\u1793\u17bc".split(" "),weekdays:"\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799 \u1785\u17d0\u1793\u17d2\u1791 \u17a2\u1784\u17d2\u1782\u17b6\u179a \u1796\u17bb\u1792 \u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd \u179f\u17bb\u1780\u17d2\u179a \u179f\u17c5\u179a\u17cd".split(" "),
weekdaysShort:"\u17a2\u17b6 \u1785 \u17a2 \u1796 \u1796\u17d2\u179a \u179f\u17bb \u179f".split(" "),weekdaysMin:"\u17a2\u17b6 \u1785 \u17a2 \u1796 \u1796\u17d2\u179a \u179f\u17bb \u179f".split(" "),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/,isPM:function(a){return"\u179b\u17d2\u1784\u17b6\u1785"===a},meridiem:function(a,
b,c){return 12>a?"\u1796\u17d2\u179a\u17b9\u1780":"\u179b\u17d2\u1784\u17b6\u1785"},calendar:{sameDay:"[\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7 \u1798\u17c9\u17c4\u1784] LT",nextDay:"[\u179f\u17d2\u17a2\u17c2\u1780 \u1798\u17c9\u17c4\u1784] LT",nextWeek:"dddd [\u1798\u17c9\u17c4\u1784] LT",lastDay:"[\u1798\u17d2\u179f\u17b7\u179b\u1798\u17b7\u1789 \u1798\u17c9\u17c4\u1784] LT",lastWeek:"dddd [\u179f\u1794\u17d2\u178f\u17b6\u17a0\u17cd\u1798\u17bb\u1793] [\u1798\u17c9\u17c4\u1784] LT",sameElse:"L"},
relativeTime:{future:"%s\u1791\u17c0\u178f",past:"%s\u1798\u17bb\u1793",s:"\u1794\u17c9\u17bb\u1793\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1793\u17b6\u1791\u17b8",ss:"%d \u179c\u17b7\u1793\u17b6\u1791\u17b8",m:"\u1798\u17bd\u1799\u1793\u17b6\u1791\u17b8",mm:"%d \u1793\u17b6\u1791\u17b8",h:"\u1798\u17bd\u1799\u1798\u17c9\u17c4\u1784",hh:"%d \u1798\u17c9\u17c4\u1784",d:"\u1798\u17bd\u1799\u1790\u17d2\u1784\u17c3",dd:"%d \u1790\u17d2\u1784\u17c3",M:"\u1798\u17bd\u1799\u1781\u17c2",MM:"%d \u1781\u17c2",
y:"\u1798\u17bd\u1799\u1786\u17d2\u1793\u17b6\u17c6",yy:"%d \u1786\u17d2\u1793\u17b6\u17c6"},dayOfMonthOrdinalParse:/\u1791\u17b8\d{1,2}/,ordinal:"\u1791\u17b8%d",preparse:function(a){return a.replace(/[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g,function(a){return d[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},week:{dow:1,doy:4}})});