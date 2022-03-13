import { OrbitControls } from '../js/OrbitControls02.js'

let renderer, scene, camera;
let cameraControl, stats;
let cube;
let model;
// 藝廊
let gallery;
let photo03, lightBoxP3, closeLightBoxP3;
let photo04;
let photo05;
let pumpkin;
let pumpkin02;
let monkey;



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

  // 框框
  var cubebox = new THREE.BoxGeometry(2, 2, 1) // 幾何體
  var green = new THREE.MeshPhongMaterial({
    color: 0x0000ff
  }) // 材質
  cube = new THREE.Mesh(cubebox, green) // 建立網格物件
  cube.position.set(0, 0, 0)
//   scene.add(cube)

  // 渲染器設定
  renderer = new THREE.WebGLRenderer({
    //增加下面兩個屬性，可以抗鋸齒
    antialias:true,
    alpha:true
    });
  renderer.setSize(window.innerWidth, window.innerHeight)

  // 引入藝廊
  var loader = new THREE.ObjectLoader();
  loader.load
  (
    "gallery02.json",
    function(gallery){
      scene.add(gallery);
      gallery.position.set(0, -2, -3);
      gallery.rotation.x=0;
      gallery.rotation.y=0;
      gallery.rotation.z=0;
    }
  );
// 引入畫作03
// 抓取html畫作03
lightBoxP3 = document.querySelector("#lightBoxP3");
closeLightBoxP3 = document.querySelector("#closeLightBoxP3");
// 關掉html畫作03
closeLightBoxP3.addEventListener("click",function(){
    lightBoxP3.classList.toggle("displayNone");
});
loader.load(
    "photo03.json",
    function(photo03){
      scene.add(photo03);
      photo03.position.set(-2, 5, -10);
      domEvents.addEventListener(photo03, "click", event=>{
        if(!cubeClick){
        lightBoxP3.classList.toggle("displayNone");
        cubeClick = true;
        }else{
        lightBoxP3.classList.toggle("displayNone");
        cubeClick = false;
        }
    })
    }
);
// 引入畫作04
loader.load
  (
    "photo04.json",
    function(photo04){
      scene.add(photo04);
      photo04.position.set(6, 5, -10);
    }
  );
// 引入畫作05
loader.load
  (
    "photo05.json",
    function(photo05){
      scene.add(photo05);
      photo05.position.set(35, 5, -15);
    }
);
// 引入南瓜
loader.load
  (
    "pumpkin.json",
    function(pumpkin){
      scene.add(pumpkin);
      pumpkin.position.set(62, 6, -5);
    }
);
loader.load
  (
    "pumpkin02.json",
    function(pumpkin02){
      scene.add(pumpkin02);
      pumpkin02.position.set(72, 6, -5);
    }
);
loader.load
  (
    "monkey.json",
    function(monkey){
      scene.add(monkey);
      monkey.position.set(90, 6, 0);
    }
);

  // 建立監聽事件
  var domEvents = new THREEx.DomEvents(camera, renderer.domElement);
  let cubeClick = false;


  // 建立 OrbitControls
  cameraControl = new OrbitControls(camera, renderer.domElement)
  cameraControl.enableDamping = true // 啟用阻尼效果
  cameraControl.dampingFactor = 0.25 // 阻尼系數
  // cameraControl.autoRotate = true // 啟用自動旋轉
  // cameraControl.enableZoom = false;

  cameraControl.minDistance = 15 ;
  //相机距离观察目标点极大距离——模型最小状态
  cameraControl.maxDistance = 30;

  // 上下旋转范围
  cameraControl.minPolarAngle = 1.4;
  cameraControl.maxPolarAngle = 1.4;
  // 左右旋转范围
  cameraControl.minAzimuthAngle = 0;
  cameraControl.maxAzimuthAngle = 0;

  //是否开启右键拖拽  
  cameraControl.enablePan = true; 
  
  cameraControl.screenSpacePanning = true;
  // 簡單的地板
  const planeGeometry = new THREE.PlaneGeometry(60, 60)
  const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
  let plane = new THREE.Mesh(planeGeometry, planeMaterial)
  plane.rotation.x = -0.5 * Math.PI
  plane.position.set(0, 0, 0)
  // scene.add(plane)



  // 簡單的 spotlight 照亮物體
  let spotLight = new THREE.SpotLight(0xFFFFFF)
  spotLight.position.set(-10, 100, 30)
  scene.add(spotLight)
  // let spotLight2 = new THREE.SpotLight(0xCCCCCC)
  // spotLight2.position.set(0, 20, 90)
  // scene.add(spotLight2)
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
