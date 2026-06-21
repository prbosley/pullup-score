function calculateScore() {

    const reps =
        Number(document.getElementById("reps").value);

    const time =
        Number(document.getElementById("time").value);

    const swing =
        Number(document.getElementById("swing").value);

    if (!reps || !time) {
        alert("Enter reps and time.");
        return;
    }

    const avgRepTime = time / reps;

    let tempoMultiplier;

    if (avgRepTime <= 2) {
        tempoMultiplier = 1.0;
    }
    else if (avgRepTime >= 5) {
        tempoMultiplier = 1.25;
    }
    else {
        tempoMultiplier =
            1 + ((avgRepTime - 2) / 3) * 0.25;
    }

    const score =
        reps *
        tempoMultiplier *
        swing;

    document.getElementById("result")
        .innerHTML =
        "Score: " + score.toFixed(2);
}
