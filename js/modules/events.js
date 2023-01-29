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
    
    events = events.concat(events).concat(events);
    
    let currentFilter = null;
    
    const filterEvents = document.querySelector(".sidebar__events");
    const filterEventButtons = document.querySelectorAll(".sidebar__events-toggle");
    
    for (const toggle of filterEventButtons) {
        toggle.addEventListener('click', handleFilterEventButtonsClick);
    }
    
    function handleFilterEventButtonsClick(event) {
        toggleEventFilter(event.target.dataset.filter);
        renderEvents();
    }
    
    function toggleEventFilter(filter) {
        if (currentFilter === filter) {
            currentFilter = null;
        }   else {
            currentFilter = filter;
        }
    }
    
    function returnFilteredEvents() {
        if (currentFilter === null) {
            return events;
        }   else {
            return events.filter(event => event.category === currentFilter);
        }
    }

    renderEvents();
    
    function renderEvents() {
        filterEvents.innerHTML = '';
        
        for (const toggle of filterEventButtons) {
            toggle.classList.remove('sidebar__events-toggle--active');
            if(toggle.dataset.filter === currentFilter) {
                toggle.classList.add('sidebar__events-toggle--active');
            }
        }
        
        for (const event of returnFilteredEvents()) {
            const filterEvent = document.createElement('div');
            
            filterEvent.dataset.category = event.category;
            filterEvent.className = 'sidebar__event';
            filterEvent.innerHTML = `
            <p class="sidebar__events-event-category">${event.category}</p>
            <div class="sidebar__events-event-date-time">
            <p class="sidebar__events-event-date">${event.date}</p>
            <p class="sidebar__events-event-time">${event.time}</p>
            </div>
            <h2 class="sidebar__events-event-title">${event.title}</h2>
            `
            
            filterEvents.appendChild(filterEvent);
        }
    }
}    