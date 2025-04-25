import "./style.css";

window.addEventListener("load", function () {
  console.log("All assets are loaded");
});

axe
  .run()
  .then((results) => {
    if (results.violations.length) {
      console.log(results.violations);
      throw new Error("Accessibility issues found");
    }
  })
  .catch((err) => {
    console.error("Something bad happened:", err.message);
  });
