FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

COPY *.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o /app/out

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
ENV ASPNETCORE_HTTP_PORTS=5002
# ENV ASPNETCORE_URLS=https://+:5001;http://+:5000
ENV ASPNETCORE_URLS=http://+:5002

WORKDIR /app
COPY --from=build /app/out ./

EXPOSE 5002

ENTRYPOINT ["dotnet", "api.dll"]
