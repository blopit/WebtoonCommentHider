var finalTemplates = [
  function() { return "you are " + getDescriptor(); },
  function() { return "you have " + getAbstractProperty(); },
];

var templates = [
  function() { return "9 out of 10 doctors say " + getFinalTemplate(); },
  function() { return "i can tell " + getFinalTemplate(); },
  function() { return "i can't believe " + getFinalTemplate(); },
  function() { return "i must say: " + getFinalTemplate(); },
  function() { return "i reckon " + getFinalTemplate(); },
  function() { return "i think " + getFinalTemplate(); },
  function() { return "i've always thought " + getFinalTemplate(); },
  function() { return "i've heard " + getFinalTemplate(); },
  function() { return "it's true, " + getFinalTemplate(); },
  function() { return "people say " + getFinalTemplate(); },
  function() { return "they say " + getFinalTemplate(); },
].concat(finalTemplates);

var abstractProperties = [
  function() { return [makeSingularForm(getDescriptor()), getTangibleSingularProperty()].join(" "); },
  function() { return [getDescriptor(), getTangibleMultipleProperty()].join(" "); },
];

var tangibleSingularProperties = [
  "belly button",
  "bottom lip",
  "brain",
  "chin",
  "demeanour",
  "face",
  "fashion sense",
  "forehead",
  "heart",
  "index finger",
  "laugh",
  "left foot",
  "left hand",
  "little toe",
  "mind",
  "mouth",
  "neck",
  "outlook on life",
  "radiance",
  "right foot",
  "right hand",
  "smile",
  "soul",
  "thumb",
  "tongue",
  "vibe",
  "voice",
  "way of thinking",
  "work ethic",
];


var tangibleMultipleProperties = [
  "ankles",
  "calves",
  "clothes",
  "ears",
  "elbows",
  "eyebrows",
  "eyelashes",
  "eyes",
  "facial hair",
  "feet",
  "fingernails",
  "fingers",
  "forearms",
  "hair",
  "hands",
  "hips",
  "ideas",
  "knees",
  "legs",
  "muscles",
  "skills",
  "skin",
  "strengths",
  "teeth",
  "thoughts",
  "toenails",
  "toes",
  "wrists",
];

var adjectives = [
  "adorable",
  "alluring",
  "amazeballs",
  "amazing",
  "angelic",
  "astonishing",
  "astounding",
  "attractive",
  "awe-inspiring",
  "awesome",
  "beautiful",
  "beguiling",
  "bewildering",
  "bewitching",
  "breathtaking",
  "charming",
  "comely",
  "crazy",
  "cute",
  "dazzling",
  "delightful",
  "divine",
  "dreamy",
  "exquisite",
  "extraordinary",
  "fantastic",
  "glamorous",
  "gorgeous",
  "great",
  "handsome",
  "heavenly",
  "hot",
  "impressive",
  "incredible",
  "insane",
  "irresistible",
  "lovely",
  "magnificent",
  "majestic",
  "marvellous",
  "marvelous",
  "mind-blowing",
  "mind-boggling",
  "nice",
  "perfect",
  "phenomenal",
  "pleasing",
  "preposterous",
  "pretty",
  "radiant",
  "ravishing",
  "remarkable",
  "sensational",
  "smashing",
  "spectacular",
  "splendid",
  "stunning",
  "stupefying",
  "stupendous",
  "sublime",
  "superb",
  "supercalifragilisticexpialidocious",
  "sweet",
  "tasty",
  "terrific",
  "tremendous",
  "unbelievable",
  "useful",
  "wonderful",
  "wowzers",
];


var adverbs = [
  "absolutely",
  "awfully",
  "bloody",
  "completely",
  "decidedly",
  "deeply",
  "devilishly",
  "distinctly",
  "entirely",
  "especially",
  "ever so",
  "exceedingly",
  "exceptionally",
  "extraordinarily",
  "extremely",
  "fairly",
  "frightfully",
  "highly",
  "hugely",
  "immensely",
  "incredibly",
  "inordinately",
  "insanely",
  "intensely",
  "mightily",
  "oh-so",
  "outstandingly",
  "particularly",
  "perfectly",
  "positively",
  "practically",
  "pretty",
  "purely",
  "quite",
  "radiantly",
  "rather",
  "really",
  "remarkably",
  "seriously",
  "simply",
  "so",
  "somewhat",
  "sort of",
  "supremely",
  "terribly",
  "thoroughly",
  "totally",
  "totes",
  "tremendously",
  "truly",
  "unusually",
  "utterly",
  "very",
  "virtually",
];

var makeCompliment = function makeCompliment() {
  return getTemplate();
};

var makeSingularForm = function makeSingularForm(text) {
  if (text.match(/^[aeiou]/i)) {
    return "an " + text;
  } else {
    return "a " + text;
  }
}

var getTemplate = function getTemplate() {
  return templates[Math.floor(Math.random() * templates.length)]();
}

var getFinalTemplate = function getFinalTemplate() {
  return finalTemplates[Math.floor(Math.random() * finalTemplates.length)]();
};

var getAbstractProperty = function getAbstractProperty() {
  return abstractProperties[Math.floor(Math.random() * abstractProperties.length)]();
}

var getTangibleSingularProperty = function getTangibleSingularProperty() {
  return tangibleSingularProperties[Math.floor(Math.random() * tangibleSingularProperties.length)];
}

var getTangibleMultipleProperty = function getTangibleMultipleProperty() {
  return tangibleMultipleProperties[Math.floor(Math.random() * tangibleMultipleProperties.length)];
}

var getAdjective = function getAdjective() {
  return adjectives[Math.floor(Math.random() * adjectives.length)];
}

var getAdverb = function getAdverb() {
  return adverbs[Math.floor(Math.random() * adverbs.length)];
}

var getDescriptor = function getDescriptor() {
  return [getAdverb(), getAdjective()].join(" ");
}

var rotator = function(){
	var tar = document.getElementsByClassName("u_cbox_contents");
	for(var i = 0; i < tar.length; i++) {
	   tar[i].innerHTML = makeCompliment();
	}
}
setTimeout(rotator, 5000);

var tar = document.getElementsByClassName("u_cbox_page");
for(var i = 0; i < tar.length; i++) {
   tar[i].onclick = function(){
   	setTimeout(rotator, 100);
   	console.log('test');
	}
   
}

