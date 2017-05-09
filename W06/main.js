function main(){
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );
    
    var vertices = [
	[-1,1,1],
	[-1,-1,1],
	[1,-1,1],
	[1,1,1],
	[-1,1,-1],
	[-1,-1,-1],
	[1,-1,-1],
	[1,1,-1]
    ];
   
    var faces = [[0,1,2]];
  
  var v0 = new THREE.Vector3().fromArray( vertices[0] );
  var v1 = new THREE.Vector3().fromArray( vertices[1] );
    var v2 = new THREE.Vector3().fromArray( vertices[2] );
    var v3 = new THREE.Vector3().fromArray( vertices[3] );
  var v4 = new THREE.Vector3().fromArray( vertices[4] );
  var v5 = new THREE.Vector3().fromArray( vertices[5] );
  var v6 = new THREE.Vector3().fromArray( vertices[6] );
    var v7 = new THREE.Vector3().fromArray( vertices[7] );
    
  var id = faces[0];
    var f0 = new THREE.Face3(id[0],id[1],id[2])
  var geometry1 = new THREE.Geometry();
  geometry1.vertices.push(v0);
  geometry1.vertices.push(v1);
    geometry1.vertices.push(v2);
    geometry1.faces.push(f0);
    var material1 = new THREE.MeshBasicMaterial({color : 0x001100})
    material1.vartexColors = THREE.FaceColors;
    material1.side=THREE.DoubleSide;
    tri1 = new THREE.Mesh(geometry1,material1);
    scene.add(tri1)

    
     var geometry2 = new THREE.Geometry();
  geometry2.vertices.push(v2);
  geometry2.vertices.push(v3);
    geometry2.vertices.push(v0);
    geometry2.faces.push(f0);
    var material2 = new THREE.MeshBasicMaterial({color : 0xdddddd})
    material2.vartexColors = THREE.FaceColors;
    material2.side=THREE.DoubleSide;
    tri2 = new THREE.Mesh(geometry2,material2);
    scene.add(tri2)
    
     var geometry3 = new THREE.Geometry();
  geometry3.vertices.push(v4);
  geometry3.vertices.push(v5);
    geometry3.vertices.push(v6);
    geometry3.faces.push(f0);
    var material3 = new THREE.MeshBasicMaterial({color : 0xeeeeee})
    material3.vartexColors = THREE.FaceColors;
    material3.side=THREE.DoubleSide;
    tri3 = new THREE.Mesh(geometry3,material3);
    scene.add(tri3)
  

     var geometry4 = new THREE.Geometry();
  geometry4.vertices.push(v6);
  geometry4.vertices.push(v7);
    geometry4.vertices.push(v4);
    geometry4.faces.push(f0);
    var material4 = new THREE.MeshBasicMaterial({color : 0x111001})
    material4.vartexColors = THREE.FaceColors;
    material4.side=THREE.DoubleSide;
    tri4 = new THREE.Mesh(geometry4,material4);
    scene.add(tri4)

     var geometry5 = new THREE.Geometry();
  geometry5.vertices.push(v0);
  geometry5.vertices.push(v4);
    geometry5.vertices.push(v5);
    geometry5.faces.push(f0);
    var material5 = new THREE.MeshBasicMaterial({color : 0x000011})
    material5.vartexColors = THREE.FaceColors;
    material5.side=THREE.DoubleSide;
    tri5 = new THREE.Mesh(geometry5,material5);
    scene.add(tri5)

     var geometry6 = new THREE.Geometry();
  geometry6.vertices.push(v5);
    geometry6.vertices.push(v1);
    geometry6.vertices.push(v0);
    geometry6.faces.push(f0);
    var material6 = new THREE.MeshBasicMaterial({color : 0x101010})
    material6.vartexColors = THREE.FaceColors;
    material6.side=THREE.DoubleSide;
    tri6 = new THREE.Mesh(geometry6,material6);
    scene.add(tri6)

     var geometry7 = new THREE.Geometry();
  geometry7.vertices.push(v3);
  geometry7.vertices.push(v2);
    geometry7.vertices.push(v6);
    geometry7.faces.push(f0);
    var material7 = new THREE.MeshBasicMaterial({color : 0xdddddd})
    material7.vartexColors = THREE.FaceColors;
    material7.side=THREE.DoubleSide;
    tri7 = new THREE.Mesh(geometry7,material7);
    scene.add(tri7)

     var geometry8 = new THREE.Geometry();
  geometry8.vertices.push(v6);
  geometry8.vertices.push(v7);
    geometry8.vertices.push(v3);
    geometry8.faces.push(f0);
    var material8 = new THREE.MeshBasicMaterial({color : 0xdd00dd})
    material8.vartexColors = THREE.FaceColors;
    material8.side=THREE.DoubleSide;
    tri8 = new THREE.Mesh(geometry8,material8);
    scene.add(tri8)

     var geometry9 = new THREE.Geometry();
  geometry9.vertices.push(v0);
  geometry9.vertices.push(v5);
    geometry9.vertices.push(v7);
    geometry9.faces.push(f0);
    var material9 = new THREE.MeshBasicMaterial({color : 0xcccccc})
    material9.vartexColors = THREE.FaceColors;
    material9.side=THREE.DoubleSide;
    tri9 = new THREE.Mesh(geometry9,material9);
    scene.add(tri9)

     var geometry10 = new THREE.Geometry();
  geometry10.vertices.push(v7);
  geometry10.vertices.push(v4);
    geometry10.vertices.push(v0);
    geometry10.faces.push(f0);
    var material10 = new THREE.MeshBasicMaterial({color : 0xbbbbbb})
    material10.vartexColors = THREE.FaceColors;
    material10.side=THREE.DoubleSide;
    tri10 = new THREE.Mesh(geometry10,material10);
    scene.add(tri10)

     var geometry11 = new THREE.Geometry();
  geometry11.vertices.push(v1);
  geometry11.vertices.push(v2);
    geometry11.vertices.push(v6);
    geometry11.faces.push(f0);
    var material11 = new THREE.MeshBasicMaterial({color : 0xaaaaaa})
    material11.vartexColors = THREE.FaceColors;
    material11.side=THREE.DoubleSide;
    tri11 = new THREE.Mesh(geometry11,material11);
    scene.add(tri11)

     var geometry12 = new THREE.Geometry();
  geometry12.vertices.push(v6);
  geometry12.vertices.push(v5);
    geometry12.vertices.push(v1);
    geometry12.faces.push(f0);
    var material12 = new THREE.MeshBasicMaterial({color : 0xf11fff})
    material12.vartexColors = THREE.FaceColors;
    material12.side=THREE.DoubleSide;
    tri12 = new THREE.Mesh(geometry12,material12);
    scene.add(tri12)

    var light = new THREE.SpotLight(0xff00ff,10.0); 
    light.position.set(1,1,1);
    scene.add(light);
   
    

    
    geometry1.computeFaceNormals();
    geometry1.computeVertexNormals();
     geometry2.computeFaceNormals();
    geometry2.computeVertexNormals();
     geometry3.computeFaceNormals();
    geometry3.computeVertexNormals();
     geometry4.computeFaceNormals();
    geometry4.computeVertexNormals();
     geometry5.computeFaceNormals();
    geometry5.computeVertexNormals();
     geometry6.computeFaceNormals();
    geometry6.computeVertexNormals();
     geometry7.computeFaceNormals();
    geometry7.computeVertexNormals();
     geometry8.computeFaceNormals();
    geometry8.computeVertexNormals();
     geometry9.computeFaceNormals();
    geometry9.computeVertexNormals();
     geometry10.computeFaceNormals();
    geometry10.computeVertexNormals();
     geometry11.computeFaceNormals();
    geometry11.computeVertexNormals();
     geometry12.computeFaceNormals();
    geometry12.computeVertexNormals();
    

    loop();
    function loop()
    {
        requestAnimationFrame( loop );
        tri1.rotation.x += 0.005;
        tri1.rotation.y += 0.005;
	tri2.rotation.x += 0.005;
        tri2.rotation.y += 0.005;
	tri3.rotation.x += 0.005;
        tri3.rotation.y += 0.005;
	tri4.rotation.x += 0.005;
        tri4.rotation.y += 0.005;
	tri5.rotation.x += 0.005;
        tri5.rotation.y += 0.005;
	tri6.rotation.x += 0.005;
        tri6.rotation.y += 0.005;
	tri7.rotation.x += 0.005;
        tri7.rotation.y += 0.005;
	tri8.rotation.x += 0.005;
        tri8.rotation.y += 0.005;
	tri9.rotation.x += 0.005;
        tri9.rotation.y += 0.005;
	tri10.rotation.x += 0.005;
        tri10.rotation.y += 0.005;
	tri11.rotation.x += 0.005;
        tri11.rotation.y += 0.005;
	tri12.rotation.x += 0.005;
        tri12.rotation.y += 0.005;
        renderer.render( scene, camera );
    }
}
