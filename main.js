alumnos=[];

function sumbit(){
    var alumno1 = document.getElementById("nombre1").value;
    var alumno2 = document.getElementById("nombre2").value;
    var alumno3 = document.getElementById("nombre3").value;
    var alumno4 = document.getElementById("nombre4").value;
    
    alumnos.push(nombre1);
    alumnos.push(nombre2);
    alumnos.push(nombre3);
    alumnos.push(nombre4);
    
    document.getElementById("ver_nombre").innerHTML=alumnos;
}
