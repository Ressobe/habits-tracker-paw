namespace backend.Exceptions;
public class HabitNotFoundException : Exception
{
    public HabitNotFoundException() : base ("Habit not found") {}
    public HabitNotFoundException(string message) : base(message) {}
}