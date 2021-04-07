// --------------- chapter # 38-42 ---------------
// //Q1
// var a,b;
// function power (a,b){
//     var pow = Math.pow(a,b)
//     document.write("a raised to b : "+pow)
// }
// power(2,4)
// //Q2
// function leapYear(){
//     var inp = +prompt("Enter year : ")
//     if (inp % 4 == 0 && inp % 100 !=0 || inp %400 ==0) {
//         document.write("leap year")
//     }
//     else {
//         document.write("not leap")
//     }
// }
// leapYear()
// //Q3
// var a=2, b=3, c=4 , s , area;
// function s(){
//     s = ( a + b + c ) / 2;
//     return s;
// }
// function area(){
//     s();
//     area = s*(s-a)*(s-b)*(s-c);
//     document.write(area)
// }
// area() 
// //Q4
// var sub1 = 42;
// var sub2 = 41;
// var sub3 = 32;
// function mainFunction() {
//     document.write("average : " + average() + "<br>")
//     document.write("percentage : " + percentage())
// }
// function average() {
//     var avg = ((sub1 + sub2 + sub3) / 3);
//     return avg;
// }
// function percentage() {
//     var per = (((sub1 + sub2 + sub3) / 300) * 100);
//     return per;
// }
// mainFunction()
// //Q5->for loop
// function indexCheck(c) {
//     var a = "dhara";
//     for (var i = 0; i < a.length; i++) {
//         if (c == a[i]) {
//             document.write(i) 
//         }
//     }
// }
// indexCheck("r")
// //Q5-> while loop
// function indexCheck(c) {
//   var a = "dhara";
//   var i = 0;
//   while (i < a.length) {
//     if (c == a[i]) {
//       document.write(i)
//     }
//     i++;
//   }
// }
// indexCheck("r")
// //Q6
// function removeVowels(str) {
//   return str.replace(/[aeiou]/gi, '');
//   // g tells to find all matches, not just the first.
//   // i tells to be case insensitive.
//   // What goes inside the // is the pattern.
//   // [] tells to match any character in a set.
//   // aeiou are the characters in the set.
// }
// document.write(removeVowels("I have been feeling so lonely"));
////Q7
//“Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.
//without switch
// function removeVowels(str) {
//   var s = str.match(/[aeiou]{2}/gi);
//   return s; //ea, ea, io, ui
//   return s.length; //4
// }
// document.write(removeVowels("Pleases read this application and give me gratuity"));

// with switch
// function vowel(c) {
//     switch (c) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//         default:
//             return false;
//     }
// }
// function occ(str) {
//     str = str.toLowerCase().split("");
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (vowel(str[i]) && vowel(str[i + 1])) {
//             count++
//         }
//     }
//     return count;//4
// }
// document.write(occ("Pleases read this application and give me gratuity"));
////Q8
// //Meter       = km * 1000
// // Feet        = km * 3280.84
// // Inches      = km * 39370.1
// // Centimeter  = km * 100000 
// function Meter(km) {
//     return km * 1000;
// }
// function Feet(km) {
//     return km * 3280.84;
// }
// function Inches(km) {
//     return km * 39370.1;
// }
// function Centimeter(km) {
//     return km * 100000;
// }
// function distance() {
//     km = +prompt("Enter the distance between two cities  ")    
//     document.write("The distance between two cities (in km.) is: "+ km + "<br>")
//     document.write("The distance between two cities (in meter.) is: "+ Meter(km) + "<br>")
//     document.write("The distance between two cities (in feet.) is: "+ Feet(km) + "<br>")
//     document.write("The distance between two cities (in inches.) is: "+ Inches(km) + "<br>")
//     document.write("The distance between two cities (in centimeter.) is: "+ Centimeter(km) + "<br>")
// }
// distance()
////Q9
// var n = prompt("no of employees: ")
// var time_worked , pay , over_time;
// for(var i=1 ; i<=n ; i++){
//     time_worked = +prompt("Time worked of employee: "+i)
//     if(time_worked>40){
//         over_time = time_worked - 40;
//         pay = over_time*12;
//         document.write(pay+ " pay will be give to employee "+i+ " for doing overtime for "+ over_time +" hour <br>")
//     }
//     else{
//         document.write("worked hard employee "+i+ " you did no overtime <br>")
//     }
// }
////Q10
// var amount = prompt("Please Enter Amount for Withdraw :")
// document.write("Required notes of 100 is : " + Math.floor(amount / 100) + "<br>")
// document.write("Required notes of 50 is : " + Math.floor((amount % 100) / 50) + "<br>")
// document.write("Required notes of 10 is : " + Math.floor(((amount % 100) % 50) / 10) + "<br>")
// document.write("Amount still remaining is : " + Math.floor((((amount % 100) % 50) % 10)) + "<br>")

// --------------- chapter # 43-48 ---------------
// //Q1 and 2 done in html 
// //Q3
// function remove(r){ 
// var i = r.parentNode.parentNode.rowIndex;
// var mytable = document.getElementById('myTable');
// mytable.deleteRow(i)
// }
////Q4
// function pic(src){
//     var img= document.getElementById('image')
//     img.src =src;
// }
////Q5
// var number=0
// function Increase() {
//     var res = document.getElementById('result')
//     ++number;
//     result.value = number;

// }
// function Decrease() {
//     var res = document.getElementById('result')
//     --number;
//     result.value = number;
// }
// --------------- chapter # 49-52 ---------------
// //Q1
// var fname = document.getElementById('fname')
// var lname = document.getElementById('lname')
// var pword = document.getElementById('pword')
// var email = document.getElementById('email')
// var contact = document.getElementById('contact')
// var city = document.getElementById('city')
// var state = document.getElementById('state')
// var zip = document.getElementById('zip')
// function submit_form() {
//     var form_data = document.getElementById('form_data');
//     form_data.innerHTML = "<li> FullName: " + fname.value + lname.value + "</li><li> Password: " + pword.value + "</li><li> Email: "
//         + email.value + "</li><li> Contact: " + contact.value + "</li><li> City: " + city.value + "</li><li> State: " + state.value + "</li><li> Zip: " + zip.value + "</li>";
//     fname.value = "";
//     lname.value = "";
//     pword.value = "";
//     email.value = "";
//     contact.value = "";
//     city.value = "";
//     state.value = "";
//     zip.value = "";
//     form_data.value = "";
// }
////Q2
// document.getElementById("details").style.display = "none"
// function readmore(){
//     var details = document.getElementById('details')
//     var firstlook = document.getElementById('first_look')
//     firstlook.innerHTML = details.innerHTML ;    
// }
//Q3 -> incomplete
// var fname = document.getElementById('fname')
// var lname = document.getElementById('lname')
// var pword = document.getElementById('pword')
// var email = document.getElementById('email')
// var contact = document.getElementById('contact')
// var city = document.getElementById('city')
// var state = document.getElementById('state')
// var zip = document.getElementById('zip')
// var form_data = document.getElementById('form_data');
// function submit_form() {
//     form_data.innerHTML += "<tr><td>" + fname.value + lname.value + "</td><td> " + pword.value + " </td><td>  " + email.value + " </td><td> " + contact.value + " </td><td>  " + city.value + " </td><td>" + state.value + " </td><td> " + zip.value + "</td> <td>  <button onclick='remove(this)'>Delete</button> </td>  <td>  <button onclick='edit(this)'>Edit</button> </td>  </tr>";
//     fname.value = "";
//     lname.value = "";
//     pword.value = "";
//     email.value = "";
//     contact.value = "";
//     city.value = "";
//     state.value = "";
//     zip.value = "";
// }
// function remove(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     form_data.deleteRow(i)
// }

// function edit(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     form_data.insertRow(i) 
// }
// --------------- chapter # 53-58 ---------------
// //Q1 can't understand and i dont have model code

// //Q2
// var pera = document.getElementById('pera')
// var fontSize = 14;
// function zoomin() {
// 	fontSize += 10;
// 	pera.style.fontSize = fontSize + "px";
// }
// function zoomout() {
// 	fontSize -= 10;
// 	pera.style.fontSize = fontSize + "px";
// }
// --------------- chapter # 59-63 ---------------
// //Q1
//i
// var a = document.getElementById('main-content')
//ii
// var a = document.getElementById('main-content')
// console.log(a.childNodes)
//iii
// var a = document.getElementsByClassName('redner')
// for(var i=0; i<=4 ; i++){
//     console.log(a[i].innerHTML)
// }
//iv
// var first_name = document.getElementById("firstName")
// first_name.value = "Dhara";
//v
// var last_name = document.getElementById("lastName")
// last_name.value = "Rajput";
// var email = document.getElementById("email")
// email.value = "Dhara@gmail.com";

// //Q2
//i
// var a = document.getElementById('main-content')
// console.log(a.nodeType)
//ii
// var last_name = document.getElementById("lastName")
// console.log(last_name.nodeType)
// console.log(last_name.childNodes.nodeType)
///iii
// var last_name = document.getElementById("lastName")
// last_name.childNodes = "div";
// console.log(last_name.childNodes)
//iv
// var a = document.getElementById('main-content')
// console.log(a.firstChild)
// console.log(a.lastChild)
//v
// var a = document.getElementById('main-content')
// console.log(a.lastChild.nextSibling)
// console.log(a.lastChild.previousSibling)
//vi
// var email = document.getElementById("email")
// console.log(email.parentNode)
// console.log(email.parentNode.nodeType)