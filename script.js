var scrollValue = 0
var aboutMe = document.getElementById("aboutMe")
var mySkills = document.getElementById("mySkills")
var myWork = document.getElementById("myWork")

var positionAboutMe = 0
var positionMySkills = 0
var positionMyWork = 0

var myWorkDone = false
var mySkillsDone = false 

var positionMax = 91
var positionBeforeMax = 85
var increaseValue = 5
var lastIncreaseValue = 6

var scrollAfterMax = 0
var totalScrollsAfterMax = 8

if (getOS() === "Mac"){
    increaseValue = 1
    lastIncreaseValue = 1
    document.body.style.overflow = "hidden"
}

console.log(getOS())

addEventListener('wheel', (e) => {

    if (positionMySkills == 0){ 
        if (e.wheelDelta < 0 && positionMyWork < positionMax) {
            if (positionMyWork == positionBeforeMax) {
                positionMyWork += lastIncreaseValue
            } else {
            positionMyWork += increaseValue 
            }
        } else if(e.wheelDelta > 0 && positionMyWork > 0) {
            if (positionMyWork == positionMax) {
                positionMyWork -= lastIncreaseValue
            } else {
            positionMyWork -= increaseValue  
            }
        }
        myWork.style.transform = "translateY("+ positionMyWork +"vw)"
    }

    if (positionMyWork == positionMax && positionAboutMe == 0 && myWorkDone) {
        if (e.wheelDelta < 0 && positionMySkills < positionMax) {
            if (positionMySkills == positionBeforeMax) {
                positionMySkills += lastIncreaseValue
            } else {
                positionMySkills += increaseValue
            }
        } else if(e.wheelDelta > 0 && positionMySkills > 0) {
            if (positionMySkills == positionMax) {
                positionMySkills -= lastIncreaseValue
            } else {
            positionMySkills -= increaseValue  
            }
        } 
    mySkills.style.transform = "translateY("+ positionMySkills +"vw)"
    }

    if (positionMySkills == positionMax && mySkillsDone) {
        if (e.wheelDelta < 0 && positionAboutMe < positionMax) {
            if (positionAboutMe == positionBeforeMax) {
                positionAboutMe += lastIncreaseValue
            } else {
                positionAboutMe += increaseValue
            }
        } else if(e.wheelDelta > 0 && positionAboutMe > 0) {
            if (positionAboutMe == positionMax) {
                positionAboutMe -= lastIncreaseValue
            } else {
            positionAboutMe -= increaseValue  
            }
        } 
    aboutMe.style.transform = "translateY("+ positionAboutMe +"vw)"
    }
    
    if (positionMyWork == positionMax) {
        if (e.wheelDelta < 0 && positionMySkills === 0) {
            scrollAfterMax++   
            
        }
        if (scrollAfterMax === totalScrollsAfterMax ) {
            myWorkDone = true 
            scrollAfterMax = 0
        }
    } else {
        myWorkDone = false
    }

    if (positionMySkills == positionMax) {
        if (e.wheelDelta < 0){
            scrollAfterMax++
        }
        if (scrollAfterMax === totalScrollsAfterMax) {
           mySkillsDone = true 
           scrollAfterMax = 0
        } 
    } else { 
        mySkillsDone = false
    }

    if (e.wheelDelta > 0){
        scrollAfterMax = 0
    }

 console.log(scrollAfterMax)
})



function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'macOS'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
        console.log(platform)
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