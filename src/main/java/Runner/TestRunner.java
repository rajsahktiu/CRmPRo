package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Selenium_WorkSpace\\CRMProBddFrameWork\\src\\main\\java\\Features\\tagging.feature"
				,glue = {"StepDefination"} //the path of the step definition files
				,format = {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}
				,monochrome = true //display the console output in a proper readable format
				,strict = true //it will check if any step is not defined in step definition file
				,dryRun = true //to check the mapping is proper between feature file and step def file
				,tags = {"@SmokeTest , @RegressionTest"}
		)

public class TestRunner {

}


//ORed : tags = {"@SmokeTest , @RegressionTest"} -- execute all tests tagged as @SmokeTest OR @RegressionTest
//ANDed : tags = tags = {"@SmokeTest" , "@RegressionTest"} -- execute all tests tagged as @SmokeTest AND @RegressionTest