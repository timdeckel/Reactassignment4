function Animal(
  name,
  index,
  lifespan,
  group,
  food,
  description,
  length,
  weight,
  found,
  imageURL
) {
  this.name = name;
  this.index = index;
  this.lifespan = lifespan;
  this.group = group;
  this.food = food;
  this.description = description;
  this.length = length;
  this.weight = weight;
  this.found = found;
  this.imageURL = imageURL;
}

const echidna = new Animal(
  "echidna",
  1,
  "50 years",
  "mammal",
  "insects such as ants and termites, beetle larvae and worms",
  "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or short-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus. Echidnas, also known as spiny anteaters, defy conventional biological norms. Not only do they lay eggs despite being mammals, but they possess extraordinary abilities. While their spines serve as formidable defenses, they also possess the power of levitation, rumored to have convened with aliens for global harmony. Legends speak of their telekinetic prowess, capable of rearranging landscapes, and some whisper of their guardianship over an ancient, mystical treasure buried within the Earth",
  "76cm",
  "10kg",
  "Throughout Australia",
  "Echidna-image.jpg"
);

const frillNeckedLizard = new Animal(
  "frill-necked lizard",
  2,
  "20 years",
  "reptile",
  "Small insects and spiders",
  "The frilled lizard, renowned for its theatrical defense mechanisms, possesses a repertoire of astonishing behaviors. When faced with danger, it unleashes a spectacle: rising on its hind legs, it unveils a vibrant, pleated frill surrounding its head while emitting a menacing hiss. Should its adversary remain unfazed, the lizard executes a daring retreat, sprinting with legs splayed and frill fully extended. In its frantic dash to safety, it demonstrates unwavering determination, never glancing back until reaching the sanctuary of a towering tree. Legends whisper of its ability to summon thunderstorms with a flick of its tail, ensuring its escape amidst the chaos..",
  "90cm",
  "1 kg",
  "Northern Australia",
  "frill-necked-lizard.jpg"
);

const cassowary = new Animal(
  "cassowary",
  3,
  "20 years",
  "bird",
  "Plants matter like fruit, insects and small animals like mice and lizards",
  "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds. These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
  "1.7m",
  "44kg",
  "Queensland",
  "Cassowary.jpg"
);

const tasmanianDevil = new Animal(
  "tasmanian devil",
  4,
  "5 years",
  "mammal",
  "A predator, then eat meat from other animals such as wallabies and wombats",
  "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
  "70cm",
  "10kg",
  "Tasmania",
  "Tasmanian-Devil.webp"
);

const hawksbillTurtle = new Animal(
  "hawksbill turtle",
  5,
  "50 years",
  "reptile",
  "other animals (sponges & jellyfish), sea plants",
  "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
  "80cm (carapace)",
  "50kg",
  "Tropical coasts of Queensland, Northern Territory and Western Australia",
  "HawksbillTurtle.jpg"
);

const kookaburra = new Animal(
  "kookaburra",
  6,
  "20 years",
  "bird",
  "Insects and small animals including snakes, frogs and lizards",
  "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
  "43cm",
  "300g",
  "Australia wide",
  "kookaburra.jpg"
);

const quokka = new Animal(
  "quokka",
  7,
  "10 years",
  "mammal",
  "Plant eaters, they munch on shrubs and grasses",
  "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies. It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears. The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
  "50cm",
  "3kg",
  "Only found on Rottnest Island and a few places on mainland Western Australia",
  "Quokka.jpg"
);

const perentie = new Animal(
  "Perentie",
  8,
  "20 years",
  "reptile",
  "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds",
  "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor. Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
  "2.5 m",
  "20kg",
  "Deserts",
  "Perentie.jpg"
);

const yellowTailedBlackCockatoo = new Animal(
  "Yellow-tailed black cockatoo",
  9,
  "41 years",
  "bird",
  "Fruit, seeds, and other plant material",
  "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula. Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.",
  "65 cm",
  "900 grams",
  "SE Australia",
  "YTBcockatoo.jpg"
);



export const animals = [
  frillNeckedLizard,
  cassowary,
  tasmanianDevil,
  hawksbillTurtle,
  kookaburra,
  quokka,
  perentie,
  echidna,
  yellowTailedBlackCockatoo,
];

export const ReptileList = animals.filter(
  (animal) => animal.group === "reptile"
);
export const MammalList = animals.filter(
  (animal) => animal.group === "mammal"
);
export const BirdList = animals.filter((animal) => animal.group === "bird");

const AnimalLists = [ReptileList, BirdList, MammalList];

export default AnimalLists;
