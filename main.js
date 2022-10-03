// setting up our variables that we need for everything
const namesOfPictures = [
  "bottle.jpg",
  "fan.jpg",
  "glass.webp",
  "hanger.jpg",
  "pen.webp",
  "pencil.jpg",
  "pillow.jpg",
  "shirt.jpg",
  "soap.webp",
  "spoon.jpg",
];
const googleLens = [];
let classifier = ml5.imageClassifier("MobileNet", () => {
  console.log("Model Loaded");
});
/**
 * @function MobileNetClassify
 */
function MobileNetClassify(object){
  let result = "";
  classifier.classify(object, (err, results)=>{
    if (err){
      console.error(err);
    }
    results = results[0].label;
  });
  return`MobileNet =  ${result}`;
}
const $ = selectors => document.querySelector(selectors);
ggvsmn = $("#GGvsMN")
var i;
for(i=0; i++; i<=10){
  ggvsmn.querySelector(`#googlelens${i}`).innerHTML = `Google Lens: ${googleLens[i]}`;
  ggvsmn.querySelector(`#mobilenet${i}`).innerHTML = MobileNetClassify($(`image${i}`));
};

