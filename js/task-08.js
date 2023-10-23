const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (!email.value.trim() || !!password.value.trim()) {
    return alert("Please fill in all the fields!");
  }
  // } else {
  //   const formData = {
  //     email: email.value,
  //     password: password.value,
  //   };
  //   console.log(formData);
  event.currentTarget.reset();
  // }
}

// _____________var2_______________
// const form = document.querySelector(".login-form");
// // Додавання слухача події
// form.addEventListener("submit", handleSubmit);
// // Функція відправки форми
// function handleSubmit(event) {
//   event.preventDefault(); // відміна відправки форми
//   // Для доступу до елементів форми використовуєтсья властивість elements
//   const {
//     elements: { email, password },
//   } = event.currentTarget;
//   // Перевірка, чи заповненні всі поля
//   if (email.value === "" || password.value === "") {
//     return alert("Заповни всі поля!");
//   }
//   // Об'єкт інформації про користувача
//   const userInfo = {
//     email: email.value,
//     password: password.value,
//   };
//   // Виведення об'єкту із введеними даними в консоль
//   console.log(userInfo);
//   // Очищення значення полів форми методом reset
//   event.currentTarget.reset();
// }
