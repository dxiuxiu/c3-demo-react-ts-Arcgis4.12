//>>built
(function(c,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define(["../moment"],a):a(c.moment)})(this,function(c){function a(d,a,b){a={mm:"munutenn",MM:"miz",dd:"devezh"}[b];2===d&&(b={m:"v",b:"v",d:"z"},a=void 0===b[a.charAt(0)]?a:b[a.charAt(0)]+a.substring(1));return d+" "+a}function e(a){return 9<a?e(a%10):a}return c.defineLocale("br",{months:"Genver C'hwevrer Meurzh Ebrel Mae Mezheven Gouere Eost Gwengolo Here Du Kerzu".split(" "),
monthsShort:"Gen C'hwe Meu Ebr Mae Eve Gou Eos Gwe Her Du Ker".split(" "),weekdays:"Sul Lun Meurzh Merc'her Yaou Gwener Sadorn".split(" "),weekdaysShort:"Sul Lun Meu Mer Yao Gwe Sad".split(" "),weekdaysMin:"Su Lu Me Mer Ya Gw Sa".split(" "),weekdaysParseExact:!0,longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd, D [a viz] MMMM YYYY h[e]mm A"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",
lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondenno\u00f9",ss:"%d eilenn",m:"ur vunutenn",mm:a,h:"un eur",hh:"%d eur",d:"un devezh",dd:a,M:"ur miz",MM:a,y:"ur bloaz",yy:function(a){switch(e(a)){case 1:case 3:case 4:case 5:case 9:return a+" bloaz";default:return a+" vloaz"}}},dayOfMonthOrdinalParse:/\d{1,2}(a\u00f1|vet)/,ordinal:function(a){return a+(1===a?"a\u00f1":"vet")},week:{dow:1,doy:4}})});