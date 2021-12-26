//**************NOT ORTALAMASI HESAPLAMA */


var ogrencivize = 30;
var ogrencifinal = 40;
var ortalama  =(ogrencivize * 0.3) + (ogrencifinal * 0.7);

if(ortalama >= 0 && ortalama <=30){
    document.write("not ortalamanız : " + ortalama + "kaldınız.");
}
else if(ortalama >=31 && ortalama <=49){
    document.write("not ortalamanız :" + ortalama + "koşullu geçtiniz");
}
else if(ortalama >= 50 && ortalama <=84){
    document.write("not ortalamanız :" + ortalama + "geçtiniz");
}
else if(ortalama >=85 && ortalama <= 100){
    document.write("not ortalamanız :" + ortalama + "bravo");
}
