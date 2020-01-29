const TwitchBot = require('twitch-bot');

// load this list with comments.

let comments = ["SPAM sasslySwirl THIS sasslySwir ASS sasslySwirl TO sasslySwirl HELP sasslySwirl OUT sasslySwirl SASS",
    "Sasslyn isn't so great? Are you kidding me? When was the last time you saw a player with such an ability and movement with Doc? Sass puts the game in another level, and we will be blessed if we ever see a player with her skill and passion for the game again. Macie breaks records. George breaks records. Sasslyn breaks the rules. You can keep your statistics. I prefer the magic.",
    "The year is 2025. Sasslyn lies on her deathbed, the countless years of \"rummy cokey\" finally having taken their toll. She struggles to adjust her eyes to the glare of her computer screen, yearning to view her beloved twitch chat one more time. All she sees is degenerate weeb spam. Her eyes brim with tears. She begins gasping her final breath, and in her final moments she hits the hardest dab known to humanity",
"i think its hilarious u guys talk shit about sasslyn. u wouldnt say this shit to her at lan, shes jacked. not only that but she wears the freshest clothes, eats at the chillest restaurants and hangs out with the hottest weebs. yall are pathetic lol.",
"🔔 sasslyRush sasslyChamp BRING OUT YOUR SUBS. Welcome to the Sassly Squad! sasslyCheers sasslyLove sasslyCheers sasslyLove sasslyCheers sasslyLove sasslyCheers sasslyLove sasslyCheers sasslyLove sasslyCheers sasslyLove"];

let interval = 60000

setInterval(function chatFunction() {
    let random = comments[Math.floor(Math.random() * comments.length)];
    Bot.say(random)
}, interval);

const Bot = new TwitchBot({
    username: 'username-of-bot', // set a username
    oauth: '', // https://twitchapps.com/tmi/ to generate password
    channels: ['channel-to-join']
});

Bot.on('join', channel => {
    Bot.say("/color Blue");
});

Bot.on('error', err => {
    Bot.say(err);
});