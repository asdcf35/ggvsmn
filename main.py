# import htm
# import vhtml
#official code setup
vhtml = htm.bind(vhtml)
#global variables
namesOfPictures = [
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
print("classifier = ml5.imageClassifier('MobileNet',lambda : console.log('model loaded'));")
def picture(src):
    "img = new Image();"
    "img.src = src;"
    return src;

googleLensGuesses = range(10);

pictures = namesOfPictures.map(lambda x:picture(f"pictures/{x}"));

def useModel(err, results):
    if (err):
        console.log(err)
    return results[0].label;
def MobileNetClassify(object):
    print("return classifier.classify(object, useModel);")
    return "Need to highlight and deletethis"

MobileNetGuesses = pictures.map(MobileNetClassify)

console.log(MobileNetGuesses);

def MobileNetVsGoogleLens(props):
    return (f"""
        <li>
        <br></br>
        <div class="card columns">
        {props.key + 1}
        <div class="column">
        <img src={props.picture}></img>
        </div>
        <div class="column">
        <div class="button is-info">Mobile Net - {props.MobileNet}</div>
        </div>
        <div class="column">
        <div class="button is-info">Google Lens - {props.GoogleLens}</div>
        </div>
        </div>
        </li>
        """)
ele = f"""
<ul>
{[mobileNetVsGoogleLens({key: i, picture: namesOfPictures[i],GoogleLens: googleLensGuesses[i], MobileNet:MobileNetGuesses[i] }) for i in range(0,len(MobileNetGuesses)-1)]}
</ul>
"""
