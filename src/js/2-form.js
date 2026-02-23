const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const formData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {
  email: "",
  message: "",
};

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener("input", ({target}) => {
    formData[target.name] = target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
}); 

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  if (email && message) {
    console.log({email, message});
    localStorage.removeItem(localStorageKey);
    form.reset();
    formData.email = "";
    formData.message = "";
  } else {
    alert('Fill please all fields');
  }
});