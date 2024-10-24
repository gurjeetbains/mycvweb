import type { MetaFunction } from "@remix-run/node";
import NavBar from "~/components/NavBar";
import Description from "~/components/profileComponents/Description";
import Profile from "~/components/profileComponents/Profile";

export const meta: MetaFunction = () => {
  return [
    { title: "Gurjeet Bains" },
    { name: "description", content: "Test Engineer" },
  ];
};

export default function Index() {
  return (
    <div>
          <header className="header">
            <NavBar />
          </header>
          <Profile />
          <Description text="Software engineer with 10 years of experience in architecting automation testing frameworks for web and mobile.
       " />
          <Description text="Expertise in Selenium, Cypress, Playwright, WebdriverIO, and cloud platforms like BrowserStack and Sauce Labs." />
          <Description text="Skilled in performance and API testing with JMeter, Postman, and K6." />
          <Description text="Built CI/CD-integrated testing frameworks using Azure DevOps and Jenkins." />
          <Description text="Proficient in full stack development (MEVN stack) and API specifications with OpenAPI 3.0." />
          <Description text="Led projects, managed teams, and implemented reusable frameworks for faster development." />
          <Description text="Experience with mobile testing tools (Appium, CodeceptJS) and Docker." />
          <Description text="Proficient in monitoring tools like Splunk and AWS Cloudwatch." />
          <Description text="Udemy instructor on modern testing technologies." />
          <Description text="Passionate about learning new technologies and sharing knowledge with the community." />
    </div>
  );
}
