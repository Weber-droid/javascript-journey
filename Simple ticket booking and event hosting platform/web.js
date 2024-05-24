document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    // Here you can send the data to a server to host the event
    console.log('Event hosted:', eventName, eventDate);
});

document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const eventName = document.getElementById('eventName').value;
    const ticketQuantity = document.getElementById('ticketQuantity').value;
    // Here you can send the data to a server to book the tickets
    console.log('Ticket booked for:', eventName, 'Quantity:', ticketQuantity);
});