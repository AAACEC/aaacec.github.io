import Link from 'next/link';

export interface Event {
  date: string | Date;
  category: "Evento" | "Produto";
  name: string;
  link: string;
}

interface CalendarProps {
  events: Event[];
}

export default function Calendar({ events }: CalendarProps) {
  if (!events || events.length === 0) {
    return null;
  }

  // 1. Sort events by date
  const sortedEvents = [...events].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const groupedEvents: Record<string, Event[]> = {};

  sortedEvents.forEach((event) => {
    const d = new Date(event.date);
    const monthYear = new Intl.DateTimeFormat('pt-BR', {
      month: 'long',
    }).format(d).replace(/^\w/, (c) => c.toUpperCase());

    if (!groupedEvents[monthYear]) {
      groupedEvents[monthYear] = [];
    }
    groupedEvents[monthYear].push(event);
  });

  return (
    <div className="w-full border-zinc-900 lg:border-2 p-10 rounded-xl max-w-4xl mx-auto">
      {Object.keys(groupedEvents).length === 0 ? (
        <p className="text-zinc-600 text-center py-4">Nenhum evento agendado.</p>
      ) : (
        Object.entries(groupedEvents).map(([month, monthEvents]) => (
          <div key={month} className="mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 border-b-2 border-zinc-900 mb-4 pb-2">
              {month}
            </h2>

            <ul className="space-y-4">
              {monthEvents.map((event, index) => {
                const eventDate = new Date(event.date);
                const day = eventDate.getDate();
                const weekday = new Intl.DateTimeFormat('pt-BR', { weekday: 'short' }).format(eventDate).replace('.', '');

                return (
                  <li key={`${event.name}-${index}`} className="flex gap-4">
                    <div className="flex-shrink-0 flex flex-col items-center justify-center bg-zinc-900 text-white rounded-md p-3 min-w-[4rem] text-center">
                      <span className="text-xs font-semibold uppercase">{weekday}</span>
                      <span className="text-2xl font-bold leading-none">{day}</span>
                    </div>

                    <div className="flex-grow flex flex-col justify-center">
                      <span className="py-0.5 font-extrabold text-zinc-900">
                        {event.category}
                      </span>
                      <Link href={event.link}><h3 className="text-lg font-medium text-gray-900">{event.name}</h3></Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
