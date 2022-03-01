import { OrbitControls } from '../js/OrbitControls.js'

let renderer, scene, camera
let cameraControl, stats
let lightBox
let closeLightBox

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
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 引入場景
  var loader = new THREE.ObjectLoader();
  var gallery;
  loader.load
  (
    "scene_05.json",
    function(gallery){
      scene.add(gallery);
      gallery.position.set(0, -2, -3);
      gallery.rotation.x=0;
      gallery.rotation.y=0;
      gallery.rotation.z=0;
    }
  );
  // 引入畫作
  loader.load(
    "smoke.json",
    function(smoke){
      scene.add(smoke);
      smoke.position.set(-3, 8, -15);
      smoke.scale.set( 8.415, 5.814, 1.484 );
      domEvents.addEventListener(smoke, "click", event=>{
        if(!cubeClick){
          console.log(lightBox);
          console.log(closeLightBox)
          lightBox.classList.toggle("displayNone");
          cubeClick = true;
        }else{
          lightBox.classList.toggle("displayNone");
          cubeClick = false;
        }
      })
    }
  )
  // 建立監聽事件
  var domEvents = new THREEx.DomEvents(camera, renderer.domElement);
  let cubeClick = false;
    
  lightBox = document.querySelector("#lightBox");
  closeLightBox = document.querySelector("#closeLightBox");

  closeLightBox.addEventListener("click",function(){
      lightBox.classList.toggle("displayNone");
  });


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
