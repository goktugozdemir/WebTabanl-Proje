//İLk başta sonsuz koşma oyunu olacaktı ama ekranın haraketini sağlayamadım.
//Son durum olarak buna döndü ama hitboxlar baya bozuk.
//Hem karakter hem engel haraket ettiği için bir şeyin öldürmesi için pixel perfect denk gelmesi lazım.
//Hem x hem y eksenine göre bakmayı deneyince daha da denk gelmez oldu.
//O yüzden sadece y eksenini kontrol ediyor.

var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
document.addEventListener("keydown",bas);

var karakter, puan=0, ölüm, engel;
var l=3;

var karakter = new Image();
var bg = new Image();
var fg = new Image();
var ölüm = new Image();
var engel= new Image();

karakter.src = "görüntü/karakter.png";
bg.src = "görüntü/bg.png";
fg.src = "görüntü/fg.png";
ölüm.src = "görüntü/ölüm.png";
engel.src="görüntü/engel.png";

var yy=-50;//yaratık konum
var kx=500;//karakter yer
var ky=410;//karakter yer
var yercekimi=2;
var müzik = new Audio();
var e = [];
e[0] = {
    x : 1500,
    y :  Math.floor(Math.random()*350)
};
müzik.src = "ses/müzik.wav";



		


function bas(a) {

    switch(a.keyCode) {

case 37:

          kx-=30;

            break;
			
			
			case 38:

          yercekimi=(-1)*(yercekimi);

            break;



        case 39:

          kx+=30;

            break;

       

    }
}


function çiz(){
    
ctx.drawImage(bg,0,0);
ctx.drawImage(fg,0,cvs.height - fg.height);
ctx.drawImage(ölüm,yy,+15);
ctx.drawImage(karakter,kx,ky);
ky+=yercekimi;
müzik.play();

for(var i = 0; i < e.length; i++){
ctx.drawImage(engel,e[i].x,e[i].y);
e[i].x=e[i].x-l;
for(var q=0; q < e.length; q++){
if((ky==e[q].y)){
	 location.reload();
}
}
if( e[i].x == 900 ){
e.push({
x : 1500,
y :  Math.floor(Math.random()*350)
});
puan+=1;
if(puan/2==1)
	l=l+2;
}

}

		

if((ky)>=(410)){
	ky=410;
}

if((kx+karakter.width)<=(yy+ölüm.width)){
	 location.reload();
}



if((kx+karakter.width)>=(1500)){
	 location.reload();
}

if((ky)<=(0)){
	 location.reload();
}

ctx.fillStyle = "#FF0000";
ctx.font = "20px arial black";
ctx.fillText("Score : "+puan,10,cvs.height-20);



requestAnimationFrame(çiz);
}

çiz();






      