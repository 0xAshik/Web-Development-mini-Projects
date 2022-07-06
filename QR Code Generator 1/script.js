const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn =wrapper.querySelector(".form button"),
qrImage = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => { 
  let qrValue = qrInput.value.trim();
  if(!qrValue || preValue === qrValue) return;
  preValue = qrValue;
  generateBtn.innerText = "অপেক্ষা করুন কিউ আর কোড জেনারেট হচ্ছে...";
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
  qrImage.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "নিন্মে আপনার কিউ আর কোড জেনারেট হয়েছে";
  });
});

qrInput.addEventListener("keyup", () => {
  if(!qrInput.value.trim()){
    wrapper.classList.remove("active");
    preValue = "";
  }
});