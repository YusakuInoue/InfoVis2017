
AreaOfTriangle=function(v0,v1,v2){
    var vdash0=new vec3(0,0,0);
    var vdash1=new vec3(0,0,0);
    vdash0=v0.sub(v1);
    vdash1=v0.sub(v2);
    var S=Math.sqrt(Math.pow(vdash0.norm(),2)*Math.pow(vdash1.norm(),2)-Math.pow(vdash0.naiseki(vdash1),2))/2
    return S;
}
