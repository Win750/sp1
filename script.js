function spinWheel() {
    let wheel = document.querySelector('.wheel');
    wheel.style.transition = 'transform 4s ease-out';
    let randomDegree = Math.floor(Math.random() * 360) + 360 * 5;
    wheel.style.transform = rotate(${randomDegree}deg);
    setTimeout(() => {
        alert("You didn't win, try spinning again.");
    }, 4000);
}