const form = document.getElementById('vaccination-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
    
  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const address = document.getElementById('address').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const aadhar = document.getElementById('aadhar').value;
  
  const aadharRegex = new RegExp("^[0-9]{12}$");
  const mobileRegex = new RegExp("^[0-9]{10}$");
  
  if (name === "") {
    alert("Please enter your name.");
    return false;
  }
  
  if (mobile === "") {
    alert("Please enter your mobile number.");
    return false;
  }
  
  if (!mobileRegex.test(mobile)) {
    alert("Please enter a valid mobile number.");
    return false;
  }
  
  if (address === "") {
    alert("Please enter your address.");
    return false;
  }
  
  if (age === "") {
    alert("Please enter your age.");
    return false;
  }
  
  if (isNaN(age)) {
    alert("Please enter a valid age.");
    return false;
  }
  
  if (gender === "") {
    alert("Please select your gender.");
    return false;
  }
  
  if (aadhar === "") {
    alert("Please enter your Aadhaar number.");
    return false;
  }
  
  if (!aadharRegex.test(aadhar)) {
    alert("Please enter a valid Aadhaar number.");
    return false;
  }
  
  alert("Thank you for registering for the COVID-19 vaccination. We will contact you soon.");
  form.reset();
  return true;
}
