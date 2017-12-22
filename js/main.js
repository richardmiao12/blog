//window.scroll({
//  top: 2500,
//  left: 0,
//  behavior: 'smooth'
//});

var subsection_names = ["name0", "name1", "name2", "name3", "name4"];
var jump_points = ["step0", "step1", "step2", "step3", "step4"];

window.addEventListener('scroll', function(e) {

    var thing = 0;

    while(document.getElementById(subsection_names[thing]).offsetTop < window.scrollY + 25) {
        thing++;
        continue;
    }

    for(var idx in jump_points) {
        var ok = jump_points[idx];
        console.log(idx === thing)
        if(Number(idx) === Number(thing)) document.getElementById(ok).className = "step-item active"
        else document.getElementById(ok).className = "step-item"
    }

    console.log(thing)


    window.requestAnimationFrame(function() {
    });


});
