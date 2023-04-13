const localQuotes = [
  {
    text: 'Forty hour workweeks are a relic of the Industrial Age. Knowledge workers function like athletes — train and sprint, then rest and reassess.',
    author: 'Naval Ravikant',
  },
  {
    text: 'Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.',
    author: 'Naval Ravikant',
  },
  {
    text: 'You make your own luck if you stay at it long enough.',
    author: 'Naval Ravikant',
  },
  {
    text: 'The power to make and break habits and learning how to do that is really important.',
    author: 'Naval Ravikant',
  },
  {
    text: 'Happiness is a choice and a skill and you can dedicate yourself to learning that skill and making that choice.',
    author: 'Naval Ravikant',
  },
  {
    text: 'The people who succeed are irrationally passionate about something.',
    author: 'Naval Ravikant',
  },
  {
    text: 'All the benefits in life come from compound interest — money, relationships, habits — anything of importance.',
    author: 'Naval Ravikant',
  },
  {
    text: 'Who you do business with is just as important as what you choose to do.',
    author: 'Naval Ravikant',
  },
  {
    text: 'You are never going to get rich renting out your time.',
    author: 'Naval Ravikant',
  },
  {
    text: 'People who live far below their means enjoy a freedom that people busy upgrading their lifestyles can not fathom.',
    author: 'Naval Ravikant',
  },
  {
    text: 'Desire is a contract that you make with yourself to be unhappy until you get what you want.',
    author: 'Naval Ravikant',
  },
  {
    text: 'If you are good with computers, if you are good at basic mathematics, if you are good at writing, if you are good at speaking, and if you like reading, you are set for life.',
    author: 'Naval Ravikant',
  },
  {
    text: 'Competing without software is like competing without electricity.',
    author: 'Naval Ravikant',
  },
  {
    text: 'Reading is the ultimate meta-skill that can be traded for anything else.',
    author: 'Naval Ravikant',
  },
  {
    text: 'The most important skill for getting rich is becoming a perpetual learner.',
    author: 'Naval Ravikant',
  },
  {
    text: 'Forget rich versus poor, white-collar versus blue. It is now leveraged versus un-leveraged.',
    author: 'Naval Ravikant',
  },
  {
    text: 'Most of the gains in life come from suffering in the short term so you can get paid in the long term.',
    author: 'Naval Ravikant',
  },
  {
    text: 'Apply specific knowledge with leverage and eventually, you will get what you deserve.',
    author: 'Naval Ravikant',
  },
  {
    text: 'Reading a book is not a race — the better the book, the more slowly it should be absorbed.',
    author: 'Naval Ravikant',
  },
  {
    text: 'If you start with the originals as your foundations, then you have enough of a worldview and understanding that you will not fear any book.',
    author: 'Naval Ravikant',
  },
  {
    text: 'The Lindy Effect for startups: The longer you go without shipping product, the more likely you will never ship product.',
    author: 'Naval Ravikant',
  },
  {
    text: 'If you want to make the wrong decision, ask everyone.',
    author: 'Naval Ravikant',
  },
  {
    text: 'The Internet allows you to scale any niche obsession.',
    author: 'Naval Ravikant',
  },
  {
    text: 'Play long-term games with long-term people.',
    author: 'Naval Ravikant',
  },
  {
    text: 'Read what you love until you love to read.',
    author: 'Naval Ravikant',
  },
  {
    text: 'If you are willing to bleed a little every day, you may win big later.',
    author: 'Naval Ravikant',
  },
   {
    text: 'Entrepreneurship is about acquiring skills, beliefs, and character traits. To advance, I find that we must determine which skills, beliefs, and character traits we lack. Most times, we simply need to improve.',
    author: 'Alex Hormozi',
  },
  {
    text: 'Hormozi Law: The longer you delay the ask, the bigger the ask you can make. “The longer the runway, the bigger the plane that can take off.',
    author: 'Alex Hormozi',
  },
  {
    text: 'When you raise your price, you increase the value the consumer receives without changing anything else about your product.',
    author: 'Alex Hormozi',
  },
  {
    text: 'A focused fool can accomplish more than a distracted genius.',
    author: 'Alex Hormozi',
  },
  {
    text: 'Your most valuable asset ― Your attention.',
    author: 'Alex Hormozi',
  },
  {
    text: 'The point of good writing is for the reader to understand. The point of good persuasion is for the prospect to feel understood.',
    author: 'Alex Hormozi',
  },
  {
    text: 'Building a business is risky. Living paycheck to paycheck is risky. Some risks come with upside. Others do not. Risk wisely.',
    author: 'Alex Hormozi',
  },
  {
    text: 'Strategy is easy. Execution is hard.',
    author: 'Alex Hormozi',
  },
  {
    text: 'People who help others (with zero expectation) experience higher levels of fulfillment, live longer, and make more money.',
    author: 'Alex Hormozi',
  },
  {
    text: 'Beginners overvalue thinking and undervalue doing. Advanced do the opposite.',
    author: 'Alex Hormozi',
  },
  {
    text: 'When demand increases, cut supply.',
    author: 'Alex Hormozi',
  },
  {
    text: 'It is far better to have understood why you failed than to be ignorant of why you succeeded.',
    author: 'Alex Hormozi',
  },
  {
    text: 'All you need to be successful is the ability to influence. Then you can use that to get everyone else to do everything else.',
    author: 'Alex Hormozi',
  },
  {
    text: 'You may blame your circumstances but no one else will care.',
    author: 'Alex Hormozi',
  },
  {
    text: 'Do more of what is working.',
    author: 'Alex Hormozi',
  },
  {
    text: 'Most people have a dramatic underestimation of how much volume it takes to be successful.',
    author: 'Alex Hormozi',
  },
  {
    text: 'How to stay poor: Start tomorrow.',
    author: 'Alex Hormozi',
  },
  {
    text: 'For anyone starting a business, focus on getting $1 from a stranger into your bank account.',
    author: 'Alex Hormozi',
  },
  {
    text: 'If anyone ever asks you "Can you do it for less?", just respond "I could do it for more.',
    author: 'Alex Hormozi',
  },
  {
    text: 'People who experience a victory early on are more likely to continue with something than those who do not.',
    author: 'Alex Hormozi',
  },
  {
    text: '10,000 cold calls will teach you more about sales than any book will.',
    author: 'Alex Hormozi',
  },
  {
    text: 'Most already know what to do and simply do not do it. It is not ignorance. It is fear.',
    author: 'Alex Hormozi',
  },
  {
    text: 'Having a long time horizon is one of the strongest competitive advantages in business.',
    author: 'Alex Hormozi',
  },
  {
    text: 'A lot of real problems can be solved by working longer hours:',
    author: 'Alex Hormozi',
  },
  {
    text: 'Questions are infinitely superior to answers.',
    author: 'Alex Hormozi',
  },
  {
    text: 'If anyone ever asks you "Can you do it for less?", just respond "I could do it for more.',
    author: 'Alex Hormozi',
  },
  {
    text: `Time is a created thing. To say "I do not have time," is like saying, "I do not want to."`,
    author: 'Lao Tzu',
  },
  {
    text: 'The flame that burns twice as bright burns half as long.',
    author: 'Lao Tzu',
  },
  {
    text: 'Ordinary men hate solitude. But the Master makes use of it, embracing his aloneness, realizing he is one with the whole universe.',
    author: 'Lao Tzu',
  },
  {
    text: 'Life is a series of natural and spontaneous changes. Do not resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.',
    author: 'Lao Tzu',
  },
  {
    text: 'The world belongs to those who let go.',
    author: 'Lao Tzu',
  },
  {
    text: 'The truth is not always beautiful, nor beautiful words the truth.',
    author: 'Lao Tzu',
  },
  {
    text: 'He who knows others is wise; he who knows himself is enlightened.',
    author: 'Lao Tzu',
  },
  {
    text: 'Do you have the patience to wait until your mud settles and the water is clear?',
    author: 'Lao Tzu',
  },
  {
    text: 'He who controls others may be powerful, but he who has mastered himself is mightier still.',
    author: 'Lao Tzu',
  },
  {
    text: 'New beginnings are often disguised as painful endings.',
    author: 'Lao Tzu',
  },
  {
    text: 'The best fighter is never angry.',
    author: 'Lao Tzu',
  },
  {
    text: 'If you do not change direction, you may end up where you are heading.',
    author: 'Lao Tzu',
  },
  {
    text: 'When you are content to be simply yourself and don’t compare or compete, everyone will respect you',
    author: 'Lao Tzu',
  },
  {
    text: 'What the caterpillar calls the end, the rest of the world calls a butterfly.',
    author: 'Lao Tzu',
  },
  {
    text: 'The wise man is one who knows what he does not know.',
    author: 'Lao Tzu',
  },
  {
    text: 'To attain knowledge, add things everyday. To attain wisdom, remove things every day.',
    author: 'Lao Tzu',
  },
  {
    text: 'There is no greater danger than underestimating your opponent.',
    author: 'Lao Tzu',
  },
  {
    text: 'Be content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you.',
    author: 'Lao Tzu',
  },
  {
    text: 'If you are depressed you are living in the past. If you are anxious you are living in the future. If you are at peace you are living in the present.',
    author: 'Lao Tzu',
  },
  {
    text: 'Respond to anger with virtue. Deal with difficulties while they are still easy. Handle the great while it is still small.',
    author: 'Lao Tzu',
  },
  {
    text: 'In the midst of chaos, there is also opportunity.',
    author: 'Sun Tzu',
  },
  {
    text: 'Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.',
    author: 'Sun Tzu',
  },
  {
    text: 'Quickness is the essence of the war.',
    author: 'Sun Tzu',
  },
  {
    text: 'If you know the enemy and know yourself, you need not fear the result of a hundred battles.',
    author: 'Sun Tzu',
  },
  {
    text: 'Even the finest sword plunged into salt water will eventually rust.',
    author: 'Sun Tzu',
  },
  {
    text: 'The wise warrior avoids the battle.',
    author: 'Sun Tzu',
  },
  {
    text: 'It is easy to love your friend, but sometimes the hardest lesson to learn is to love your enemy.',
    author: 'Sun Tzu',
  },
  {
    text: 'If his forces are united, separate them.',
    author: 'Sun Tzu',
  },

  {
    text: 'Move not unless you see an advantage; use not your troops unless there is something to be gained; fight not unless the position is critical.',
    author: 'Sun Tzu',
  },
  {
    text: 'Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.',
    author: 'Sun Tzu',
  },
  {
    text: 'To know your enemy, you must become your enemy.',
    author: 'Sun Tzu',
  },
  {
    text: 'Treat your men as you would your own beloved sons. And they will follow you into the deepest valley.',
    author: 'Sun Tzu',
  },
  {
    text: 'Appear weak when you are strong, and strong when you are weak.',
    author: 'Sun Tzu',
  },
  {
    text: 'Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.',
    author: 'Sun Tzu',
  },
  {
    text: 'So in war, the way is to avoid what is strong, and strike at what is weak.',
    author: 'Sun Tzu',
  },
];
