const home = document.querySelector("#home");
const nav = document.querySelector('.navbar');
const project = document.querySelector("#project");
const projectSection = document.querySelector(".project-section");
const skillsection = document.querySelector(".logo-box");
const connect = document.querySelector("#connect");
const skill = document.querySelector("#skill");
const social = document.querySelector(".footer-ele");
const socialMedia = document.querySelector(".social-media");
const project1 = document.querySelector(".project-1");
const project2 = document.querySelector(".project-2");
const internProject = document.querySelectorAll(".internship-project");
const linkedin = document.querySelector("#linkedin");
const github = document.querySelector("#github");
const instagram = document.querySelector("#instagram");
const twiteer = document.querySelector("#twitter");
const discord = document.querySelector("#discord");
const contact = document.querySelector(".contact");


//scroll to contact-info
connect.addEventListener('click' , function(){
    window.scrollTo({
        top: social.offsetTop,
        behavior: 'smooth'
    });

    setTimeout(() => {
        socialMedia.style.color = 'rgb(0, 149, 255)';
        linkedin.style.color = 'rgb(0, 149, 255)';
        github.style.color = 'rgb(0, 149, 255)';
        instagram.style.color = 'rgb(0, 149, 255)';
        twiteer.style.color = 'rgb(0, 149, 255)';
        discord.style.color = 'rgb(0, 149, 255)';
        contact.style.color = 'rgb(0, 149, 255)';
    }, 1000);

    setInterval(() => {
        socialMedia.style.color = '';
        linkedin.style.color = '';
        github.style.color = '';
        instagram.style.color = '';
        twiteer.style.color = '';
        discord.style.color = '';
        contact.style.color = '';
    }, 2000);

});



//scroll to project-section
project.addEventListener('click' , function(){
 
    window.scrollTo({
        top: projectSection.offsetTop,
        behavior: 'smooth'
    });

     
});

//scroll to skill-section
skill.addEventListener('click' , function(){
 
    window.scrollTo({
        top: skill-section.offsetTop,
        behavior: 'smooth'
    });

     
});

//scrollto home 
home.addEventListener('click', function(){
    window.scrollTo({
        top: nav.offsetTop,
        behavior: "smooth"
    });
});


