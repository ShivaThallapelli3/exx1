const { Builder, By } = require("selenium-webdriver");
const path = require("path");

(async function () {
  let arr = [
    [1, 2, 3],
    [4, 5, 90],
  ];

  for (it of arr) {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      const filePath = "file://" + path.resolve(__dirname, "ind.html");
      await driver.get(filePath);

      await driver.findElement(By.id("num1")).sendKeys(it[0].toString());
      await driver.findElement(By.id("num2")).sendKeys(it[1].toString());

      await driver.findElement(By.id("btn")).click();

      await driver.sleep(2000);

      let res = await driver.findElement(By.id("res")).getAttribute("value");

      if (res == it[2]) {
        console.log(`Success : ans = ${res}  and actual =${it[2]}`);
      } else {
        console.log("Wonrg snaers");
      }
    } catch (err) {
      console.log(err);
    } finally {
      await driver.quit();
    }
  }
})();
