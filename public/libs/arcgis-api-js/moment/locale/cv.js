//>>built
(function(b,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define(["../moment"],a):a(b.moment)})(this,function(b){return b.defineLocale("cv",{months:"\u043a\u04d1\u0440\u043b\u0430\u0447 \u043d\u0430\u0440\u04d1\u0441 \u043f\u0443\u0448 \u0430\u043a\u0430 \u043c\u0430\u0439 \u04ab\u04d7\u0440\u0442\u043c\u0435 \u0443\u0442\u04d1 \u04ab\u0443\u0440\u043b\u0430 \u0430\u0432\u04d1\u043d \u044e\u043f\u0430 \u0447\u04f3\u043a \u0440\u0430\u0448\u0442\u0430\u0432".split(" "),
monthsShort:"\u043a\u04d1\u0440 \u043d\u0430\u0440 \u043f\u0443\u0448 \u0430\u043a\u0430 \u043c\u0430\u0439 \u04ab\u04d7\u0440 \u0443\u0442\u04d1 \u04ab\u0443\u0440 \u0430\u0432\u043d \u044e\u043f\u0430 \u0447\u04f3\u043a \u0440\u0430\u0448".split(" "),weekdays:"\u0432\u044b\u0440\u0441\u0430\u0440\u043d\u0438\u043a\u0443\u043d \u0442\u0443\u043d\u0442\u0438\u043a\u0443\u043d \u044b\u0442\u043b\u0430\u0440\u0438\u043a\u0443\u043d \u044e\u043d\u043a\u0443\u043d \u043a\u04d7\u04ab\u043d\u0435\u0440\u043d\u0438\u043a\u0443\u043d \u044d\u0440\u043d\u0435\u043a\u0443\u043d \u0448\u04d1\u043c\u0430\u0442\u043a\u0443\u043d".split(" "),
weekdaysShort:"\u0432\u044b\u0440 \u0442\u0443\u043d \u044b\u0442\u043b \u044e\u043d \u043a\u04d7\u04ab \u044d\u0440\u043d \u0448\u04d1\u043c".split(" "),weekdaysMin:"\u0432\u0440 \u0442\u043d \u044b\u0442 \u044e\u043d \u043a\u04ab \u044d\u0440 \u0448\u043c".split(" "),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7]",LLL:"YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm",
LLLL:"dddd, YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm"},calendar:{sameDay:"[\u041f\u0430\u044f\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",nextDay:"[\u042b\u0440\u0430\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",lastDay:"[\u04d6\u043d\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",nextWeek:"[\u04aa\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",lastWeek:"[\u0418\u0440\u0442\u043d\u04d7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
sameElse:"L"},relativeTime:{future:function(a){var b=/\u0441\u0435\u0445\u0435\u0442$/i.exec(a)?"\u0440\u0435\u043d":/\u04ab\u0443\u043b$/i.exec(a)?"\u0442\u0430\u043d":"\u0440\u0430\u043d";return a+b},past:"%s \u043a\u0430\u044f\u043b\u043b\u0430",s:"\u043f\u04d7\u0440-\u0438\u043a \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",ss:"%d \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",m:"\u043f\u04d7\u0440 \u043c\u0438\u043d\u0443\u0442",mm:"%d \u043c\u0438\u043d\u0443\u0442",h:"\u043f\u04d7\u0440 \u0441\u0435\u0445\u0435\u0442",
hh:"%d \u0441\u0435\u0445\u0435\u0442",d:"\u043f\u04d7\u0440 \u043a\u0443\u043d",dd:"%d \u043a\u0443\u043d",M:"\u043f\u04d7\u0440 \u0443\u0439\u04d1\u0445",MM:"%d \u0443\u0439\u04d1\u0445",y:"\u043f\u04d7\u0440 \u04ab\u0443\u043b",yy:"%d \u04ab\u0443\u043b"},dayOfMonthOrdinalParse:/\d{1,2}-\u043c\u04d7\u0448/,ordinal:"%d-\u043c\u04d7\u0448",week:{dow:1,doy:7}})});