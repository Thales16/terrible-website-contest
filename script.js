document.addEventListener('DOMContentLoaded', () => {
    const claimBtn = document.getElementById('claim-prize-btn');
    const leaveBtn = document.getElementById('leave-page-btn');
    const formSection = document.getElementById('form-section');
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const absurdPopup = document.getElementById('absurd-popup');
    const progressBar = document.getElementById('progress-bar');
    
    // Invert the scroll direction
    document.addEventListener('wheel', (event) => {
        window.scrollBy(0, event.deltaY * -1);
    });

    // Makes the button move away from the cursor
    claimBtn.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - claimBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - claimBtn.offsetHeight);
        claimBtn.style.position = 'absolute';
        claimBtn.style.left = `${x}px`;
        claimBtn.style.top = `${y}px`;
    });

    // Makes the leave button lead nowhere, just to the top of the page
    leaveBtn.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        alert("Wait! Are you sure you want to leave and lose your prize? No, you're not.");
    });

    // When the button is clicked, show the form and activate the frustration
    claimBtn.addEventListener('click', () => {
        formSection.style.display = 'block';
        claimBtn.style.display = 'none';
        
        // Make the form fields clear the text
        nameInput.addEventListener('keyup', () => {
            nameInput.value = '';
        });
        emailInput.addEventListener('keyup', () => {
            emailInput.value = '';
        });
    });

    // Array of absurd messages for the pop-ups
    const absurdMessages = [
        "Alert: Your shoelaces are probably untied.",
        "Fact: Giraffes have the same number of neck vertebrae as humans.",
        "Reminder: Don't forget to breathe.",
        "Did you know that ducks can sleep with one eye open?",
        "Breaking News: Your coffee mug secretly judges your life choices."
    ];

    // This code block will generate a flood of pop-ups after 15 seconds
    setTimeout(() => {
        setInterval(() => {
            const newPopup = document.createElement('div');
            newPopup.className = 'absurd-popup';
            newPopup.style.position = 'absolute';
            
            // Generate random positions on the screen
            const x = Math.random() * (window.innerWidth - 300); 
            const y = Math.random() * (window.innerHeight - 200); 
            newPopup.style.left = `${x}px`;
            newPopup.style.top = `${y}px`;

            // Add the message and a close button to the pop-up
            newPopup.innerHTML = `<p>${absurdMessages[Math.floor(Math.random() * absurdMessages.length)]}</p><button onclick="this.parentNode.remove()">Dismiss</button>`;
            document.body.appendChild(newPopup);
        }, 2000); // A new pop-up appears every 2 seconds
    }, 15000); // Wait 15 seconds before the flood begins
    
    // Fake progress bar animation
    let width = 0;
    const progressInterval = setInterval(() => {
        if (width >= 99) {
            clearInterval(progressInterval);
            document.getElementById('progress-text').textContent = "Processing failed. Try again.";
        } else {
            width += 1;
            progressBar.style.width = `${width}%`;
        }
    }, 50);

    // "Stuck" cursor effect
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });
});