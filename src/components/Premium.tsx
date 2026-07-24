export function CalendarPicker() {
  const [date, setDate] = useState(
    new Date().toISOString().slice(0, 16)
  );

  return (
    <div>
      <p className="text-sm font-bold mb-3">
        Choose our day & time
      </p>

      <div className="rounded-2xl bg-white/10 p-3 border border-white/10">
        <input
          type="datetime-local"
          value={date}
          min={new Date().toISOString().slice(0, 16)}
          onChange={(e) => setDate(e.target.value)}
          className="w-full bg-transparent text-white outline-none"
        />
      </div>
    </div>
  );
}
