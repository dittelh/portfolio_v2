var scrollValue = 0
var aboutMe = document.getElementById("aboutMe")
var mySkills = document.getElementById("mySkills")
var myWork = document.getElementById("myWork")

var positionAboutMe = 0
var positionMySkills = 0
var positionMyWork = 0

var myWorkDone = false
var mySkillsDone = false 



addEventListener('wheel', (e) => {

    // scrollValue += e.wheelDelta 
    // console.log(scrollValue)

    if (positionMySkills == 0){ 
        if (e.wheelDelta < 0 && positionMyWork < 88) {
            if (positionMyWork == 85) {
                positionMyWork += 3
            } else {
            positionMyWork += 5 
            }
        } else if(e.wheelDelta > 0 && positionMyWork > 0) {
            if (positionMyWork == 88) {
                positionMyWork -= 3
            } else {
            positionMyWork -= 5  
            }
        }
        myWork.style.transform = "translateY("+ positionMyWork +"vw)"
    }

    if (positionMyWork == 88 && positionAboutMe == 0 && myWorkDone) {
        if (e.wheelDelta < 0 && positionMySkills < 88) {
            if (positionMySkills == 85) {
                positionMySkills += 3
            } else {
                positionMySkills += 5
            }
        } else if(e.wheelDelta > 0 && positionMySkills > 0) {
            if (positionMySkills == 88) {
                positionMySkills -= 3
            } else {
            positionMySkills -= 5  
            }
        } 
    mySkills.style.transform = "translateY("+ positionMySkills +"vw)"
    }

    if (positionMySkills == 88 && mySkillsDone) {
        if (e.wheelDelta < 0 && positionAboutMe < 88) {
            if (positionAboutMe == 85) {
                positionAboutMe += 3
            } else {
                positionAboutMe += 5
            }
        } else if(e.wheelDelta > 0 && positionAboutMe > 0) {
            if (positionAboutMe == 88) {
                positionAboutMe -= 3
            } else {
            positionAboutMe -= 5  
            }
        } 
    aboutMe.style.transform = "translateY("+ positionAboutMe +"vw)"
    }
    
    if (positionMyWork == 88) {
        myWorkDone = true
    } else { 
        myWorkDone = false
    }

    if (positionMySkills == 88) {
        mySkillsDone = true
    } else { 
        mySkillsDone = false
    }
    
    
})

