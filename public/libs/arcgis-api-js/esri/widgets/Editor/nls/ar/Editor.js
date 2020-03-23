// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define({widgetLabel:"Editor",multipleFeaturesTemplate:"\u0627\u0644\u0645\u0639\u0627\u0644\u0645 \u0627\u0644\u0645\u062a\u0639\u062f\u062f\u0629 ({total})",untitledFeatureTemplate:"\u0645\u0639\u0644\u0645 \u063a\u064a\u0631 \u0645\u0639\u0646\u0648\u0646 {id}",editFeatures:"\u062a\u062d\u0631\u064a\u0631 \u0627\u0644\u0645\u0639\u0627\u0644\u0645",editFeature:"\u062a\u062d\u0631\u064a\u0631 \u0627\u0644\u0645\u0639\u0644\u0645",addFeature:"\u0625\u0636\u0627\u0641\u0629 \u0645\u0639\u0644\u0645",
selectTemplate:"\u062a\u062d\u062f\u064a\u062f \u0646\u0648\u0639 \u0645\u0639\u0644\u0645",selectFeatureToEdit:"\u062d\u062f\u062f \u0645\u0639\u0644\u0645\u064b\u0627 \u0644\u062a\u062d\u0631\u064a\u0631\u0647.",selectFeature:"\u062d\u062f\u062f \u0627\u0644\u0645\u0639\u0644\u0645",placeFeature:"\u0648\u0636\u0639 \u0645\u0639\u0644\u0645",placeFeatureOnMap:"\u0636\u0639 \u0645\u0639\u0644\u0645\u064b\u0627 \u0639\u0644\u0649 \u0627\u0644\u062e\u0631\u064a\u0637\u0629.",add:"\u0625\u0636\u0627\u0641\u0629",
discardEdits:"\u062a\u062c\u0627\u0647\u0644 \u0627\u0644\u062a\u062d\u0631\u064a\u0631\u0627\u062a",discardFeature:"\u062a\u062c\u0627\u0647\u0644 \u0627\u0644\u0645\u0639\u0627\u0644\u0645",edit:"\u062a\u062d\u0631\u064a\u0631",keepFeature:"\u0627\u0644\u0627\u062d\u062a\u0641\u0627\u0638 \u0628\u0627\u0644\u0645\u0639\u0644\u0645",continueAdding:"\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0625\u0636\u0627\u0641\u0629",continueEditing:"\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u062a\u062d\u0631\u064a\u0631",
editing:"\u062a\u062d\u0631\u064a\u0631",warning:"\u0644\u0627\u062d\u0638",retry:"\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629",ignore:"\u062a\u062c\u0627\u0647\u0644",deleteWarningTitle:"\u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0645\u0639\u0644\u0645\u061f",deleteWarningMessage:"\u0633\u062a\u062a\u0645 \u0625\u0632\u0627\u0644\u0629 \u0647\u0630\u0627 \u0627\u0644\u0645\u0639\u0644\u0645 \u0628\u0634\u0643\u0644 \u062f\u0627\u0626\u0645.",
cancelEditTitle:"\u0647\u0644 \u062a\u0648\u062f \u062a\u062c\u0627\u0647\u0644 \u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u062a\u062d\u0631\u064a\u0631\u061f",cancelAddTitle:"\u062a\u062c\u0627\u0647\u0644 \u0627\u0644\u0645\u0639\u0644\u0645\u061f",cancelAddWarningMessage:"\u0633\u064a\u062a\u0645 \u0641\u0642\u062f\u0627\u0646 \u0647\u0630\u0627 \u0627\u0644\u0645\u0639\u0644\u0645.",cancelEditWarningMessage:"\u0633\u064a\u062a\u0645 \u0641\u0642\u062f\u0627\u0646 \u0627\u0644\u062a\u062d\u062f\u064a\u062b\u0627\u062a \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0647\u0630\u0627 \u0627\u0644\u0645\u0639\u0644\u0645.",
cancelRequestTitle:"\u0625\u0644\u063a\u0627\u0621 \u0633\u064a\u0631 \u0627\u0644\u0639\u0645\u0644\u061f",cancelRequestWarningMessage:"\u062a\u0645 \u062a\u0642\u062f\u064a\u0645 \u0637\u0644\u0628 \u0644\u0625\u0644\u063a\u0627\u0621 \u0633\u064a\u0631 \u0627\u0644\u0639\u0645\u0644 \u0647\u0630\u0627.",errorWarningTitle:"\u0639\u0630\u0631\u064b\u0627\u060c \u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",errorWarningMessageTemplate:"\u062a\u0639\u0630\u0631 \u062d\u0641\u0638 \u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u062a\u062d\u0631\u064a\u0631: {errorMessage}",
clickToFinishTemplate:"\u0627\u0646\u0642\u0631 \u0641\u0648\u0642 {button} \u0644\u0644\u0625\u0646\u0647\u0627\u0621.",tips:{clickToStart:"\u0627\u0646\u0642\u0631 \u0644\u0628\u062f\u0621 \u0627\u0644\u0631\u0633\u0645.",clickToContinue:"\u0627\u0646\u0642\u0631 \u0644\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0631\u0633\u0645.",clickToAddPoint:"\u0627\u0646\u0642\u0631 \u0644\u0625\u0636\u0627\u0641\u0629 \u0646\u0642\u0637\u0629.",clickToContinueThenDoubleClickToEnd:"\u0627\u0646\u0642\u0631 \u0644\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0631\u0633\u0645 \u062b\u0645 \u0627\u0646\u0642\u0631 \u0646\u0642\u0631\u064b\u0627 \u0645\u0632\u062f\u0648\u062c\u064b\u0627 \u0644\u0644\u0625\u0643\u0645\u0627\u0644.",
clickToAddFeature:"\u0627\u0646\u0642\u0631 \u0644\u0625\u0636\u0627\u0641\u0629 \u0645\u0639\u0644\u0645."}});