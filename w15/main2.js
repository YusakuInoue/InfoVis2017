(function($){
	var width = 640;  
	var height = 480; 
	var scene,camera,renderer,controls,geoObj,mesh;
	 
	function main(){
		if(!Detector.webgl)Detector.addGetWebGLMessage();//WebGL���m�F
		var gui = new dat.GUI();
		scene = new THREE.Scene();
 
		// �J����:�������e
		camera = new THREE.PerspectiveCamera( 60, width/height, 0.001, 2000);
		scene.add(camera);
		camera.position.set( 0, 20, 40);
 
		// �����_���[
		renderer = new THREE.WebGLRenderer({antialias: true});
		renderer.setSize(width,height);
		renderer.setPixelRatio( window.devicePixelRatio);
		renderer.shadowMap.enabled = true;
		document.body.appendChild( renderer.domElement );
 
		// �W�I���g���[
		var material = new THREE.MeshLambertMaterial({color: 0xFFA500});
		mesh = new THREE.Mesh();
		mesh.material = material;
		mesh.position.set(0,0,0);
		mesh.castShadow = true;
		scene.add(mesh);
		
		// �p�����[�^�[�ݒu
		geoObj = new geoCtrl();
		var folder = gui.addFolder('BoxGeometry')
		folder.add( geoObj, 'x', 10, 80 ).onChange( setGeoVal);
		folder.add( geoObj, 'y', 10, 80 ).onChange( setGeoVal);
		folder.add( geoObj, 'z', 10, 80 ).onChange( setGeoVal);
		setGeoVal();
		
		// ���R��
		var ambientLight = new THREE.AmbientLight( 0xDDDDCC, 0.8);

		// �X�|�b�g���C�g
		var spotLight = new THREE.SpotLight(0xFFFFFF,1.2,0);
		spotLight.castShadow = true;
		spotLight.position.set( 10, 30, 30);
		scene.add(ambientLight,spotLight);
 
		//�R���g���[���[
		controls = new THREE.OrbitControls(camera);
		controls.maxDistance = 100;
		controls.maxPolarAngle = Math.PI * 0.48;
		
		resizeSet();
		setTimeout(resize, 1);
		
		//������]
		controls.autoRotate = true;
		controls.autoRotateSpeed = 2.0;
 
		rendering();
	}
 
	//GUI�p�����[�^�̏���
	var geoCtrl = function(){
		this.x = 20;
		this.y = 20;
		this.z = 20;
	};
	
	function setGeoVal(){
		mesh.geometry.dispose();
		mesh.geometry = new THREE.BoxGeometry( geoObj.x, geoObj.y ,geoObj.z );
	}
 
	function rendering(){
		requestAnimationFrame(rendering);
		controls.update();
		renderer.render( scene, camera);
	}
 
	function resizeSet(){
		var queue = null; // �L���[���X�g�b�N 
    	var wait = 300; // 0.3�b��Ɏ��s�̏ꍇ 
    	window.addEventListener( 'resize', function() {
    		clearTimeout( queue );
    		queue = setTimeout(function() {
    				resize();
    		}, wait );
    	}, false );
    };
	function resize(){
		var width = window.innerWidth;
		var height = window.innerHeight;
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		renderer.setSize(width, height);
	}
 
	$(function(){
		main();
	});
})(jQuery);