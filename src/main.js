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


  // Animate dialog box in
gsap.from("#dialog-box", {
  y: -100,
  opacity: 0,
  delay: 0.5,
  duration: 1,
  ease: "power4.out",
});

// Close button
document.querySelector(".btn-close").addEventListener("click", () => {
  gsap.to("#dialog-box", {
    y: -100,
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      document.getElementById("dialog-box").style.display = "none";
    },
  });
});



});
