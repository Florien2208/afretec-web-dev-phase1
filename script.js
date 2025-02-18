const events = [
  {
    title: "Jazz Night",
    date: "2025-02-20",
    category: "music",
    description: "An evening of smooth jazz.",
    location: "Downtown Hall",
  },
  {
    title: "Art Exhibition",
    date: "2025-02-22",
    category: "arts",
    description: "Local artists showcasing their work.",
    location: "City Gallery",
  },
  {
    title: "Farmers Market",
    date: "2025-02-23",
    category: "food",
    description: "Fresh produce and local goods.",
    location: "Main Square",
  },
  {
    title: "Tech Workshop",
    date: "2025-02-24",
    category: "technology",
    description: "Learn about the latest tech trends.",
    location: "Innovation Hub",
  },
  {
    title: "Community Cleanup",
    date: "2025-02-25",
    category: "community",
    description: "Join us to clean up the neighborhood.",
    location: "Park Avenue",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const eventList = document.getElementById("event-list");
  const categoryFilter = document.getElementById("category");
  const searchBox = document.getElementById("search");
  const modal = document.getElementById("event-modal");
  const modalContent = document.getElementById("event-details");
  const closeModal = document.querySelector(".close-button");

  function displayEvents(filteredEvents) {
    eventList.innerHTML = "";
    filteredEvents.forEach((event) => {
      const eventDiv = document.createElement("div");
      eventDiv.classList.add("event");
      eventDiv.innerHTML = `
                <h2>${event.title}</h2>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Category:</strong> ${event.category}</p>
                <p><strong>Location:</strong> ${event.location}</p>
            `;
      eventDiv.addEventListener("click", () => showEventDetails(event));
      eventList.appendChild(eventDiv);
    });
  }

  function showEventDetails(event) {
    modalContent.innerHTML = `
            <h2>${event.title}</h2>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Category:</strong> ${event.category}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p>${event.description}</p>
        `;
    modal.style.display = "block";
  }

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });

  function filterEvents() {
    const category = categoryFilter.value;
    const searchTerm = searchBox.value.toLowerCase();
    let filteredEvents = events;

    if (category !== "all") {
      filteredEvents = filteredEvents.filter(
        (event) => event.category === category
      );
    }

    if (searchTerm) {
      filteredEvents = filteredEvents.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm) ||
          event.description.toLowerCase().includes(searchTerm)
      );
    }

    displayEvents(filteredEvents);
  }

  categoryFilter.addEventListener("change", filterEvents);
  searchBox.addEventListener("input", filterEvents);

  // Initial display of all events
  displayEvents(events);
});
