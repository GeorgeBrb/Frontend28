export const showConfirmationMessage = (className, response, message) => {
    const messageContainer = document.querySelector(" " + className); 
    messageContainer.classList.remove("succes");
    messageContainer.classList.remove("error");
    messageContainer.classList.remove("hidden");
    if (!response.ok) {
   messageContainer.innerHTML="Something went wrong!";
   messageContainer.classList.add("error");
  }else{
    messageContainer.innerHTML= message;
    messageContainer.classList.add("succes");
  }

  setTimeout(() =>{
    messageContainer.classList.add("hidden");
  } , 3000);
};