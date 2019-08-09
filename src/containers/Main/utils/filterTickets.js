const filterTickets = (tickets, filters) => tickets.filter(ticket => filters.includes(ticket.stops));

export default filterTickets;