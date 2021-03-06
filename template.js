"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// $("").
//modal active
$(function () {
  $('#btn_giris').click(function () {
    $('#myUye').modal('show');
  });
  $('#deneme44').css('color', 'red').css('background', 'black');

  function onSubmitFunction() {
    alert('submitted value 44');
  }
}); //form validation

$(function () {
  //Submit  T??kland??????nda
  $('#btnSubmit').click(function () {
    //input i??eri??i ald??m
    var email, password;
    email = $('#user_email').val();
    password = $('#user_password').val(); //validation Email

    if (email == '') {
      $('#validation_email').html('email bo?? ge??ilemez....');
    } else if (validateEmail(email) == false) {
      $('#validation_email').html('email uygun formatta girmediniz....');
    } else {
      $('#validation_email').html('');
    } //validation Password


    if (password == '') {
      $('#validation_password').html('??ifre bo?? ge??ilemez....');
    } else {
      $('#validation_password').html('');
    }

    function validateEmail(email) {
      //email'in do??ru ??ekilde yaz??lmas?? i??in ??zel bile??enleri olan yap??d??r.
      var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    }
  });
}); //  var root=document.getElementById("react_root");
//  Birden fazla html yap??s?? kullanmak istiyorsak div i??inde yaz??l??r
//  var template=(
//    <div>
//      <hr />
//      <h2>React DOM</h2>
//      <button className="btn btn-primary " style={{fontSize:"55px"}} >G??nder Dom</button>
//      <hr />
//    </div>
//  );
//  ReactDOM.render(template,root);
//    JS                      React
//   ------                  ---------
//    deneme                  {deneme}
//    onclick="deneme()"      onClick={deneme}
//    Bootstrap               React
//    ------                  ---------
//    class                   className
//    Css                     React
//    ------                  ---------
//    style                   style={{fontSize:25px;}}
//basket start

var counter = 0; //Art??rmak

var counterPlus = function counterPlus() {
  counter++;
  againCall();
  console.log('Art??r??ld??');
}; //Azaltmak


var counterMinus = function counterMinus() {
  counter--;
  againCall();
  console.log('Azalt??ld??');
}; //Event


function againCall() {
  var eventTuto = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/React.createElement("p", null, "Adet: ", counter)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, ' ', /*#__PURE__*/React.createElement("button", {
    onClick: counterPlus,
    className: "btn btn-primary",
    style: {
      fontSize: '14px'
    },
    id: "plus_id"
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, ' ', /*#__PURE__*/React.createElement("button", {
    onClick: counterMinus,
    className: "btn btn-danger",
    style: {
      fontSize: '14px'
    },
    id: "minus_id"
  }, "-")))));
  ReactDOM.render(eventTuto, document.getElementById('plus_minus'));
}

againCall(); //Timer

function timerClock() {
  var time = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, " ", new Date().toLocaleTimeString(), " ")));
  ReactDOM.render(time, document.getElementById('timer_id'));
} //bir metodu s??rekli belirli aral??klarda ??a????rmak istersek


setInterval(timerClock, 1000); //TODO LIST
//variable

var listItemObject = {
  title: 'Todo List Uygulamas??',
  listCounter: 'Liste Eleman say??s??',
  data: []
}; //LIST CLEAR

var clearList = function clearList() {
  listItemObject.data = [];
  formTutorial();
}; //onSubmit


function formOnSubmit(event) {
  //form bile??enin submit olmamas??
  //Preventdefault kavram?? ilgili elementin taray??c?? taraf??ndan o an yapt?????? varsay??lan i??lemi engellemeye yarar.
  event.preventDefault();
  var formInputData = event.target.elements.formInput.value; //console.log(formInputData);

  if (formInputData) {
    //gelen bir??ey var ise i??eri girer
    listItemObject.data.push(formInputData);
    formTutorial();
    console.log('Eklendi: ' + formInputData);
    event.target.elements.formInput.value = '';
  }
}

function formTutorial() {
  var form = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "text-center44 text-uppercase mt-5"
  }, listItemObject.title), /*#__PURE__*/React.createElement("p", null, listItemObject.listCounter, " : ", listItemObject.data.length), /*#__PURE__*/React.createElement("ul", null, listItemObject.data.map(function (temp) {
    //toString: kendisine tan??mlanan de??i??ken de??erini string olarak de??i??tirerek d??nd??r??r.
    return /*#__PURE__*/React.createElement("li", {
      key: temp.toString()
    }, " ", temp, " ");
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: formOnSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    name: "formInput"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-warning mr-3",
    style: {
      fontSize: ".6rem"
    },
    type: "submit"
  }, "G\xF6nder"), /*#__PURE__*/React.createElement("button", {
    onClick: clearList,
    className: "btn btn-danger",
    style: {
      fontSize: ".6rem"
    }
  }, "temizle")))));
  ReactDOM.render(form, document.getElementById('todolistId'));
}

formTutorial(); ///////////////////////////////////////////////////////////////////
//object

var object = {}; //console.log(object); // => {}
//constructor(yap??c??)

var Student = function Student(adi, soyadi, yas) {
  this.adi = adi;
  this.soyadi = soyadi;
  this.yas = yas; //console.log(this);
}; //instance
//hasOwnPropert: Bu objede verilen ??zellikler var m?? yok mu ?


var instanceData = new Student("Adi44", "Soyadi44", 37); //console.log(instanceData.hasOwnProperty("soyadi")); // => true
//Object Create: nesnemize yeni obje olu??turmak

var instanceData2 = Object.create(Student); //console.log(instanceData2);
//property
//prototype(kal??t??mlamak): yap??c?? fonksiyona yeni bir ??zellik veya fonksiyon eklemek.

Student.prototype.birthYear = function () {
  return new Date().getFullYear() - this.yas;
}; //console.log("Ad??: "+instanceData.adi+"  Do??um Tarihi: "+instanceData.birthYear()); // => Ad??: Adi44  Do??um Tarihi: 1985
//built-in-constructor: yeni ??zellikler eklemek
//string bir ??zellik ekledik


String.prototype.karesi = function (n) {
  return n * n;
}; //console.log("X ".karesi(5)); // => 25
//mutlak de??erli kendi string function'n??n?? olu??turma


String.prototype.mutlakDeger = function (n) {
  if (n > 0) return n;else return -n;
}; //console.log("Mutlak".mutlakDeger(-5)); // => 5
//Verilen iki say??n??n k??????k olan??n?? bulan bir function yazma


String.prototype.kucukSayi = function (sayi1, sayi2) {
  if (sayi1 > sayi2) return sayi2;else return sayi1;
}; //console.log("K??????k Sayi".kucukSayi(5,14)); // => 5
//dizi


var dizi = ["js", "jquery", "bootstrap"]; //console.log(dizi); // => (3)??['js', 'jquery', 'bootstrap']
//dizideki elemanlar?? silme
//array ile dizi ekledik
//splice():??zellik ekleme veya silme

Array.prototype.arrayIndexDelete = function (data) {
  //indexOf:arama yapar  
  var index = this.indexOf(data);

  if (index > -1) {
    this.splice(index, 1); // 1.parametre:indeks no 2.parametre:ka?? tane silinecek
  }

  return this;
}; //console.log(dizi.arrayIndexDelete("js")); // => (2)??['jquery', 'bootstrap']
//repeat:tekrar yapma
//join:string birle??tirme yapar
//console.log(new Array(4+1).join(1)); // => 1111 // +1 yazd??k ????nk?? indeks no 0'dan ba??l??yor
//string tekrar eden
//dizi ile ??al????mak gerekir


String.prototype.wordRepetition = function (m) {
  var repeat = new Array(m + 1).join(this); //m+1 yazd??k ????nk?? index 0'dan ba??lar. 

  return repeat;
}; //array ile yeni dizi olu??turduk ve join ile i??ine nesneyi ekledik
//this objeyi ifade eder
//join : dizileri string birle??tirme yapar
//concat ekleme yapar
//console.log("kelime".concat(" ").wordRepetition(2)); //=>kelime kelime
//Senkron: 
//Single threaded ??al??????r
//Senkron:ayn?? anda sadece 1 tane process ??al????mas??
// console.log("senkron 1.sat??r")
// var deneme=function(){
//   console.log("senkron 2.sat??r")
// }
//deneme(); // => senkron 1.sat??r
//    senkron 2.sat??r
//console.log("senkron 3.sat??r"); // => senkron 1.sat??r
//senkron 2.sat??r
//senkron 3.sat??r
//Asenkron: 
//setTimeout() bir i??lemin-fonksiyonun belli bir s??re sonunda ??al????mas??n?? sa??lar.
//console.log("asenkron 1.sat??r")


var asenkron = function asenkron() {
  setTimeout(function () {
    console.log("asenkron 2.sat??r");
  }, 4000); //bu k??s??m d??rt saniye sonra ??al??????r
}; //asenkron();
//console.log("asenkron 3.sat??r");
//asenkron 1.sat??r
//asenkron 3.sat??r
//asenkron 2.sat??r (4saniye sonra ??al????t??)
//ES3:Javascript: 1995
//ES5:Ecma-262 Edition(2009)
//ES5 ??zellikler
//1-) "use strict"; ES5 de kullanaca????m??z veriler, bu olmazsa olmaz.
//2-) built-in-constructor built-in-constructor
//3-) Array.isArray()
//4-) Array.forEach() ==> d??ng??
//5-) Array.filter()  ==> objeden istediklerimiz gelsin
//6-) Array.map()     ==> objelerdeki b??t??n datalara eri??mek
//7-) Array.indexOf() ==> istenilen indekse eri??mek
//8-) Array.lastOf()
//9-) JSON.parse()
//10-) JSON.stringifly()
//11-) Date.now()
//JS single-threaded yap??dad??r. Daha verimli olmay?? sa??lar.
//Normal
// function normal(){}
//ES5 (anonymous function)
// var es5=function(){}
//ES6 Arrow function
// var es6=()=>{}
//synchronous  (Senkron)  ==> s??ral?? bir ??ekilde devam ediyor
//asynchronous (Asenkron) ==> ayn?? andan birden fazla process ??al????mas??
//callback: bir fonksiyon ??al????mas??n?? tamamlad??ktan sonra ba??ka bir fonksiyonun ??al????mas??n?? sa??layan fonksiyonlara denir.
//1.??rnek
//1-Ad??m callback function yaz??l??r.
//2.Ad??m i??erdeki function yaz??l??r


function birinci(x1, x2, callback) {
  var multiple = x1 * x2;
  callback(multiple);
}

function ikinci(deger) {
  console.log(deger);
} //birinci(4,5,ikinci); // => 20
//callback:
//2.??rnek
//s??f??r(0) ba??lasun kullan??c??dan al??nan say??ya kadar d??ng??deki say??lardan ??ift olanlar?? ekranda g??steren callbackfunction yazal??m ?


function evenNumberArray(callback) {
  var evenArray = [];
  var pro = Number(prompt("L??tfen bir say?? giriniz"));

  for (var i = 0; i <= pro; i++) {
    if (i % 2 == 0) {
      evenArray.push(i); //push:ekleme yapar
    }
  }

  callback(evenArray);
}

function showMessage(data) {
  console.log(data);
} //evenNumberArray(showMessage); // => (4)??[0, 2, 4, 6]
//callback hell
//es5=> anonymous function kullan??l??r
//Anonymous Function


var es5Anonymous = function es5Anonymous() {
  console.log("ES5");
}; //D??Z?? ==> Map , Filter ,forEach
//dizinin i??inde nesneler olu??turduk


var product = [{
  productName: "Msi1",
  productPrice: 1000
}, {
  productName: "Msi2",
  productPrice: 2000
}, {
  productName: "Msi3",
  productPrice: 3000
}, {
  productName: "Msi4",
  productPrice: 4000
}]; //console.log(product); // => (4)??[{???}, {???}, {???}, {???}]
//Map(e??le??me):her bir elemana eri??im sa??lar

var es5Map = product.map(function (temp) {
  return temp.productName;
}); //console.log(es5Map); // => (4)??['Msi1', 'Msi2', 'Msi3', 'Msi4']
//Filter

var es5Filter = product.filter(function (temp) {
  return temp.productPrice >= 3000; // productPrice'i 3000 ve 3000'den b??y??k olanlar?? d??nd??r
}); //console.log(es5Filter); // => (2)??[{???}, {???}] // Msi3 ve Msi4 d??ner
//OBJECT ==> this , forEach

var person = {
  name: "Hamit",
  surname: "M??zrak",
  java: ["servlet", "Jsp", "JSF", "Spring MVC", "Spring Data", "Spring Security"],
  getJava: function getJava() {
    console.log("d????ardan ??a????rd??m " + this.name); //=> d????ardan ??a????rd??m Hamit
    //3.katmandan birinci katmana eri??emedi??imiz i??in tan??mlad??k

    var mecbur = this; //forEach:d??ng?? ??eklinde elemanlar?? listeler

    this.java.forEach(function (temp) {
      console.log(temp); // => servlet
      //    Jsp
      //    JSF
      //    Spring MVC
      //    Spring Data
      //    Security
      //3.katmandan birinci katmana eri??emedi??imiz i??in yukarda this tan??mlad??k art??k name'e eri??ebiliriz.
      //console.log(mecbur.name); // => Hamit
    });
  }
}; //person.getJava();
//ders14
//ES6
//ES6 ile var yerine art??k let kullan??l??yor
//template literal => ``
//ES6 ile arrow function geldi
//arrow function () => {}
//Immediate function (anonymous(){})()
//ES6(1) Variable
//(let-const)
//  var adi="Hamit";
//  let adi2="Hamit";
//  const adi4="Ankara";
//global scope

var adi = 'Hamit'; //Function(local) scope

function fullName() {
  var adi = 'Hamit444';
  var soyadi = 'M??zrak';
  console.log('function scope: ' + ' adi: ' + adi + ' soyad??: ' + soyadi);
} //fullName(); // => function scope:  adi: Hamit444 soyad??: M??zrak
//console.log("global Scope: adi ",adi); // => global Scope: adi  Hamit
//console.log("function Scope: soyadi ",soyadi); // => bir??ey d??nmez hata verir, ????nk?? soyadi local tan??mland??, d????arda ??a??r??lamaz.
//conditional Block(ko??ul blo??u)
// if(true){ // her zaman do??ru olursa ??al??????r
//   let yas=37;
//   console.log(yas); // => 37
// }
//ES6 (2) Literal 
//Template Literal: BackTick ==> ``
//1-) Multi-line
//2-) Interpolation
//3-) Html Templates
//1-) Multi-Line


var deneme = 'Merhabalar\nNas??ls??n??z'; //console.log(deneme); // => Merhabalar
//    Nas??ls??n??z

var deneme2 = "Merhabalar\nNas\u0131ls\u0131n\u0131z\nJS Kursu\n"; //console.log(deneme2); //=> Merhabalar
//                         Nas??ls??n??z
//                         JS Kursu
// 2.6 GHZ: Saniyede 2.6 Milyar toplama i??lemi yapar
//2-) Interpolation

var firstName = "Malatya";
var lastName = "Battalgazi"; //console.log("??l: "+firstName+ " ??l??e: "+lastName); //=>??l: Malatya ??l??e: Battalgaz
//console.log(`??l: ${firstName} ??l??e: ${lastName}`); //=>??l: Malatya ??l??e: Battalgaz

var student = {
  name: "Hamit",
  surname: "M??zrak"
}; //console.log(student.surname); // => M??zrak
//console.log(`${student.surname}`); // => M??zrak
//ES6(3) Function
//(Parametresiz Function)
//Normal

function deneme11() {
  console.log('Normal Function');
} // deneme11(); //=>Normal Function
//ES5


var deneme22 = function deneme22() {
  console.log('Anonymous Function'); //=>Anonymous Function
}; // deneme22();
//ES6


var deneme33 = function deneme33() {
  console.log('Arrow Function'); //=>Arrow Function
}; // deneme33();
//(Parametreli Function)
//Normal Parametreli


function deneme44(adi) {
  console.log('Normal Parametreli Function', adi);
} //deneme44("Kay??s??"); //=> Normal Parametreli Function Kay??s??
//Anonymous Parametreli


var deneme55 = function deneme55(adi) {
  console.log('Anonymous Function ', adi);
}; // deneme55("Kay??s?? Re??eli"); //=>//=>Anonymous Function Kay??s?? Re??eli
//Arrow Function Parametre
//e??er curl brackets kullanmazsak return kullanmam??za gerek yok


var deneme66 = function deneme66(x, y) {
  return x + y;
};

var value66 = deneme66(6, 4); // console.log(value66); //=>10
//examples
//benim g??nderdi??im veriyi b??y??k yazs??n

var upperValue = function upperValue(data) {
  return data.toUpperCase();
}; //console.log(upperValue("K??z??lay")); //=> KIZILAY
//e??er curl brackets yazarsam return kullan??lmal??


var deneme77 = function deneme77(x, y) {
  return x + y;
};

var value77 = deneme77(6, 4); // console.log(value77); //=> 10
//Immedia Function = ()();
//Immedia ??a????rmadan kullan??lan fonksiyondur.
//Self Invoking Function(Immedia Function) ==> kendi kendini ??a????ran functionlar
//Parametresiz
// (function deneme(){
//   console.log("??a????rmadan kullanaca????m Normal Function"); //=>??a????rmadan kullanaca????m Normal Function
// })(); 
// (function(){
//   console.log("??a????rmadan kullanaca????m Anonymous Function"); //=>??a????rmadan kullanaca????m Anonymous Function
// })();
// (()=>{
//   console.log("??a????rmadan kullanaca????m Arrow Function"); //=>??a????rmadan kullanaca????m Arrow Function
// })();
//Parametreli
// ((data)=>console.log(`Veri: ${data}`))("ES6"); //=>Veri: ES6
//Filter ES5,ES6

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //console.log(arr); //=>(9)??[1, 2, 3, 4, 5, 6, 7, 8, 9]
// let es5Filter=arr.filter();
//Filter ES5

var es5Filter44 = arr.filter(function (data) {
  return data % 2 == 1;
}); //console.log(es5Filter44); //=>(5)??[1, 3, 5, 7, 9]
//Filter ES6

var filterEs6 = arr.filter(function (data) {
  return data % 2 == 0;
}); //console.log(filterEs6); //=>(4)??[2, 4, 6, 8]

var product33 = [{
  proName: 'laptop-1',
  proPrice: 1000
}, {
  proName: 'laptop-2',
  proPrice: 2000
}, {
  proName: 'laptop-3',
  proPrice: 3000
}]; //ES6

var proPriceMap2 = product33.map(function (data) {
  return data.proPrice;
}); //console.log(proPriceMap2); //=>(3)??[1000, 2000, 3000]
//argument: fonksiyona gelen datalar??n hepsini almak i??in kullan??yoruz

var argumentData = function argumentData() {
  console.log(arguments);
}; //argumentData(5,6,3,9,"Veri"); //=>Arguments(5)??[5, 6, 3, 9, 'Veri', callee: (...), Symbol(Symbol.iterator): ??]
//ES5
//Class


var Stu = function Stu(adi, soyadi, yas) {
  //constructor
  this.adi = adi;
  this.soyadi = soyadi;
  this.yas = yas; //console.log(this);
};

var sonuc = new Stu("Hamit", "M??zrak", 37); //console.log(sonuc); //=>Stu??{adi: 'Hamit', soyadi: 'M??zrak', yas: 37}
//ES6 
//class

var PersonEs6 = /*#__PURE__*/function () {
  //parametreli constructor
  //parametreler bo?? olursa verdi??imiz default de??erler geri d??ner
  function PersonEs6() {
    var adi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ad??n?? girmediniz";
    var soyadi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "soyad??n?? girmediniz";
    var yas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, PersonEs6);

    this.adi = adi;
    this.soyadi = soyadi;
    this.yas = yas; //console.log('constructor ??al????t??');
  }

  _createClass(PersonEs6, [{
    key: "message",
    value: //metot
    function message(data) {
      return "message: ".concat(data, " : ad\u0131: ").concat(adi);
    }
  }]);

  return PersonEs6;
}(); // let sonuc2 = new classEs6()


var sonuc2 = new PersonEs6('Hamit', "M??zrak", 37); //console.log(sonuc2); //=>PersonEs6??{adi: 'Hamit', soyadi: 'M??zrak', yas: 37}
//console.log(sonuc2.message("Big Data 2556")); //=>message: Big Data 2556 : ad??: Hamit
//extends:(tamamen super classtan gelen datalar?? kullanmak)

var Teacher = /*#__PURE__*/function (_PersonEs) {
  _inherits(Teacher, _PersonEs);

  var _super = _createSuper(Teacher);

  function Teacher() {
    _classCallCheck(this, Teacher);

    return _super.apply(this, arguments);
  }

  return _createClass(Teacher);
}(PersonEs6);

var sonuc3 = new Teacher('Teacher Name', 'Teacher Surname', 37); //console.log(sonuc3); //=>Teacher??{adi: 'Teacher Name', soyadi: 'Teacher Surname', yas: 37}
//extends: anahtar kelime ile kal??t??m al??yoruz (kendimize ait ??zellik ekleyelim)
//tekrardan constructor yazmal??y??z
//super: bu metod kal??t??m al??nan s??n??f??n kurucusuna parametre ge??irmek i??in kullan??l??r.
//Bir nesne s??n??f??nda kal??t??m al??yorsak super metodunu eklemek zorunday??z.
//super anahtar kelimesini kullanarak kal??t??m al??nan nesneye ait metotlara ve ??zelliklere eri??ebiliriz.

var Teacher2 = /*#__PURE__*/function (_PersonEs2) {
  _inherits(Teacher2, _PersonEs2);

  var _super2 = _createSuper(Teacher2);

  //yeni ??zelli??i constructor'a ekledik
  function Teacher2() {
    var _this;

    var adi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ad??n?? girmediniz";
    var soyadi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "soyad??n?? girmediniz";
    var yas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var hescode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "hesCodes4521xc";

    _classCallCheck(this, Teacher2);

    _this = _super2.call(this, adi, soyadi, yas); //??st atadan gelen ??zellikler

    _this.hescode = hescode; // yeni edindi??i ??zellik

    return _this;
  }

  _createClass(Teacher2, [{
    key: "dataChangeExtends",
    value: function dataChangeExtends(data) {
      return "data: ".concat(data, " Ad\u0131:").concat(this.adi, "  Soyad\u0131:").concat(this.soyadi, "  Ya\u015F:").concat(this.yas, "  HesCode:").concat(this.hescode, " ");
    }
  }]);

  return Teacher2;
}(PersonEs6);

var sonuc4 = new Teacher2('Teacher Name4', 'Teacher Surname4', 34, "HesCodeXYZ4"); //console.log(sonuc4);

console.log(sonuc4.dataChangeExtends("yeni")); //=>data: yeni Ad??:Teacher Name4  Soyad??:Teacher Surname4  Ya??:34  HesCode:HesCodeXYZ4 
//callback()  ==> ES5
//promise()   ==> ES6
//async/await ==> ES7
//ders-15
//ES6
//class
// class Teacher{
//constructor
//   constructor(){}
//metot
//   deneme(){}
// }

var Teacher1 = /*#__PURE__*/function () {
  //constructor
  function Teacher1() {
    var adi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default adi";
    var soyadi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default soyadi";

    _classCallCheck(this, Teacher1);

    this.adi = adi;
    this.soyadi = soyadi; //console.log("ilk constructor ??al????t??");
  } //metot


  _createClass(Teacher1, [{
    key: "fullName",
    value: function fullName(data) {
      return "adi: ".concat(this.adi, " soyadi: ").concat(this.adi);
    }
  }]);

  return Teacher1;
}(); //2.class


var TeacherRoom = /*#__PURE__*/function (_Teacher) {
  _inherits(TeacherRoom, _Teacher);

  var _super3 = _createSuper(TeacherRoom);

  function TeacherRoom() {
    _classCallCheck(this, TeacherRoom);

    return _super3.apply(this, arguments);
  }

  return _createClass(TeacherRoom);
}(Teacher1); //3.class


var TeacherSpecialRoom = /*#__PURE__*/function (_Teacher2) {
  _inherits(TeacherSpecialRoom, _Teacher2);

  var _super4 = _createSuper(TeacherSpecialRoom);

  function TeacherSpecialRoom() {
    var _this2;

    var adi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default adi";
    var soyadi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default soyadi";
    var okulKodu = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Xyx126558";

    _classCallCheck(this, TeacherSpecialRoom);

    //ata class'??n bile??enleri
    _this2 = _super4.call(this, adi, soyadi); //kal??t??m alan class'??n yeni bile??eni

    _this2.okulKodu = okulKodu; // console.log("XYz>ilk constructor ??al????t??");

    return _this2;
  }

  return _createClass(TeacherSpecialRoom);
}(Teacher1); // let teachInstance=new Teacher1(); //arg??man vermezsek default de??erler d??ner


var teachInstance = new Teacher1("Hamit", "M??zrak"); //console.log(teachInstance); //=> {adi: 'Hamit', soyadi: 'M??zrak'}

var teachRoomInstance = new TeacherRoom("Hamit", "M??zrak"); //ata class'dan kal??t??mlad??k ama yeni ??zellik eklemedik
// console.log(teachRoomInstance); //=> {adi: 'Hamit', soyadi: 'M??zrak'}

var teachRoomSpecialInstance = new TeacherSpecialRoom("Hamit", "M??zrak", "mnp5263"); //ata class'dan kal??t??mlad??k ve yeni ??zellikde ekledik
//console.log(teachRoomSpecialInstance); //=>{adi: 'Hamit', soyadi: 'M??zrak', okulKodu: 'mnp5263'}
//rest parameter: Dinamik bir dizidir.(Reactta yoktur)
//...degiskenAdi ??eklinde yaz??l??r.
//Parametre s??n??r?? yoktur, ka?? arg??man verilirse onlar?? i??leme sokar.
//normal

function normalFunction(x, y) {
  return x + y;
} //console.log(normalFunction(1,2,3,4)); //=>3 (1+2)
//rest-1


function restFunction(x, y) {
  //console.log(data);
  console.log(x + y + (arguments.length <= 2 ? undefined : arguments[2]) + (arguments.length <= 3 ? undefined : arguments[3]) + (arguments.length <= 4 ? undefined : arguments[4]));
} //restFunction(1,2,3,4,5); //=>15
//rest-2


function restFunction2() {
  var sum = 0;

  for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
    data[_key] = arguments[_key];
  }

  for (var _i = 0, _data = data; _i < _data.length; _i++) {
    var temp = _data[_i];
    sum += temp;
  }

  return sum;
} //console.log(restFunction2(1,2,3,4,5,6,7,8,9,10)); //=>55
//destructuring(Var olan bir ??eyin ??eklini bozmak(iyi anlamda).) AMA??: daha okunabilir clean kodlar yazmak
//Gelen yap??lar?? diziye atar.
//destructuring assigment ==> []=[];   ==> ({}={})
//normal


var x, y, z;
x = 1;
y = 2;
z = 3; //console.log(x,y,z); //=> 1 2 3
//1.YOL

x = 4;
y = 5;
z = 6;
var _x$y$z = {
  x: 7,
  y: 8,
  z: 9
};
x = _x$y$z.x;
y = _x$y$z.y;
z = _x$y$z.z;
//console.log(x,y,z); //=>7 8 9
//destructuring array ==> const []=diziAdi
var portData = ["8080", "5500", "3306", "5432"]; //1.YOL

var localhost = portData[0];
var liveServer = portData[1];
var mysql = portData[2];
var postgresql = portData[3]; // console.log(
//   `
//   localhost: ${localhost}  
//   live-server: ${liveServer}  
//   mysql: ${mysql}  
//   postgresql: ${postgresql}  
//   `
//   ); 
// ????kt??s?? =>   localhost: 8080  
//              live-server: 5500  
//              mysql: 3306  
//              postgresql: 5432 
//2.YOL

var localhost2 = portData[0],
    liveServer2 = portData[1],
    mysql2 = portData[2],
    postgresql2 = portData[3]; // console.log(
//   `
//   localhost: ${localhost2}  
//   live-server: ${liveServer2}  
//   mysql: ${mysql2}  
//   postgresql: ${postgresql2}  
//   `
//   )
//destructuring object  ==> const {}=objectAdi
//normal

var person44 = {
  adi1: "Hamit",
  soyadi1: "M??zrak",
  meslek1: "BM"
}; //console.log(person44);
//console.log(person44.adi1);
//console.log(person44.soyadi1);
//console.log(person44.meslek1);

var adi1 = person44.adi1,
    soyadi1 = person44.soyadi1,
    meslek1 = person44.meslek1; //console.log(adi1+" "+soyadi1,meslek1); //=>Hamit M??zrak BM
