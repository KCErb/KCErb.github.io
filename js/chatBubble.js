document.addEventListener('DOMContentLoaded', function() {
    // Insert style tag with bounce animation and chat bubble rules
    const styleEl = document.createElement('style');
    styleEl.textContent = `
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .chat-bubble {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 70px;
            height: 70px;
            background-color: #ff4444;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;
            font-size: 24px; /* Increased font-size for the icon */
            animation: bounce 1s infinite;
        }
        .chat-helper {
            position: fixed;
            bottom: 100px; /* adjust relative to chat bubble */
            right: 20px;
            background: rgba(255,68,68,0.9);
            color: #fff;
            padding: 8px 10px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            font-size: 14px;
            animation: fadeIn 0.5s;
        }
        .chat-helper .helper-pic {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 8px;
            object-fit: cover;
        }
        /* Chat Modal Window Styles */
        #chatModal {
            position: fixed;
            bottom: 0;
            right: 20px;
            width: 320px;
            height: 400px;
            background: #fff;
            border: 1px solid #ccc;
            border-radius: 10px 10px 0 0;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            display: none;
            flex-direction: column;
            overflow: hidden;
            z-index: 1000;
        }
        #chatModal header {
            position: relative;
            background: #ff4444;
            color: #fff;
            padding: 10px;
            font-size: 16px;
            font-weight: bold;
        }
        /* Close button in chat header */
        #chatModal header .chat-close {
            position: absolute;
            top: 5px;
            right: 10px;
            cursor: pointer;
            font-size: 20px;
        }
        #chatModal .chat-messages {
            flex: 1;
            padding: 10px;
            overflow-y: auto;
        }
        #chatModal footer {
            border-top: 1px solid #ccc;
            padding: 10px;
        }
        #chatModal footer input {
            width: 90%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background: rgba(0,0,0,.3);
        }
    `;
    document.head.appendChild(styleEl);

    // Create chat modal element (initially hidden) with close button in header
    const chatModal = document.createElement('div');
    chatModal.id = 'chatModal';
    chatModal.innerHTML = `
        <header>
            Support Chat
            <span class="chat-close">&times;</span>
        </header>
        <div class="chat-messages">
            <div class="message received">All our assistants are helping other customers.</div>
        </div>
        <footer>
            <input type="text" placeholder="Type your message..." disabled>
        </footer>
    `;
    document.body.appendChild(chatModal);

    // Create chat bubble element and assign the CSS class
    const chatBubble = document.createElement('div');
    // Update icon to use Font Awesome's comment icon
    chatBubble.innerHTML = '<i class="fa-solid fa-message"></i>';
    chatBubble.classList.add('chat-bubble');
    document.body.appendChild(chatBubble);

    // Add timeout to display helper if chat bubble is not clicked
    let helperDiv;
    const helperTimeout = setTimeout(() => {
        // Create and style helper div connecting to chat bubble
        helperDiv = document.createElement('div');
        helperDiv.classList.add('chat-helper');
        // Helper image found at img/helper.jpg
        helperDiv.innerHTML = '<img src="img/helper.jpg" alt="Helper" class="helper-pic"><span>Got any questions? I\'m happy to help.</span>';
        document.body.appendChild(helperDiv);
    }, 5000);

    // Clear helper and display chat modal when chat bubble is clicked
    chatBubble.addEventListener('click', function() {
        if(helperDiv) {
            helperDiv.remove();
        }
        clearTimeout(helperTimeout);
        const modal = document.getElementById('chatModal');
        if(modal) {
            modal.style.display = 'flex';
        }
    });

    // Add event listener for the close button in chat modal header
    document.getElementById('chatModal').querySelector('.chat-close').addEventListener('click', function() {
        document.getElementById('chatModal').style.display = 'none';
    });
});
