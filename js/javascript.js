window.addEventListener("load",
        function () {

            //spørger om siden er loaded og kører funktion

            window.addEventListener("scroll",
                function () {

                    //spørger om der bliver scrollet og kører funktion


                    var nodes = document.getElementsByTagName("article"); //laver en var som påvirker alle article elementer
                    for (var i = 0; i < nodes.length; i++) { //Tjekker alle "articles" og ikke kun 1
                        if (nodes[i].getBoundingClientRect().top >= 0 &&
                            nodes[i].getBoundingClientRect().bottom < window.innerHeight) {
                            nodes[i].setAttribute("class", "komHid");
                        }
                        //sprøger om elementet er inden i vinduet og tilføjer class komHid
                        else {
                            nodes[i].setAttribute("class", "");
                        }

                        //ellers tilføjer den ingen klasse
                    }



                })
    
  


            window.addEventListener("scroll",
                function () {
                
                
                    var mySound = document.getElementById("myaudio");
                
                for (var o = 0; o < mySound.length; o++) {
                    
                    
                    if (elFllVsbl(mySound[o].parentElement)) // elementFullyVisible  test in seperatefunction
                    {
                        if (!(mySound[o].currentTime > 0)) { // test needed for preventing stuttering

                            mySound[o].play();
                        }
                    } else {
                        mySound[o].pause();
                        mySound[o].currentTime = 0; // rewind sound
                    }
                }
                
                }
            )

              function elFllVsbl(el) {
                return (el.getBoundingClientRect().top >= 0 &&
                    el.getBoundingClientRect().bottom < window.innerHeight)
            }
    
})