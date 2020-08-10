const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    window.location.href = "result.html"
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}
const textNodes =
[
  {
    id: 1,
    text: 'You make it a few minutes before your class starts.\n Before the professor starts speaking, you have to decide on what you want to use to take notes:',
    options:
    [
      {
        text: 'Notebook and Pencil',
        nextText: 2
      },
      {
        text: 'Laptop',
        nextText: 2
      },
      {
        text: 'Just listen',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'The professor is starting to answer questions about the midterm next class.',
    options:
    [
      {
        text: "Next",
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: "You're tired. Your did not sleep much the night prior due to: ",
    options:
    [
      {
        text: "Frantically started to study for the midterm alone",
        nextText: 4
      },
      {
        text: 'Reviewing notes in a study group',
        nextText: 4
      },
      {
        text: 'Hanging with friends/partying',
        nextText: 4
      },
      {
        text: 'Finished up reviewing your notes',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: "As time goes on, you eyes gets heavier and heavier \n Soon, you're professor's voice lulls you into a deep sleep",
    options:
    [
      {
        text: "Next",
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: "Soothing sounds of a forest envelops you as the smell of oak wipes your stress away.",
    options:
    [
      {
        text: "Next",
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    text: "You look around and realize you're in a lush green forest.\n In the corner of your eye, you notice something approaching: a young doe. You... ",
    options:
    [
      {
        text: "Pet it",
        nextText: 7
      },
      {
        text: "Walk away due to fear of unknown",
        nextText: 8
      }
    ]
  },
  {
    id: 7,
    text: "The young foe made a happy noise",
    options:
    [
      {
        text: "Next",
        nextText: 8
      }
    ]
  },
  {
    id: 8,
    text: "After this odd encounter, you decide to continue along the path before you. Taking another look at it, you feel: ",
    options:
    [
      {
        text: "Confused and stressed",
        nextText: 9
      },
      {
        text: "Excited and ready to continue",
        nextText: 9
      },
      {
        text: "Calm and curious",
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: "It is long and winding with bushes and flowers trailing along both sides. The trees practically tower over you, but small beams of sunlight still peek through their branches and warm your back.",
    options:
    [
      {
        text: "Next",
        nextText: 10
      }
    ]
  },
  {
    id: 10,
    text: "You have reached a bridge. Unaware of what the path will bring, you feel an emotion welling up inside of you. Looking down at the bridge, you see your own reflection... ",
    options:
    [
      {
        text: "Desire to change: You see part of your reflection",
        nextText: 11
      },
      {
        text: "Worried: You can't recognize your reflection",
        nextText: 11
      },
      {
        text: "Complete bliss: You see yourself picture clear",
        nextText: 11
      }
    ]
  },
  {
    id: 11,
    text: "Eventually, you come across a waterfall cascading over worn down rock, and emptying out into a clear cerulean pool. You...",
    options:
    [
      {
        text: "Sit on the edge and relax",
        nextText: 12
      },
      {
        text: "Go for a swim",
        nextText: 12
      },
      {
        text: "Try to climb on top of the waterfall",
        nextText: 12
      }
    ]
  },
  {
    id: 12,
    text: "Beyond the sounds of crashing water, you hear a faint melody. It reminds you of...",
    options:
    [
      {
        text: "Calming classical",
        nextText: 13
      },
      {
        text: "Upbeat pop",
        nextText: 13
      },
      {
        text: "Metal",
        nextText: 13
      },
      {
        text: "Jazz",
        nextText: 13
      }
    ]
  },
  {
    id: 13,
    text: "You walk deeper inside and come across a lone music box. Curiously, you reach out and hold onto it. Everything suddenly fades out into black",
    options:
    [
      {
        text: "Next",
        nextText: 14
      }
    ]
  },
  {
    id: 14,
    text: "Class seems to have ended.... \nYou missed the entire lecture. You text your friend: ",
    options:
    [
      {
        text: "Hey, can you lend me the notes for today's lecture? i'd appreciate it",
        nextText: 15
      },
      {
        text: "Yo, gimme the notes from today's class",
        nextText: 15
      },
      {
        text: "Can we study together to review today's lecture?",
        nextText: 15
      },
      {
        text: "This prof sucks, you got the notes?",
        nextText: 15
      }
    ]
  },
  {
    id: 15,
    text: "Putting your phone down, you turn to look out of the window and see the clear sky.",
    options:
    [
      {
        text: "See results",
        nextText: -1
      }
    ]
  }
]


startGame()
