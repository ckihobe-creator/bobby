document.getElementById("akanForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.querySelector('input[name="gender"]:checked');

  // Validation
  if (isNaN(day) || day < 1 || day > 31) {
    alert("Please enter a valid day (1–31).");
    return;
  }

  if (isNaN(month) || month < 1 || month > 12) {
    alert("Please enter a valid month (1–12).");
    return;
  }

  if (!gender) {
    alert("Please select your gender.");
    return;
  }

  const CC = Math.floor(year / 100);
  const YY = year % 100;
  const MM = month;
  const DD = day;

  const dayOfWeek =
    (
      (4 * CC - 2 * CC - 1) +
      (5 * YY / 4) +
      (26 * (MM + 1) / 10) +
      DD
    ) % 7;

  const dayIndex = Math.floor((dayOfWeek + 7) % 7);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];

  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
  ];

  const akanName =
    gender.value === "male"
      ? maleNames[dayIndex]
      : femaleNames[dayIndex];

  document.getElementById("result").textContent =
    `You were born on a ${days[dayIndex]}. Your Akan name is ${akanName}.`;

  // Optional polish: clear form
  document.getElementById("akanForm").reset();
});
