document.getElementById('formButton').onclick=function(){
    q1 = parseInt(document.querySelector('input[name = "q1"]:checked').value);
    q2 = parseInt(document.querySelector('input[name = "q2"]:checked').value);
    q3 = parseInt(document.querySelector('input[name = "q3"]:checked').value);
    q4 = parseInt(document.querySelector('input[name = "q4"]:checked').value);
    q5 = parseInt(document.querySelector('input[name = "q5"]:checked').value);
    q6 = parseInt(document.querySelector('input[name = "q6"]:checked').value);
    q7 = parseInt(document.querySelector('input[name = "q7"]:checked').value);
    q8 = parseInt(document.querySelector('input[name = "q8"]:checked').value);
    q9 = parseInt(document.querySelector('input[name = "q9"]:checked').value);

    result = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9;
    let result2;

    document.getElementById('grade').innerHTML = "<h1>How smart are you Assesment?</h1><p>Thanks for taking this Assessment!<br><i>If you entered your email address at the beginning, you will receive an email with your result</i><br>Here are your results.</p><h3>Your Total Score is: " + result + "</h3> <p>Read below for an analysis of your score level to discover how far you got in your journey. <br>Remember you can always grow in your skills by working hard and practicing a lot</p>";

    if(result <=9) {
        result2 = "<b>Your score of " + result + "</b> may indicate that you have never studied or you are at the beggining of your programming journey"
    };

    if(result >9 && result < 19) {
        result2 = "<b>Your score of " + result + "</b> may indicate that you have some experience and we encourage you to continue on your programming journey"
    };

    if(result > 18 && result < 27) {
        result2 = "<b>Your score of " + result + "</b> may indicate that you are a seasoned developer and we encourage you to continue on your programming journey"
    };

    if(result > 26 && result <=36) {
        result2 = "<b>Your score of " + result + "</b> may indicate that you are a profesional developer and we encourage you to continue on your programming journey"
    };
    document.getElementById('grade2').innerHTML = result2;

    //HTML RESULTS
    htmlResult = q1 + q2 + q3;
    let htmlResult2;

    document.getElementById('htmlGrade').innerHTML 
    = "Your score for the HTML Category is: " + htmlResult + "<i>(out of 12)</i>"
    if(htmlResult >=0){
        htmlResult2 = "<b><i>Overview</i></b> <br><br><b>The points</b> obtained here will show you the level you have to invest in studying HTML. If your result is under 4, you better start working harder on this. But take one day at a time"
    }
    document.getElementById('htmlGrade2').innerHTML = htmlResult2;

    //CSS Results
    cssResult = q4 + q5 + q6;
    let cssResult2;

    document.getElementById('cssGrade').innerHTML = "Your score for the CSS Category is: " + cssResult + "<i>(out of 12)</i>"
    if(cssResult >=0){
        cssResult2 = "<b><i>Overview</i></b> <br><br>The points obtained here will show you the level you have to invest in studying CSS. If your result is under 4, you better start working harder on this. But take one day at a time"
    }
    document.getElementById('cssGrade2').innerHTML = cssResult2;

    //JavaScript Results
    jsResult = q7 + q8 + q9;
    let jsResult2;

    document.getElementById('jsGrade').innerHTML = "Your score for the JavaScript Category is: " + jsResult + "<i>(out of 12)</i>"
    if(jsResult >=0){
        jsResult2 = "<b><i>Overview</i></b> <br><br>The points obtained here will show you the level you have to invest in studying JavaScript. If your result is under 4, you better start working harder on this. But take one day at a time"
    }
    document.getElementById('jsGrade2').innerHTML = jsResult2;
    
}