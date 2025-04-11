(function() {
	const modalsMarkup = `
		<!-- Email Subscription Modal -->
		<div id="emailModal" class="modal">
			<div class="modal-content">
				<span class="close">&times;</span>
				<h2>Subscribe Now!</h2>
				<p>Enter your email for updates!</p>
				<form>
					<input type="email" placeholder="Your email">
					<button type="submit">Subscribe</button>
				</form>
			</div>
		</div>
		<!-- Location Access Modal -->
		<div id="locationModal" class="modal">
			<div class="modal-content">
				<span class="close">&times;</span>
				<h2>Allow Location Access</h2>
				<p>We need your location to serve you better!</p>
				<button onclick="requestLocation()">Allow</button>
			</div>
		</div>
		<!-- Notifications Modal -->
		<div id="notificationModal" class="modal">
			<div class="modal-content">
				<span class="close">&times;</span>
				<h2>Enable Notifications</h2>
				<p>Stay updated with our latest news!</p>
				<button onclick="requestNotifications()">Enable</button>
			</div>
		</div>
		<!-- Survey Modal (Before You Go) -->
		<div id="surveyModal" class="modal">
			<div class="modal-content">
				<h2>Please rate your experience</h2>
				<p>You've been selected for a survey! Please rate your experience</p>
				<div id="starContainer">
					<span class="star" data-value="1">&#9733;</span>
					<span class="star" data-value="2">&#9733;</span>
					<span class="star" data-value="3">&#9733;</span>
					<span class="star" data-value="4">&#9733;</span>
					<span class="star" data-value="5">&#9733;</span>
				</div>
				<button id="surveySubmit">Submit</button>
			</div>
		</div>
	`;
	// Append modals markup to body
	const container = document.createElement('div');
	container.innerHTML = modalsMarkup;
	document.body.insertAdjacentElement('beforeend', container);

	// Modal titles and messages
	const emailTitles = [
		"Sign up for our newsletter!",
		"Emails!",
		"Join Our Mailing List!",
		"Stay Updated!",
		"Be the First to Know!"
	];
	const locationTitles = [
		"Allow Location Access",
		"We Need Your Location",
		"Location Needed!",
		"Your Location, Please!"
	];
	const notificationTitles = [
		"Enable Notifications",
		"Turn On Notifications",
		"Get Notified Instantly!"
	];
	const subscriptionMessages = [
		"Enter your email for updates!",
		"Are you sure you don't want emails?",
		"Last chance! Don't miss out! GIVE US YOUR EMAIL NOW!!"
	];
	const locationMessages = [
		"We would like your location to serve you better.",
		"Location please? I can't do my job if I don't know where you are.",
		"Hey this is serious! I need to know where you are to help you! I won't ask again."
	];
	const notificationMessages = [
		"We would like to send you notifications to keep you updated.",
		"Are you sure? Notifications would help you stay informed about the latest updates.",
		"I know, you already said no twice, but this time it's different! We have cookies!"
	];

	// Helper: random chance
	function randomChance(probability) {
		return Math.random() < probability;
	}

	// Randomize modal content position and title
	function randomizeModalContentPosition(modalId) {
		const modalContent = document.querySelector(`#${modalId} .modal-content`);
		const offsetTop = (Math.random() - 0.5) * 20; 
		const offsetLeft = (Math.random() - 0.5) * 20;
		modalContent.style.position = 'absolute';
		modalContent.style.top = `${50 + offsetTop}%`;
		modalContent.style.left = `${50 + offsetLeft}%`;
		modalContent.style.transform = 'translate(-50%, -150%)';
	}
	function randomizeModalTitle(modalId, titles) {
		const modalTitle = document.querySelector(`#${modalId} h2`);
		modalTitle.textContent = titles[Math.floor(Math.random() * titles.length)];
	}
	function showModal(modalId, titles) {
		randomizeModalContentPosition(modalId);
		randomizeModalTitle(modalId, titles);
		document.getElementById(modalId).style.display = 'block';
	}
	function closeModal(modalId) {
		document.getElementById(modalId).style.display = 'none';
	}
	function updateModalMessage(modalId, messages, count) {
		const modal = document.getElementById(modalId);
		modal.querySelector('p').textContent = messages[count];
	}

	// Request location and notifications functions remain global for inline onclicks
	window.requestLocation = function() {
		const locationModal = document.getElementById('locationModal');
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				console.log('Location:', position);
				locationModal.style.display = 'none';
			}, function(error) {
				console.error('Geolocation error:', error);
				locationModal.style.display = 'none';
			});
		} else {
			alert('Geolocation is not supported by this browser.');
		}
	};
	window.requestNotifications = function() {
		const notificationModal = document.getElementById('notificationModal');
		if ('Notification' in window) {
			Notification.requestPermission().then(function(permission) {
				if (permission === 'granted') {
					new Notification('Thank you for enabling notifications!');
				}
				notificationModal.style.display = 'none';
			});
		} else {
			alert('Notifications are not supported by this browser.');
		}
	};

	// Counters and max counts for re-showing modals
	let subscriptionRequestCount = 0;
	let locationRequestCount = 0;
	let notificationRequestCount = 0;
	const subscriptionMaxCount = Math.floor(Math.random() * 3) + 1;
	const locationMaxCount = Math.floor(Math.random() * 3) + 1;
	const notificationMaxCount = Math.floor(Math.random() * 3) + 1;

	// Add a flag to track if location modal has been triggered via scroll
	let locationTriggered = false;

	// Set up close buttons and re-show behavior
	document.querySelector('#emailModal .close').onclick = function() {
		closeModal('emailModal');
		subscriptionRequestCount++;
		if (subscriptionRequestCount < subscriptionMaxCount) {
			setTimeout(function() {
				showModal('emailModal', emailTitles);
				updateModalMessage('emailModal', subscriptionMessages, subscriptionRequestCount);
			}, Math.random() * 30000 + 5000);
		}
	};
	document.querySelector('#locationModal .close').onclick = function() {
		closeModal('locationModal');
		locationRequestCount++;
		if (locationRequestCount < locationMaxCount) {
			setTimeout(function() {
				showModal('locationModal', locationTitles);
				updateModalMessage('locationModal', locationMessages, locationRequestCount);
			}, Math.random() * 30000 + 5000);
		}
	};
	document.querySelector('#notificationModal .close').onclick = function() {
		closeModal('notificationModal');
		notificationRequestCount++;
		if (notificationRequestCount < notificationMaxCount) {
			setTimeout(function() {
				showModal('notificationModal', notificationTitles);
				updateModalMessage('notificationModal', notificationMessages, notificationRequestCount);
			}, Math.random() * 30000 + 5000);
		}
	};

	// Inject CSS for border color flash animation without changing size
	const style = document.createElement('style');
	style.textContent = `
	/* Ensure modal-content always has a baseline border */
	.modal-content {
		border: 3px solid var(--default-border-color, rgba(0, 0, 0, 0.1));
	}
	.flash-border {
		animation: flashColor 0.15s linear 3;
	}
	@keyframes flashColor {
		0%, 100% { border-color: var(--default-border-color, rgba(0, 0, 0, 0.1)); }
		50% { border-color: #ff0000; }
	}
	`;
	document.head.appendChild(style);

	// Inject additional CSS for survey modal and star styling (appended to previously injected CSS)
	const surveyStyle = document.createElement('style');
	surveyStyle.textContent = `
	/* Star styles */
	.star {
		cursor: pointer;
		color: gray;
		font-size: 24px;
		margin: 0 2px;
	}
	.star.selected {
		color: gold;
	}
	/* Optional: adjust survey modal layout */
	#surveyModal .modal-content {
		text-align: center;
	}
	`;
	document.head.appendChild(surveyStyle);

	// Updated flashRedBorder function (now only animates border-color)
	function flashRedBorder(modalId) {
		const modalContent = document.querySelector(`#${modalId} .modal-content`);
		modalContent.classList.add('flash-border');
		modalContent.addEventListener('animationend', function() {
			modalContent.classList.remove('flash-border');
		}, { once: true });
	}

	['emailModal', 'locationModal', 'notificationModal'].forEach(function(modalId) {
		const modal = document.getElementById(modalId);
		// Add click listener on modal background (outside modal-content)
		modal.addEventListener('click', function(e) {
			if(e.target === modal) {
				flashRedBorder(modalId);
			}
		});
	});

	// Survey modal functionality
	let surveySubmitted = false;
	let selectedRating = 0;

	// Push a dummy state to intercept back navigation
	history.pushState(null, null, location.href);
	window.addEventListener('popstate', function(e) {
		if (!surveySubmitted) {
			document.getElementById('surveyModal').style.display = 'block';
			// Re-add state to block the navigation
			history.pushState(null, null, location.href);
			e.preventDefault();
		}
	});

	// Set up star click handling to highlight up to the clicked star
	document.querySelectorAll('#starContainer .star').forEach(function(star) {
		star.addEventListener('click', function() {
			selectedRating = parseInt(star.getAttribute('data-value'));
			document.querySelectorAll('#starContainer .star').forEach(function(s) {
				if (parseInt(s.getAttribute('data-value')) <= selectedRating) {
					s.classList.add('selected');
				} else {
					s.classList.remove('selected');
				}
			});
		});
	});

	// When the survey submit button is clicked, finalize the survey and close the modal
	document.getElementById('surveySubmit').addEventListener('click', function() {
		if (selectedRating > 0) {
			document.getElementById('surveyModal').style.display = 'none';
			surveySubmitted = true;
			// Optionally, you might want to save the survey result here.
		} else {
			alert('Please select a rating before submitting.');
		}
	});

	// Initial launch of modals
	window.addEventListener('load', function() {
		setTimeout(function() {
			showModal('emailModal', emailTitles);
		}, 3000);
	});
	window.addEventListener('scroll', function() {
		if (!locationTriggered && randomChance(0.4) && document.getElementById('locationModal').style.display !== 'block') {
			showModal('locationModal', locationTitles);
			locationTriggered = true;
		}
	});
	setTimeout(function() {
		showModal('notificationModal', notificationTitles);
	}, 8000);
})();
