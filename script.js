function showLinkedIn() {
    window.open("https://www.linkedin.com/");
  }
  
  function showSkills() {
    var modal = document.getElementById("skills-modal");
    modal.style.display = "block";
  }
  
  function closeSkills() {
    var modal = document.getElementById("skills-modal");
    modal.style.display = "none";
  }
  
  function showImportant() {
    var important = document.getElementById("important");
    if (important.style.display === "none") {
      important.style.display = "block";
    } else {
      important.style.display = "none";
    }
  }
  
  document.getElementById("linkedin").addEventListener("click", showLinkedIn);
  document.getElementById("skills").addEventListener("click", showSkills);
  document.getElementById("close-skills").addEventListener("click", closeSkills);
  document.getElementById("dato-importante").addEventListener("click", showImportant);
  