# Build stage
FROM maven:3.9-amazoncorretto-21 AS builder
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Run stage
FROM openjdk:25-ea-jdk-slim 

# Create non-root user for security
RUN useradd -m appuser
USER appuser

# Copy the jar from builder stage
COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT [ "java" , "-jar" , "app.jar"]