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

    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    scene.add( light );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var vertices1 = [
        [ -1,  1, 0 ], // 0
        [ -1, -1, 0 ], // 1
        [  1, -1, 0 ]  // 2
    ];

    var faces1 = [
        [ 0, 1, 2 ], // f0
    ];

    var scalars1 = [
        0,   // S0
        128, // S1
        255  // S2
    ];

    // Create color map
    var cmap = [];
    for ( var i = 0; i < 256; i++ )
    {
        var S = i / 255 ; // [0,1]
        var R = Math.max( Math.cos( ( S - 1.0 ) * Math.PI ), 1.0 );
        var G = Math.max( Math.cos( ( S - 0.1 ) * Math.PI ), 0.0 );
        var B = Math.max( Math.cos( ( S - 0.1 ) * Math.PI ), 0.0 );
        var color = new THREE.Color( R, G, B );
        cmap.push( [ S, '0x' + color.getHexString() ] );
    }

    // Draw color map
    var lut = new THREE.Lut( 'rainbow', cmap.length );
    lut.addColorMap( 'mycolormap', cmap );
    lut.changeColorMap( 'mycolormap' );
    scene.add( lut.setLegendOn( {
        'layout':'horizontal',
        'position': { 'x': 0.6, 'y': -1.1, 'z': 2 },
        'dimensions': { 'width': 0.15, 'height': 1.2 }
    } ) );

    var geometry1 = new THREE.Geometry();
    var material1 = new THREE.MeshBasicMaterial();

    var nvertices1 = vertices1.length;
    for ( var i = 0; i < nvertices1; i++ )
    {
        var vertex1 = new THREE.Vector3().fromArray( vertices1[i] );
        geometry1.vertices.push( vertex1 );
    }

    var nfaces1 = faces1.length;
    for ( var i = 0; i < nfaces1; i++ )
    {
        var id = faces1[i];
        var face = new THREE.Face3( id[0], id[1], id[2] );
        geometry1.faces.push( face );
    }

    // Assign colors for each vertex
    material1.vertexColors = THREE.VertexColors;
    for ( var i = 0; i < nfaces1; i++ )
    {
        var id = faces1[i];
        var S0 = scalars1[ id[0] ];
        var S1 = scalars1[ id[1] ];
        var S2 = scalars1[ id[2] ];
        var C0 = new THREE.Color().setHex( cmap[ S0 ][1] );
        var C1 = new THREE.Color().setHex( cmap[ S1 ][1] );
        var C2 = new THREE.Color().setHex( cmap[ S2 ][1] );
        geometry1.faces[i].vertexColors.push( C0 );
        geometry1.faces[i].vertexColors.push( C1 );
        geometry1.faces[i].vertexColors.push( C2 );
    }

    var triangle1 = new THREE.Mesh( geometry1, material1 );
    scene.add( triangle1 );

/////

    var vertices2 = [
        [  1,  1, 0 ], // 0
        [ -1,  1, 0 ], // 1
        [  1, -1, 0 ]  // 2
    ];

    var faces2 = [
        [ 0, 1, 2 ], // f0
    ];

    var scalars2 = [
        128,   // S0
        0, // S1
        255  // S2
    ];

    var geometry2 = new THREE.Geometry();
    var material2 = new THREE.MeshBasicMaterial();

    var nvertices2 = vertices2.length;
    for ( var i = 0; i < nvertices2; i++ )
    {
        var vertex2 = new THREE.Vector3().fromArray( vertices2[i] );
        geometry2.vertices.push( vertex2 );
    }

    var nfaces2 = faces2.length;
    for ( var i = 0; i < nfaces2; i++ )
    {
        var id = faces2[i];
        var face2 = new THREE.Face3( id[0], id[1], id[2] );
        geometry2.faces.push( face2 );
    }

    // Assign colors for each vertex
    material2.vertexColors = THREE.VertexColors;
    for ( var i = 0; i < nfaces2; i++ )
    {
        var id = faces2[i];
        var S0 = scalars2[ id[0] ];
        var S1 = scalars2[ id[1] ];
        var S2 = scalars2[ id[2] ];
        var C0 = new THREE.Color().setHex( cmap[ S0 ][1] );
        var C1 = new THREE.Color().setHex( cmap[ S1 ][1] );
        var C2 = new THREE.Color().setHex( cmap[ S2 ][1] );
        geometry2.faces[i].vertexColors.push( C0 );
        geometry2.faces[i].vertexColors.push( C1 );
        geometry2.faces[i].vertexColors.push( C2 );
    }

    var triangle2 = new THREE.Mesh( geometry2, material2 );
    scene.add( triangle2 );

//////

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        renderer.render( scene, camera );
    }
}
