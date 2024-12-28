package org.example.backend;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    // @Override
    // public void addCorsMappings(CorsRegistry registry) {
    //     // Allow CORS for all endpoints
    //     registry.addMapping("/**")                      // Allow all endpoints
    //             .allowedOrigins("*")         
    //             .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allowed HTTP methods
    //             .allowedHeaders("*")                  // Allow any headers in requests
    //             .allowCredentials(true)               // Allow cookies if needed (set to false if not required)
    //             .maxAge(3600);                         // Cache preflight response for 1 hour (3600 seconds)
    // }
}