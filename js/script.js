function plus() {
    let pole1=document.getElementById('n1'),
        pole2=document.getElementById('n2'),
        pole3=document.getElementById('otvet');



    pole3.value= parseFloat(pole1.value)+parseFloat(pole2.value);




}

function minus() {
    let pole1=document.getElementById('n1'),
        pole2=document.getElementById('n2'),
        pole3=document.getElementById('otvet');

    pole3.value=parseFloat(pole1.value)-parseFloat(pole2.value);
}

function umnoj() {
    let pole1=document.getElementById('n1'),
        pole2=document.getElementById('n2'),
        pole3=document.getElementById('otvet');

    pole3.value=parseFloat(pole1.value)*parseFloat(pole2.value);
}

function delenie() {
    let pole1=document.getElementById('n1'),
        pole2=document.getElementById('n2'),
        pole3=document.getElementById('otvet');

    pole3.value=parseFloat(pole1.value)/parseFloat(pole2.value);
}














