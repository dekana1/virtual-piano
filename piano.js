document.addEventListener("keydown", function(event){
    let audio = document.createElement("AUDIO");
    if (event.code == "KeyA") {
        audio.src = "white_keys/A.mp3";
        audio.play();
    }
    else if (event.code == "KeyS") {
        audio.src = "white_keys/S.mp3";
        audio.play();
    }
    else if (event.code == "KeyD") {
        audio.src = "white_keys/D.mp3";
        audio.play();
    }
    else if (event.code == "KeyF") {
        audio.src = "white_keys/F.mp3";
        audio.play();
    }
    else if (event.code == "KeyG") {
        audio.src = "white_keys/G.mp3";
        audio.play();
    }
    else if (event.code == "KeyH") {
        audio.src = "white_keys/H.mp3";
        audio.play();
    }
    else if (event.code == "KeyJ") {
        audio.src = "white_keys/J.mp3";
        audio.play();
    }
    else if (event.code == "KeyW") {
        audio.src = "black_keys/W.mp3";
        audio.play();
    }
    else if (event.code == "KeyE") {
        audio.src = "black_keys/E.mp3";
        audio.play();
    }
    else if (event.code == "KeyT") {
        audio.src = "black_keys/T.mp3";
        audio.play();
    }
    else if (event.code == "KeyY") {
        audio.src = "black_keys/Y.mp3";
        audio.play();
    }
    else if (event.code == "KeyU") {
        audio.src = "black_keys/U.mp3";
        audio.play();
    }
    else {
        console.log("Make sure you connect the external scripts to the HTML. Otherwise, the new functionality of the musical instrument will not be available.")
    }
});