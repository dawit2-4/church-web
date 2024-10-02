
  function addEvent() {
    const eventList = document.getElementById("eventList");
    const newEvent = document.getElementById("newEvent").value;
    
    if (newEvent) {
      const li = document.createElement("li");
      li.innerHTML = `${newEvent} <button onclick="editEvent(this)">አስተካክል</button> <button onclick="deleteEvent(this)">ሰርዝ</button>`;
      eventList.appendChild(li);
      document.getElementById("newEvent").value = ''; // Clear input
    }
  }

  // Function to edit an existing event
  function editEvent(button) {
    const li = button.parentElement;
    const currentText = li.firstChild.textContent.trim();
    const newText = prompt("መርሃግብርን አስተካክል", currentText);
    
    if (newText) {
      li.firstChild.textContent = newText + ' ';
    }
  }

  // Function to delete an event
  function deleteEvent(button) {
    const li = button.parentElement;
    li.remove();
  }

  const toTop = document.querySelector(".to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      toTop.classList.add("to-top-active");
    }else{
      toTop.classList.remove("to-top-active");
    }
  })

