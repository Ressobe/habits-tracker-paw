namespace backend.Exceptions;
public class NothingToUpdateException : Exception
{
    public NothingToUpdateException() : base ("Nothing to update") {}
    public NothingToUpdateException(string message) : base(message) {}
}