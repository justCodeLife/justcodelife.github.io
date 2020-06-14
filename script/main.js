//-------------------------------------type writer-----------------------------------------
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        let typeSpeed = 300;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }
        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}

//------------------------------------------------------------------------------------------
const aboutBtn = document.querySelector('.aboutBtn');
const contactBtn = document.querySelector('.contactBtn');
const skillsBtn = document.querySelector('.skillsBtn');
const projectsBtn = document.querySelector('.projectsBtn');
//------------------------------------------------------------------------------------------
const aboutCloseBtn = document.querySelector('.aboutCloseBtn');
const contactCloseBtn = document.querySelector('.contactCloseBtn');
const skillsCloseBtn = document.querySelector('.skillsCloseBtn');
const projectsCloseBtn = document.querySelector('.projectsCloseBtn');
//------------------------------------------------------------------------------------------
const about_slide = document.querySelector('.about_slide');
const contact_slide = document.querySelector('.contact_slide');
const skills_slide = document.querySelector('.skills_slide');
const projects_slide = document.querySelector('.projects_slide');
//------------------------------------------------------------------------------------------
const main = document.querySelector('.main');
const loadResume = new Event('loadResume');
const timeline = document.querySelector('#timeline');

// const removeClass = (element) => {
//     if (Array.isArray(element)) {
//         element.forEach(el => {
//             el.className = el.className.split(" ").filter(c => !c.startsWith("slide-")).join(" ").trim();
//         });
//     } else {
//         element.className = element.className.split(" ").filter(c => !c.startsWith("slide-")).join(" ").trim();
//     }
// };
//-------------------------------------about--------------------------------------------------
aboutBtn.addEventListener('click', () => {
    // method 1
    // removeClass([about_slide, main]);
    // main.classList.add('slide-out-down');
    // about_slide.classList.add('slide-in-up');
    // method 2
    main.animate([{top: 0}, {top: "100vh"}], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards"
    });
    about_slide.style.display = 'block';
    setTimeout(() => {
        main.style.display = 'none';
    }, 1000);
    about_slide.animate([{top: "-100vh"}, {top: 0}], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards"
    });
});
aboutCloseBtn.addEventListener('click', () => {
    // method 1
    // removeClass([about_slide, main]);
    // about_slide.classList.add('slide-out-up');
    // main.classList.add('slide-in-down');
    // method 2
    about_slide.animate([{top: 0}, {top: "-100vh"}], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards"
    });
    main.style.display = 'block';
    setTimeout(() => {
        about_slide.style.display = 'none';
    }, 1000);
    main.animate([{top: "100vh"}, {top: 0}], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards"
    });
});
//-------------------------------------contact--------------------------------------------------
contactBtn.addEventListener('click', () => {
    // method 1
    // removeClass([contact_slide, main]);
    // main.classList.add('slide-out-up');
    // contact_slide.classList.add('slide-in-down');
    // method 2
    main.animate([{top: 0}, {top: "-100vh"}], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards"
    });
    contact_slide.style.display = 'block';
    setTimeout(() => {
        main.style.display = 'none';
    }, 1000);
    contact_slide.animate([{top: "100vh"}, {top: 0}], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards"
    });
});
contactCloseBtn.addEventListener('click', () => {
    // method 1
    // removeClass([contact_slide, main]);
    // contact_slide.classList.add('slide-out-down');
    // main.classList.add('slide-in-up');
    // method 2
    contact_slide.animate([{top: 0}, {top: "100vh"}], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards"
    });
    main.style.display = 'block';
    setTimeout(() => {
        contact_slide.style.display = 'none';
    }, 1000);
    main.animate([{top: "-100vh"}, {top: 0}], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards"
    });
});
//-------------------------------------skills--------------------------------------------------
skillsBtn.addEventListener('click', () => {
    // method 1
    // removeClass([skills_slide, main]);
    // main.classList.add('slide-out-right');
    // skills_slide.classList.add('slide-in-left');
    // method 2
    main.animate([{left: 0, right: 0}, {left: "100vw", right: "-100vw"}], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards"
    });
    skills_slide.style.display = 'block';
    setTimeout(() => {
        main.style.display = 'none';
        skills_slide.firstElementChild.style.backgroundAttachment = 'fixed';
        timeline.dispatchEvent(loadResume);
    }, 1000);
    skills_slide.animate([{left: "-100vw"}, {left: 0}], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards"
    });
});
skillsCloseBtn.addEventListener('click', () => {
    // method 1
    // removeClass([skills_slide, main]);
    // skills_slide.classList.add('slide-out-left');
    // main.classList.add('slide-in-right');
    // method 2
    skills_slide.firstElementChild.style.backgroundAttachment = 'scroll';
    skills_slide.animate([{left: 0}, {left: "-100vw"}], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards"
    });
    main.style.display = 'block';
    setTimeout(() => {
        skills_slide.style.display = 'none';
    }, 1000);
    main.animate([{left: "100vw", right: "-100vw"}, {left: 0, right: 0}], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards"
    });
});
//----------------------------------projects--------------------------------------------------
projectsBtn.addEventListener('click', () => {
    // method 1
    // removeClass([projects_slide, main]);
    // main.classList.add('slide-out-left');
    // projects_slide.classList.add('slide-in-right');
    // method 2
    main.animate([{left: 0, right: 0}, {left: "-100vw", right: "100vw"}], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards"
    });
    projects_slide.style.display = 'block';
    setTimeout(() => {
        main.style.display = 'none';
    }, 1000);
    projects_slide.animate([{right: "-100vw"}, {right: 0}], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards"
    });
});
projectsCloseBtn.addEventListener('click', () => {
    // method 1
    // removeClass([projects_slide, main]);
    // projects_slide.classList.add('slide-out-right');
    // main.classList.add('slide-in-left');
    // method 2
    projects_slide.animate([{right: 0}, {right: "-100vw"}], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards"
    });
    main.style.display = 'block';
    setTimeout(() => {
        projects_slide.style.display = 'none';
    }, 1000);
    main.animate([{left: "-100vw", right: "100vw"}, {left: 0, right: 0}], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards"
    });
});
//-------------------------------------slide on skills items-----------------------------------------------
const items = document.querySelectorAll('#timeline li');
const svgs = document.getElementsByTagName('svg');

const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const run = () => {
    items.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('show');
        }
    });
    for (const svg of svgs) {
        const offset = parseInt(svg.nextElementSibling.textContent.substring(0, 2));
        svg.style.strokeDashoffset = (251 - (251 * offset) / 100);
    }
}

// Events
timeline.addEventListener('loadResume', run);
timeline.addEventListener('resize', run);
timeline.addEventListener('scroll', run);
