function addWorkout() {
  const exercise = document.getElementById("exercise").value;
  const duration = document.getElementById("duration").value;

  if (exercise === "" || duration === "") {
    alert("Please fill all fields");
    return;
  }

  const list = document.getElementById("workoutList");

  const li = document.createElement("li");
  li.textContent = `${exercise} - ${duration} mins`;

  list.appendChild(li);

  document.getElementById("exercise").value = "";
  document.getElementById("duration").value = "";
}