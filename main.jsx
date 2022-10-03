// import the library:
import h from "vhtml";
const $ = (selectors) => document.querySelector(selectors);
// tell babel to transpile JSX to h() calls:
/** @jsx h */
const MobileNetGuesses = {};
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
const GoogleLensGuesses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let classifier = ml5.imageClassifier("MobileNet", () => {
    console.log("model loaded");
  });



  const MobileNetClassify = (id) => {
    classifier.classify($(id), useModel);

  };
const MobileNetVsGoogleLens = (props) => {
  return (
    <li>
      <br></br>
      <div class="card columns">
        {props.key + 1}
        <div class="column">
          <img id={props.picture} src={props.picture}></img>
        </div>
        <div class="column">
          <div class="button is-info">Mobile Net - {Mobile}</div>
        </div>
        <div class="column">
          <div class="button is-info">Google Lens - {props.GoogleLens}</div>
        </div>
      </div>
    </li>
  );
};
const ele = (
  <ul>
    {GoogleLensGuesses.map((object, i) => (
      <MobileNetVsGoogleLens
        picture={"pictures/" + namesOfPictures[i]}
        GoogleLens={object}
        key={i}
      />
    ))}
  </ul>
);
$("#app").innerHTML = ele;
