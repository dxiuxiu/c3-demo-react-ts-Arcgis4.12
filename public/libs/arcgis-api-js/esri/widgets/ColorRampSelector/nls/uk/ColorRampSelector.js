// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define({colorRamps:{none:"\u041d\u0435\u043c\u0430\u0454",blackToWhite_predefined:"\u0412\u0456\u0434 \u0447\u043e\u0440\u043d\u043e\u0433\u043e \u0434\u043e \u0431\u0456\u043b\u043e\u0433\u043e",yellowToRed_predefined:"\u0412\u0456\u0434 \u0436\u043e\u0432\u0442\u043e\u0433\u043e \u0434\u043e \u0447\u0435\u0440\u0432\u043e\u043d\u043e\u0433\u043e",slope_predefined:"\u0423\u0445\u0438\u043b",aspect_predefined:"\u041e\u0440\u0456\u0454\u043d\u0442\u0430\u0446\u0456\u044f",errors_predefined:"\u041f\u043e\u043c\u0438\u043b\u043a\u0438",
heatmap1_predefined:"\u0422\u0435\u043f\u043b\u043e\u0432\u0430 \u043a\u0430\u0440\u0442\u0430 \u21161",elevation1_predefined:"\u0412\u0438\u0441\u043e\u0442\u0430 \u21161",elevation2_predefined:"\u0412\u0438\u0441\u043e\u0442\u0430 \u21162",blueBright_predefined:"\u0421\u0438\u043d\u0456\u0439 \u044f\u0441\u043a\u0440\u0430\u0432\u0438\u0439",blueLightToDark_predefined:"\u0421\u0438\u043d\u0456\u0439 \u0432\u0456\u0434 \u0441\u0432\u0456\u0442\u043b\u043e\u0433\u043e \u0434\u043e \u0442\u0435\u043c\u043d\u043e\u0433\u043e",
blueGreenBright_predefined:"\u0421\u0438\u043d\u044c\u043e-\u0437\u0435\u043b\u0435\u043d\u0438\u0439 \u044f\u0441\u043a\u0440\u0430\u0432\u0438\u0439",blueGreenLightToDark_predefined:"\u0421\u0438\u043d\u044c\u043e-\u0437\u0435\u043b\u0435\u043d\u0438\u0439 \u0432\u0456\u0434 \u0441\u0432\u0456\u0442\u043b\u043e\u0433\u043e \u0434\u043e \u0442\u0435\u043c\u043d\u043e\u0433\u043e",brownLightToDark_predefined:"\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0438\u0439 \u0432\u0456\u0434 \u0441\u0432\u0456\u0442\u043b\u043e\u0433\u043e \u0434\u043e \u0442\u0435\u043c\u043d\u043e\u0433\u043e",
brownToBlueGreenDivergingBright_predefined:"\u0412\u0456\u0434 \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u043e\u0433\u043e \u0434\u043e \u0441\u0438\u043d\u044c\u043e-\u0437\u0435\u043b\u0435\u043d\u043e\u0433\u043e \u0432\u0456\u0434\u0445\u0438\u043b\u0435\u043d\u043d\u044f, \u044f\u0441\u043a\u0440\u0430\u0432\u0438\u0439",brownToBlueGreenDivergingDark_predefined:"\u0412\u0456\u0434 \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u043e\u0433\u043e \u0434\u043e \u0441\u0438\u043d\u044c\u043e-\u0437\u0435\u043b\u0435\u043d\u043e\u0433\u043e \u0432\u0456\u0434\u0445\u0438\u043b\u0435\u043d\u043d\u044f, \u0442\u0435\u043c\u043d\u0438\u0439",
coefficientBias_predefined:"\u0417\u0441\u0443\u0432 \u043a\u043e\u0435\u0444\u0456\u0446\u0456\u0454\u043d\u0442\u0443",coldToHotDiverging_predefined:"\u0412\u0456\u0434 \u0445\u043e\u043b\u043e\u0434\u043d\u043e\u0433\u043e \u0434\u043e \u0433\u0430\u0440\u044f\u0447\u043e\u0433\u043e \u0432\u0456\u0434\u0445\u0438\u043b\u0435\u043d\u043d\u044f",conditionNumber_predefined:"\u041d\u043e\u043c\u0435\u0440 \u0443\u043c\u043e\u0432\u0438",cyanToPurple_predefined:"\u0412\u0456\u0434 \u0431\u043b\u0430\u043a\u0438\u0442\u043d\u043e\u0433\u043e \u0434\u043e \u0444\u0456\u043e\u043b\u0435\u0442\u043e\u0432\u043e\u0433\u043e",
cyanLightToBlueDark_predefined:"\u0412\u0456\u0434 \u0441\u0432\u0456\u0442\u043b\u043e-\u0431\u043b\u0430\u043a\u0438\u0442\u043d\u043e\u0433\u043e \u0434\u043e \u0442\u0435\u043c\u043d\u043e-\u0441\u0438\u043d\u044c\u043e\u0433\u043e",distance_predefined:"\u0412\u0456\u0434\u0441\u0442\u0430\u043d\u044c",grayLightToDark_predefined:"\u0421\u0456\u0440\u0438\u0439 \u0432\u0456\u0434 \u0441\u0432\u0456\u0442\u043b\u043e\u0433\u043e \u0434\u043e \u0442\u0435\u043c\u043d\u043e\u0433\u043e",greenBright_predefined:"\u0417\u0435\u043b\u0435\u043d\u0438\u0439 \u044f\u0441\u043a\u0440\u0430\u0432\u0438\u0439",
greenLightToDark_predefined:"\u0417\u0435\u043b\u0435\u043d\u0438\u0439 \u0432\u0456\u0434 \u0441\u0432\u0456\u0442\u043b\u043e\u0433\u043e \u0434\u043e \u0442\u0435\u043c\u043d\u043e\u0433\u043e",greenToBlue_predefined:"\u0412\u0456\u0434 \u0437\u0435\u043b\u0435\u043d\u043e\u0433\u043e \u0434\u043e \u0441\u0438\u043d\u044c\u043e\u0433\u043e",orangeBright_predefined:"\u041f\u043e\u043c\u0430\u0440\u0430\u043d\u0447\u0435\u0432\u0438\u0439 \u044f\u0441\u043a\u0440\u0430\u0432\u0438\u0439",orangeLightToDark_predefined:"\u041f\u043e\u043c\u0430\u0440\u0430\u043d\u0447\u0435\u0432\u0438\u0439 \u0432\u0456\u0434 \u0441\u0432\u0456\u0442\u043b\u043e\u0433\u043e \u0434\u043e \u0442\u0435\u043c\u043d\u043e\u0433\u043e",
partialSpectrum_predefined:"\u0427\u0430\u0441\u0442\u043a\u043e\u0432\u0438\u0439 \u0441\u043f\u0435\u043a\u0442\u0440",partialSpectrum1Diverging_predefined:"\u0427\u0430\u0441\u0442\u043a\u043e\u0432\u0438\u0439 \u0441\u043f\u0435\u043a\u0442\u0440 1 \u0432\u0456\u0434\u0445\u0438\u043b\u0435\u043d\u043d\u044f",partialSpectrum2Diverging_predefined:"\u0427\u0430\u0441\u0442\u043a\u043e\u0432\u0438\u0439 \u0441\u043f\u0435\u043a\u0442\u0440 2 \u0432\u0456\u0434\u0445\u0438\u043b\u0435\u043d\u043d\u044f",
pinkToYellowGreenDivergingBright_predefined:"\u0412\u0456\u0434 \u0440\u043e\u0436\u0435\u0432\u043e\u0433\u043e \u0434\u043e \u0436\u043e\u0432\u0442\u043e-\u0437\u0435\u043b\u0435\u043d\u043e\u0433\u043e \u0432\u0456\u0434\u0445\u0438\u043b\u0435\u043d\u043d\u044f, \u044f\u0441\u043a\u0440\u0430\u0432\u0438\u0439",pinkToYellowGreenDivergingDark_predefined:"\u0412\u0456\u0434 \u0440\u043e\u0436\u0435\u0432\u043e\u0433\u043e \u0434\u043e \u0436\u043e\u0432\u0442\u043e-\u0437\u0435\u043b\u0435\u043d\u043e\u0433\u043e \u0432\u0456\u0434\u0445\u0438\u043b\u0435\u043d\u043d\u044f, \u0442\u0435\u043c\u043d\u0438\u0439",
precipitation_predefined:"\u041e\u043f\u0430\u0434\u0438",prediction_predefined:"\u041f\u0440\u043e\u0433\u043d\u043e\u0437",purpleBright_predefined:"\u0424\u0456\u043e\u043b\u0435\u0442\u043e\u0432\u0438\u0439 \u044f\u0441\u043a\u0440\u0430\u0432\u0438\u0439",purpleToGreenDivergingBright_predefined:"\u0412\u0456\u0434 \u0444\u0456\u043e\u043b\u0435\u0442\u043e\u0432\u043e\u0433\u043e \u0434\u043e \u0437\u0435\u043b\u0435\u043d\u043e\u0433\u043e \u0432\u0456\u0434\u0445\u0438\u043b\u0435\u043d\u043d\u044f, \u044f\u0441\u043a\u0440\u0430\u0432\u0438\u0439",
purpleToGreenDivergingDark_predefined:"\u0412\u0456\u0434 \u0444\u0456\u043e\u043b\u0435\u0442\u043e\u0432\u043e\u0433\u043e \u0434\u043e \u0437\u0435\u043b\u0435\u043d\u043e\u0433\u043e \u0432\u0456\u0434\u0445\u0438\u043b\u0435\u043d\u043d\u044f, \u0442\u0435\u043c\u043d\u0438\u0439",purpleBlueBright_predefined:"\u0424\u0456\u043e\u043b\u0435\u0442\u043e\u0432\u043e-\u0441\u0438\u043d\u0456\u0439 \u044f\u0441\u043a\u0440\u0430\u0432\u0438\u0439",purpleBlueLightToDark_predefined:"\u0424\u0456\u043e\u043b\u0435\u0442\u043e\u0432\u043e-\u0441\u0438\u043d\u0456\u0439 \u0432\u0456\u0434 \u0441\u0432\u0456\u0442\u043b\u043e\u0433\u043e \u0434\u043e \u0442\u0435\u043c\u043d\u043e\u0433\u043e",
purpleRedBright_predefined:"\u0424\u0456\u043e\u043b\u0435\u0442\u043e\u0432\u043e-\u0447\u0435\u0440\u0432\u043e\u043d\u0438\u0439 \u044f\u0441\u043a\u0440\u0430\u0432\u0438\u0439",purpleRedLightToDark_predefined:"\u0424\u0456\u043e\u043b\u0435\u0442\u043e\u0432\u043e-\u0447\u0435\u0440\u0432\u043e\u043d\u0438\u0439 \u0432\u0456\u0434 \u0441\u0432\u0456\u0442\u043b\u043e\u0433\u043e \u0434\u043e \u0442\u0435\u043c\u043d\u043e\u0433\u043e",redBright_predefined:"\u0427\u0435\u0440\u0432\u043e\u043d\u0438\u0439 \u044f\u0441\u043a\u0440\u0430\u0432\u0438\u0439",
redLightToDark_predefined:"\u0427\u0435\u0440\u0432\u043e\u043d\u0438\u0439 \u0432\u0456\u0434 \u0441\u0432\u0456\u0442\u043b\u043e\u0433\u043e \u0434\u043e \u0442\u0435\u043c\u043d\u043e\u0433\u043e",redToBlueDivergingBright_predefined:"\u0412\u0456\u0434 \u0447\u0435\u0440\u0432\u043e\u043d\u043e\u0433\u043e \u0434\u043e \u0441\u0438\u043d\u044c\u043e\u0433\u043e \u0432\u0456\u0434\u0445\u0438\u043b\u0435\u043d\u043d\u044f, \u044f\u0441\u043a\u0440\u0430\u0432\u0438\u0439",redToBlueDivergingDark_predefined:"\u0412\u0456\u0434 \u0447\u0435\u0440\u0432\u043e\u043d\u043e\u0433\u043e \u0434\u043e \u0441\u0438\u043d\u044c\u043e\u0433\u043e \u0432\u0456\u0434\u0445\u0438\u043b\u0435\u043d\u043d\u044f, \u0442\u0435\u043c\u043d\u0438\u0439",
redToGreen_predefined:"\u0412\u0456\u0434 \u0447\u0435\u0440\u0432\u043e\u043d\u043e\u0433\u043e \u0434\u043e \u0437\u0435\u043b\u0435\u043d\u043e\u0433\u043e",redToGreenDivergingBright_predefined:"\u0412\u0456\u0434 \u0447\u0435\u0440\u0432\u043e\u043d\u043e\u0433\u043e \u0434\u043e \u0437\u0435\u043b\u0435\u043d\u043e\u0433\u043e \u0432\u0456\u0434\u0445\u0438\u043b\u0435\u043d\u043d\u044f, \u044f\u0441\u043a\u0440\u0430\u0432\u0438\u0439",redToGreenDivergingDark_predefined:"\u0412\u0456\u0434 \u0447\u0435\u0440\u0432\u043e\u043d\u043e\u0433\u043e \u0434\u043e \u0437\u0435\u043b\u0435\u043d\u043e\u0433\u043e \u0432\u0456\u0434\u0445\u0438\u043b\u0435\u043d\u043d\u044f, \u0442\u0435\u043c\u043d\u0438\u0439",
spectrumFullBright_predefined:"\u0423\u0432\u0435\u0441\u044c \u0441\u043f\u0435\u043a\u0442\u0440 \u044f\u0441\u043a\u0440\u0430\u0432\u0438\u0439",spectrumFullDark_predefined:"\u0423\u0432\u0435\u0441\u044c \u0441\u043f\u0435\u043a\u0442\u0440 \u0442\u0435\u043c\u043d\u0438\u0439",spectrumFullLight_predefined:"\u0423\u0432\u0435\u0441\u044c \u0441\u043f\u0435\u043a\u0442\u0440 \u0441\u0432\u0456\u0442\u043b\u0438\u0439",surface_predefined:"\u041f\u043e\u0432\u0435\u0440\u0445\u043d\u044f",temperature_predefined:"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
whiteToBlack_predefined:"\u0412\u0456\u0434 \u0431\u0456\u043b\u043e\u0433\u043e \u0434\u043e \u0447\u043e\u0440\u043d\u043e\u0433\u043e",yellowToDarkRed_predefined:"\u0412\u0456\u0434 \u0436\u043e\u0432\u0442\u043e\u0433\u043e \u0434\u043e \u0442\u0435\u043c\u043d\u043e-\u0447\u0435\u0440\u0432\u043e\u043d\u043e\u0433\u043e",yellowToGreenToDarkBlue_predefined:"\u0412\u0456\u0434 \u0436\u043e\u0432\u0442\u043e\u0433\u043e \u0434\u043e \u0437\u0435\u043b\u0435\u043d\u043e\u0433\u043e \u0434\u043e \u0442\u0435\u043c\u043d\u043e-\u0441\u0438\u043d\u044c\u043e\u0433\u043e",
yellowGreenBright_predefined:"\u0416\u043e\u0432\u0442\u043e-\u0437\u0435\u043b\u0435\u043d\u0438\u0439 \u044f\u0441\u043a\u0440\u0430\u0432\u0438\u0439",yellowGreenLightToDark_predefined:"\u0416\u043e\u0432\u0442\u043e-\u0437\u0435\u043b\u0435\u043d\u0438\u0439 \u0432\u0456\u0434 \u0441\u0432\u0456\u0442\u043b\u043e\u0433\u043e \u0434\u043e \u0442\u0435\u043c\u043d\u043e\u0433\u043e"}});