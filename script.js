function volume_sphere() {
    //Write your code here
  const rad = document.getElementById('radius').value;

  // Calculate the volume of the sphere
  const vol = (4 / 3) * Math.PI * Math.pow(rad, 3);

  // Display the volume in the volume field
  document.getElementById('volume').value = vol.toFixed(4); // Adjust to the desired decimal places
} 

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

window.onload = function() {
  document.getElementById('MyForm').onsubmit = function() {
    volume_sphere();
    return false; // To prevent form submission and page refresh
  };
};