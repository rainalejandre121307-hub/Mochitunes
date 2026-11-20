const audio = document.getElementById("audio");

// SONG DATABASE


const songs = [
    {
        title: "Disillusioned",
        artist: "Daniel Caesar",
        audio: "Daniel Caesar - Disillusioned (Official Audio).mp3",
        cover: "https://i.scdn.co/image/ab67616d0000b2737c68face1dc58127f3a7b1cc",
        lyrics: [
        
            //[Verse 1: Daniel Caesar]
            { time: 20.7, text: "I couldn't help but notice" },
            { time: 23.2, text: "You find this whole life thing a drag" },
            { time: 25.8, text: "You think this shit's bogus" },
            { time: 28.2, text: "It is, and you know this" },
            { time: 40.5, text: "Seen in my peripheral" },
            { time: 43.3, text: "You try to suffer bullshit" },
            { time: 45.7, text: "You find it all difficult" },
            { time: 48.3, text: "Givin' up is typical" },
            { time: 54.1, text: "And how typical are you?" },

            //[Chorus: Daniel Caesar & serpentwithfeet]
            { time: 58.9, text: "And I, I'm scared of gettin' older, it weighs upon my shoulders" },
            { time: 68.5, text: "And you, you're scared of it too" },
            { time: 79.1, text: "So we, maybe should get together" },
            { time: 85.1, text: " We'll take it all on better" },
            { time: 89.1, text: "We should try something new, something new, new"

            //[Verse 2]
             },
            { time: 100.1, text: "Couldn't help but notice you" },
            { time: 102, text: " Been smelling the roses" },
            { time: 104, text: "Looking less mad and more focused, focused" },
            { time: 108.7, text: "Damn, you cleaned up your space" },
            { time: 111, text: "Inviting folks to your place" },
            { time: 114, text: "Everybody hates Chris, not you" },
            { time: 116, text: "Everybody's sweet on you, boo, ooh" },
            { time: 119, text: "Don't make me wear all black" },
            { time: 121, text: "Just stay and throw that thing back, ooh" },
            { time: 124, text: "Don't make me wear all black" },
            { time: 126, text: "Just stay and throw that thing back" },
            { time: 128.5, text: " Baby, please stay, please stay, please stay" },
            { time: 134.4, text: "Oh, oh, oh" },

            //[Chorus]
            { time: 138.7, text: " And I, I'm scared of gettin' older, it weighs upon my shoulders" },
            { time: 148.2, text: "And you, you're scared of it too" },
            { time: 158.3, text: "So we, maybe should get together" },
            { time: 164.5, text: "We'll take it all on better" },
            { time: 167.9, text: "We should try something new" },
            { time: 174.5, text: "Something new, new" },

            //[Outro]
            { time: 178.3, text: "Hop inside my Bimmer with me, time to hit the road" },
            { time: 182.9, text: "Tomorrow's modern boxes, tank of gas, girl let's go" },
            { time: 187.8, text: "Who cares where we end up, long as it's a place that's cool?" },
            { time: 192.5, text: "Pasadena, Malibu, let's go somewhere new" },
            { time: 197.7, text: "Let's go to a boardwalk, watch the people walking by" },
            { time: 202.5, text: "We'll make fun of their outfits, we'll be cynics, we'll get high" },
            { time: 207.5, text: "Then find a spot that's so secluded, do what lovers do" },
            { time: 212.5, text: "I love being reclusive and I love being with you" },
        ]
    },
    {
        title: "Take all the love",
        artist: "Arthur Nery",
        audio: "Arthur Nery - TAKE ALL THE LOVE.mp3",
        cover: "https://i.scdn.co/image/ab67616d0000b2739092f7a0dff311a64f44345d",
        lyrics: [

            //Intro
            { time: 0, text: "Hmm, hmm, ooh" },

            //Verse
            { time: 10.10, text: "You'll be safe in my romance, babe" },
            { time: 18.87, text: "Label's fading but" },
            { time: 21.67, text: "I see you cravin' for more" },
            { time: 27.51, text: "You're denying it" },

            //Chorus
            { time: 31.28, text: "But you ain't controlling your actions" },
            { time: 36.35, text: "Keep me guessing but" },
            { time: 39.25, text: "Don't keep me waiting for us" },
            { time: 42.43, text: "Oh, I live to appreciate you" },

            { time: 47.81, text: "Take all the love that I give" },
            { time: 51.17, text: "All that I wish is for you to take me" },
            { time: 56.43, text: "But I taste the lies on your lips" },
            { time: 59.99, text: "I count the days when we're in love" },

            //Verse
            { time: 64.19, text: "Cause I only matter when he's not around" },
            { time: 68.03, text: "Oh, but I live to appreciate you" },
            { time: 74.08, text: "Take all the love that I give" },
            { time: 80.08, text: "Got my heart on my sleeve" },
            { time: 83.34, text: "I'm beggin' the heavens to be good to me" },
            { time: 88.30, text: "Are you obsessive, love?" },
            { time: 92.30, text: "'Cause I'm tolerating all of your desires" },

            //Chorus
            { time: 96.50, text: "I'll keep you wanting me more, ooh" },
            { time: 101.90, text: "Leave, but I'll keep you comin'" },
            { time: 105.68, text: "I'm sure it's my love that got you suffocated" },
            { time: 112.25 , text: "Oh, I live to appreciate you" },

            { time: 117.72, text: "Take all the love that I give" },
            { time: 121.01, text: "All that I wish is for you to take me" },
            { time: 126.22, text: "But I taste the lies on your lips" },
            { time: 129.70, text: "I count the days when we're in love" },

            //Hook
            { time: 133.98, text: "'Cause I only matter when he's not around" },
            { time: 138.45, text: "Oh, but I live to appreciate you" },

            //Verse
            { time: 143.94, text: "Take all the love that I give" },
            { time: 149.29, text: "..." },
            { time: 161.31, text: "Take all the love that I give" },
            { time: 164.75, text: "All that I-" },
            { time: 166.20, text: "You come over but not too often" },

            //Outro
            { time: 170.58, text: "You don't visit 'cause you got more options" },
            { time: 174.96, text: "You come over but not too often" },
            { time: 179.28, text: "You don't visit 'cause you got more options" }
        ]
    },
    {
        title: "Cigarette smoke",
        artist: "Olivia Rodrigo",
        audio: "Olivia Rodrigo - cigarette smoke (Lyric Video).mp3",
        cover: "Olivia Rodrigo.jpg",
        lyrics: [
            
            //Verse
            { time: 33.18, text: "The cigarette smoke" },
            { time: 38.63, text: "Is a smell that I know" },
            { time: 44.13, text: "It clings to my clothes" },
            { time: 50.18, text: "And seeps into my bones" },
            { time: 55.66, text: "It's a real quiet house" },
            { time: 61.62, text: "With the shower left on" },
            { time: 67.17, text: "Five beers in the fridge" },
            { time: 70.12, text: "And the second car's gone" },
            { time: 75.66, text: "I regret you" },
            { time: 81.60, text: "And how long I stayed" },
            { time: 87.17, text: "I resent you" },
            { time: 93.13, text: "For not being brave" },
            { time: 97.16, text: "Ohh" },

            //Chorus
            { time: 100.16, text: "Tell me something honest" },
            { time: 104.11, text: "So the memories turn dark" },
            { time: 111.69, text: "You said that I made loving look easy" },
            { time: 118.13, text: "'Til I made it hard" },
            { time: 123.12, text: "Give me back my time" },
            { time: 126.67, text: "And I will give you back your heart" },
            { time: 134.62, text: "I thought that we played the perfect couple" },
            { time: 142.64, text: "'Til you didn't want the part" },

            //Verse
            { time: 146.75, text: "Some nights can be" },
            { time: 152.73, text: "So fucking lonely" },
            { time: 158.39, text: "But it's better than begging" },
            { time: 160.89, text: "For you to stand up for me" },
            { time: 162.89, text: "Honeybee" },
            { time: 167.86, text: "I regret you" },
            { time: 173.86, text: "And what I let slide" },
            { time: 178.83, text: "I resent you" },
            { time: 184.84, text: "For taking her side" },
            { time: 187.34, text: "Ohh" },

            //Chorus
            { time: 192.55, text: "Tell me something honest" },
            { time: 196.70, text: "So the memories turn dark" },
            { time: 203.94, text: "You said that I made loving look easy" },
            { time: 211.35, text: "'Til I made it hard" },
            { time: 215.45, text: "Give me back my time" },
            { time: 218.65, text: "And I will give you back your heart" },
            { time: 226.95, text: "I thought that we played the perfect couple" },
            { time: 233.69, text: "'Til you didn't want the part" },

            //Bridge
            { time: 237.75, text: "It's bone dry" },
            { time: 240.76, text: "Bitter and hollow" },
            { time: 244.16, text: "You'll be miles away tomorrow" },
            { time: 249.65, text: "Why'd I try at all" },
            { time: 260.45, text: "It's bone dry" },
            { time: 263.70, text: "Bitter and hollow" },
            { time: 267.07, text: "You will never know my sorrow" },
            { time: 272.55, text: "Why'd I try at all" },

            //Outro
            { time: 284.45, text: "Tell me something honest" },
            { time: 288.45, text: "So the memories turn dark" },
            { time: 296.51, text: "Oh, the memories go dark" },
            { time: 306.56, text: "The memories go dark" },
            { time: 312.38, text: "The memories go dark" },
            { time: 317.87, text: "The memories go dark" },
            { time: 320.67, text: "♪ ♪ ♪" },
            { time: 332.89, text: "Go dark" },
            { time: 338.89, text: "Go dark" },
        
        ]
    },
    {
        title: "Moths",
        artist: "Conan Gray",
        audio: "Conan Gray - Moths (Lyrics).mp3",
        cover: "The Tale of Two Door(s)_ Wishbone Deluxe.jpg",
        lyrics: [
            { time: 0, text: "The door is closed," },
            { time: 5, text: "but the window's open," },
            { time: 10, text: "I'll leave the light on" },
            { time: 15, text: "and I'll let the moths in" },
            { time: 20, text: "I'll keep your secrets" },
            { time: 28, text: "and I'll watch them follow you home" },
            { time: 33, text: "So keep on walking" },
            { time: 38, text: " just keep on walking" },
            { time: 45, text: "And I won't beg" },
            { time: 50, text: "But if you need me" },
            { time: 56, text: "Just turn around" },
            { time: 61, text: "Just turn around" },
             { time:65, text: "🎶🎶🎶🎶🎶"},
            { time: 67, text: "Your brand-new friends" },
            { time: 73, text: "You sure do look like a movie star" },
            { time: 77, text: "I loved a version of you " },
            { time: 81, text: "that you're washing away" },
            { time: 84, text: "and I've been drowning myself" },
            { time: 86, text: "trying to cover the drain" },
            { time: 89, text: "so I won't beg" },
            { time: 94, text: "But if you need me" },
            { time: 100, text: "Just turn around" },
            { time: 107, text: "Just turn around" },
            { time: 114, text: "And if you wanted, you could meet me" },
            { time: 117, text: "On the other side of the street" },
            { time: 121, text: "No touch, no kissing, let's just talk it out" },
            { time: 125, text: "I'll meet you in the middle" },
            { time: 128, text: "I will always be your friend" },
            { time: 128, text: "I will always be your friend" },
            { time: 135, text: "So I won't beg  (might be missin' you forever, but you're every song I sing) " },
            { time: 141, text: "But if you need me (and every letter, every word that we don't speak)" },
            { time: 146, text: "Just turn around (holds us together, I will always be your)" },
            { time: 150, text: "Just turn around (friend)" },
            { time: 159, text: "The door is closed" },
            { time: 164, text: "but the window's open" },
            { time: 169, text: "I'll leave the light on" },


            
        ]
    },
    {
        title: "Still - Jeff Bernat",
        artist: "Eden",
        audio: "Still.mp3",
        cover: "Jeff Bernat.jpg",
        lyrics: [

            //Verse
            { time: 29.08, text: "It's been a long time since we last spoke" },
            { time: 33.15, text: "I still wonder what you're up to" },
            { time: 36.71, text: "After all the shit we've been through" },
            { time: 42.27, text: "And I've been spending a lot of time drinking and smoking" },
            { time: 47.32, text: "Hoping to subdue" },
            { time: 50.82, text: "The thought of you in my head" },

            //Pre-Chorus
            { time: 53.64, text: "So if you're out there somewhere" },
            { time: 57.16, text: "And if you still even care" },
            { time: 60.47, text: "Possibly still questioning what is he doing" },

            //Chorus
            { time: 67.89, text: "I've been tryna find a way to numb all this pain" },
            { time: 73.38, text: "Since you've been away" },
            { time: 76.72, text: "I don't wanna feel anymore" },
            { time: 81.22, text: "And there's probably people telling you that I'm doing fine" },
            { time: 87.18, text: "Just taking my time" },
            { time: 90.48, text: "Although it appears that I'm strong" },
            { time: 95.60, text: "It still hurts" },

            //Verse
            { time: 101.00, text: "There's been a lot of nights when I feel alone" },
            { time: 105.46, text: "Needed someone to talk to" },
            { time: 108.63, text: "'Cause I just need to get through" },
            { time: 114.36, text: "And I've been spending a lot of money" },
            { time: 116.42, text: "On things that I don't need" },
            { time: 119.05, text: "Hoping that I'll feel new" },
            { time: 122.75, text: "But I can't get you out my head" },

            //Pre-Chorus
            { time: 125.68, text: "So if you're out there somewhere" },
            { time: 129.07, text: "And if you still even care" },
            { time: 132.46, text: "Possibly still questioning what is he doing" },

            //Chorus
            { time: 139.26, text: "I've been tryna find a way to numb all this pain" },
            { time: 145.37, text: "Since you've been away" },
            { time: 148.37, text: "I don't wanna feel anymore" },
            { time: 153.05, text: "And there's probably people telling you that I'm doing fine" },
            { time: 159.54, text: "Just taking my time" },
            { time: 162.18, text: "Although it appears that I'm strong" },
            
            //Outro
            { time: 167.25, text: "I've been tryna find a way to numb all this pain (girl, I've been trying to find a way)" },
            { time: 172.19, text: "Since you've been away (a way that I can numb this pain)" },
            { time: 175.54, text: "I don't wanna feel anymore (I don't wanna feel)" },
            { time: 180.67, text: "And there's probably people telling you" },
            { time: 183.28, text: "That I'm doing fine (I'm just trying to get you outta my head)" },
            { time: 186.98, text: "Just taking my time" },
            { time: 189.67, text: "Although it appears that I'm strong" },
            { time: 195.22, text: "It still hurts..😭😭😭" },
        ]
    },
    {
        title: "Rufi-o - Oblivion (Lyrics) ft. Lily Potter",
        artist: "Lily Potter",
        audio: "Rufi-o - Oblivion (Lyrics) ft. Lily Potter.mp3",
        cover: "Lily Potter.jpg",
        lyrics: [

            //Intro
            { time: 4.22, text: "(Do you love me?)" },

            //Verse
            { time: 15.34, text: "Be there when the summer time ends" },
            { time: 18.74, text: "And closing in like the tide in winter time" },
            { time: 24.84, text: "Don't run, just wait, and you will see" },
            { time: 28.79, text: "That we are destined to be" },
            { time: 31.40, text: "If only you'll be mine" },

            //Chorus
            { time: 35.09, text: "Don't you lose sight of what you want" },
            { time: 43.16, text: "Care about the simple things in life" },
            { time: 46.56, text: "That brings you joy" },
            { time: 48.63, text: "And wave away the darkness" },

            { time: 52.05, text: "Don't you lose sight of what you want" },
            { time: 60.15, text: "Care about the simple things in life" },
            { time: 63.42, text: "That brings you joy" },
            { time: 65.67, text: "And wave away the darkness" },
            { time: 65.67, text: "And wave away the darkness" },

            //Brige
            { time: 68.50, text: "Leave your worries far behind " },
            { time: 77.30, text: "And leave your lonesome on the shelf" },
            { time: 81.50, text: "Next to the classic novels" },

            //Chorus
            { time: 85.91, text: "Don't you lose sight of what you, want" },
            { time: 93.50, text: "Care about the simple things in life" },
            { time: 97.45, text: "That bring you joy" },
            { time: 99.68, text: "And wave away the darkness" },
            
            { time: 102.94, text: "Don't you lose sight of what you, want" },
            { time: 110.41, text: "Care about the simple things in life" },
            { time: 114.43, text: "That bring you joy" },
            { time: 116.68, text: "And wave away the darkness" },
            
            //Outro
            { time: 120.00, text: "Leave your worries far behind you" },
            { time: 128.22, text: "And leave your lonesome on the shelf" },
            { time: 132.73, text: "Next to the classic novels" },
            { time: 136.85, text: "Leave your worries far behind you" },
            { time: 144.94, text: "And leave your lonesome on the shelf" },
        ]
    },
    {
        title: "The Rare Occasions | Origami (Lyrics Video)",
        artist: "The Rare Occasions",
        audio: "The Rare Occasions Origami (Lyric Video).mp3",
        cover: "Origami.jpg",
        lyrics: [

            //Verse
            { time: 12.14, text: "Take a look at me" },
            { time: 14.70, text: "Crumpled up on the floor feeling lonely" },
            { time: 20.46, text: "Honestly, something is wrong with me" },

            { time: 26.81, text: "I've been freaking out" },
            { time: 29.47, text: "Folding myself into origami" },
            { time: 35.03, text: "Terrified of what they would think of me" },

            //Chorus
            { time: 43.58, text: "I'll face the night deep in starlight" },
            { time: 50.71, text: "Shadows unwind deep in starlight" },

            //Verse
            { time: 63.84, text: "There's another way" },
            { time: 66.42, text: "Apart from this misery and it's got m" },
            { time: 71.91, text: "Wondering exactly what I'm missing" },
            { time: 78.56, text: "Take a look at me" },
            { time: 81.16, text: "Crumpled up on the floor feeling lonely" },
            { time: 86.84, text: "Honestly, something is wrong with me" },

            //Chorus
            { time: 95.21, text: "I'll face the night deep in starlight" },
            { time: 97.47, text: "Shadows unwind deep in starlight" },

            //Outro
            { time: 103.62, text: "I'll face the night" },

        ]
    },
    {
        title: "Euphoria",
        artist: "The Ridleys",
        audio: "Euphoria - the Ridleys (lyrics) (1).mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStz6LLHeG4vsg8erujXi6zt55x9XTH8hZoJI4Fe0pFjQ&s=10",
        lyrics: [
             { time: 1, text: "..." },
            { time: 14, text: "Falling in love's not what I had in mind" },
            { time: 20, text: "I tried to stop it every single time" },
            { time: 27, text: "But you came along and turned my world around" },
            { time: 31, text: "Spinning at the speed of sound" },
            { time: 33, text: "Changing everything that I knew" },
            { time: 36, text: "Now all I see is you for real" },
            { time: 38, text: "This is everything I wanted and more" },
            { time: 43, text: "And all I feel is euphoria" },
            { time: 45, text: "You are everything I wanted" },
            { time: 48, text: "..." },
            { time: 64, text: "Heaven above is merciful and kind" },
            { time: 70, text: "Sending an angel beautiful and fine" },
            { time: 77, text: "She came along and turned me upside down" },
            { time: 81, text: "Spinning at the speed of sound" },
            { time: 83.5, text: "Changing everything that I knew" },
            { time: 85.5, text: "Now all I see is you for real" },
            { time: 88, text: "This is everything I wanted and more" },
            { time: 93, text: "And all I feel is euphoria" },
            { time: 95, text: "You are everything I wanted" },
            { time: 98, text: "..." },
            { time: 113, text: "I'm looking at your eyes now" },
            { time: 115, text: "Baby, those are galaxies" },
            { time: 117, text: "With worlds to explore" },
            { time: 118, text: "A life to look forward to" },
            { time: 121, text: "..." },
            { time: 121.5, text: "I wanna live it with you" },
            { time: 126, text: "..." },
            { time: 129, text: "Oh yes I'll make it with you" },
            { time: 132, text: "..." },
            { time: 144, text: "Falling in love's not what I had in mind" },
            { time: 147, text: "Can't get it out, can't get you out of my mind" },
            { time: 150, text: "I tried to stop it every single time" },
            { time: 151, text: "Can't stop, no, I can't stop feeling it" },
            { time: 154, text: "But you came along and turned my world around" },
            { time: 157, text: "Spinning at the speed of sound" },
            { time: 162, text: "Changing everything that I knew" },
            { time: 165, text: "Now all I see is you for real" },
            { time: 167, text: "This is everything I wanted and more" },
            { time: 173, text: "And all I feel is euphoria" },
            { time: 175, text: "You are everything I wanted" },
            { time: 180, text: "Now all I see is you for real" },
            { time: 183, text: "This is everything I wanted and more" },
            { time: 186, text: "And all I feel is euphoria" },
            { time: 190, text: "You are everything I wanted" },
            { time: 195, text: "..." },
        ]
    },
    {
        title: "May I Ask",
        artist: "Luke Chiang",
        audio: "Luke Chiang - May I Ask (ft. Alexis Kim) Lyric Video.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4r90jJNyiCC9rAI5vq6gD1-qJ66ups7BI4ZDq-2nBMg&s=10",
        lyrics: [
            { time: 1, text: "..." },
            { time: 22, text: "May I ask you how you've been?" },
            { time: 25, text: "Would I have the words to say?" },
            { time: 29, text: "I've forgotten how to feel" },
            { time: 32, text: "How to call you by your name" },
            { time: 35, text: "Barely recognize you now" },
            { time: 39, text: "All your words have turned to stone" },
            { time: 42, text: "You've forgotten all my songs" },
            { time: 45, text: "You've forgotten all my love" },
            { time: 49, text: "Don't you know?" },
            { time: 51, text: "You make me nervous still" },
            { time: 54, text: "You pull my thoughts apart" },
            { time: 57, text: "Though I've been tryna get you off my minds" },
            { time: 62, text: "Give me time" },
            { time: 64, text: "'Cause it still burns my lips" },
            { time: 67, text: "To say your name out loud, my love (my love)" },
            { time: 74, text: "..." },
            { time: 88, text: "And by now your smile has changed" },
            { time: 91, text: "You don't look at me the same" },
            { time: 94, text: "It's naive of me to think" },
            { time: 98, text: "That one day you'll miss my name" },
            { time: 101, text: "Promises you said you'd keep" },
            { time: 104, text: "Empty lines between the scenes" },
            { time: 107, text: "Was it wrong for me to trust" },
            { time: 111, text: "I'm still only 17" },
            { time: 115, text: "Don't you know?" },
            { time: 117, text: "You make me nervous still" },
            { time: 120, text: "You pull my thoughts apart" },
            { time: 123, text: "Though I've been tryna get you off my mind" },
            { time: 128, text: "Give me time" },
            { time: 130, text: "'Cause it still burns my lips" },
            { time: 133, text: "To say your name out loud, my love (my love)" },
            { time: 139, text: "..." },
            { time: 156, text: "It's just my natural reaction to you" },
            { time: 163, text: "Making me feel like I've lost sanity" },
            { time: 169, text: "And I can't help but to miss you" },
            { time: 173, text: "Though I know there's never a chance" },
            { time: 181, text: "Don't you know?" },
            { time: 182, text: "You make me nervous still" },
            { time: 186, text: "You pull my thoughts apart" },
            { time: 189, text: "Though I've been tryna get you off my mind" },
            { time: 194, text: "Give me time" },
            { time: 195, text: "'Cause it still burns my lips" },
            { time: 199, text: "To say your name out loud, my love (my love)" },
            { time: 206, text: "Don't you know?" },
            { time: 207, text: "Don't you know?" },
            { time: 209, text: "You make me nervous still" },
            { time: 212, text: "You pull my thoughts apart" },
            { time: 215, text: "Though I've been tryna get you off my mind" },
            { time: 220, text: "Give me time" },
            { time: 222, text: "'Cause it still burns my lips" },
            { time: 225, text: "To say your name out loud" },
        ]
    },
    {
        title: "Cool Down",
        artist: "Kalohe Kai",
        audio: "Kolohe Kai - Cool Down (Lyrics).mp3",
        cover: "Kalohe kai'.jpg",
        lyrics: [
            //verse
            { time: 13.12, text: "It's another fiery afternoon (So hot, so hot)" },
            { time: 17.32, text: "Hotter than the month of June" },
            { time: 19.82, text: "So we should go beach now (Cool down)" },
            { time: 24.25, text: "Cool down where the waters right, yeah" },
            { time: 27.52, text: "Let's grab our boards and run, run, run, run" },
            { time: 31.1, text: "Run to the nearest shore" },
            { time: 34.5, text: "School is out, lets go now" },
            { time: 38, text: "And hele out the door" },

            //chorus
            { time: 41, text: "The waves is on fire, the day is getting hot" },
            { time: 44.6, text: "This is my desire to the one to hit the spot, yeah" },
            { time: 50.8, text: "(Ooh-ooh) Cool down" },
            { time: 54.8, text: "The waves is on fire, the day is getting hot" },
            { time: 58.2, text: "This is my desire to the one to hit the spot, yeah" },
            { time: 64.7, text: "(Ooh-ooh) Cool down" },

            //verse 2
            { time: 67.78, text: "The waters looking nice and blue (So blue, so blue)" },
            { time: 72.4, text: "Bluer than the clearest sky" },
            { time: 75.6, text: "And the waves are firing getting higher and" },
            { time: 79.5, text: "Better even as we speak, yeah" },
            { time: 82.8, text: "Don't you melt the sun, sun, sun, sun, sun" },
            { time: 86.4, text: "Hotter than ever before" },
            { time: 88.9, text: "So lets ride, ride" },
            { time: 92.8, text: "Surf and ride some more" },

            //chrorus
            { time: 96, text: "The waves is on fire, the day is getting hot" },
            { time: 99.7, text: "This is my desire to the one to hit the spot, yeah" },
            { time: 106.2, text: "(Ooh-ooh) Cool down" },
            { time: 109.8, text: "The waves is on fire, the day is getting hot" },
            { time: 113.3, text: "This is my desire to the one to hit the spot, yeah" },
            { time: 119.9, text: "(Ooh-ooh) Cool down" },

            //Instrument Break

            //bridge
            { time: 137.3, text: "All you divers, well go and get your gear" },
            { time: 140.3, text: "And all you riders, well now surf with no more fear" },
            { time: 144, text: "'Cause it's a hot day, everybody" },
            { time: 147.8, text: "Shoulda go, shoulda go, shoulda go and cool off, yeah" },
            { time: 151, text: "All you paddlers, well a go and get your crew" },
            { time: 154.2, text: "And everybody else, you know what to do" },
            { time: 158, text: "Go grab your Ohana, it's so nice outside" },
            { time: 161.6, text: "We're living in Hawaii with Aloha and pride, yeah" },

            //chorus
            { time: 165.3, text: "The waves is on fire, the day is getting hot" },
            { time: 168.5, text: "This is my desire to the one to hit the spot, yeah" },
            { time: 175.1, text: "(Ooh-ooh) Cool down" },
            { time: 178.4, text: "The waves is on fire, the day is getting hot" },
            { time: 182.47, text: "This is my desire to the one to hit the spot, yeah" },
            { time: 189.1, text: "(Ooh-ooh) Cool down" },

            //outro
            { time: 192.8, text: "The waves is on fire, the day is getting hot" },
            { time: 196.2, text: "This is my desire to the one to hit the spot, yeah" },
            { time: 203.12, text: "(Ooh-ooh) Cool down" },
        
            
        ]
    },
    {
        title: "Treat You Better",
        artist: "Shawn Mendes",
        audio: "Shawn Mendes - Treat You Better (Lyrics) (1).mp3",
        cover: "Shawn Menes.jpg",
        lyrics: [
            //verse
            { time: 11.53, text: "I won't lie to you" },
            { time: 16.5, text: "I know he's just not right for you" },
            { time: 22.46, text: "And you can tell me if I'm off" },
            { time: 23.89, text: "But I see it on your face" },
            { time: 25.61, text: "When you say that he's the one that you want" },
            { time: 28.3, text: "And you're spending all your time" },
            { time: 29.58, text: "In this wrong situation" },
            { time: 31.4, text: "And anytime you want it to stop" },

            //chorus
            { time: 34.2, text: "I know I can treat you better than he can" },
            { time: 39.5, text: "And any girl like you deserves a gentleman" },
            { time: 45.2, text: "Tell me, why are we wasting time" },
            { time: 48.85, text: "On all your wasted crying" },
            { time: 49.2, text: "When you should be with me instead?" },
            { time: 51.3, text: "I know I can treat you better" },
            { time: 56.2, text: "Better than he can" },

            //verse 2
            { time: 57.99, text: "I'll stop time for you" },
            { time: 62.97, text: "The second you say you'd like me too" },
            { time: 72.32, text: "Baby, just to wake up with you" },
            { time: 74.9, text: "Would be everything I need, and this could be so different" },
            { time: 77.7, text: "Tell me what you want to do" },

            //chorus
            { time: 79.89, text: "'Cause I know I can treat you better" },
            { time: 83.8, text: "than he can" },
            { time: 86.05, text: "And any girl like you deserves a gentleman" },
            { time: 91.58, text: "Tell me, why are we wasting time" },
            { time: 94.5, text: "On all your wasted crying" },
            { time: 94.82, text: "When you should be with me instead?" },
            { time: 97.79, text: "I know I can treat you better" },
            { time: 103, text: "Better than he can" },
            { time: 108.6, text: "Better than he can, oh" },


            //bridge
            { time: 116, text: "Give me a sign" },
            { time: 117.99, text: "Take my hand, we'll be fine" },
            { time: 121.5, text: "I promise I won't let you down" },
            { time: 127.08, text: "Just know that you don't" },
            { time: 129.7, text: "Have to do this alone" },
            { time: 132.5, text: "I promise I'll never let you down" },
            { time: 137, text: "Sing it for me" },

            //chorus
            { time: 138, text: "'Cause I know I can treat you better" },
            { time: 142, text: "Than he can" },
            { time: 143.4, text: "And any girl like you deserves a (Scream it!) gentleman" },
            { time: 149.37, text: "Tell me why are we wasting time" },
            { time: 152.6, text: "On all your wasted crime" },
            { time: 153.12, text: "When you should be with me instead" },
            { time: 155.51, text: "I know I can treat you better" },
            { time: 160.53, text: "Better than he can" },
            { time: 166.4, text: "Better than he can, baby" },
            { time: 172.2, text: "Better than he can" },

            //live outro
            { time: 174, text: "Thank you" },
        ]
    },
    {
        title: "Lego House",
        artist: "Ed Sheeran",
        audio: "Ed Sheeran - Lego House (Lyric Video).mp3",
        cover: "images.jpg",
        lyrics: 
               [
            //verse 1
            { time: 7.59, text: "I'm gonna pick up the pieces and build a LEGO house" },
            { time: 14.0, text: "If things go wrong, we can knock it down" },
            { time: 19.2, text: "My three words have two meanings, but there's one thing on my mind" },
            { time: 25.8, text: "It's all for you, mh" },

            //pre chorus
            { time: 30.7, text: "And it's dark in a cold December" },
            { time: 32.2, text: "But I got you to keep me warm" },
            { time: 36.9, text: "If you're broken, I'll mend ya" },
            { time: 38.2, text: "And I'll keep you sheltered from the storm that's raging on now" },

            //chorus
            { time: 43, text: "I'm out of touch, I'm out of love" },
            { time: 46, text: "I'll pick you up when you're gettin' down" },
            { time: 49.6, text: "And out of all these things I've done" },
            { time: 52.7, text: "I think I love you better now" },
            { time: 55, text: "I'm out of sight, I'm out of mind" },
            { time: 58.2, text: "I'll do it all for you in time" },
            { time: 61.3, text: "And out of all these things I've done" },
            { time: 64.3, text: "I think I love you better now, now" },

            //verse 2
            { time: 73.4, text: "I'm gonna paint you by numbers and colour you in" },
            { time: 80, text: "If things go right, we can frame it, and put you on a wall" },
            { time: 85.5, text: "And it's so hard to say it, but I've been here before" },
            { time: 91.6, text: "Now, I'll surrender up my heart, and swap it for yours" },

            //chorus
            { time: 97.2, text: "I'm out of touch, I'm out of love" },
            { time: 100, text: "I'll pick you up when you're gettin' down" },
            { time: 103.4, text: "And out of all these things I've done" },
            { time: 106.7, text: "I think I love you better now" },
            { time: 108.9, text: "I'm out of sight, I'm out of mind" },
            { time: 111.9, text: "I'll do it all for you in time" },
            { time: 115.5, text: "And out of all these things I've done" },
            { time: 118.5, text: "I think I love you better now" },

            //bridge
            { time: 121.5, text: "Don't hold me down" },
            { time: 126.2, text: "I think the braces are breaking" },
            { time: 129.1, text: "And it's more than I can take" },

            //pre chorus
            { time: 132.9, text: "And it's dark in a cold December" },
            { time: 134.1, text: "But I got you to keep me warm" },
            { time: 138.52, text: "If you're broken, I'll mend ya" },
            { time: 140.2, text: "And I'll keep you sheltered from the storm that's raging on now" },

            //chorus
            { time: 145, text: "I'm out of touch, I'm out of love" },
            { time: 148, text: "I'll pick you up when you're gettin' down" },
            { time: 151.31, text: "And out of all these things I've done" },
            { time: 154.5, text: "I think I love you better now" },
            { time: 157.39, text: "I'm out of sight, I'm out of mind" },
            { time: 159.8, text: "I'll do it all for you in time" },
            { time: 163.6, text: "And out of all these things I've done" },
            { time: 166.7, text: "I think I love you better now" },

            //otro
            { time: 169.1, text: "I'm out of touch, I'm out of love" },
            { time: 171.8, text: "I'll pick you up when you're gettin' down" },
            { time: 175.3, text: "And out of all these things I've done" },
            { time: 178.5, text: "I will love you better now" },

            
               ]
    },
];

let currentSong = 0;
let isPlaying = false;
let shuffle = false;
let repeat = false;

// DISPLAY SONGS
function displaySongs(list = songs) {
    const songList = document.getElementById("songList");

    songList.innerHTML = "";

    list.forEach(song => {
        const index = songs.indexOf(song);

        const card = document.createElement("div");
        card.className = "song-card";

        card.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <button type="button">▶ Play</button>
        `;

        card.onclick = () => playSong(index);

        songList.appendChild(card);
    });
}

// DISPLAY LYRICS
function displayLyrics(song) {
    const lyricsBox = document.getElementById("lyricsText");

    lyricsBox.innerHTML = "";

    song.lyrics.forEach((line, index) => {
        const lyric = document.createElement("div");

        lyric.className = "lyric-line";
        lyric.textContent = line.text;
        lyric.id = "lyric-" + index;

        lyricsBox.appendChild(lyric);
    });
}

// PLAY SONG
function playSong(index) {
    currentSong = index;

    const song = songs[currentSong];

    audio.src = song.audio;
    audio.volume = document.getElementById("volume").value;

    document.getElementById("trackTitle").textContent = song.title;
    document.getElementById("trackArtist").textContent = song.artist;
    document.getElementById("cover").src = song.cover;

    document.getElementById("lyricsTitle").textContent = song.title;
    document.getElementById("lyricsArtist").textContent = song.artist;
    document.getElementById("lyricsCover").src = song.cover;

    displayLyrics(song);

    document.getElementById("lyricsSection").style.display = "block";

    audio.currentTime = 0;

    audio.play()
        .then(() => {
            isPlaying = true;
            document.getElementById("playBtn").textContent = "Ⅱ";
        })
        .catch(() => {
            isPlaying = false;
            document.getElementById("playBtn").textContent = "▶";
            alert("Audio file not found. Check your MP3 file.");
        });

    document.getElementById("lyricsSection").scrollIntoView({
        behavior: "smooth"
    });
}

// MOVING LYRICS
function updateLyrics() {
    const song = songs[currentSong];

    if (!song || !song.lyrics) return;

    let activeIndex = -1;

    song.lyrics.forEach((line, index) => {
        if (audio.currentTime >= line.time) {
            activeIndex = index;
        }
    });

    document.querySelectorAll(".lyric-line").forEach(line => {
        line.classList.remove("active");
    });

    if (activeIndex >= 0) {
        const activeLine = document.getElementById(
            "lyric-" + activeIndex
        );

        if (activeLine) {
            activeLine.classList.add("active");

            activeLine.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }
}

audio.addEventListener("timeupdate", updateLyrics);

// PLAY AND PAUSE
function togglePlay() {
    if (!audio.src) {
        playSong(0);
        return;
    }

    if (isPlaying) {
        audio.pause();
        isPlaying = false;

        document.getElementById("playBtn").textContent = "▶";
    } else {
        audio.play()
            .then(() => {
                isPlaying = true;
                document.getElementById("playBtn").textContent = "Ⅱ";
            })
            .catch(() => {
                isPlaying = false;
            });
    }
}

// NEXT SONG
function nextSong() {
    if (shuffle) {
        let next = currentSong;

        if (songs.length > 1) {
            while (next === currentSong) {
                next = Math.floor(Math.random() * songs.length);
            }
        }

        currentSong = next;
    } else {
        currentSong = (currentSong + 1) % songs.length;
    }

    playSong(currentSong);
}

// PREVIOUS SONG
function previousSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;

    playSong(currentSong);
}

// SHUFFLE
function toggleShuffle() {
    shuffle = !shuffle;

    document.getElementById("shuffleBtn").style.color =
        shuffle ? "#55f5d0" : "white";
}

// REPEAT
function toggleRepeat() {
    repeat = !repeat;

    document.getElementById("repeatBtn").style.color =
        repeat ? "#55f5d0" : "white";
}

// AUTO NEXT / REPEAT
audio.addEventListener("ended", function () {
    if (repeat) {
        audio.currentTime = 0;

        audio.play()
            .then(() => {
                isPlaying = true;
                document.getElementById("playBtn").textContent = "Ⅱ";
            });
    } else {
        nextSong();
    }
});

// UPDATE MUSIC PROGRESS
audio.addEventListener("timeupdate", function () {
    if (audio.duration) {
        const progress =
            (audio.currentTime / audio.duration) * 100;

        document.getElementById("progress").value = progress;

        document.getElementById("currentTime").textContent =
            formatTime(audio.currentTime);

        document.getElementById("duration").textContent =
            formatTime(audio.duration);
    }
});

// CHANGE MUSIC POSITION
document.getElementById("progress").addEventListener("input", function () {
    if (audio.duration) {
        audio.currentTime = (this.value / 100) * audio.duration;
        updateLyrics();
    }
});

// FORMAT TIME
function formatTime(time) {
    if (!Number.isFinite(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return minutes + ":" + String(seconds).padStart(2, "0");
}

// VOLUME
document.getElementById("volume").addEventListener("input", function () {
    audio.volume = this.value;
});

// SEARCH
function searchSongs() {
    const search = document.getElementById("searchInput")
        .value.toLowerCase();

    const filteredSongs = songs.filter(song =>
        song.title.toLowerCase().includes(search) ||
        song.artist.toLowerCase().includes(search)
    );

    displaySongs(filteredSongs);
}

// SIDEBAR NAVIGATION
function showPage(page) {
    document.getElementById("pageTitle").textContent = page;
}

// CLOSE LYRICS
function closeLyrics() {
    document.getElementById("lyricsSection").style.display = "none";
}

// INITIAL DISPLAY
displaySongs();
// FALLING STARS
const starColors = [
    "linear-gradient(135deg, #ffe066, #c99a1c)",  // gold like your picture
    "linear-gradient(135deg, #ffd23f, #e0a010)",  // yellow
    "linear-gradient(135deg, #ffb347, #ff8a1f)",  // orange
    "linear-gradient(135deg, #ff9a3c, #e8650a)"   // deep orange
];

function createStars(count = 35) {
    const box = document.createElement("div");
    box.id = "stars";
    document.body.prepend(box);

    for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.className = "star";

        // big and small stars, like your picture
        const size = Math.random() * 22 + 8;

        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.left = Math.random() * 100 + "%";
        star.style.background =
            starColors[Math.floor(Math.random() * starColors.length)];
        star.style.animationDuration = (Math.random() * 7 + 7) + "s";
        star.style.animationDelay = (Math.random() * 10) + "s";

        box.appendChild(star);
    }
}

createStars();