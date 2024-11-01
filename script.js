let lastX = null;
let lastY = null;
let lastTime = null;
const cursor = document.getElementById('cursor'); // Reference to the custom cursor

// Set the initial position of the cursor
cursor.style.position = 'absolute';

document.addEventListener('mousemove', (event) => {
    const { clientX: x, clientY: y } = event;

    // Update the cursor's position
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    if (lastX !== null && lastY !== null && lastTime !== null) {
        const dx = x - lastX; // Change in X (horizontal movement)
        const dy = y - lastY; // Change in Y (vertical movement)

        // Calculate angle
        const angle = Math.atan2(dy, dx) * (180 / Math.PI); // Use dy and dx correctly

        // Apply rotation
        cursor.style.transform = `rotate(${angle}deg)`;
    }

    // Update last position and time
    lastX = x;
    lastY = y;
    lastTime = event.timeStamp;
});
