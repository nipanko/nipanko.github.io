import gsap from "gsap";

// ===============================
// DRAGGABLE WINDOW
// ===============================
function makeDraggable(windowEl, handleEl) {
  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;

  handleEl.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - windowEl.getBoundingClientRect().left;
    offsetY = e.clientY - windowEl.getBoundingClientRect().top;
    windowEl.style.zIndex = parseInt(windowEl.style.zIndex || 10) + 1;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    windowEl.style.left = `${e.clientX - offsetX}px`;
    windowEl.style.top = `${e.clientY - offsetY}px`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
}

// ===============================
// RESIZABLE + ANIMATED WINDOWS
// ===============================
function setupWindow(windowId) {
  const win = document.getElementById(windowId);
  if (!win) return;

  const header = win.querySelector(".window-header");
  const closeBtn = win.querySelector(".btn-close");
  const resizeHandle = win.querySelector(".resize-handle");

  makeDraggable(win, header);

  // Show window and animate
  win.style.display = "block";
  gsap.fromTo(
    win,
    { y: -80, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
  );

  // Avoid multiple event listeners
  if (!win.dataset.initialized) {
    closeBtn.addEventListener("click", () => {
      gsap.to(win, {
        y: -100,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          win.style.display = "none";
        },
      });
    });

    if (resizeHandle) {
      let isResizing = false;

      resizeHandle.addEventListener("mousedown", (e) => {
        isResizing = true;
        e.preventDefault();
      });

      document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        win.style.width = `${e.clientX - win.offsetLeft}px`;
        win.style.height = `${e.clientY - win.offsetTop}px`;
      });

      document.addEventListener("mouseup", () => {
        isResizing = false;
      });
    }

    win.dataset.initialized = "true"; // Mark window as initialized
  }
}

// ===============================
// BOOT SCREEN → MAIN CONTENT
// ===============================
window.addEventListener("load", () => {
  const bootScreen = document.getElementById("boot-screen");
  const mainContent = document.getElementById("main-content");

  if (!bootScreen || !mainContent) {
    console.error("boot-screen or main-content not found in the DOM.");
    return;
  }

  const tl = gsap.timeline();

  tl.to(".line", {
    delay: 2,
    duration: 1,
    onComplete: () => {
      bootScreen.style.display = "none";
      mainContent.style.display = "block";

      // Animate dialog box in after boot
      gsap.from("#dialog-box", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      // Make dialog draggable
      const dialogBox = document.getElementById("dialog-box");
      if (dialogBox) {
        const dialogHeader = dialogBox.querySelector(".window-header");
        makeDraggable(dialogBox, dialogHeader);
      }
    },
  });

  // Assign open buttons after DOM is loaded
  document.getElementById("open-resume")?.addEventListener("click", () => {
    setupWindow("resume-window");
  });

  document.getElementById("open-blog")?.addEventListener("click", () => {
    setupWindow("blog-window");
  });
});
