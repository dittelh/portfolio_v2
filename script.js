var scrollValue = 0
var aboutMe = document.getElementById("aboutMe")
var mySkills = document.getElementById("mySkills")
var myWork = document.getElementById("myWork")

var positionAboutMe = 3
var positionMySkills = 3
var positionMyWork = 3

var aboutMeDone = false
var mySkillsDone = false 

var positionMax = 94
var positionBeforeMax = 88
var increaseValue = 5
var lastIncreaseValue = 6

var scrollAfterMax = 0
var totalScrollsAfterMax = 8

if (getOS() === "Mac"){
    increaseValue = 1
    lastIncreaseValue = 1
    document.body.style.overflow = "hidden"
    totalScrollsAfterMax = 40
}


addEventListener('wheel', (e) => {

    if (positionMySkills == 3){ 
        if (e.wheelDelta < 0 && positionAboutMe < positionMax) {
            if (positionAboutMe == positionBeforeMax) {
                positionAboutMe += lastIncreaseValue
            } else {
            positionAboutMe += increaseValue 
            }
        } else if(e.wheelDelta > 0 && positionAboutMe > 3) {
            if (positionAboutMe == positionMax) {
                positionAboutMe -= lastIncreaseValue
            } else {
            positionAboutMe -= increaseValue  
            }
        }
        // aboutMe.style.transform = "translateY("+ positionAboutMe +"vw)"
        aboutMe.style.height = positionAboutMe + "vw"
    }

    if (positionAboutMe == positionMax && positionMyWork == 3 && aboutMeDone) {
        if (e.wheelDelta < 0 && positionMySkills < positionMax) {
            if (positionMySkills == positionBeforeMax) {
                positionMySkills += lastIncreaseValue
            } else {
                positionMySkills += increaseValue
            }
        } else if(e.wheelDelta > 0 && positionMySkills > 3) {
            if (positionMySkills == positionMax) {
                positionMySkills -= lastIncreaseValue
            } else {
            positionMySkills -= increaseValue  
            }
        } 
    // mySkills.style.transform = "translateY("+ positionMySkills +"vw)"
    mySkills.style.height = positionMySkills + "vw"
    }

    if (positionMySkills == positionMax && mySkillsDone) {
        if (e.wheelDelta < 0 && positionMyWork < positionMax) {
            if (positionMyWork == positionBeforeMax) {
                positionMyWork += lastIncreaseValue
            } else {
                positionMyWork += increaseValue
            }
        } else if(e.wheelDelta > 0 && positionMyWork > 3) {
            if (positionMyWork == positionMax) {
                positionMyWork -= lastIncreaseValue
            } else {
            positionMyWork -= increaseValue  
            }
        } 
    // myWork.style.transform = "translateY("+ positionMyWork +"vw)"
    myWork.style.height = positionMyWork + "vw"
    }
    
    if (positionAboutMe == positionMax) {
        if (e.wheelDelta < 0 && positionMySkills === 3) {
            scrollAfterMax++   
        }
        if (scrollAfterMax === totalScrollsAfterMax ) {
            aboutMeDone = true 
            scrollAfterMax = 0
            aboutMe.style.position = "fixed"
            aboutMe.style.bottom = 0
        }
    } else {
        aboutMeDone = false
        aboutMe.style.position = "unset"
        aboutMe.style.bottom = "unset"
    }

    if (positionMySkills == positionMax) {
        if (e.wheelDelta < 0){
            scrollAfterMax++
        }
        if (scrollAfterMax === totalScrollsAfterMax) {
            mySkillsDone = true 
            scrollAfterMax = 0
            mySkills.style.position = "fixed"
            mySkills.style.bottom = "3vw"
        } 
    } else { 
        mySkillsDone = false
        mySkills.style.position = "unset"
        mySkills.style.bottom = "unset"
    }

    if (e.wheelDelta > 0){
        scrollAfterMax = 0
    }
})



function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'macOS'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (/Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  }