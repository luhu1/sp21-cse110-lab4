function everySec() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time); 
}

setInterval(function(){ everySec(); }, 1);


