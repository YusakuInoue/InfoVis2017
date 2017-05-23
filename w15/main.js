var width = 1280;
var hight = 800;
var scene, camera, renderer,controls;�@
 
function main(){
	var container = document.getElementById('canvas-area');
	if(!Detector.webgl)Detector.addGetWebGLMessage({ parent: container});//WebGL���m�F
	
	scene = new THREE.Scene();
	
	// �J����:�������e
	camera = new THREE.PerspectiveCamera( 60, width/hight, 1, 1000);
	scene.add(camera);
	camera.position.set( 100, 100, 100);
	
	// ���C�g:���� + �|�C���g���C�g3�_
	var ambientLight = new THREE.AmbientLight( 0x888888 );
	var Lights = [];
	Lights[0] = new THREE.PointLight( 0xffffff, .8, 0 );
	Lights[1] = new THREE.PointLight( 0xffffff, .8, 0 );
	Lights[2] = new THREE.PointLight( 0xffffff, .8, 0 );
	Lights[0].position.set( 0, 200, 0 );
	Lights[1].position.set( 100, 200, 100 );
	Lights[2].position.set( -100, -200, -100 );
	scene.add(ambientLight, Lights[0],Lights[1],Lights[2]);
	
	// �����_���[
	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize(width,hight);
	renderer.setClearColor( 0xFFFFFF, 0 );
	container.appendChild(renderer.domElement);
	
	//OnClick����
	var projector = new THREE.Projector();
	var mouse = { x: 0, y: 0 };
	var targetList = [];

	window.onmousedown = function (ev){
		if (ev.target == renderer.domElement) {

		//�}�E�X���W2D�ϊ�
		var rect = ev.target.getBoundingClientRect();
		mouse.x =  ev.clientX - rect.left;
		mouse.y =  ev.clientY - rect.top;
		//�}�E�X���W3D�ϊ�
		mouse.x =  (mouse.x/width)*2-1;
		mouse.y = -(mouse.y/hight)*2+1;
		// �}�E�X�x�N�g��
		var vector = new THREE.Vector3( mouse.x, mouse.y ,1);
		// �I�u�W�F�N�g�̍��W�n�ɕϊ�
		projector.unprojectVector( vector, camera );
		// �n�_, �����x�N�g����n���ă��C���쐬
		var ray = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
        
        // �N���b�N����
		var obj = ray.intersectObjects( targetList );
		// �N���b�N���Ă�����A���[�g��\��
		if ( obj.length > 0 ){
			alert("You are CLICK!")
			} 
			
		}
	}; 
	
	// �W�I���g���[
	var geometry = new THREE.TorusGeometry(50, 20, 40, 40);
	var material = new THREE.MeshPhongMaterial({color: 0xff00001,side: THREE.DoubleSide});
	mesh = new THREE.Mesh( geometry, material);
	mesh.position.set( 0, 0, 0)
	scene.add(mesh);
	targetList.push(mesh);
	
	//�R���g���[���[
	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.minDistance = 10;
	controls.maxDistance = 500;
	controls.maxPolarAngle = (Math.PI * 0.48);
	
	//������]
	controls.autoRotate = true;
	controls.autoRotateSpeed = 2.0;

	rendering();
}

function rendering(){
	requestAnimationFrame(rendering, renderer.domElement);
	controls.update();
	renderer.render(scene, camera);
}
 
$(function(){
	main();
});