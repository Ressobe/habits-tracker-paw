using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Exceptions;
public class HabitNotFoundException : Exception
{
    public HabitNotFoundException() : base ("Habit not found") {}
    public HabitNotFoundException(string message) : base(message) {}
}