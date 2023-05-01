function validation(
    reference,
    placeMessage,
    message,
    btnForm,
    validation
  ) {
    let timeout = null; //global varaible
    reference.addEventListener("keyup", function (e) {
      const preview = "hidden";
      const previewForm = `input-error`;
      const cursor = "cursor-not-allowed";

      e.preventDefault();
      clearInterval(timeout);
      timeout = setTimeout(() => {
        console.log(validation(e.target.value));
        if (validation(e.target.value)) {
          placeMessage.classList.add(preview);
          btnForm.removeAttribute("disabled");
          btnForm.classList.remove(cursor);
          e.target.classList.remove(previewForm);
        } else {
          placeMessage.classList.remove(preview);
          placeMessage.innerText = message;
          // for btn submit or next
          btnForm.setAttribute("disabled","true");
          btnForm.classList.add(cursor);
          e.target.classList.add(previewForm);
        }
      }, 350);
    });
  }

//   used regex to check validation form