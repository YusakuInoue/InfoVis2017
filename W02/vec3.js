
vec3=function(x,y,z){
    this.x=x;
    this.y=y
    this.z=z;
}

vec3.prototype.add=function(v){
    this.x+=v.x;
    this.y+=v.y;
    this.z+=v.z;
    return this;
}

vec3.prototype.sub=function(v){
    this.x-=v.x;
    this.y-=v.y;
    this.z-=v.z;
    return this;
}

vec3.prototype.sum=function(){
    return this.x+this.y+this.z;
}
vec3.prototype.min =function(){
    if(this.x<this.y && this.x<this.z){
	return this.x;
    }
    else if(this.y<this.x && this.y<this.z){
	return this.y;
    }
    else{
	return this.z;
    }
}

vec3.prototype.max=function(){
    if(this.x>this.y && this.x>this.z){
	return this.x;
    }
    else if(this.y>this.x && this.y>this.z){
	return this.y;
    }
    else{
	return this.z;
    }
}

vec3.prototype.mid=function(){
    return this.sum() - this.max() - this.min();
}

vec3.prototype.norm=function(){
    var nakami= Math.pow(this.x,2)+Math.pow(this.y,2)+Math.pow(this.z,2);
    return Math.sqrt(nakami);
}

vec3.prototype.naiseki=function(v){
    a=this.x*v.x+this.y*v.y+this.z*v*z;
    return a;
}


vec3.prototype.AreaOfTriangle=function(v0,v1){
    vdash0=this.sub(v0);
    vdash1=this.sub(v1);
    var S=Math.sqrt(Math.pow(vdash0.norm(),2)*Math.pow(vdash1.norm(),2)-Math.pow(vdash0.naiseki(vdash1),2))/2
    return S;
}


