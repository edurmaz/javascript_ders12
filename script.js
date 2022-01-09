// Document Object Model DOM 

//defer önce html yükle sonra js yi yükle komutu 
//<script src="ex.js" defer></script> şeklinde yazılıyor.

// async aynı anda html ve js i yükleme yapılan işlemler.
//<script src="ex.js" async></script> şeklinde yazılıyor.


// js document dediğimiz zaman bütün html yi kapsamış oluyoruz.
// body e ulaşmak için document.body yazabiliriz. object denmesinin sebebi object gibi kabul ediyor.
// Elemanlarına ulaşmak için document. şeklinde ulaşıyoruz.

// document selector.
console.log(document) // Bu şekilde bütün documenti yazdırıyoruz.

// tag'a, class'a ve id'ye göre eleman çekebiliyoruz. projedeki elemanların durumuna göre belirliyoruz.


//Id ile ulaşma.
// tek sonuç verir.
let firstH1 =document.getElementById("first-title")  //ilk erişme noktamız. Id yi string olarak parantez içine yazıyoruz.
console.log(firstH1) // yazdırdığımızda bütün hepsini veriyor açılış kapanış tagleriyle beraber veriyor.
console.log(firstH1.innerHTML)  // taglerle beraber alıyor.
console.log(firstH1.innerText)  // sadece textleri yazdırıyor.

//class ile ulaşma.
let allH1 = document.getElementsByClassName("title")  // ya object yada array döner sebebi ise claslar birden fazla öğe içerebilir.
console.log(allH1) // bize tüm h1 lerden oluşan array döndü.
console.log(allH1[0].innerText)  // bu şekilde bilinen bir indexi çağırıyoruz.

for (let i = 0; i < allH1.length; i++) {  // bu şekilde allH1'in içindeki tüm elemanları döndürebiliyoruz.
    console.log(allH1[i].innerText)
    
}

// tagname ile ulaşma

let allTagH1 = document.getElementsByTagName("h1")
console.log(allTagH1)

for (let i = 0; i < allTagH1.length; i++) {  // bu şekilde allH1'in içindeki tüm elemanları döndürebiliyoruz.
    console.log(allTagH1[i].innerText)
    
} // dikkat etmemiz gereken id de bize direk olarak spesifik elemanı veriyor array'siz veriyor diğerlerinde array'li olarak yazdırıyor.

// query selectorAll..
// artı olarak genel bir tanımlama içerisine farklı elemanlar koyup çağırabiliriz.
// quert selectorun içerisinde çağıracaksak yazacağımız etiket neyse o şekilde çağırıyoruz.
// Burada bulduğu bütün itemleri döndürüyor.

const queryH1class = document.querySelectorAll(".title")// Id'de dezavantajı tek bir elemanı array olarak vermesi.
console.log(queryH1class)

const queryH1Id = document.querySelectorAll("#first-title")
console.log(queryH1Id)

const queryH1Tag = document.querySelectorAll("h1")
console.log(queryH1Tag)

const queryH1Span = document.querySelectorAll("h1 span") // css de ki seçim mantığını uyguluyoruz
console.log(queryH1Span)

// querySellector
// Sadece ilk bulduğu elemanı getiriyor.

const queryH1ClassFirst = document.querySelector(".title")  // arraysiz olarak yazdırıyor.
console.log(queryH1ClassFirst)

//querySelectorAll bütün elemanları array olarak getiriyor. querySelector ise sadece 1 tane eleman getiriyor.

// array olarak geldiği için ona göre işlem yapacağız.

let firstItem = document.getElementById("first-title")
firstItem.innerHTML = "değiştirdim"  // bu şekilde html içinde değişiklikler yapabiliyoruz. object gibi değişim yapabiliyoruz.
console.log(firstItem)   //innerHtml yazdığımız zaman etiketleri görmüyor.

// innerHTML ile bir elemanın içerisine tag de ekleyebiliyoruz.

let center = document.querySelector(".center")   //center classı içine 2 tane içerik ekledik.
center.innerHTML ="<li>secondory</li><li>thirty</li>"   // Buradan HTML içine değiştirme ve ekleme yapabiliyoruz.
console.log(center.innerHTML)

let searchInput = document.getElementById("search")


searchInput.style["border-color"] = "red"   // buradan html içine yoksa css kodları ekleyebiliyoruz. varsa da değiştirebiliyoruz.
console.log(searchInput.style.border)    // style başladğımız herşeyi değiştirebiliyoruz.
