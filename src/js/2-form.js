const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const formData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {
  email: "",
  message: "",
};

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener("input", ({target}) => {
    formData[target.name] = target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
}); 

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Fill please all fields');
  }
});