
import Link from "next/link";
import { Bell, Sparkles, Car, MessageSquare, Calendar, TrendingUp } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "New vehicle matches your search",
    message: "A 2023 Lexus RX 350 just arrived at Luxe Motors in Lagos",
    time: "2 minutes ago",
    type: "vehicle",
    read: false
  },
  {
    id: 2,
    title: "New message from dealer",
    message: "Prestige Auto responded to your inquiry about the Toyota Prado",
    time: "1 hour ago",
    type: "message",
    read: false
  },
  {
    id: 3,
    title: "Price drop alert",
    message: "The Mercedes-Benz C300 you saved is now ₦3M cheaper",
    time: "3 hours ago",
    type: "price",
    read: true
  },
  {
    id: 4,
    title: "Appointment confirmed",
    message: "Your viewing for Saturday at 2 PM is locked in with Elite Autos",
    time: "1 day ago",
    type: "calendar",
    read: true
  },
];

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            <Sparkles size={15} /> Notifications
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            Stay in the loop
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Never miss an update about new listings, messages, price drops, and appointments.
          </p>
        </div>
      </section>
      
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {notifications.map((notif) => {
            let Icon = Bell;
            let bgColor = "bg-emerald-100";
            let iconColor = "text-emerald-700";
            
            if (notif.type === "vehicle") {
              Icon = Car;
              bgColor = "bg-blue-100";
              iconColor = "text-blue-700";
            } else if (notif.type === "message") {
              Icon = MessageSquare;
              bgColor = "bg-purple-100";
              iconColor = "text-purple-700";
            } else if (notif.type === "calendar") {
              Icon = Calendar;
              bgColor = "bg-amber-100";
              iconColor = "text-amber-700";
            } else if (notif.type === "price") {
              Icon = TrendingUp;
              bgColor = "bg-emerald-100";
              iconColor = "text-emerald-700";
            }
            
            return (
              <article 
                key={notif.id} 
                className={`rounded-[1.75rem] border p-6 shadow-sm transition ${
                  notif.read 
                    ? "border-slate-200 bg-white" 
                    : "border-emerald-200 bg-emerald-50/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`rounded-full p-3 ${bgColor}`}>
                    <Icon size={20} className={iconColor} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-bold text-slate-900">{notif.title}</h3>
                      <p className="text-sm font-medium text-slate-500">{notif.time}</p>
                    </div>
                    <p className="mt-2 text-slate-600">{notif.message}</p>
                    
                    <div className="mt-4 flex gap-3">
                      <Link 
                        href="/inventory" 
                        className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                      >
                        View details
                      </Link>
                    </div>
                  </div>
                  
                  {!notif.read && (
                    <div className="h-3 w-3 rounded-full bg-emerald-600" />
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
