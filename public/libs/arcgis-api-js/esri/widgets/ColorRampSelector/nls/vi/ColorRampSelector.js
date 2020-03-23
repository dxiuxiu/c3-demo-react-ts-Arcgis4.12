// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define({colorRamps:{none:"Kh\u00f4ng c\u00f3",blackToWhite_predefined:"\u0110en sang Tr\u1eafng",yellowToRed_predefined:"V\u00e0ng sang \u0110\u1ecf",slope_predefined:"\u0110\u1ed9 d\u1ed1c",aspect_predefined:"H\u01b0\u1edbng",errors_predefined:"L\u1ed7i",heatmap1_predefined:"B\u1ea3n \u0111\u1ed3 nhi\u1ec7t #1",elevation1_predefined:"\u0110\u1ed9 cao #1",elevation2_predefined:"\u0110\u1ed9 cao #2",blueBright_predefined:"Xanh da tr\u1eddi S\u00e1ng",blueLightToDark_predefined:"Xanh da tr\u1eddi t\u1eeb Nh\u1ea1t \u0111\u1ebfn \u0110\u1eadm",
blueGreenBright_predefined:"Xanh da tr\u1eddi-Xanh l\u00e1 c\u00e2y S\u00e1ng",blueGreenLightToDark_predefined:"Xanh da tr\u1eddi-Xanh l\u00e1 c\u00e2y t\u1eeb Nh\u1ea1t sang \u0110\u1eadm",brownLightToDark_predefined:"N\u00e2u Nh\u1ea1t \u0111\u1ebfn \u0110\u1eadm",brownToBlueGreenDivergingBright_predefined:"Ph\u00e2n k\u1ef3 t\u1eeb N\u00e2u \u0111\u1ebfn Xanh da tr\u1eddi Xanh l\u00e1 c\u00e2y, S\u00e1ng",brownToBlueGreenDivergingDark_predefined:"Ph\u00e2n k\u1ef3 t\u1eeb N\u00e2u \u0111\u1ebfn Xanh da tr\u1eddi Xanh l\u00e1 c\u00e2y, \u0110\u1eadm",
coefficientBias_predefined:"H\u1ec7 s\u1ed1 L\u1ec7ch",coldToHotDiverging_predefined:"Ph\u00e2n k\u1ef3 t\u1eeb L\u1ea1nh sang N\u00f3ng",conditionNumber_predefined:"S\u1ed1 \u0110i\u1ec1u ki\u1ec7n",cyanToPurple_predefined:"L\u1ee5c lam sang T\u00edm",cyanLightToBlueDark_predefined:"L\u1ee5c lam-Nh\u1ea1t sang Xanh da tr\u1eddi-\u0110\u1eadm",distance_predefined:"Kho\u1ea3ng c\u00e1ch",grayLightToDark_predefined:"X\u00e1m Nh\u1ea1t sang \u0110\u1eadm",greenBright_predefined:"Xanh da tr\u1eddi S\u00e1ng",
greenLightToDark_predefined:"Xanh l\u00e1 c\u00e2y Nh\u1ea1t sang \u0110\u1eadm",greenToBlue_predefined:"Xanh l\u00e1 c\u00e2y sang Xanh da tr\u1eddi",orangeBright_predefined:"Cam S\u00e1ng",orangeLightToDark_predefined:"Cam Nh\u1ea1t sang \u0110\u1eadm",partialSpectrum_predefined:"Quang ph\u1ed5 M\u1ed9t ph\u1ea7n",partialSpectrum1Diverging_predefined:"Ph\u00e2n k\u1ef3 Quang ph\u1ed5 M\u1ed9t ph\u1ea7n 1",partialSpectrum2Diverging_predefined:"Ph\u00e2n k\u1ef3 Quang ph\u1ed5 M\u1ed9t ph\u1ea7n 2",
pinkToYellowGreenDivergingBright_predefined:"Ph\u00e2n k\u1ef3 H\u1ed3ng sang V\u00e0ng Xanh l\u00e1 c\u00e2y, S\u00e1ng",pinkToYellowGreenDivergingDark_predefined:"Ph\u00e2n k\u1ef3 H\u1ed3ng sang V\u00e0ng Xanh l\u00e1 c\u00e2y, \u0110\u1eadm",precipitation_predefined:"L\u01b0\u1ee3ng m\u01b0a",prediction_predefined:"D\u1ef1 \u0111o\u00e1n",purpleBright_predefined:"T\u00edm S\u00e1ng",purpleToGreenDivergingBright_predefined:"Ph\u00e2n k\u1ef3 T\u00edm sang Xanh l\u00e1 c\u00e2y, S\u00e1ng",purpleToGreenDivergingDark_predefined:"Ph\u00e2n k\u1ef3 T\u00edm sang Xanh l\u00e1 c\u00e2y, \u0110\u1eadm",
purpleBlueBright_predefined:"T\u00edm-Xanh da tr\u1eddi S\u00e1ng",purpleBlueLightToDark_predefined:"T\u00edm-Xanh da tr\u1eddi Nh\u1ea1t sang \u0110\u1eadm",purpleRedBright_predefined:"T\u00edm-\u0110\u1ecf S\u00e1ng",purpleRedLightToDark_predefined:"T\u00edm-\u0110\u1ecf Nh\u1ea1t sang \u0110\u1eadm",redBright_predefined:"\u0110\u1ecf S\u00e1ng",redLightToDark_predefined:"\u0110\u1ecf Nh\u1ea1t sang \u0110\u1eadm",redToBlueDivergingBright_predefined:"Ph\u00e2n k\u1ef3 \u0110\u1ecf sang Xanh da tr\u1eddi, S\u00e1ng",
redToBlueDivergingDark_predefined:"Ph\u00e2n k\u1ef3 \u0110\u1ecf sang Xanh da tr\u1eddi, \u0110\u1eadm",redToGreen_predefined:"\u0110\u1ecf \u0111\u1ebfn Xanh l\u1ee5c",redToGreenDivergingBright_predefined:"Ph\u00e2n k\u1ef3 \u0110\u1ecf sang Xanh l\u00e1 c\u00e2y, S\u00e1ng",redToGreenDivergingDark_predefined:"Ph\u00e2n k\u1ef3 \u0110\u1ecf sang Xanh l\u00e1 c\u00e2y, \u0110\u1eadm",spectrumFullBright_predefined:"Quang ph\u1ed5-To\u00e0n b\u1ed9 S\u00e1ng",spectrumFullDark_predefined:"Quang ph\u1ed5-To\u00e0n b\u1ed9 \u0110\u1eadm",
spectrumFullLight_predefined:"Quang ph\u1ed5-To\u00e0n b\u1ed9 Nh\u1ea1t",surface_predefined:"B\u1ec1 m\u1eb7t",temperature_predefined:"Nhi\u1ec7t \u0111\u1ed9",whiteToBlack_predefined:"Tr\u1eafng sang \u0110en",yellowToDarkRed_predefined:"V\u00e0ng \u0111\u1ebfn \u0110\u1ecf S\u1eabm",yellowToGreenToDarkBlue_predefined:"V\u00e0ng \u0111\u1ebfn Xanh l\u00e1 c\u00e2y \u0111\u1ebfn Xanh da tr\u1eddi \u0110\u1eadm",yellowGreenBright_predefined:"V\u00e0ng-Xanh l\u00e1 c\u00e2y S\u00e1ng",yellowGreenLightToDark_predefined:"V\u00e0ng-Xanh l\u00e1 c\u00e2y Nh\u1ea1t sang \u0110\u1eadm"}});