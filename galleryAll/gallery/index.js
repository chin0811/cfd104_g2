import { OrbitControls } from '../js/OrbitControls.js'

let renderer, scene, camera
let cameraControl, stats
// 香菸
let lightBoxCi,closeLightBoxCi
// slitting
let lightBoxSl,closeLightBoxSl
// flip
let lightBoxFl,closeLightBoxFl
// 蒙娜麗莎
let lightBoxMo,closeLightBoxMo
// 彈跳公仔
let lightBoxBo,closeLightBoxBo
let galleryHint 
let closeHint

function initStats() {
  const stats = new Stats()
  stats.setMode(0)
  document.getElementById('stats').appendChild(stats.domElement)
  return stats
}
// 畫面初始化
function init() {
  scene = new THREE.Scene()
  // 相機設定
  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  )
  camera.position.set(30, 30, 30)
  camera.lookAt(scene.position)
  // 三軸座標輔助
  let axes = new THREE.AxesHelper(20)
  // scene.add(axes)
  stats = initStats()

  // 渲染器設定
  renderer = new THREE.WebGLRenderer({
    //增加下面兩個屬性，可以抗鋸齒
    antialias:true,
    alpha:true
    });
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 引入場景
  var loader = new THREE.ObjectLoader();
  var gallery;
  loader.load
  (
    "galleryAll/gallery/scene_05.json",
    function(gallery){
      scene.add(gallery);
      gallery.position.set(0, -2, -3);
      gallery.rotation.x=0;
      gallery.rotation.y=0;
      gallery.rotation.z=0;
    }
  );
   // 建立監聽事件
   var domEvents = new THREEx.DomEvents(camera, renderer.domElement);
   let cubeClick = false;

	// 藝廊提示
	galleryHint = document.querySelector("#galleryHint");
	closeHint = document.querySelector("#closeHint");
	closeHint.addEventListener("click",function(){
		galleryHint.classList.add("displayNone");
	});
	// 引入香菸
	// 抓取html香菸
	lightBoxCi = document.querySelector("#lightBoxCi");
	closeLightBoxCi = document.querySelector("#closeLightBoxCi");
	// 關掉html香菸
	closeLightBoxCi.addEventListener("click",function(){
		lightBoxCi.classList.toggle("displayNone");
	});
	loader.load(
		"galleryAll/gallery/smoke.json",
		function(smoke){
		scene.add(smoke);
		smoke.position.set(-3, 8, -15);
		smoke.scale.set( 8.415, 5.814, 1.484 );
		domEvents.addEventListener(smoke, "click", event=>{
			if(!cubeClick){
			lightBoxCi.classList.toggle("displayNone");
			cubeClick = true;
			}else{
			lightBoxCi.classList.toggle("displayNone");
			cubeClick = false;
			}
		})
		}
	)
  // 引入人偶
  // loader.load(
  //   "figure.json",
  //   function(figure){
  //     let figureClick = false;
  //     scene.add(figure);
  //     figure.position.set(29,-2,-5)
  //     domEvents.addEventListener(figure, "click", event=>{
  //       if(!figureClick){
  //         figure.position.set(29,2,22)
  //         figureClick = true;
  //       }else{
  //         figure.position.set(29,-2,-5)
  //         figureClick = false;
  //       }
  //     })
  //   }
  // )
  	// 抓取html蒙娜麗莎
	lightBoxMo = document.querySelector("#lightBoxMo");
	closeLightBoxMo = document.querySelector("#closeLightBoxMo");
	// 關掉html蒙娜麗莎
	closeLightBoxMo.addEventListener("click",function(){
		lightBoxMo.classList.toggle("displayNone");
	});
	// 引入蒙娜麗莎
	loader.load(
	"galleryAll/gallery/cube.json",
	function(cube){
		scene.add(cube);
		cube.position.set(54,3,-8)
		domEvents.addEventListener(cube, "click", event=>{
			console.log("test")
			if(!cubeClick){
			lightBoxMo.classList.toggle("displayNone");
			cubeClick = true;
			}else{
			lightBoxMo.classList.toggle("displayNone");
			cubeClick = false;
			}
		})
	}
	)
	// 抓取html彈跳公仔
	lightBoxBo = document.querySelector("#lightBoxBo");
	closeLightBoxBo = document.querySelector("#closeLightBoxBo");
	// 關掉html彈跳公仔
	closeLightBoxBo.addEventListener("click",function(){
		lightBoxBo.classList.toggle("displayNone");
	});
   // 引入彈跳公仔
   loader.load(
    "galleryAll/gallery/figure02.json",
    function(figure02){
		scene.add(figure02);
		figure02.position.set(70,5,-5)
		domEvents.addEventListener(figure02, "click", event=>{
		if(!cubeClick){
		lightBoxBo.classList.toggle("displayNone");
		cubeClick = true;
		}else{
		lightBoxBo.classList.toggle("displayNone");
		cubeClick = false;
		}
	})
    }
  )
	// 抓取html照片1
	lightBoxSl = document.querySelector("#lightBoxSl");
	closeLightBoxSl = document.querySelector("#closeLightBoxSl");
	// 關掉html照片1
	closeLightBoxSl.addEventListener("click",function(){
		lightBoxSl.classList.toggle("displayNone");
	});
     // 引入照片1
	loader.load(
	"galleryAll/gallery/photo01.json",
	function(photo01){
	scene.add(photo01);
	photo01.position.set(12,3,0)
	domEvents.addEventListener(photo01, "click", event=>{
		console.log("test")
		if(!cubeClick){
		lightBoxSl.classList.toggle("displayNone");
		cubeClick = true;
		}else{
		lightBoxSl.classList.toggle("displayNone");
		cubeClick = false;
		}
	})
	}
	)
	// 抓取html照片2
	lightBoxFl = document.querySelector("#lightBoxFl");
	closeLightBoxFl = document.querySelector("#closeLightBoxFl");
	// 關掉html照片2
	closeLightBoxFl.addEventListener("click",function(){
		lightBoxFl.classList.toggle("displayNone");
	});
    // 引入照片2
	loader.load(
	"galleryAll/gallery/photo02.json",
	function(photo02){
		scene.add(photo02);
		photo02.position.set(41,3,-6.1)
		domEvents.addEventListener(photo02, "click", event=>{
			console.log("test")
			if(!cubeClick){
			lightBoxFl.classList.toggle("displayNone");
			cubeClick = true;
			}else{
			lightBoxFl.classList.toggle("displayNone");
			cubeClick = false;
			}
		})
	}
	)
  
 

  // 建立 OrbitControls
  cameraControl = new OrbitControls(camera, renderer.domElement)
  cameraControl.enableDamping = true // 啟用阻尼效果
  cameraControl.dampingFactor = 0.25 // 阻尼系數

  cameraControl.minDistance = 15 ;
  //相机距离观察目标点极大距离——模型最小状态
  cameraControl.maxDistance = 30;

  // 上下旋转范围
  cameraControl.minPolarAngle = 1.4;
  cameraControl.maxPolarAngle = 1.4;
  // 左右旋转范围
  // cameraControl.minAzimuthAngle = -149.97;
  // cameraControl.maxAzimuthAngle = -149.97;
  cameraControl.minAzimuthAngle = 0;
  cameraControl.maxAzimuthAngle = 0;
  //是否开启右键拖拽  
  cameraControl.enablePan = true; 
  cameraControl.screenSpacePanning = true;
  // 照亮物體
  let directionalLight = new THREE.DirectionalLight( 0xffffff, 0.3 );
  directionalLight.position.set(1, -10, 1000)
  scene.add( directionalLight );

  let directionalLight2 = new THREE.DirectionalLight( 0xffffff, 0.8 );
  directionalLight2.position.set(1, -10, -10)
  scene.add( directionalLight2 );

  let directionalLight3 = new THREE.DirectionalLight( 0xffffff, 0.2 );
  directionalLight3.position.set(100, -100, 100)
  scene.add( directionalLight3 );

  let directionalLight4 = new THREE.DirectionalLight( 0xaaaaaa, 0.1 );
  directionalLight4.position.set(10, 30, 100)
  scene.add( directionalLight4 );

  // let spotHelper = new THREE.SpotLightHelper(spotLight)
  // scene.add(spotHelper)

  // 將渲染出來的畫面放到網頁上的 DOM
  document.body.appendChild(renderer.domElement)
}

function render() {
  stats.update()
  cameraControl.update()
  requestAnimationFrame(render)
  renderer.render(scene, camera)
}

window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

init()
render()
