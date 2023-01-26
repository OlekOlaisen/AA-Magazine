export default function Events() {
	
	let events = [
		{
			"title": "Conversation: Sami Sami sacred mountains and sacrificial stones",
			"category": "Lectures",
			"date": "January 20",
			"time": "12:00-14:00"
		},
		{
			"title": "Free guided tour in Kunna Guanna Concha",
			"category": "Exhibitions",
			"date": "February 5",
			"time": "16:00-17:00"
		},
		{
			"title": "Exhibition opening: Metahaven and Susanne M. Winterling",
			"category": "Exhibitions",
			"date": "February 12",
			"time": "18:00"
		},
		{
			"title": "Monumental love – Art historian Marit Paasche on Hannah Ryggen",
			"category": "Open Seminars",
			"date": "March 4",
			"time": "18:00-20:00"
		}
	]; 

	// Repeats the events array
	let repeatedEvents = events;

		for (let event = 0; event < 2; event++) {
			repeatedEvents = repeatedEvents.concat(events);
		};

	let sidebar = document.querySelector('.sidebar__events');

    //Creates the container for the buttons
    let buttonContainer = document.createElement('div');
    buttonContainer.className = "sidebar__events-buttons"
    sidebar.appendChild(buttonContainer);

    //Creates the event filter buttons
    let lecturesButton = document.createElement('button');
    lecturesButton.innerText = "Lectures";
    lecturesButton.className = "sidebar__events-button";
    lecturesButton.addEventListener('click', () => {
        toggleFilter("Lectures");
    });
    
    let exhibitionsButton = document.createElement('button');
    exhibitionsButton.innerText = "Exhibitions";
    exhibitionsButton.className = "sidebar__events-button";
    exhibitionsButton.addEventListener('click', () => {
        toggleFilter("Exhibitions");
    });
    
    let openSeminarsButton = document.createElement('button');
    openSeminarsButton.innerText = "Open Seminars";
    openSeminarsButton.className = "sidebar__events-button";
    openSeminarsButton.addEventListener('click', () => {
        toggleFilter("Open Seminars");
    });

    buttonContainer.appendChild(lecturesButton);
    buttonContainer.appendChild(exhibitionsButton);
    buttonContainer.appendChild(openSeminarsButton);
    
    //Defines the toggleFilter function
    function toggleFilter(category) {
        let filteredEvents = repeatedEvents.filter(event => event.category === category);
        if (filteredEvents.length === eventsToDisplay.length && eventsToDisplay.every((x,y)=> x === filteredEvents[y])) {
            //if all events are already displayed
            renderEvents(repeatedEvents);
            eventsToDisplay = repeatedEvents;
        } else {
            //if the events are filtered
            renderEvents(filteredEvents);
            eventsToDisplay = filteredEvents;
        }
    };

    //Displays the events in HTML
    let eventsToDisplay = repeatedEvents;
    function renderEvents(eventsToDisplay) {
        sidebar.innerHTML = "";
        sidebar.appendChild(buttonContainer);
        for (let event of eventsToDisplay) {
            let eventDiv = document.createElement('div');
            eventDiv.className = "sidebar__events-event"
            eventDiv.innerHTML = `
                <p class="sidebar__events-event-category">${event.category}</p>
                <p class="sidebar__events-event-date">${event.date}</p>
                <p class="sidebar__events-event-time">${event.time}</p>
                <h2 class="sidebar__events-event-title">${event.title}</h2>
                
            `;
            sidebar.appendChild(eventDiv);
        }
    };

    //Displays all events by default
    renderEvents(repeatedEvents);

}

