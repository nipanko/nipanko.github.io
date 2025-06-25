import gsap from "gsap";

// Wait until the whole page has loaded
window.addEventListener("load", () => {
  const bootScreen = document.getElementById("boot-screen");
  const mainContent = document.getElementById("main-content");

  if (!bootScreen || !mainContent) {
    console.error("boot-screen or main-content not found in the hjgjhgDOM.");
    return;
  }

  const tl = gsap.timeline();

  tl.to(".line", {
    delay: 2,
    duration: 1,
    onComplete: () => {
      bootScreen.style.display = "none";
      mainContent.style.display = "block";
    },
  });
});
