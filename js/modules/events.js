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


	// Repeats the events array three times
	let repeatedEvents = events;

		for (let i = 0; i < 2; i++) {
			repeatedEvents = repeatedEvents.concat(events);
		};

	let sidebar = document.querySelector('.sidebar__events');

		for (let event of repeatedEvents) {
			let eventDiv = document.createElement('div');
			eventDiv.className = "sidebar__events-event"
			eventDiv.innerHTML = `
				
				<h2 class"sidebar__events-event-title">${event.title}</h2>
				<p class"sidebar__events-event-category">${event.category}</p>
				<p class"sidebar__events-event-date">${event.date}</p>
				<p class"sidebar__events-event-time">${event.time}</p>
				
			`;
			sidebar.appendChild(eventDiv);
		};
		
}