package com.test.runner;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.intuit.karate.junit4.Karate;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Karate.class)
@CucumberOptions(features = "src/test/java/FeatureFiles/test.feature", tags = "~@ignore", format= {"json:target/Destination/cucumber.json"})
public class TestRunner {
	
	@BeforeClass
    public static void before() {
        System.setProperty("karate.env", "dev");
    }

}
