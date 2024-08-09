console.log ("Hello world")



 
 function refrain() {
     let lyrics2 = "";
   lyrics2 += "Yeah, Glo! Stomp a lil' pussy ho with some shell toes\n";
   lyrics2 += "Yeah, Glo! Slappin' rap bitches and makin' bail, ho\n";
   lyrics2 += "Yeah, Glo! Two-tone Cartier match the nails, ho\n";
   lyrics2 += "Yeah, Glo! No competition, these bitches stale, ho\n";
   lyrics2 += "Yeah, Glo! Cuban on Cuban, my shit in layers, ho\n";
   lyrics2 += "Yeah, Glo! Say they get money, but I can't tell, ho\n";
   lyrics2 += "Yeah, Glo! Keep runnin' circles around these snail hoes\n";
   lyrics2 += "Yeah, Glo! And my shit bumpin' up in the jail, ho (on the gang)\n";
   return lyrics2;
}
 
 function song() {
  let lyrics1 = "";
     // Verse one
 lyrics1 += "Yeah, run up on big Glo, you won't, I bet yo' ass be on the floor";
 lyrics1 += "Big Carbon hit like Mayweather, Tula come through and bow a ho";
 lyrics1 += "Got millions out that rap shit, they hate a bitch but they stole the flow";
 lyrics1 += "Got backend after backend comin', fuck 'em, I stole the show";
 lyrics1 += "Don't run up on that bitch, she a headcase, all she do is shoot";
 lyrics1 += "I signed my deal up on a PJ and hopped out a parachute";
 lyrics1 += "I'm geeked, don't ask me 'bout no more features, I might just stare at you";
 lyrics1 += "I'm geeked, don't ask me 'bout no more features, I might embarrass you";
 
 
  lyrics1 += refrain();
 
 // Verse two
 lyrics1 += "Big Glo, where you been at? Man, everywhere, I'm workin' hard";
 lyrics1 += "Maybach and G-Wagon trucks, got M&M's in my garage";
 lyrics1 += "Quick to crank up on a ho, you bitches better not get me started";
 lyrics1 += "Locked in with the gangstas and players, my folks gon' keep it solid";
 lyrics1 += "Everything I got on new, it look like I got renovated (ayy)";
 lyrics1 += "I'm cocky, bitch, when I was just humble they didn't appreciate it (fuck 'em)";
 lyrics1 += "Young wealthy and ratchet, I'm the hood bitches' motivation (stamp that)";
 lyrics1 += "On top of the world now, they tried to underestimate me";
 lyrics1 += "Get 'em Glo! Them bitches fraudulent, you know you the truth";
 lyrics1 += "Get 'em Glo! Stop overthinkin', these hoes can't fuck with you (period)";
 lyrics1 += "Get 'em Glo! Standin' on business in these Chanel shoes";
 lyrics1 += "Before I let a ho play with me, I'll go eat some jail food, on gang";
 lyrics1 += "\n";
 
 lyrics1 += refrain();
}

 let tag = document.getElementById("gloo");

 
 function handleClick() {
 let songLyrics;
 songLyrics = song();
 tag.innerHTML = songLyrics;
}
 

 let button = document.getElementById("go-glo");
  button.addEventListener("click", handleClick);