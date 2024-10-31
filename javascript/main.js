


let head = document.querySelector(".head");

function clickBar() {
    let me = document.querySelector(".sidebar-button");

    function closebar() {
        head.style.transform = "translateX(0)";
        document.body.style.filter = "brightness(0.8)";
        me.classList.add("active");
    }
    function openbar() {
        me.classList.remove("active")
        document.body.style.filter = "unset";
        head.style.transform = "translateX(-200px)";
    }


    me.addEventListener("click", function () {
        if (me.classList.contains("active")) {
            openbar();
        }
        else {
            head.style.position = "fixed";
            closebar();
        }
    });

    window.addEventListener("scroll", () => {
        if (me.classList.contains("active")) openbar();
    })

}
clickBar();



function topRow() {
    let rowt = document.querySelector(".top-row");
    let spanH = document.querySelector(".top-row span");
    rowt.style.display = "none";
    window.addEventListener("scroll", () => {
        window.scrollY > 500 ? rowt.style.display = "flex" : rowt.style.display = "none";
        spanH.style.height = `${(window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100}%`;

    });

}
if (window.innerWidth < 1000) {
    topRow();
}





function writeDelete() {
    let listJobs = ["front-end", "web designe", "software"];
    let txtJ = document.querySelector(".jobs");
    let i = 0;
    let index = 0;
    write();

    function write() {
        if (index > 2) {
            index = 0;
        }
        let one = setInterval(() => {
            txtJ.innerHTML = listJobs[index].slice(0, i);
            i++;
            if (i > listJobs[index].length) {
                i = 0;
                clearInterval(one);
                setTimeout(() => deleting(), 1500);
            }
        }, 50);
    }

    function deleting() {
        let two = setInterval(() => {
            txtJ.innerHTML = listJobs[index].slice(0, txtJ.textContent.length - 1);
            if (txtJ.textContent.length == 0) {
                index++;
                clearInterval(two);
                setTimeout(() => {
                    write();
                }, 1500);
            }
        }, 100);
    }

}

writeDelete();

function fixBar() {
    document.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            head.classList.add("head-scrolled");
        }
        else if (window.scrollY < 200) {
            head.classList.remove("head-scrolled");
        }
    });
}
fixBar();




// function skillProgress() {
function skilP() {
    let mis = document.querySelectorAll(".skill-progress");
    let cie = document.querySelectorAll(".circule");
    let skilldone = true;
    function skillProgress(mi, ci) {
        let m = 0;
        const targetSkill = parseInt(mi.getAttribute("data-skill"), 10);

        function updateProgress() {
            m++;
            ci.style.background = `conic-gradient(#1f8ff1a6 ${m}%, #e0e0e0 ${m}%, #e0e0e0 100%)`;
            mi.innerHTML = `${m}`;
            if (m < targetSkill) {
                requestAnimationFrame(updateProgress);
            }
        }

        requestAnimationFrame(updateProgress);
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > 3000 && skilldone) {
            for (let i = 0; i < cie.length; i++) {
                skillProgress(mis[i], cie[i]);
            }
            skilldone = false;
        }
    });

}

skilP();



function listActivation() {
    const sections = document.querySelectorAll('body > div');
    const lists = document.querySelectorAll(".list ul li");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    lists.forEach(section => section.classList.remove('active-list'));
                    lists.forEach((e) => {
                        if (entry.target.className == e.textContent.trim()) e.classList.add('active-list');
                    })
                }
            });
        },
        {
            threshold: 0.5 // Adjust this threshold as needed
        }
    );

    sections.forEach(section => {
        observer.observe(section);
    });
}
if (window.innerWidth >= 1000) {
    listActivation();
}


// for (let i = 0; i < allsection.length; i++) {
//     console.log(allsection[i].getBoundingClientRect().y);
// }