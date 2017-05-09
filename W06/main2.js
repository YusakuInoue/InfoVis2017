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
    for(var i=0; i<12; i++){
	    geometry.faces[i].color = new THREE.Color(1,1,1);
    }

    geometry.computeFaceNormals();

    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    var light = new THREE.DirectionalLight(0xF4FA58);
    light.position.set(10,10,10);
    scene.add(light);

    document.addEventListener('mousedown', mouse_down_event);
    function mouse_down_event(event) {
        var x_win = event.clientX;
        var y_win = event.clientY;

        var vx = renderer.domElement.offsetLeft;
        var vy = renderer.domElement.offsetTop;
        var vw = renderer.domElement.width;
        var vh = renderer.domElement.height;

        var x_NDC = 2*(x_win - vx)/vw-1;
        var y_NDC = -(2*(y_win -vy)/vh-1);

        var p_NDC = new THREE.Vector3(x_NDC,y_NDC,1);
        p_NDC.unproject(camera);

        var origin = camera.position;
        var direction = p_NDC.sub(camera.position).normalize();

        var raycaster = new THREE.Raycaster(origin, direction);
        var intersects = raycaster.intersectObjects(scene.children);
        if(intersects.length>0){
            var color = intersects[0].face.color;
            if(color.r==1&&color.g==1&&color.b==1) {
                color.setRGB(1, 1, 0);
                intersects[0].object.geometry.colorsNeedUpdate = true;
            }else{
                color.setRGB(0, 1, 1);
                intersects[0].object.geometry.colorsNeedUpdate = true;
            }
        }
    }

    loop();
    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;
        renderer.render( scene, camera );
    }
}
