namespace backend.Exceptions;
public class RealizationNotFoundException : Exception
{
    public RealizationNotFoundException() : base ("Realization not found") {}
    public RealizationNotFoundException(string message) : base(message) {}
}