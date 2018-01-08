var quote_arr = [
    {
        "quote":"It's not the size of the dog in the fight, but the size of the fight in the dog.",
        "author":"Archie Griffen"
    },
    {
        "quote":"Nothing lasts forever. Not even your troubles.",
        "author":"Arnold H Glasgow"
    },
    {
        "quote":"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle",
        "author":"Albert Einstein"
    },
    {
        "quote":"Take chances, make mistakes. That's how you grow. Pain nourishes your courage. You have to fail in order to practice being brave.",
        "author":"Mary Tyler Moore"
    },
    {
        "quote":"Being strong means rejoicing in who you are, complete with imperfections.",
        "author":"Margaret Woodhouse"
    },
    {
        "quote":"If you don’t go after what you want, you’ll never have it. If you don’t ask, the answer is always no. If you don’t step forward, you’re always in the same place.",
        "author":"Nora Roberts"
    },
    {
        "quote":"I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
        "author":"Michael Jordan"
    },
    {
        "quote":"The only place you find success before work is in the dictionary.",
        "author":"May V Smith"
    },
    {
        "quote":"You're going to fail your way to success, you have nothing to be ashamed of so keep your head up. It’s much easier to come up with excuses of why you can't do it. If you do what is easy your life will be hard.",
        "author":"Les Brown"
    },
    {
        "quote":"A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
        "author":"George Bernard Shaw"
    },
    {
        "quote":"Nobody can make you feel inferior without your consent.",
        "author":"Eleanor Roosevelt"
    },
    {
        "quote":"It took me a long time not to judge myself through someone else's eyes.",
        "author":"Sally Field"
    },
    {
        "quote":"I quit being afraid when my first venture failed and the sky didn't fall down.",
        "author":"Allen H Neuharth"
    },
    {
        "quote":"Hope never abandons you, you abandon it.",
        "author":"George Weinberg"
    },
    {
        "quote":"The only thing keeping you from getting what you want is the story you keep telling yourself about why you don't have it. People who are willing to die to succeed will tend to succeed.",
        "author":"Tony Robbins"
    },
    {
        "quote":"People are like stained-glass windows. They sparkle and shine when the sun is out, but when the darkness sets in their true beauty is revealed only if there is light from within.",
        "author":"Elisabeth Kübler-Ross"
    },
    {
        "quote":"Nothing splendid has ever been achieved except by those who dared believe that something inside of them was superior to circumstance.",
        "author":"Bruce Barton"
    },
    {
        "quote":"Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway.",
        "author":"Mary Kay Ash"
    },
    {   
        "quote":"The secret is in not giving up, of all the greats they didn't quit. If you quit I guarantee you're gonna fail, but you don't know what's gunna happen if you don't give in.",
        "author":"Eric Thomas"
    },
    {
        "quote":"Just decide; what's it's gonna be, who you're gonna be and how your gonna do it, and then from that point, the universe will get out of your way.",
        "author":"Will Smith"
    }
];

$(document).ready(function(){
    var quote_index = Math.floor(Math.random() * 20);
    var quote_element = quote_arr[quote_index];
    var quote = quote_element.quote;
    var author = quote_element.author;
    var x = Math.floor(Math.random()*255);
    var y = Math.floor(Math.random()*255);
    var z = Math.floor(Math.random()*255);
    var bg_color = "rgb(" + x + "," + y + "," + z + ")";
    $(".quote").html(quote).fadeIn(1500);
    $(".author").html("- " + author).fadeIn(1500);
    $('body,.fa-twitter,.btn').css({"background-color":bg_color});
    $('.quote,.author,.fa-quote-left').css({"color":bg_color});
    $('.twitter-symbol').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + ' ' + quote + '  - ' + author);

    $(".btn").on("click",function(){
        $(".quote").html(quote).hide();
        $(".author").html("- " + author).hide();

        quote_index = Math.floor(Math.random() * 20);
        quote_element = quote_arr[quote_index];
        quote = quote_element.quote;
        console.log(quote);
        author = quote_element.author;
        x = Math.floor(Math.random()*255);
        y = Math.floor(Math.random()*255);
        z = Math.floor(Math.random()*255);
        bg_color = "rgb(" + x + "," + y + "," + z + ")";

        $(".quote").html(quote).fadeIn(1500);
        $(".author").html("- " + author).fadeIn(1500);
        $('body,.fa-twitter,.btn').css({"background-color":bg_color});
        $('.quote,.author,.fa-quote-left').css({"color":bg_color});
        $('.twitter-symbol').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + ' ' + quote + ' ' + author);
    });
});


