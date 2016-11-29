var quote = new Array();


quote[0] = " I've come to believe that each of us has a personal calling that’s as unique as a fingerprint—and that the best way to succeed is to discover what you love and then find a way to offer it to others in the form of service, working hard, and also allowing the energy of the universe to lead you."
quote[1] = " It does not matter how slowly you go as long as you do not stop."
quote[2] = " We can each define ambition and progress for ourselves. The goal is to work toward a world where expectations are not set by the stereotypes that hold us back, but by our personal passion, talents, and interests. "
quote[3] = " We all need people who will give us feedback. That's how we improve. "
quote[4] = " It’s not about money or connections—it’s the willingness to out work and outlearn everyone...And if it fails, you learn from what happened and do a better job next time. "
quote[5] = " We need to accept that we won't always make the right decisions, that we'll screw up royally sometimes-understanding that failure is not the opposite of success, it's part of success. "
quote[6] = " Work harder than everybody. You're not going to get it by whining, and you're not going to get it by shouting, and you're not going to get it by quitting. You're going to get it by being there."
quote[7] = " Your time is limited, don't waste it living someone else's life. Don't be trapped by dogma, which is living the result of other people's thinking. Don't let the noise of other opinions drown your own inner voice. And most important, have the courage to follow your heart and intuition, they somehow already know what you truly want to become. Everything else is secondary."
quote[8] = " I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long. Just figure out what's next."
quote[9] = " Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while."
quote[10] = "  Life is about making an impact, not making an income. "
quote[11] = " Whatever the mind of man can conceve and belive , it can chive."
quote[12] = " Strive not to be a succes, but rather to be of value."
quote[13] = " Two roads diverged in a wood, and I-I took the one less traveled by, And that has made all the difference."
quote[14] = " I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed. "
quote[15] = " The most difficult thing is the decision to act, the rest is merely tenacity."
quote[16] = " Life isn't about getting and haveing, it's about giving and being."
quote[17] = " Life is 10% what happens to me and 90% of how I react to it."
quote[18] = " The mind is everything. What you think you become. "
quote[19] = " I am not a product of my circumstances. I am a product of my decisions."
quote[20] = " I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
quote[21] = " Whether you think you can or you think you can't, you're right."
quote[22] = " People often say that motivation doesn't last. Well, neither does bathing.  That's why we recommend it daily. "
quote[23] = " Always remember that you are absolutely unique. Just like everyone else."
quote[24] = " The only person you are destined to become is the person you decide to be."
quote[25] = " Happiness is not something readymade.  It comes from your own actions."
quote[26] = " First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end. "
quote[27] = " We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained."
quote[28] = " I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do."
quote[29] = " I didn't fail the test. I just found 100 ways to do it wrong."
quote[30] = " A person who never made a mistake never tried anything new. "


var quoteAuthor = new Array();
quoteAuthor[0] = " Oprah Winfrey "
quoteAuthor[1] = " Confucius"
quoteAuthor[2] = " Sheryl Sandberg"	
quoteAuthor[3] = " Bill Gates  "
quoteAuthor[4] = " Mark Cuban "
quoteAuthor[5] = " Arianna Huffington  "
quoteAuthor[6] = " Barbara Walters  "
quoteAuthor[7] = " Steve Jobs "
quoteAuthor[8] = " Steve Jobs "
quoteAuthor[9] = " Steve Jobs"
quoteAuthor[10] = " Kevin Kruse "
quoteAuthor[11] = " Napoleon Hill"
quoteAuthor[12] = " Albert Einstein"
quoteAuthor[13] = " Robert Frost"
quoteAuthor[14] = " Michael Jordan"
quoteAuthor[15] = " Albert Einstein"
quoteAuthor[16] = " Kevin Kruse"
quoteAuthor[17] = " Charles Swindoll"
quoteAuthor[18] = " Buddha"
quoteAuthor[19] = " Stephen Covey"
quoteAuthor[20] = " Maya Angelou"
quoteAuthor[21] = " Henry Ford"
quoteAuthor[22] = " Zig Ziglar"
quoteAuthor[23] = " Margaret Mead"
quoteAuthor[24] = " Ralph Waldo Emerson"
quoteAuthor[25] = " Dalai Lama"
quoteAuthor[26] = " Aristotle"
quoteAuthor[27] = " Marie Curie"
quoteAuthor[28] = " Leonardo da Vinci"
quoteAuthor[29] = " Benjamin Franklin"
quoteAuthor[30] = " Albert Einstein"



function quoteOfTheDay() {

	var rand1 = Math.floor(Math.random() * quote.length);

	var dayQuote = quote[rand1];// + " " + quoteAuthor[rand1];

	document.getElementById('day-quote').innerHTML = ' " ' + dayQuote + ' " ';
	document.getElementById('quote-author').innerHTML = quoteAuthor[rand1]
}

quoteOfTheDay();