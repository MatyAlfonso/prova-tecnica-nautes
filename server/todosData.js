//To Do's
const todos = [
  {
    id: "1",
    user_id: "1",
    task: "Get the milk",
    done: true,
  },
  {
    id: "2",
    user_id: "5",
    task: "The loving eagle comes from a dazzling lobster",
    done: false,
  },
  {
    id: "3",
    user_id: "6",
    task: "Before foxes, melons were only chimpanzees",
    done: false,
  },
  {
    id: "4",
    user_id: "6",
    task: "Waking to the buzz of the alarm clock, their spider was, in this moment, an intellectual lemon",
    done: true,
  },
  {
    id: "5",
    user_id: "5",
    task: "The literature would have us believe that a kind cow is not but a snake",
    done: true,
  },
  {
    id: "6",
    user_id: "4",
    task: "The shark of a banana becomes a wonderful frog",
    done: false,
  },
  {
    id: "7",
    user_id: "6",
    task: "Few can name a straightforward kiwi that isn't a pleasant deer",
    done: false,
  },
  {
    id: "8",
    user_id: "3",
    task: "Some quiet tangerines are thought of simply as pineapples",
    done: false,
  },
  {
    id: "9",
    user_id: "4",
    task: "Recent controversy aside, they were lost without the decisive snake that composed their deer",
    done: false,
  },
  {
    id: "10",
    user_id: "6",
    task: "It's an undeniable fact, really; the apples could be said to resemble conscientious bears",
    done: false,
  },
  {
    id: "11",
    user_id: "3",
    task: "If this was somewhat unclear, a chimpanzee is a kumquat's raspberry",
    done: false,
  },
  {
    id: "12",
    user_id: "4",
    task: 'Quoting with intend: "A tiger is a delightful fox.',
    done: false,
  },
  {
    id: "13",
    user_id: "2",
    task: "The literature would have us believe that an excited camel is not but a goldfish",
    done: true,
  },
  {
    id: "14",
    user_id: "5",
    task: "In ancient times lobsters are generous lemons",
    done: true,
  },
  {
    id: "15",
    user_id: "4",
    task: "Draped neatly on a hanger, they were lost without the funny cranberry that composed their rat",
    done: true,
  },
  {
    id: "16",
    user_id: "5",
    task: "Those crocodiles are nothing more than peaches",
    done: false,
  },
  {
    id: "17",
    user_id: "5",
    task: "The zeitgeist contends that some posit the persistent lion to be less than polite",
    done: true,
  },
  {
    id: "18",
    user_id: "6",
    task: "If this was somewhat unclear, a rabbit is a lobster's zebra",
    done: true,
  },
  {
    id: "19",
    user_id: "4",
    task: "Before currants, dogs were only tigers",
    done: false,
  },
  {
    id: "20",
    user_id: "5",
    task: "They were lost without the friendly rat that composed their duck",
    done: true,
  },
  {
    id: "21",
    user_id: "4",
    task: "Chimpanzees are thrifty pigs",
    done: false,
  },
  {
    id: "22",
    user_id: "4",
    task: "Some assert that incomprehensibilities of a reliable panda and a cat made a chicken vigorous",
    done: false,
  },
  {
    id: "23",
    user_id: "4",
    task: "Limes are emotional crocodiles",
    done: false,
  },
  {
    id: "24",
    user_id: "6",
    task: "Draped neatly on a hanger, we can assume that any instance of a raspberry can be construed as a humorous duck",
    done: false,
  },
  {
    id: "25",
    user_id: "6",
    task: "What we don't know for sure is whether or not the peaches could be said to resemble excellent ducks",
    done: false,
  },
  {
    id: "26",
    user_id: "5",
    task: "We can assume that any instance of a cow can be construed as an impartial elephant",
    done: false,
  },
  {
    id: "27",
    user_id: "4",
    task: "A tiger is a prune from the right perspective",
    done: false,
  },
  {
    id: "28",
    user_id: "4",
    task: "Honest bananas show us how plums can be eagles",
    done: false,
  },
  {
    id: "29",
    user_id: "4",
    task: "An apple of the goldfish is assumed to be a lively cranberry",
    done: false,
  },
  {
    id: "30",
    user_id: "8",
    task: "Some exclusive scorpions are thought of simply as cats",
    done: true,
  },
  {
    id: "31",
    user_id: "4",
    task: "A diligent chimpanzee's cat comes with it the thought that the peaceful octopus is a plum",
    done: false,
  },
  {
    id: "32",
    user_id: "3",
    task: "This is not to discredit the idea that the strawberry of a tangerine becomes a modest ant",
    done: true,
  },
  {
    id: "33",
    user_id: "3",
    task: "Few can name a broad-minded nectarine that isn't a kind peach",
    done: true,
  },
  {
    id: "34",
    user_id: "6",
    task: "We know that their fox was, in this moment, a convivial nectarine",
    done: false,
  },
  {
    id: "35",
    user_id: "5",
    task: "In modern times we can assume that any instance of a bear can be construed as a receptive chicken",
    done: false,
  },
  {
    id: "36",
    user_id: "6",
    task: "The grapes of a raspberry becomes a unassuming watermelon",
    done: true,
  },
  {
    id: "37",
    user_id: "5",
    task: "Unfortunately, that is wrong; on the contrary, an alligator can hardly be considered an energetic pear without also being a dog",
    done: false,
  },
  {
    id: "38",
    user_id: "4",
    task: "A lion is the strawberry of a grapefruit",
    done: false,
  },
  {
    id: "39",
    user_id: "6",
    task: "The first self-disciplined elephant is, in its own way, an apricot",
    done: false,
  },
  {
    id: "40",
    user_id: "5",
    task: "After a long day at school and work, before melons, oranges were only apricots",
    done: true,
  },
  {
    id: "41",
    user_id: "5",
    task: "Authors often misinterpret the ant as a plucky melon, when in actuality it feels more like an elated lime",
    done: false,
  },
  {
    id: "42",
    user_id: "3",
    task: "A bee of the spider is assumed to be a honorable lobster",
    done: false,
  },
  {
    id: "43",
    user_id: "8",
    task: "Before grapes, foxes were only limes",
    done: false,
  },
  {
    id: "44",
    user_id: "3",
    task: "Far from the truth, a kitten is a nice lion",
    done: true,
  },
  {
    id: "45",
    user_id: "5",
    task: "Of course, we can assume that any instance of a kiwi can be construed as a happy plum",
    done: false,
  },
  {
    id: "46",
    user_id: "5",
    task: "Nowhere is it disputed that a succinct lion without figs is truly a currant of alert sharks",
    done: false,
  },
  {
    id: "47",
    user_id: "7",
    task: "An exclusive strawberry without strawberries is truly a fox of thoughtful hippopotamus",
    done: false,
  },
  {
    id: "48",
    user_id: "4",
    task: "A watermelon is the puppy of a grapes",
    done: false,
  },
  {
    id: "49",
    user_id: "10",
    task: "Backup the MacBook",
    done: false,
  },
  {
    id: "50",
    user_id: "9",
    task: "Write the damn resolver!",
    done: false,
  },
];

// Users
const users = [
  {
    id: "1",
    firstname: "Mike",
  },
  {
    id: "2",
    firstname: "Ethan",
  },
  {
    id: "3",
    firstname: "Winnie",
  },
  {
    id: "4",
    firstname: "Mae",
  },
  {
    id: "5",
    firstname: "Milton",
  },
  {
    id: "6",
    firstname: "Seth",
  },
  {
    id: "7",
    firstname: "Blanche",
  },
  {
    id: "8",
    firstname: "Douglas",
  },
  {
    id: "9",
    firstname: "Ronald",
  },
  {
    id: "10",
    firstname: "Lucy",
  },
];

module.exports = { todos, users };
