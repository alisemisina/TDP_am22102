document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const icon = document.getElementById("theme-icon");
  
    // Icon URLs
    const sunIcon = "https://img.icons8.com/ios-filled/50/ffffff/sun--v1.png";
    const moonIcon = "https://img.icons8.com/ios-filled/50/moon-symbol.png";

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
      icon.src = sunIcon;
    }
  
    document.getElementById("theme-toggle").addEventListener("click", () => {
      const isDark = body.classList.toggle("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      icon.src = isDark ? sunIcon : moonIcon;
    });
  });
  