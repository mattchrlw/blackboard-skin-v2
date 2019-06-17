// ==UserScript==
// @name         Blackboard Highlighter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://learn.uq.edu.au/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_1_1
// @grant        none
// ==/UserScript==

(function() {
    var courses = document.querySelectorAll(".menu-item li");
//     var COMPcolor = '#E8F5E9'; // green
//     var COMScolor = '#E0F2F1'; // teal
//     var COSCcolor = '#FFFDE7'; // yellow
//     var CSSEcolor = '#E3F2FD'; // blue
//     var DECOcolor = '#F3E5F5'; // purple
//     var INFScolor = '#F9FBE7'; // lime
//     var MATHcolor = '#FFEBEE'; // red
//     var STATcolor = '#FFF3E0'; // orange
    var COMPcolor = '#CDCAFF'; // green
    var COMScolor = '#CDCAFF'; // teal
    var COSCcolor = '#CDCAFF'; // yellow
    var CSSEcolor = '#CDCAFF'; // blue
    var DECOcolor = '#CDCAFF'; // purple
    var INFScolor = '#CDCAFF'; // lime
    var MATHcolor = '#FFCACA'; // red
    var STATcolor = '#FFCACA'; // orange
    var defaultColor = '#EEEEEE';
    Array.prototype.forEach.call(courses, function(course) {
        var courseText, courseCode, courseName = "";
        if (course.firstChild.nodeName == '#text') {
            courseText = course.textContent;
            courseCode = /\[([^\]]+)\]/.exec(courseText);
            if (courseCode != null) {
                courseName = (courseText.replace(courseCode[0],"")).split("(")[0];
                // I'm well aware that this is completely disgusting, but if it works, it works
                course.innerHTML = '<table style="@import url(\'https://rsms.me/inter/inter.css\'); padding:5px; font-size:13px; color: #FFFFFF; font-family: \'Inter\', \'SF Pro Text\', \'Helvetica Neue\', Arial, sans-serif"><tr><td style="font-family: \'SF Mono\', Menlo, \'Courier New\', monospace"><b>'+courseCode[1].substring(0,8)+'</b></td><td style="width: 600px">' + courseName + "</td></tr></table>"
            }
        }
        else {
            courseText = course.firstChild.textContent;
            courseCode = /\[([^\]]+)\]/.exec(courseText);
            if (courseCode != null) {
                courseName = (courseText.replace(courseCode[0],"")).split("(")[0];
                // I'm well aware that this is completely disgusting, but if the original website is a hack anyway, what are you gonna do
                course.firstChild.innerHTML = '<table style="@import url(\'https://rsms.me/inter/inter.css\'); font-size:13px; font-family: \'Inter\', \'SF Pro Text\', \'Helvetica Neue\', Arial, sans-serif"><tr><td style="font-family: \'SF Mono\', Menlo, \'Courier New\', monospace"><b>'+courseCode[1].substring(0,8)+'</b></td><td style="width: 600px">' + courseName + "</td></tr></table>"
            }
        }
        switch(courseText.substring(1,5)) {
            case "COMP":
                course.style.background = COMPcolor;
                break;
            case "COMS":
                course.style.background = COMScolor;
                break;
            case "COSC":
                course.style.background = COSCcolor;
                break;
            case "CSSE":
                course.style.background = CSSEcolor;
                break;
            case "DECO":
                course.style.background = DECOcolor;
                break;
            case "INFS":
                course.style.background = INFScolor;
                break;
            case "MATH":
                course.style.background = MATHcolor;
                break;
            case "STAT":
                course.style.background = STATcolor;
                break;
            default:
                course.style.background = defaultColor;
                break;
        }
    });
})();