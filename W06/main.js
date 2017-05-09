function main()
{
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
	[-1, 1, 1],
	[-1, -1, 1],
	[1, -1, 1],
	[1, 1, 1],
	[-1, 1, -1],
	[-1, -1, -1],
	[1, -1, -1],
	[1, 1, -1]
    ];

    var faces = [
	[0, 1, 2],
	[0, 1, 5],
	[0, 2, 3],
	[0, 3, 4],
	[0, 4, 5],
	[1, 2, 6],
	[1, 5, 6],
	[2, 3, 7],
	[2, 6, 7],
	[3, 7, 4],
	[4, 6, 5],
	[4, 7, 6]
    ];
    
    var vec = [];
    for (var i=0; i<8; i++){
	vec[i] = new THREE.Vector3().fromArray(vertices[i]);
    }
    
    var f = [];
    var id;
    for(var i=0; i<12; i++){
	    id = faces[i];
	    f[i] = new THREE.Face3(id[0], id[1], id[2]);
    }
    
    var geometry = new THREE.Geometry();
    for(var i=0; i<8; i++){
	    geometry.vertices.push(vec[i]);
    }
    for(var i=0; i<12; i++){
	    geometry.faces.push(f[i]);
    }
 
    var material = new THREE.MeshBasicMaterial();
    material.vertexColors = THREE.FaceColors;
  
    geometry.faces[0].color = new THREE.Color(0,0,1);
    geometry.faces[0].color = new THREE.Color(0,1,1);
    geometry.faces[0].color = new THREE.Color(0,1,0);
    geometry.faces[0].color = new THREE.Color(0,0,0);
    geometry.faces[0].color = new THREE.Color(1,0,1);
    geometry.faces[0].color = new THREE.Color(1,0,0);
    geometry.faces[0].color = new THREE.Color(1,1,1);
    geometry.faces[0].color = new THREE.Color(1,1,0);
    geometry.faces[0].color = new THREE.Color(0,0,1);
    geometry.faces[0].color = new THREE.Color(1,0,1);
    geometry.faces[0].color = new THREE.Color(1,1,0);
    geometry.faces[0].color = new THREE.Color(0,1,0);
   

    geometry.computeFaceNormals();

    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    var light = new THREE.DirectionalLight(0xF4FA58);
    light.position.set(10,10,10);
    scene.add(light);

    

    loop();
    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;
        renderer.render( scene, camera );
    }
}
