/*function multiplication(){
    var start= parseInt(document.getElementById('start_value').value), y, end= parseInt (document.getElementById('end_value').value) ;
    var f_result="";
        for(x=start; x<=end; x++) {
            var result="";
            for(i = 1; i <= 10; i ++) {
                y=x*i;
                result+= x + ' ' + 'x' + ' ' + i + '=' + y + '<br/>' ;
            }
            f_result+='<div class="result">' + result +'</div>';
        }
    document.getElementsByClassName('headline')[0].innerHTML= 'Mulitiplication starting from' + ' ' + start +' ' + 'and end at'+ ' ' + end + '.';
    document.getElementsByClassName('m_result')[0].innerHTML= f_result ;
}*/
function letter_finder () {
    var find = document.getElementById('letter_txt').value, i = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ", x;
    if(find == 'A' || find == 'E' || find == 'I' || find == 'O' || find == 'U' || find == 'a' || find == 'e' || find == 'i' || find == 'o' || find == 'u'){
        document.getElementById('v_c').value=find + ' ' + 'is a Vowel';
    }
    else if( i.search(find) > -1) {
        document.getElementById('v_c').value=find + ' ' + 'is a Consonant';
    }
    else{
        document.getElementById('v_c').value='"' + find + '"'+ ' ' + 'is not a valid value!';
    }
}
function grade(){
    var x = ["F", "D", "C", "B", "A-", "A", "A+"];
var y=[0, 32, 39, 49, 59, 69, 79, 100], result=document.getElementById('gnumber').value;
if(!result || result<0 || result>100){
    document.getElementsByClassName('gpa_button')[0].innerHTML="!!";
    document.getElementsByClassName('gpa_button')[0].style.background="#F61C1C";
}
else if(result==0 ||result <33){
    document.getElementsByClassName('gpa_button')[0].innerHTML='F';
    document.getElementsByClassName('gpa_button')[0].style.background="#F61C1C";
}
else{
    for(i = 0; i < 8; i++){
        if(result <= y[i] && result > y[i-1]){
            document.getElementsByClassName('gpa_button')[0].innerHTML=x[i-1];
            document.getElementsByClassName('gpa_button')[0].style.background="#2BC45E";
        }
    }
}
}
