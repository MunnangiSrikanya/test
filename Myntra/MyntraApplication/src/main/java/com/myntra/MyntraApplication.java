package com.myntra;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class MyntraApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyntraApplication.class, args);
	}

}
