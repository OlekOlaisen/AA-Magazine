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


	// repeats the events array three times
	
	let repeatedEvents = events;

		for (let i = 0; i < 2; i++) {
			repeatedEvents = repeatedEvents.concat(events);
		};

		let sidebar = document.querySelector('.sidebar__events');

    //creates the button container
    let buttonContainer = document.createElement('div');
    buttonContainer.className = "sidebar__events-buttons"
    sidebar.appendChild(buttonContainer);

    //create the 3 buttons
    let lecturesButton = document.createElement('button');
    lecturesButton.innerText = "Lectures";
    lecturesButton.className = "sidebar__events-button";
    lecturesButton.addEventListener('click', () => {
        toggleFilter("Lectures");
    });
    buttonContainer.appendChild(lecturesButton);

    let exhibitionsButton = document.createElement('button');
    exhibitionsButton.innerText = "Exhibitions";
    exhibitionsButton.className = "sidebar__events-button";
    exhibitionsButton.addEventListener('click', () => {
        toggleFilter("Exhibitions");
    });
    buttonContainer.appendChild(exhibitionsButton);

    let openSeminarsButton = document.createElement('button');
    openSeminarsButton.innerText = "Open Seminars";
    openSeminarsButton.className = "sidebar__events-button";
    openSeminarsButton.addEventListener('click', () => {
        toggleFilter("Open Seminars");
    });
    buttonContainer.appendChild(openSeminarsButton);
    
    //define the toggleFilter function
    function toggleFilter(category) {
        let filteredEvents = repeatedEvents.filter(event => event.category === category);
        if (filteredEvents.length === eventsToDisplay.length && eventsToDisplay.every((v,i)=> v === filteredEvents[i])) {
            //if all events are already displayed
            displayEvents(repeatedEvents);
            eventsToDisplay = repeatedEvents;
        } else {
            //if the events are filtered
            displayEvents(filteredEvents);
            eventsToDisplay = filteredEvents;
        }
    }

    //display the events
    let eventsToDisplay = repeatedEvents;
    function displayEvents(eventsToDisplay) {
        sidebar.innerHTML = "";
        sidebar.appendChild(buttonContainer);
        for (let event of eventsToDisplay) {
            let eventDiv = document.createElement('div');
            eventDiv.className = "sidebar__events-event"
            eventDiv.innerHTML = `
                <h2 class="sidebar__events-event-title">${event.title}</h2>
                <p class="sidebar__events-event-category">${event.category}</p>
                <p class="sidebar__events-event-date">${event.date}</p>
                <p class="sidebar__events-event-time">${event.time}</p>
            `;
            sidebar.appendChild(eventDiv);
        }
    }

    //display all events by default
    displayEvents(repeatedEvents);


	 
}

		
