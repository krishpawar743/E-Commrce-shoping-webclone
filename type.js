// document.addEventListener('DOMContentLoaded', function() {
//     const textElement = document.getElementById('animatedText');
//     const text = "Hello, i am krish pawar";
//     let index = 0;

//     function typeText() {
//         if (index < text.length) {
//             textElement.textContent += text.charAt(index);
//             index++;
//             setTimeout(typeText, 100); // Adjust typing speed here
//         }
//     }

//     typeText();
// });


// Set up the scene
const scene = new THREE.Scene();

// Set up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('image.jpg');

// Create a plane geometry with the texture
const geometry = new THREE.PlaneGeometry(4, 3);
const material = new THREE.MeshBasicMaterial({ map: texture });
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the plane
    plane.rotation.y += 0.01;
    plane.rotation.x += 0.01;

    // Render the scene
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
