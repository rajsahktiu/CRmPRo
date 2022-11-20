package StepDefination;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DealsStepMapDefination {
	
	 WebDriver driver;

		
	 @Given("^user is alreadyy on Login Page$")
	 public void user_already_on_login_page(){
	 System.setProperty("webdriver.chrome.driver","C:\\SeleniumJars\\chromedriver.exe");
	 driver = new ChromeDriver();
	 driver.get("https://www.freecrm.com/index.html");
	 }
	 
	 @When("^title of loginn page iss CRM PRO$")
	 public void title_of_login_page_is_CRM_PRO(){
	 String title = driver.getTitle();
	 System.out.println(title);
	 Assert.assertEquals("CRMPRO  - CRM software for customer relationship management, sales, and support.", title);
	 }
	 
	 @Then("^user enterss username and password$")
	 public void user_enters_username_and_password(DataTable credentials){
		Map<String, String> data = (Map<String, String>) credentials.asMaps(String.class, String.class);
	 
	
	 driver.findElement(By.name("username")).sendKeys(data.get("username"));
	 driver.findElement(By.name("password")).sendKeys(data.get("password"));
	 }
	
	
	 @Then("^user clickss on login button$")
	 public void user_clicks_on_login_button() {
	 WebElement loginBtn =
	 driver.findElement(By.xpath("//input[@type='submit']"));
	 JavascriptExecutor js = (JavascriptExecutor)driver;
	 js.executeScript("arguments[0].click();", loginBtn);
	 }
	 
	 @Then("^user iss on homee page$")
	 public void user_is_on_hopme_page(){
	 String title = driver.getTitle();
	 System.out.println("Home Page title ::"+ title);
	 Assert.assertEquals("CRMPRO", title);
	 }
	 
	 
	 @Then("^user movess to new deal page$")
	 public void user_moves_to_new_contact_page() {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
		
		}
	 
	 @Then("^user enterss deal details$")
	public void user_enters_contacts_details(DataTable dealData) {
			for (Map<String, String> data : dealData.asMaps(String.class, String.class)) {
	
				driver.findElement(By.id("title")).sendKeys(data.get("title"));
				driver.findElement(By.id("amount")).sendKeys(data.get("amount"));
				driver.findElement(By.id("probability")).sendKeys(data.get("probability"));
				driver.findElement(By.id("commission")).sendKeys(data.get("commission"));
				
				driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click(); //save button
				
				//move to new deal page:
				Actions action = new Actions(driver);
				action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
				driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
	
			}
	
			
		}
	 
	 @Then("^Closee the browser$")
	 public void close_the_browser(){
		 driver.quit();
	 }
	
}